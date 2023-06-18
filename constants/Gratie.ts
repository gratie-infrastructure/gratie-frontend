export const GRATIE_CONTRACT_ADDRESS: `0x${string}` | undefined="0x1EcF9EbcB4eBEFD0AE5d20b07952C32ee8e5fD6e"
export const GRATIE_ABI=[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "by",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tierID",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ipfsMetadataLink",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "usdcPrice",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "freeUsersCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "usdcPerAdditionalUser",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "platformFee",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					}
				],
				"indexed": false,
				"internalType": "struct Gratie.BusinessNftTier",
				"name": "tier",
				"type": "tuple"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "BusinessNftTierAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "by",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "BusinessNftTiersActivated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "by",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "BusinessNftTiersDeactivated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "by",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "businessID",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "businessNftTier",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "divisionsCreated",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ipfsMetadataLink",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "serviceProviderNftID",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "serviceProvidersInDivision",
						"type": "uint256"
					}
				],
				"indexed": false,
				"internalType": "struct Gratie.ServiceProviderDivision[]",
				"name": "divisions",
				"type": "tuple[]"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "paymentMethod",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "paymentAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "BusinessRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "by",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "businessID",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "businessNftTier",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "divisionsCreated",
				"type": "uint256"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ipfsMetadataLink",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "serviceProviderNftID",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "serviceProvidersInDivision",
						"type": "uint256"
					}
				],
				"indexed": false,
				"internalType": "struct Gratie.ServiceProviderDivision[]",
				"name": "divisions",
				"type": "tuple[]"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "BusinessRegisteredByOwner",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "EIP712DomainChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "version",
				"type": "uint8"
			}
		],
		"name": "Initialized",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "by",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "businessId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "distributionNo",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalServiceProviders",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "percentageToDistribute",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "availableRewardTokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensPerProvider",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "startTimestamp",
				"type": "uint256"
			}
		],
		"name": "RewardDistributionCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "by",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "businessId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "distributionNo",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "rewardToken",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "RewardTokensClaimed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "by",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "businessId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "mintNonce",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "rewardToken",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "lockInPercentage",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalSupply",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "RewardTokensGenerated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "previousAdminRole",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "newAdminRole",
				"type": "bytes32"
			}
		],
		"name": "RoleAdminChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "RoleGranted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "RoleRevoked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "by",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "businessID",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "serviceProviderNftID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "divisionNumber",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "ipfsMetadataLink",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "ServiceProviderDivisionAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "by",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "businessId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "divisionId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address[]",
				"name": "addresses",
				"type": "address[]"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "usdcPlatformFeePaid",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "ServiceProvidersRegistered",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "by",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "businessId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "divisionId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address[]",
				"name": "addresses",
				"type": "address[]"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "ServiceProvidersRemoved",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "DEFAULT_ADMIN_ROLE",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "GRATIE_PLATFORM_ADMIN",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_PAYMENT_TYPEHASH",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
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
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ipfsMetadataLink",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "usdcPrice",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "freeUsersCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "usdcPerAdditionalUser",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "platformFee",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					}
				],
				"internalType": "struct Gratie.BusinessNftTier[]",
				"name": "_tiers",
				"type": "tuple[]"
			}
		],
		"name": "addBusinessNftTiers",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_businessID",
				"type": "uint256"
			},
			{
				"internalType": "string[]",
				"name": "_divisionNames",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "_divisionMetadataURIs",
				"type": "string[]"
			}
		],
		"name": "addDivisionsInBusiness",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "businessNFTs",
		"outputs": [
			{
				"internalType": "contract IERC721",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "businessNftTiers",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ipfsMetadataLink",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "usdcPrice",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "freeUsersCount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "usdcPerAdditionalUser",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "platformFee",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isActive",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "businesses",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "rewardToken",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "businessNftTier",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "divisionsInBusiness",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalServiceProviders",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_businessID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_distributionNo",
				"type": "uint256"
			}
		],
		"name": "claimRewardTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "divisionNftIdToBusinessNftId",
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
		"name": "domainName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "domainVersion",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "eip712Domain",
		"outputs": [
			{
				"internalType": "bytes1",
				"name": "fields",
				"type": "bytes1"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "version",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "chainId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "verifyingContract",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "salt",
				"type": "bytes32"
			},
			{
				"internalType": "uint256[]",
				"name": "extensions",
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
						"internalType": "uint256",
						"name": "businessId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "lockInPercentage",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "mintNonce",
						"type": "uint256"
					}
				],
				"internalType": "struct Gratie.RewardTokenMint",
				"name": "_data",
				"type": "tuple"
			},
			{
				"internalType": "bytes",
				"name": "_signature",
				"type": "bytes"
			},
			{
				"internalType": "string",
				"name": "_tokenName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_tokenSymbol",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_tokenIconURL",
				"type": "string"
			}
		],
		"name": "generateRewardTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			}
		],
		"name": "getRoleAdmin",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "grantRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "hasClaimedRewards",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "hasRole",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
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
						"internalType": "string",
						"name": "domainName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "domainVersion",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "platformFeeReceiver",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "businessNFTs",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "serviceProviderNFTs",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "rewardTokenImplementation",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "defaultAdminAddress",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "usdcContractAddress",
						"type": "address"
					},
					{
						"internalType": "address[]",
						"name": "paymentMethods",
						"type": "address[]"
					},
					{
						"internalType": "address[]",
						"name": "gratiePlatformAdmins",
						"type": "address[]"
					},
					{
						"components": [
							{
								"internalType": "string",
								"name": "name",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "ipfsMetadataLink",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "usdcPrice",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "freeUsersCount",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "usdcPerAdditionalUser",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "platformFee",
								"type": "uint256"
							},
							{
								"internalType": "bool",
								"name": "isActive",
								"type": "bool"
							}
						],
						"internalType": "struct Gratie.BusinessNftTier[]",
						"name": "businessNftTiers",
						"type": "tuple[]"
					}
				],
				"internalType": "struct Gratie.InitData",
				"name": "_initData",
				"type": "tuple"
			}
		],
		"name": "initialize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isValidPaymentMethod",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
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
		"inputs": [],
		"name": "platformFeeReceiver",
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
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "nftMetadataURI",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "businessNftTier",
						"type": "uint256"
					}
				],
				"internalType": "struct Gratie.BusinessData",
				"name": "_businessData",
				"type": "tuple"
			},
			{
				"internalType": "string[]",
				"name": "_divisionNames",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "_divisionMetadataURIs",
				"type": "string[]"
			},
			{
				"components": [
					{
						"internalType": "address",
						"name": "method",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					}
				],
				"internalType": "struct Gratie.Payment",
				"name": "_payment",
				"type": "tuple"
			},
			{
				"internalType": "bytes",
				"name": "_signature",
				"type": "bytes"
			}
		],
		"name": "registerBusiness",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_nftMetadataURI",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_businessNftTier",
				"type": "uint256"
			},
			{
				"internalType": "string[]",
				"name": "_divisionNames",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "_divisionMetadataURIs",
				"type": "string[]"
			}
		],
		"name": "registerBusinessByOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_businessID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_divisionID",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "_serviceProviders",
				"type": "address[]"
			}
		],
		"name": "registerServiceProviders",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_businessID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_divisionID",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "_serviceProviders",
				"type": "address[]"
			}
		],
		"name": "removeServiceProviders",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "renounceRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "role",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "revokeRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "rewardDistributions",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "totalServiceProviders",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "tokensPerProvider",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "startTimestamp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "percentageToDistribute",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "availableRewardTokens",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "claimsDone",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "rewardDistributionsCreated",
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
		"name": "rewardTokenImplementation",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "rewardTokenMints",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "rewardTokensAvailable",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "rewardTokensDistributed",
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
		"name": "serviceProviderNFTs",
		"outputs": [
			{
				"internalType": "contract IERC1155",
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
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "serviceProviderRegisteredAt",
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
				"internalType": "uint256",
				"name": "_businessID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_percentageToDistribute",
				"type": "uint256"
			}
		],
		"name": "startRewardDistribution",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalBusinessNftTiers",
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
		"name": "totalBusinesses",
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
		"name": "totalDivisions",
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
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "usdc",
		"outputs": [
			{
				"internalType": "contract IERC20Upgradeable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]




