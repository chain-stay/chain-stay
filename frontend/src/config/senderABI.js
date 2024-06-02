export const senderABI = [
	{
		"inputs": [
			{
				"internalType": "uint64",
				"name": "_destChainSelector",
				"type": "uint64"
			},
			{
				"internalType": "address",
				"name": "_receiver",
				"type": "address"
			},
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
				"name": "_request",
				"type": "tuple"
			},
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "getLinkFeeAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "fees",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint64",
				"name": "_destChainSelector",
				"type": "uint64"
			},
			{
				"internalType": "address",
				"name": "_receiver",
				"type": "address"
			},
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
				"name": "_request",
				"type": "tuple"
			},
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "getNativeFeeAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "fees",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint64",
				"name": "_destChainSelector",
				"type": "uint64"
			},
			{
				"internalType": "address",
				"name": "_receiver",
				"type": "address"
			},
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
				"name": "_request",
				"type": "tuple"
			},
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "sendMessagePayNative",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint64",
				"name": "_destChainSelector",
				"type": "uint64"
			},
			{
				"internalType": "address",
				"name": "_receiver",
				"type": "address"
			},
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
				"name": "_request",
				"type": "tuple"
			},
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "sendReservationPayLINK",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]