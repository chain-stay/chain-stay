export const chainStayABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "host",
				"type": "address"
			}
		],
		"name": "addAccommodation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "reservationId",
				"type": "uint256"
			}
		],
		"name": "cancle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "reservationId",
				"type": "uint256"
			}
		],
		"name": "confirm",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "host",
				"type": "address"
			}
		],
		"name": "getAccommodationInfo",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "host",
				"type": "address"
			}
		],
		"name": "getAllAccommodationInfo",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "guest",
				"type": "address"
			}
		],
		"name": "getAllGuestReservationList",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "accomId",
				"type": "uint256"
			}
		],
		"name": "getAllReservationList",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "guest",
				"type": "address"
			}
		],
		"name": "getGuestReservationList",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "accommId",
				"type": "uint256"
			}
		],
		"name": "getHostInfo",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "paymentTokenType",
				"type": "uint8"
			}
		],
		"name": "getPaymentBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "paymentTokenType",
				"type": "uint8"
			}
		],
		"name": "getPaymentToken",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "reservationId",
				"type": "uint256"
			}
		],
		"name": "getReservationInfo",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint8",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "uint8",
						"name": "paymentTokenType",
						"type": "uint8"
					},
					{
						"internalType": "uint32",
						"name": "startDate",
						"type": "uint32"
					},
					{
						"internalType": "uint32",
						"name": "endDate",
						"type": "uint32"
					},
					{
						"internalType": "uint32",
						"name": "members",
						"type": "uint32"
					},
					{
						"internalType": "uint256",
						"name": "totalPrice",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "accommodationId",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "host",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "guest",
						"type": "address"
					}
				],
				"internalType": "struct IChainStayHub.Reservation",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "accomId",
				"type": "uint256"
			}
		],
		"name": "getReservationList",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "guest",
						"type": "address"
					},
					{
						"internalType": "uint8",
						"name": "paymentTokenType",
						"type": "uint8"
					},
					{
						"internalType": "uint32",
						"name": "startDate",
						"type": "uint32"
					},
					{
						"internalType": "uint32",
						"name": "endDate",
						"type": "uint32"
					},
					{
						"internalType": "uint32",
						"name": "members",
						"type": "uint32"
					},
					{
						"internalType": "uint256",
						"name": "totalPrice",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "accommodationId",
						"type": "uint256"
					}
				],
				"internalType": "struct IChainStayHub.ReservationRequest",
				"name": "request",
				"type": "tuple"
			}
		],
		"name": "reserve",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "reservationId",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "guest",
						"type": "address"
					},
					{
						"internalType": "uint8",
						"name": "paymentTokenType",
						"type": "uint8"
					},
					{
						"internalType": "uint32",
						"name": "startDate",
						"type": "uint32"
					},
					{
						"internalType": "uint32",
						"name": "endDate",
						"type": "uint32"
					},
					{
						"internalType": "uint32",
						"name": "members",
						"type": "uint32"
					},
					{
						"internalType": "uint256",
						"name": "totalPrice",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "accommodationId",
						"type": "uint256"
					}
				],
				"internalType": "struct IChainStayHub.ReservationRequest",
				"name": "request",
				"type": "tuple"
			}
		],
		"name": "reserveViaCCIP",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "reservationId",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalAccommodation",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalReservation",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "paymentTokenType",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "paymentToken",
				"type": "address"
			}
		],
		"name": "updatePaymenttoken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]