// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {OwnerIsCreator} from "@chainlink/contracts-ccip/src/v0.8/shared/access/OwnerIsCreator.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {CCIPReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import {IERC20} from "@chainlink/contracts-ccip/src/v0.8/vendor/openzeppelin-solidity/v4.8.3/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@chainlink/contracts-ccip/src/v0.8/vendor/openzeppelin-solidity/v4.8.3/contracts/token/ERC20/utils/SafeERC20.sol";

/// @title This is ccip message sender in avax, eth, optimism networks. 
/// It can send reservation via ccip router.
contract ReservationSender is OwnerIsCreator {
    using SafeERC20 for IERC20;

    ////////////////////
    /// custom error ///
    ////////////////////

    error NotEnoughBalance(uint256 currentBalance, uint256 calculatedFees); 
    error DestinationChainNotAllowed(uint64 destinationChainSelector); 
    error InvalidReceiverAddress(); 

    /////////////
    /// event ///
    /////////////

    event MessageSent(
        bytes32 indexed messageId, // The unique ID of the CCIP message.
        uint64 indexed destinationChainSelector, // The chain selector of the destination chain.
        address receiver, // The address of the receiver on the destination chain.
        bytes text, // The text being sent.
        address token, // The token address that was transferred.
        uint256 tokenAmount, // The token amount that was transferred.
        address feeToken, // the token address used to pay CCIP fees.
        uint256 fees // The fees paid for sending the message.
    );

    //////////////
    /// struct ///
    //////////////

    struct ReservationRequest {
        address guest;
        uint8 paymentTokenType; // usdc=1, usdt=2
        uint32 startDate;
        uint32 endDate; // form: 20240530
        uint32 members;
        uint256 totalPrice;
        uint256 accomId;
    }

    ///////////////////////
    /// state variables ///
    ///////////////////////

    mapping(uint64 => bool) public allowlistedDestinationChains; // chainSelector => isAllowed

    IERC20 private s_linkToken;
    address private s_router;

    /////////////
    /// utils ///
    /////////////

    /// @param _router Source chain's router address
    /// @param _link Source chain's link token address
    constructor(address _router, address _link) {
        s_linkToken = IERC20(_link);
        s_router = _router;

        // add default allowed destination chain list
        allowlistedDestinationChains[16281711391670634445] = true; // polygon
    }

    modifier onlyAllowlistedDestinationChain(uint64 _destChainSelector) {
        if (!allowlistedDestinationChains[_destChainSelector])
            revert DestinationChainNotAllowed(_destChainSelector);
        _;
    }

    modifier validateReceiver(address _receiver) {
        if (_receiver == address(0)) revert InvalidReceiverAddress();
        _;
    }

    //////////////////////////
    /// function for owner ///
    //////////////////////////

    function allowlistDestinationChain(
        uint64 _destChainSelector,
        bool allowed
    ) external onlyOwner {
        allowlistedDestinationChains[_destChainSelector] = allowed;
    }

    //////////////////////
    /// core functions ///
    //////////////////////

    /// @notice Calculate your data and transfer tokens fee by link
    /// @param _destChainSelector The identifier (aka selector) for the destination blockchain.
    /// @param _receiver The address of the recipient on the destination blockchain.
    /// @param _request The string data to be sent.
    /// @param _token token address.
    /// @param _amount token amount.
    function getLinkFeeAmount(
        uint64 _destChainSelector, 
        address _receiver, 
        ReservationRequest calldata _request, 
        address _token, 
        uint256 _amount 
    ) external view onlyAllowlistedDestinationChain(_destChainSelector) returns(uint256 fees) {
        bytes memory _data = abi.encode(_request);
        
        Client.EVM2AnyMessage memory evm2AnyMessage = _buildCCIPMessage(
            _receiver,
            _data,
            _token,
            _amount,
            address(s_linkToken) 
        );

        IRouterClient router = IRouterClient(s_router);

        fees = router.getFee(_destChainSelector, evm2AnyMessage);
    }

    /// @notice Sends data and transfer tokens to receiver on the destination chain.
    /// @notice Pay for fees in native gas.
    /// @dev Assumes your contract has sufficient native gas like ETH on Ethereum or MATIC on Polygon.
    /// @param _destChainSelector The identifier (aka selector) for the destination blockchain.
    /// @param _receiver The address of the recipient on the destination blockchain.
    /// @param _request The struct data for reservation. It will be encoded and sended to the destination blockchian.
    /// @param _token token address.
    /// @param _amount token amount.
    /// @return messageId The ID of the CCIP message that was sent.
    function sendReservationPayLINK(
        uint64 _destChainSelector, 
        address _receiver, 
        ReservationRequest calldata _request, 
        address _token, 
        uint256 _amount 
    )
        external
        onlyAllowlistedDestinationChain(_destChainSelector)
        validateReceiver(_receiver)
        returns (bytes32 messageId)
    {   
        // Todo verify _request
        bytes memory _data = abi.encode(_request);
        
        Client.EVM2AnyMessage memory evm2AnyMessage = _buildCCIPMessage(
            _receiver,
            _data,
            _token,
            _amount,
            address(s_linkToken) // fees are paied in link token
        );

        IRouterClient router = IRouterClient(s_router);

        uint256 fees = router.getFee(_destChainSelector, evm2AnyMessage);

        if (fees > s_linkToken.balanceOf(address(this)))
            revert NotEnoughBalance(s_linkToken.balanceOf(address(this)), fees);

        s_linkToken.approve(address(router), fees);

        IERC20(_token).transferFrom(msg.sender, address(this), _amount);
        IERC20(_token).approve(address(router), _amount);

        messageId = router.ccipSend(_destChainSelector, evm2AnyMessage);

        emit MessageSent(
            messageId,
            _destChainSelector,
            _receiver,
            _data,
            _token,
            _amount,
            address(s_linkToken),
            fees
        );

        // Return the message ID
        return messageId;
    }

    /// @notice Calculate your data and transfer tokens fee by link
    /// @param _destChainSelector The identifier (aka selector) for the destination blockchain.
    /// @param _receiver The address of the recipient on the destination blockchain.
    /// @param _request The string data to be sent.
    /// @param _token token address.
    /// @param _amount token amount.
    function getNativeFeeAmount(
        uint64 _destChainSelector, 
        address _receiver, 
        ReservationRequest calldata _request, 
        address _token, 
        uint256 _amount 
    ) external view onlyAllowlistedDestinationChain(_destChainSelector) returns(uint256 fees) {
        bytes memory _data = abi.encode(_request);
        
        Client.EVM2AnyMessage memory evm2AnyMessage = _buildCCIPMessage(
            _receiver,
            _data,
            _token,
            _amount,
            address(0)
        );

        IRouterClient router = IRouterClient(s_router);

        fees = router.getFee(_destChainSelector, evm2AnyMessage);
    }

    /// @notice Sends data and transfer tokens to receiver on the destination chain.
    /// @notice Pay for fees in native gas.
    /// @dev Assumes your contract has sufficient native gas like ETH on Ethereum or MATIC on Polygon.
    /// @param _destChainSelector The identifier (aka selector) for the destination blockchain.
    /// @param _receiver The address of the recipient on the destination blockchain.
    /// @param _request The struct data for reservation. It will be encoded and sended to the destination blockchian.
    /// @param _token token address.
    /// @param _amount token amount.
    /// @return messageId The ID of the CCIP message that was sent.
    function sendReservationPayNative(
        uint64 _destChainSelector,
        address _receiver,
        ReservationRequest calldata _request,
        address _token,
        uint256 _amount
    )
        external
        payable 
        onlyAllowlistedDestinationChain(_destChainSelector)
        validateReceiver(_receiver)
        returns (bytes32 messageId)
    {
        // Todo verify _request
        bytes memory _data = abi.encode(_request);
        
        Client.EVM2AnyMessage memory evm2AnyMessage = _buildCCIPMessage(
            _receiver,
            _data,
            _token,
            _amount,
            address(0)
        );

        IRouterClient router = IRouterClient(s_router);

        uint256 fees = router.getFee(_destChainSelector, evm2AnyMessage);

        if (fees > address(this).balance)
            revert NotEnoughBalance(address(this).balance, fees);

        IERC20(_token).transferFrom(msg.sender, address(this), _amount);
        IERC20(_token).approve(address(router), _amount);

        messageId = router.ccipSend{value: fees}(
            _destChainSelector,
            evm2AnyMessage
        );

        emit MessageSent(
            messageId,
            _destChainSelector,
            _receiver,
            _data,
            _token,
            _amount,
            address(0),
            fees
        );

        return messageId;
    }

    /// @notice Construct a CCIP message.
    /// @dev This function will create an EVM2AnyMessage struct with all the necessary information for programmable tokens transfer.
    /// @param _receiver The address of the receiver.
    /// @param _data The string data to be sent.
    /// @param _token The token to be transferred.
    /// @param _amount The amount of the token to be transferred.
    /// @param _feeTokenAddress The address of the token used for fees. Set address(0) for native gas.
    /// @return Client.EVM2AnyMessage Returns an EVM2AnyMessage struct which contains information for sending a CCIP message.
    function _buildCCIPMessage(
        address _receiver,
        bytes memory _data,
        address _token,
        uint256 _amount,
        address _feeTokenAddress
    ) private pure returns (Client.EVM2AnyMessage memory) {
        // Set the token amounts
        Client.EVMTokenAmount[]
            memory tokenAmounts = new Client.EVMTokenAmount[](1);
        tokenAmounts[0] = Client.EVMTokenAmount({
            token: _token,
            amount: _amount
        });
        // Create an EVM2AnyMessage struct in memory with necessary information for sending a cross-chain message
        return
            Client.EVM2AnyMessage({
                receiver: abi.encode(_receiver), // ABI-encoded receiver address
                data: _data, // ABI-encoded string
                tokenAmounts: tokenAmounts, // The amount and type of token being transferred
                extraArgs: Client._argsToBytes(
                    // Additional arguments, setting gas limit
                    Client.EVMExtraArgsV1({gasLimit: 3_000_000})
                ),
                // Set the feeToken to a feeTokenAddress, indicating specific asset will be used for fees
                feeToken: _feeTokenAddress
            });
    }

    receive() external payable {}
}
