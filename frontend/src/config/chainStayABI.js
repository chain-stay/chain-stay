export const chainStayABI = [
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
				"internalType": "struct a.Reservation",
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
				"internalType": "struct a.ReservationRequest",
				"name": "request",
				"type": "tuple"
			}
		],
		"name": "reserve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]