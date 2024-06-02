// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {IERC20Minimal} from "./interfaces/IERC20Minimal.sol";
import {ReservationReceiver, Client} from "./ReservationReceiver.sol";

/// @title This is the contract for ChainStayHub reservation.
/// Hosts can make accommodation list and guests can make reservation list via this contract.
contract ChainStayHub is ReservationReceiver {
    struct Reservation {
        // reservation info
        uint8 status; // nothing=0, cancle=1, confirmed=2
        uint8 paymentTokenType; // usdc=1, usdt=2
        uint32 startDate;
        uint32 endDate;
        uint32 members;
        uint256 totalPrice;
        // accommodation info
        uint256 accommodationId;
        address host;
        address guest;
    }

    struct ReservationRequest {
        address guest;
        uint8 paymentTokenType; // usdc=1, usdt=2
        uint32 startDate;
        uint32 endDate; // form: 20240530
        uint32 members;
        uint256 totalPrice;
        uint256 accommodationId;
    }

    mapping(uint256 reservationId => Reservation) public getReservationInfo;
    mapping(uint256 accomId => uint256[] reservationIds) public getReservationList;
    uint256 public totalAccommodation;

    mapping(address host => uint256[] accommIds) public getAccommodationInfo;
    mapping(uint256 accommId => address host) public getHostInfo;
    mapping(address guest => uint256[] reservationIds) public getGuestReservationList;
    uint256 public totalReservation;

    mapping(uint8 paymentTokenType => address token) public getPaymentToken;
    mapping(uint8 paymentTokenType => uint256 reserve) getPaymentBalance; // Todo use this mapping for verifying token transffering
    
    constructor(address defaultPaymentToken, address _router) ReservationReceiver(_router){
        require(defaultPaymentToken != address(0), "!defaultPaymentToken");
        getPaymentToken[1] = defaultPaymentToken;
    }

    function updatePaymenttoken(uint8 pymentTokenType, address paymentToken) external {
        getPaymentToken[pymentTokenType] = paymentToken;
    }

    function addAccommodation(address host) public {
        uint256 accomId = ++totalAccommodation;

        getAccommodationInfo[host].push(accomId);
        getHostInfo[accomId] = host;
    }

    modifier onlyHostOrGuest(uint256 reservationId) {
        if (reservationId > totalReservation) {
            revert("invalid reservation id");
        }
        
        Reservation memory reserveInfo = getReservationInfo[reservationId];

        if(reserveInfo.host != msg.sender && reserveInfo.guest != msg.sender) {
            revert("invalid caller");
        }

        _;
    }

    //////////////////
    /// core logic ///
    //////////////////

    function reserve(ReservationRequest memory request) public returns(uint256 reservationId) {
        reservationId = _makeReservation(request);

        // transferToken
        address token = getPaymentToken[request.paymentTokenType];
        IERC20Minimal(token).transferFrom(request.guest, address(this), request.totalPrice);
    }

    function _makeReservation(ReservationRequest memory request) internal returns(uint256 reservationId) {
        uint256 accomId = request.accommodationId;
        
        require(accomId <= totalAccommodation, "!accomId");
        reservationId = ++totalReservation;

        // add reservation
        Reservation storage reservation = getReservationInfo[reservationId];

        require(request.paymentTokenType != 0, "!paymentTokenType");
        require(request.totalPrice > 0, "!totalPrice");
        require(request.guest != address(0), "!guest");

        reservation.paymentTokenType = request.paymentTokenType;
        reservation.startDate = request.startDate;
        reservation.endDate = request.endDate;
        reservation.members = request.members;
        reservation.totalPrice = request.totalPrice;
        reservation.host = getHostInfo[accomId];
        reservation.guest = request.guest;

        reservation.accommodationId = accomId;

        // mapping
        getReservationList[accomId].push(reservationId);
        getGuestReservationList[request.guest].push(reservationId);
    }

    function confirm(uint256 reservationId) public onlyHostOrGuest(reservationId) {
        Reservation storage reserveInfo = getReservationInfo[reservationId];

        if(reserveInfo.status != 0) {
            revert("already confirmed or cancled");
        }
        reserveInfo.status = 2;

        address token = getPaymentToken[reserveInfo.paymentTokenType];
        IERC20Minimal(token).transfer(reserveInfo.host, reserveInfo.totalPrice);
    }

    function cancle(uint256 reservationId) public onlyHostOrGuest(reservationId) {
        Reservation storage reserveInfo = getReservationInfo[reservationId];

        if(reserveInfo.status != 0) {
            revert("already confirmed or cancled");
        }
        reserveInfo.status = 1;

        address token = getPaymentToken[reserveInfo.paymentTokenType];
        IERC20Minimal(token).transfer(reserveInfo.guest, reserveInfo.totalPrice);
    }

    //////////////////////
    /// ccip functions ///
    //////////////////////

    function _ccipReceive(
        Client.Any2EVMMessage memory any2EvmMessage
    )
        internal
        override
        virtual
        onlyAllowlisted(
            any2EvmMessage.sourceChainSelector,
            abi.decode(any2EvmMessage.sender, (address))
        ) // Make sure source chain and sender are allowlisted
    {

        ChainStayHub.ReservationRequest memory request = abi.decode(any2EvmMessage.data, (ChainStayHub.ReservationRequest));

        // make reservation
        _makeReservation(request);

        emit MessageReceived(
            any2EvmMessage.messageId,
            any2EvmMessage.sourceChainSelector, // fetch the source chain identifier (aka selector)
            abi.decode(any2EvmMessage.sender, (address)), // abi-decoding of the sender address,
            any2EvmMessage.data,
            any2EvmMessage.destTokenAmounts[0].token,
            any2EvmMessage.destTokenAmounts[0].amount
        );
    }

    //////////////////////
    /// view functions ///
    //////////////////////

    function getAllReservationList(uint256 accomId) public view returns(uint256[] memory) {
        return getReservationList[accomId];
    }

    function getAllAccommodationInfo(address host) public view returns(uint256[] memory) {
        return getAccommodationInfo[host];
    }

    function getAllGuestReservationList(address guest) public view returns(uint256[] memory) {
        return getGuestReservationList[guest];
    }

}