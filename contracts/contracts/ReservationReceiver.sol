// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {OwnerIsCreator} from "@chainlink/contracts-ccip/src/v0.8/shared/access/OwnerIsCreator.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {CCIPReceiver} from "@chainlink/contracts-ccip/src/v0.8/ccip/applications/CCIPReceiver.sol";
import {IERC20} from "@chainlink/contracts-ccip/src/v0.8/vendor/openzeppelin-solidity/v4.8.3/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@chainlink/contracts-ccip/src/v0.8/vendor/openzeppelin-solidity/v4.8.3/contracts/token/ERC20/utils/SafeERC20.sol";
import {ChainStayHub} from "./ChainStayHub.sol";
import {IERC20Minimal} from "./interfaces/IERC20Minimal.sol";

/// @title This is ccip message receiver in polygon networks. 
/// It can receive reservation info and make reservation in ChainStayHub contracts
contract ReservationReceiver is CCIPReceiver, OwnerIsCreator {
    using SafeERC20 for IERC20;

    ////////////////////
    /// custom error ///
    ////////////////////

    error SourceChainNotAllowed(uint64 sourceChainSelector); 
    error SenderNotAllowed(address sender);

    /////////////
    /// event ///
    /////////////

    event MessageReceived(
        bytes32 indexed messageId, // The unique ID of the CCIP message.
        uint64 indexed sourceChainSelector, // The chain selector of the source chain.
        address sender, // The address of the sender from the source chain.
        string text, // The text that was received.
        address token, // The token address that was transferred.
        uint256 tokenAmount // The token amount that was transferred.
    );

    ///////////////////////
    /// state variables ///
    ///////////////////////

    // Mapping to keep track of allowlisted source chains.
    mapping(uint64 => bool) public allowlistedSourceChains;

    // Mapping to keep track of allowlisted senders.
    mapping(address => bool) public allowlistedSenders;

    IERC20 private s_linkToken;
    ChainStayHub public chainStayHub; 

    /////////////
    /// utils ///
    /////////////

    /// @param _router The address of the router contract.
    /// @param _link The address of the link contract.
    constructor(address _router, address _link, address _chainStayHub) CCIPReceiver(_router) {
        s_linkToken = IERC20(_link);
        chainStayHub = ChainStayHub(_chainStayHub);

        // add default allowed sender list
        allowlistedSenders[_chainStayHub] = true;

        // add default allowed source chain list
        allowlistedSourceChains[14767482510784806043] = true; // avalanche
        allowlistedSourceChains[16015286601757825753] = true; // eth
        allowlistedSourceChains[5224473277236331295] = true; // optimism
    }

    /// @dev Modifier that checks if the chain with the given sourceChainSelector is allowlisted and if the sender is allowlisted.
    /// @param _sourceChainSelector The selector of the destination chain.
    /// @param _sender The address of the sender.
    modifier onlyAllowlisted(uint64 _sourceChainSelector, address _sender) {
        if (!allowlistedSourceChains[_sourceChainSelector])
            revert SourceChainNotAllowed(_sourceChainSelector);
        if (!allowlistedSenders[_sender]) revert SenderNotAllowed(_sender);
        _;
    }

    //////////////////////////
    /// function for owner ///
    //////////////////////////

    /// @dev Updates the allowlist status of a source chain
    /// @notice This function can only be called by the owner.
    /// @param _sourceChainSelector The selector of the source chain to be updated.
    /// @param allowed The allowlist status to be set for the source chain.
    function allowlistSourceChain(
        uint64 _sourceChainSelector,
        bool allowed
    ) external onlyOwner {
        allowlistedSourceChains[_sourceChainSelector] = allowed;
    }

    /// @dev Updates the allowlist status of a sender for transactions.
    /// @notice This function can only be called by the owner.
    /// @param _sender The address of the sender to be updated.
    /// @param allowed The allowlist status to be set for the sender.
    function allowlistSender(address _sender, bool allowed) external onlyOwner {
        allowlistedSenders[_sender] = allowed;
    }

    //////////////////////
    /// core functions ///
    //////////////////////

    /// @dev handle a received message
    function _ccipReceive(
        Client.Any2EVMMessage memory any2EvmMessage
    )
        internal
        override
        onlyAllowlisted(
            any2EvmMessage.sourceChainSelector,
            abi.decode(any2EvmMessage.sender, (address))
        ) // Make sure source chain and sender are allowlisted
    {

        ChainStayHub.ReservationRequest memory request = abi.decode(any2EvmMessage.data, (ChainStayHub.ReservationRequest));
        
        address token = any2EvmMessage.destTokenAmounts[0].token;
        uint256 amount = any2EvmMessage.destTokenAmounts[0].amount;

        // approve
        IERC20Minimal(token).approve(address(chainStayHub), amount);

        // call function for reservation
        chainStayHub.reserveViaCCIP(request);

        emit MessageReceived(
            any2EvmMessage.messageId,
            any2EvmMessage.sourceChainSelector, // fetch the source chain identifier (aka selector)
            abi.decode(any2EvmMessage.sender, (address)), // abi-decoding of the sender address,
            abi.decode(any2EvmMessage.data, (string)),
            token,
            amount
        );
    }

    receive() external payable {}
}
