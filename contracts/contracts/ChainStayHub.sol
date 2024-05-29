// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import {IERC20Minimal} from "./interfaces/IERC20Minimal.sol";

contract ChainStayHub {
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
        uint8 paymentTokenType; // usdc=1, usdt=2
        uint32 startDate;
        uint32 endDate; // form: 20240530
        uint32 members;
        uint256 totalPrice;
    }

    mapping(uint256 reservationId => Reservation) public getReservationInfo;
    mapping(uint256 accomId => uint256[] reservationIds) public getReservationList;
    uint256 totalAccommodation;

    mapping(address host => uint256[] accommIds) public getAccommodationInfo;
    mapping(uint256 accommId => address host) public getHostInfo;
    mapping(address guest => uint256[] reservationIds) public getGuestReservationList;
    uint256 totalReservation;

    mapping(uint8 paymentTokenType => address token) getPaymentToken;
    mapping(uint8 paymentTokenType => uint256 reserve) getPaymentBalance; // Todo use this mapping for verifying token transffering
    
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
    function reserve(uint256 accomId, address guest, ReservationRequest memory request) public {
        require(accomId <= totalAccommodation, "!accomId");
        uint256 reservationId = ++totalReservation;

        // add reservation
        Reservation storage reservation = getReservationInfo[reservationId];

        require(request.paymentTokenType != 0, "!paymentTokenType");
        require(request.totalPrice > 0, "!totalPrice");
        require(guest != address(0), "!guest");

        reservation.paymentTokenType = request.paymentTokenType;
        reservation.startDate = request.startDate;
        reservation.endDate = request.endDate;
        reservation.members = request.members;
        reservation.totalPrice = request.totalPrice;
        reservation.host = getHostInfo[accomId];
        reservation.guest = guest;

        reservation.accommodationId = accomId;

        // mapping
        getReservationList[accomId].push(reservationId);
        getGuestReservationList[guest].push(reservationId);
    }

    function reserveViaCCIP() public {
        // Todo
        // 1. make receiver for ccip contracts
        // 2. call this function for token receiving & message receiving
        // 3. decode message for calling receive function
        // 4. call receive function 
    } 
    function confirm(uint256 reservationId) public onlyHostOrGuest(reservationId) {
        Reservation storage reserveInfo = getReservationInfo[reservationId];

        if(reserveInfo.startDate != 0) {
            revert("already confirmed or cancled");
        }
        reserveInfo.status = 2;

        address token = getPaymentToken[reserveInfo.paymentTokenType];
        IERC20Minimal(token).transfer(reserveInfo.host, reserveInfo.totalPrice);
    }

    function cancle(uint256 reservationId) public onlyHostOrGuest(reservationId) {
        Reservation storage reserveInfo = getReservationInfo[reservationId];

        if(reserveInfo.startDate != 0) {
            revert("already confirmed or cancled");
        }
        reserveInfo.status = 1;

        address token = getPaymentToken[reserveInfo.paymentTokenType];
        IERC20Minimal(token).transfer(reserveInfo.guest, reserveInfo.totalPrice);
    }

}