export const contractDetails = {
	address: "0x8686510a1acb6f69d1a822d1450a14684b05e543",
	abi: [
		{ inputs: [], stateMutability: "nonpayable", type: "constructor" },
		{
			inputs: [
				{ internalType: "address", name: "sender", type: "address" },
				{ internalType: "uint256", name: "tokenId", type: "uint256" },
				{ internalType: "address", name: "owner", type: "address" },
			],
			name: "ERC721IncorrectOwner",
			type: "error",
		},
		{
			inputs: [
				{ internalType: "address", name: "operator", type: "address" },
				{ internalType: "uint256", name: "tokenId", type: "uint256" },
			],
			name: "ERC721InsufficientApproval",
			type: "error",
		},
		{
			inputs: [
				{ internalType: "address", name: "approver", type: "address" },
			],
			name: "ERC721InvalidApprover",
			type: "error",
		},
		{
			inputs: [
				{ internalType: "address", name: "operator", type: "address" },
			],
			name: "ERC721InvalidOperator",
			type: "error",
		},
		{
			inputs: [{ internalType: "address", name: "owner", type: "address" }],
			name: "ERC721InvalidOwner",
			type: "error",
		},
		{
			inputs: [
				{ internalType: "address", name: "receiver", type: "address" },
			],
			name: "ERC721InvalidReceiver",
			type: "error",
		},
		{
			inputs: [{ internalType: "address", name: "sender", type: "address" }],
			name: "ERC721InvalidSender",
			type: "error",
		},
		{
			inputs: [
				{ internalType: "uint256", name: "tokenId", type: "uint256" },
			],
			name: "ERC721NonexistentToken",
			type: "error",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: "uint256",
					name: "eventId",
					type: "uint256",
				},
			],
			name: "AllTicketsUsed",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "address",
					name: "owner",
					type: "address",
				},
				{
					indexed: true,
					internalType: "address",
					name: "approved",
					type: "address",
				},
				{
					indexed: true,
					internalType: "uint256",
					name: "tokenId",
					type: "uint256",
				},
			],
			name: "Approval",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "address",
					name: "owner",
					type: "address",
				},
				{
					indexed: true,
					internalType: "address",
					name: "operator",
					type: "address",
				},
				{
					indexed: false,
					internalType: "bool",
					name: "approved",
					type: "bool",
				},
			],
			name: "ApprovalForAll",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "address",
					name: "from",
					type: "address",
				},
				{
					indexed: true,
					internalType: "address",
					name: "to",
					type: "address",
				},
				{
					indexed: true,
					internalType: "uint256",
					name: "tokenId",
					type: "uint256",
				},
			],
			name: "Transfer",
			type: "event",
		},
		{
			inputs: [
				{ internalType: "address", name: "to", type: "address" },
				{ internalType: "uint256", name: "tokenId", type: "uint256" },
			],
			name: "approve",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [{ internalType: "address", name: "owner", type: "address" }],
			name: "balanceOf",
			outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{
					internalType: "uint256",
					name: "numberOfTickets",
					type: "uint256",
				},
				{ internalType: "address", name: "receiver", type: "address" },
			],
			name: "buyTickets",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{ internalType: "string", name: "eventName", type: "string" },
				{ internalType: "string", name: "eventDate", type: "string" },
				{ internalType: "string", name: "eventTime", type: "string" },
				{ internalType: "string", name: "eventVenue", type: "string" },
				{
					internalType: "uint256",
					name: "numberOfTickets",
					type: "uint256",
				},
				{ internalType: "string", name: "imageHash", type: "string" },
				{ internalType: "uint256", name: "ticketPrice", type: "uint256" },
			],
			name: "createEvent",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
			name: "events",
			outputs: [
				{ internalType: "string", name: "eventName", type: "string" },
				{ internalType: "string", name: "eventDate", type: "string" },
				{ internalType: "string", name: "eventTime", type: "string" },
				{ internalType: "string", name: "eventVenue", type: "string" },
				{
					internalType: "uint256",
					name: "numberOfTickets",
					type: "uint256",
				},
				{ internalType: "string", name: "imageHash", type: "string" },
				{ internalType: "uint256", name: "ticketPrice", type: "uint256" },
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "getAllEvents",
			outputs: [
				{
					components: [
						{ internalType: "string", name: "eventName", type: "string" },
						{ internalType: "string", name: "eventDate", type: "string" },
						{ internalType: "string", name: "eventTime", type: "string" },
						{
							internalType: "string",
							name: "eventVenue",
							type: "string",
						},
						{
							internalType: "uint256",
							name: "numberOfTickets",
							type: "uint256",
						},
						{ internalType: "string", name: "imageHash", type: "string" },
						{
							internalType: "uint256",
							name: "ticketPrice",
							type: "uint256",
						},
						{
							internalType: "bool[]",
							name: "ticketUsed",
							type: "bool[]",
						},
					],
					internalType: "struct EventTicketNFT.Event[]",
					name: "",
					type: "tuple[]",
				},
			],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{ internalType: "uint256", name: "tokenId", type: "uint256" },
			],
			name: "getApproved",
			outputs: [{ internalType: "address", name: "", type: "address" }],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{ internalType: "uint256", name: "eventId", type: "uint256" },
			],
			name: "getAvailableTicketsForEvents",
			outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{ internalType: "address", name: "owner", type: "address" },
				{ internalType: "address", name: "operator", type: "address" },
			],
			name: "isApprovedForAll",
			outputs: [{ internalType: "bool", name: "", type: "bool" }],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "name",
			outputs: [{ internalType: "string", name: "", type: "string" }],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{ internalType: "uint256", name: "tokenId", type: "uint256" },
			],
			name: "ownerOf",
			outputs: [{ internalType: "address", name: "", type: "address" }],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{ internalType: "address", name: "from", type: "address" },
				{ internalType: "address", name: "to", type: "address" },
				{ internalType: "uint256", name: "tokenId", type: "uint256" },
			],
			name: "safeTransferFrom",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{ internalType: "address", name: "from", type: "address" },
				{ internalType: "address", name: "to", type: "address" },
				{ internalType: "uint256", name: "tokenId", type: "uint256" },
				{ internalType: "bytes", name: "data", type: "bytes" },
			],
			name: "safeTransferFrom",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{ internalType: "address", name: "operator", type: "address" },
				{ internalType: "bool", name: "approved", type: "bool" },
			],
			name: "setApprovalForAll",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{ internalType: "bytes4", name: "interfaceId", type: "bytes4" },
			],
			name: "supportsInterface",
			outputs: [{ internalType: "bool", name: "", type: "bool" }],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "symbol",
			outputs: [{ internalType: "string", name: "", type: "string" }],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{ internalType: "uint256", name: "tokenId", type: "uint256" },
			],
			name: "tokenURI",
			outputs: [{ internalType: "string", name: "", type: "string" }],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{ internalType: "address", name: "from", type: "address" },
				{ internalType: "address", name: "to", type: "address" },
				{ internalType: "uint256", name: "tokenId", type: "uint256" },
			],
			name: "transferFrom",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{ internalType: "uint256", name: "tokenId", type: "uint256" },
			],
			name: "useTicket",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [{ internalType: "address", name: "", type: "address" }],
			name: "userTicketCounts",
			outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
			stateMutability: "view",
			type: "function",
		},
	],
};
