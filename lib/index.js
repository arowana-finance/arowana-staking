import { Interface, Contract, ContractFactory, formatUnits } from 'ethers';

const _abi$14 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "OwnableInvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
let Ownable__factory$1 = class Ownable__factory {
  static abi = _abi$14;
  static createInterface() {
    return new Interface(_abi$14);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$14, runner);
  }
};

var index$1y = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Ownable__factory: Ownable__factory$1
});

var index$1x = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ownableSol: index$1y
});

const _abi$13 = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approveAndCall",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "approveAndCall",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferAndCall",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "transferAndCall",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "transferFromAndCall",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFromAndCall",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class IERC1363__factory {
  static abi = _abi$13;
  static createInterface() {
    return new Interface(_abi$13);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$13, runner);
  }
}

var index$1w = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC1363__factory: IERC1363__factory
});

const _abi$12 = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "AdminChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address"
      }
    ],
    name: "BeaconUpgraded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "Upgraded",
    type: "event"
  }
];
class IERC1967__factory {
  static abi = _abi$12;
  static createInterface() {
    return new Interface(_abi$12);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$12, runner);
  }
}

var index$1v = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC1967__factory: IERC1967__factory
});

const _abi$11 = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "Deposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "Withdraw",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "asset",
    outputs: [
      {
        internalType: "address",
        name: "assetTokenAddress",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "convertToAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    name: "convertToShares",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "maxDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "maxAssets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "maxMint",
    outputs: [
      {
        internalType: "uint256",
        name: "maxShares",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "maxRedeem",
    outputs: [
      {
        internalType: "uint256",
        name: "maxShares",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "maxWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "maxAssets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    name: "previewDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "previewMint",
    outputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "previewRedeem",
    outputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    name: "previewWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "redeem",
    outputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "totalManagedAssets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
let IERC4626__factory$1 = class IERC4626__factory {
  static abi = _abi$11;
  static createInterface() {
    return new Interface(_abi$11);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$11, runner);
  }
};

var index$1u = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC4626__factory: IERC4626__factory$1
});

const _abi$10 = [
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event"
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1"
      },
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "version",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
class IERC5267__factory {
  static abi = _abi$10;
  static createInterface() {
    return new Interface(_abi$10);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$10, runner);
  }
}

var index$1t = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC5267__factory: IERC5267__factory
});

const _abi$$ = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "ERC1155InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC1155InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "idsLength",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "valuesLength",
        type: "uint256"
      }
    ],
    name: "ERC1155InvalidArrayLength",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "ERC1155InvalidOperator",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC1155InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC1155InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "ERC1155MissingApprovalForAll",
    type: "error"
  }
];
class IERC1155Errors__factory {
  static abi = _abi$$;
  static createInterface() {
    return new Interface(_abi$$);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$$, runner);
  }
}

const _abi$_ = [
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientAllowance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC20InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC20InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSpender",
    type: "error"
  }
];
class IERC20Errors__factory {
  static abi = _abi$_;
  static createInterface() {
    return new Interface(_abi$_);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$_, runner);
  }
}

const _abi$Z = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "ERC721IncorrectOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "ERC721InsufficientApproval",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC721InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "ERC721InvalidOperator",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "ERC721InvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC721InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC721InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "ERC721NonexistentToken",
    type: "error"
  }
];
class IERC721Errors__factory {
  static abi = _abi$Z;
  static createInterface() {
    return new Interface(_abi$Z);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$Z, runner);
  }
}

var index$1s = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC1155Errors__factory: IERC1155Errors__factory,
  IERC20Errors__factory: IERC20Errors__factory,
  IERC721Errors__factory: IERC721Errors__factory
});

var index$1r = /*#__PURE__*/Object.freeze({
  __proto__: null,
  draftIerc6093Sol: index$1s,
  ierc1363Sol: index$1w,
  ierc1967Sol: index$1v,
  ierc4626Sol: index$1u,
  ierc5267Sol: index$1t
});

const _abi$Y = [
  {
    inputs: [],
    name: "CloneArgumentsTooLong",
    type: "error"
  }
];
const _bytecode$n = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212202209e58f1b66b7b46ebecb9aa02b45da9df53f7bf6a0f749acd9cbb0abb76e0164736f6c634300081e0033";
const isSuperArgs$n = (xs) => xs.length > 1;
class Clones__factory extends ContractFactory {
  constructor(...args) {
    if (isSuperArgs$n(args)) {
      super(...args);
    } else {
      super(_abi$Y, _bytecode$n, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$n;
  static abi = _abi$Y;
  static createInterface() {
    return new Interface(_abi$Y);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$Y, runner);
  }
}

var index$1q = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Clones__factory: Clones__factory
});

const _abi$X = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address"
      }
    ],
    name: "ERC1967InvalidAdmin",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beacon",
        type: "address"
      }
    ],
    name: "ERC1967InvalidBeacon",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "ERC1967InvalidImplementation",
    type: "error"
  },
  {
    inputs: [],
    name: "ERC1967NonPayable",
    type: "error"
  }
];
const _bytecode$m = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220bb27a5849f0204717142786e0acad22ece757921fd3fe893cea8c0bcf287bdef64736f6c634300081e0033";
const isSuperArgs$m = (xs) => xs.length > 1;
class ERC1967Utils__factory extends ContractFactory {
  constructor(...args) {
    if (isSuperArgs$m(args)) {
      super(...args);
    } else {
      super(_abi$X, _bytecode$m, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$m;
  static abi = _abi$X;
  static createInterface() {
    return new Interface(_abi$X);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$X, runner);
  }
}

var index$1p = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ERC1967Utils__factory: ERC1967Utils__factory
});

var index$1o = /*#__PURE__*/Object.freeze({
  __proto__: null,
  erc1967UtilsSol: index$1p
});

const _abi$W = [
  {
    stateMutability: "payable",
    type: "fallback"
  }
];
class Proxy__factory {
  static abi = _abi$W;
  static createInterface() {
    return new Interface(_abi$W);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$W, runner);
  }
}

var index$1n = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Proxy__factory: Proxy__factory
});

const _abi$V = [
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
class IBeacon__factory {
  static abi = _abi$V;
  static createInterface() {
    return new Interface(_abi$V);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$V, runner);
  }
}

var index$1m = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IBeacon__factory: IBeacon__factory
});

var index$1l = /*#__PURE__*/Object.freeze({
  __proto__: null,
  iBeaconSol: index$1m
});

var index$1k = /*#__PURE__*/Object.freeze({
  __proto__: null,
  beacon: index$1l,
  clonesSol: index$1q,
  erc1967: index$1o,
  proxySol: index$1n
});

const _abi$U = [
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientAllowance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC20InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC20InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSpender",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class ERC20__factory {
  static abi = _abi$U;
  static createInterface() {
    return new Interface(_abi$U);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$U, runner);
  }
}

var index$1j = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ERC20__factory: ERC20__factory
});

const _abi$T = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class IERC20__factory {
  static abi = _abi$T;
  static createInterface() {
    return new Interface(_abi$T);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$T, runner);
  }
}

var index$1i = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC20__factory: IERC20__factory
});

const _abi$S = [
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientAllowance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC20InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC20InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSpender",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class ERC20Burnable__factory {
  static abi = _abi$S;
  static createInterface() {
    return new Interface(_abi$S);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$S, runner);
  }
}

var index$1h = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ERC20Burnable__factory: ERC20Burnable__factory
});

const _abi$R = [
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256"
      }
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientAllowance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC20InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC20InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSpender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      }
    ],
    name: "ERC2612ExpiredSignature",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "ERC2612InvalidSigner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "currentNonce",
        type: "uint256"
      }
    ],
    name: "InvalidAccountNonce",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string"
      }
    ],
    name: "StringTooLong",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1"
      },
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "version",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8"
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class ERC20Permit__factory {
  static abi = _abi$R;
  static createInterface() {
    return new Interface(_abi$R);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$R, runner);
  }
}

var index$1g = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ERC20Permit__factory: ERC20Permit__factory
});

const _abi$Q = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class IERC20Metadata__factory {
  static abi = _abi$Q;
  static createInterface() {
    return new Interface(_abi$Q);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$Q, runner);
  }
}

var index$1f = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC20Metadata__factory: IERC20Metadata__factory
});

const _abi$P = [
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8"
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class IERC20Permit__factory {
  static abi = _abi$P;
  static createInterface() {
    return new Interface(_abi$P);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$P, runner);
  }
}

var index$1e = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC20Permit__factory: IERC20Permit__factory
});

var index$1d = /*#__PURE__*/Object.freeze({
  __proto__: null,
  erc20BurnableSol: index$1h,
  erc20PermitSol: index$1g,
  ierc20MetadataSol: index$1f,
  ierc20PermitSol: index$1e
});

const _abi$O = [
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "currentAllowance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "requestedDecrease",
        type: "uint256"
      }
    ],
    name: "SafeERC20FailedDecreaseAllowance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      }
    ],
    name: "SafeERC20FailedOperation",
    type: "error"
  }
];
const _bytecode$l = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212206c170459f53fc67c03f8a130dbaabe61a45e22b232d5852483261e1c8b78600964736f6c634300081e0033";
const isSuperArgs$l = (xs) => xs.length > 1;
class SafeERC20__factory extends ContractFactory {
  constructor(...args) {
    if (isSuperArgs$l(args)) {
      super(...args);
    } else {
      super(_abi$O, _bytecode$l, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$l;
  static abi = _abi$O;
  static createInterface() {
    return new Interface(_abi$O);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$O, runner);
  }
}

var index$1c = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SafeERC20__factory: SafeERC20__factory
});

var index$1b = /*#__PURE__*/Object.freeze({
  __proto__: null,
  safeErc20Sol: index$1c
});

var index$1a = /*#__PURE__*/Object.freeze({
  __proto__: null,
  erc20Sol: index$1j,
  extensions: index$1d,
  ierc20Sol: index$1i,
  utils: index$1b
});

var index$19 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  erc20: index$1a
});

const _abi$N = [
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address"
      }
    ],
    name: "AddressEmptyCode",
    type: "error"
  }
];
const _bytecode$k = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212204e0e1f4e4876b89b87682965e5516e892faa6f650b6539a77a996de1bb1d422864736f6c634300081e0033";
const isSuperArgs$k = (xs) => xs.length > 1;
class Address__factory extends ContractFactory {
  constructor(...args) {
    if (isSuperArgs$k(args)) {
      super(...args);
    } else {
      super(_abi$N, _bytecode$k, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$k;
  static abi = _abi$N;
  static createInterface() {
    return new Interface(_abi$N);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$N, runner);
  }
}

var index$18 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Address__factory: Address__factory
});

const _abi$M = [
  {
    inputs: [],
    name: "Create2EmptyBytecode",
    type: "error"
  }
];
const _bytecode$j = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220d2d47f4ac87f31684f361f3ce1c580a0d08eeaab556fb8adcfe1a052c63cc16364736f6c634300081e0033";
const isSuperArgs$j = (xs) => xs.length > 1;
class Create2__factory extends ContractFactory {
  constructor(...args) {
    if (isSuperArgs$j(args)) {
      super(...args);
    } else {
      super(_abi$M, _bytecode$j, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$j;
  static abi = _abi$M;
  static createInterface() {
    return new Interface(_abi$M);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$M, runner);
  }
}

var index$17 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Create2__factory: Create2__factory
});

const _abi$L = [
  {
    inputs: [],
    name: "FailedCall",
    type: "error"
  },
  {
    inputs: [],
    name: "FailedDeployment",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "MissingPrecompile",
    type: "error"
  }
];
const _bytecode$i = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220c71c3a3023b3df3e1731d2ecbf6d058219e4c82a5fd272a3bd5e86348dc1a53964736f6c634300081e0033";
const isSuperArgs$i = (xs) => xs.length > 1;
class Errors__factory extends ContractFactory {
  constructor(...args) {
    if (isSuperArgs$i(args)) {
      super(...args);
    } else {
      super(_abi$L, _bytecode$i, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$i;
  static abi = _abi$L;
  static createInterface() {
    return new Interface(_abi$L);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$L, runner);
  }
}

var index$16 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Errors__factory: Errors__factory
});

const _abi$K = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "currentNonce",
        type: "uint256"
      }
    ],
    name: "InvalidAccountNonce",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
class Nonces__factory {
  static abi = _abi$K;
  static createInterface() {
    return new Interface(_abi$K);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$K, runner);
  }
}

var index$15 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Nonces__factory: Nonces__factory
});

const _abi$J = [
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string"
      }
    ],
    name: "StringTooLong",
    type: "error"
  }
];
const _bytecode$h = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220c95705bd32fbdf75eec16e53e0fbfb9983dfce17e5c4ca4e3f85fb47e5d54d5c64736f6c634300081e0033";
const isSuperArgs$h = (xs) => xs.length > 1;
class ShortStrings__factory extends ContractFactory {
  constructor(...args) {
    if (isSuperArgs$h(args)) {
      super(...args);
    } else {
      super(_abi$J, _bytecode$h, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$h;
  static abi = _abi$J;
  static createInterface() {
    return new Interface(_abi$J);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$J, runner);
  }
}

var index$14 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ShortStrings__factory: ShortStrings__factory
});

const _abi$I = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "length",
        type: "uint256"
      }
    ],
    name: "StringsInsufficientHexLength",
    type: "error"
  },
  {
    inputs: [],
    name: "StringsInvalidAddressFormat",
    type: "error"
  },
  {
    inputs: [],
    name: "StringsInvalidChar",
    type: "error"
  }
];
const _bytecode$g = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122007b1dd79cdc6cf9f7daaf11dd83de5a60fabd9baf1fe21787b3b7a641be28dc264736f6c634300081e0033";
const isSuperArgs$g = (xs) => xs.length > 1;
class Strings__factory extends ContractFactory {
  constructor(...args) {
    if (isSuperArgs$g(args)) {
      super(...args);
    } else {
      super(_abi$I, _bytecode$g, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$g;
  static abi = _abi$I;
  static createInterface() {
    return new Interface(_abi$I);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$I, runner);
  }
}

var index$13 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Strings__factory: Strings__factory
});

const _abi$H = [
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256"
      }
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error"
  }
];
const _bytecode$f = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122058fd151bc86b42bdcd7b5e18354013c5c80d815c59ed08071c9ee4b1ba1cae0b64736f6c634300081e0033";
const isSuperArgs$f = (xs) => xs.length > 1;
class ECDSA__factory extends ContractFactory {
  constructor(...args) {
    if (isSuperArgs$f(args)) {
      super(...args);
    } else {
      super(_abi$H, _bytecode$f, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$f;
  static abi = _abi$H;
  static createInterface() {
    return new Interface(_abi$H);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$H, runner);
  }
}

var index$12 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ECDSA__factory: ECDSA__factory
});

const _abi$G = [
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string"
      }
    ],
    name: "StringTooLong",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event"
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1"
      },
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "version",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
class EIP712__factory {
  static abi = _abi$G;
  static createInterface() {
    return new Interface(_abi$G);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$G, runner);
  }
}

var index$11 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  EIP712__factory: EIP712__factory
});

var index$10 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ecdsaSol: index$12,
  eip712Sol: index$11
});

const _abi$F = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
class ERC165__factory {
  static abi = _abi$F;
  static createInterface() {
    return new Interface(_abi$F);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$F, runner);
  }
}

var index$$ = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ERC165__factory: ERC165__factory
});

const _abi$E = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
class IERC165__factory {
  static abi = _abi$E;
  static createInterface() {
    return new Interface(_abi$E);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$E, runner);
  }
}

var index$_ = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC165__factory: IERC165__factory
});

var index$Z = /*#__PURE__*/Object.freeze({
  __proto__: null,
  erc165Sol: index$$,
  ierc165Sol: index$_
});

const _abi$D = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "bits",
        type: "uint8"
      },
      {
        internalType: "int256",
        name: "value",
        type: "int256"
      }
    ],
    name: "SafeCastOverflowedIntDowncast",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "value",
        type: "int256"
      }
    ],
    name: "SafeCastOverflowedIntToUint",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "bits",
        type: "uint8"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "SafeCastOverflowedUintDowncast",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "SafeCastOverflowedUintToInt",
    type: "error"
  }
];
const _bytecode$e = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220e80427a62bf786174b8db049ffb8c67b21fb88339a45931d66a695896dbbb7eb64736f6c634300081e0033";
const isSuperArgs$e = (xs) => xs.length > 1;
class SafeCast__factory extends ContractFactory {
  constructor(...args) {
    if (isSuperArgs$e(args)) {
      super(...args);
    } else {
      super(_abi$D, _bytecode$e, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$e;
  static abi = _abi$D;
  static createInterface() {
    return new Interface(_abi$D);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$D, runner);
  }
}

var index$Y = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SafeCast__factory: SafeCast__factory
});

var index$X = /*#__PURE__*/Object.freeze({
  __proto__: null,
  safeCastSol: index$Y
});

var index$W = /*#__PURE__*/Object.freeze({
  __proto__: null,
  addressSol: index$18,
  create2Sol: index$17,
  cryptography: index$10,
  errorsSol: index$16,
  introspection: index$Z,
  math: index$X,
  noncesSol: index$15,
  shortStringsSol: index$14,
  stringsSol: index$13
});

var index$V = /*#__PURE__*/Object.freeze({
  __proto__: null,
  access: index$1x,
  interfaces: index$1r,
  proxy: index$1k,
  token: index$19,
  utils: index$W
});

const _abi$C = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "OwnableInvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class OwnableUpgradeable__factory {
  static abi = _abi$C;
  static createInterface() {
    return new Interface(_abi$C);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$C, runner);
  }
}

var index$U = /*#__PURE__*/Object.freeze({
  __proto__: null,
  OwnableUpgradeable__factory: OwnableUpgradeable__factory
});

var index$T = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ownableUpgradeableSol: index$U
});

const _abi$B = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  }
];
class Initializable__factory {
  static abi = _abi$B;
  static createInterface() {
    return new Interface(_abi$B);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$B, runner);
  }
}

var index$S = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Initializable__factory: Initializable__factory
});

var index$R = /*#__PURE__*/Object.freeze({
  __proto__: null,
  initializableSol: index$S
});

var index$Q = /*#__PURE__*/Object.freeze({
  __proto__: null,
  utils: index$R
});

const _abi$A = [
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientAllowance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC20InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC20InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSpender",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class ERC20Upgradeable__factory {
  static abi = _abi$A;
  static createInterface() {
    return new Interface(_abi$A);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$A, runner);
  }
}

var index$P = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ERC20Upgradeable__factory: ERC20Upgradeable__factory
});

const _abi$z = [
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256"
      }
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientAllowance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC20InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC20InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSpender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      }
    ],
    name: "ERC2612ExpiredSignature",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "ERC2612InvalidSigner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "currentNonce",
        type: "uint256"
      }
    ],
    name: "InvalidAccountNonce",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1"
      },
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "version",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8"
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class ERC20PermitUpgradeable__factory {
  static abi = _abi$z;
  static createInterface() {
    return new Interface(_abi$z);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi$z,
      runner
    );
  }
}

var index$O = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ERC20PermitUpgradeable__factory: ERC20PermitUpgradeable__factory
});

const _abi$y = [
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientAllowance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC20InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC20InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSpender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "max",
        type: "uint256"
      }
    ],
    name: "ERC4626ExceededMaxDeposit",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "max",
        type: "uint256"
      }
    ],
    name: "ERC4626ExceededMaxMint",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "max",
        type: "uint256"
      }
    ],
    name: "ERC4626ExceededMaxRedeem",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "max",
        type: "uint256"
      }
    ],
    name: "ERC4626ExceededMaxWithdraw",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      }
    ],
    name: "SafeERC20FailedOperation",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "Deposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "Withdraw",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "asset",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "convertToAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    name: "convertToShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "maxDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "maxMint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "maxRedeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "maxWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    name: "previewDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "previewMint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "previewRedeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    name: "previewWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "redeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class ERC4626Upgradeable__factory {
  static abi = _abi$y;
  static createInterface() {
    return new Interface(_abi$y);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$y, runner);
  }
}

var index$N = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ERC4626Upgradeable__factory: ERC4626Upgradeable__factory
});

var index$M = /*#__PURE__*/Object.freeze({
  __proto__: null,
  erc20PermitUpgradeableSol: index$O,
  erc4626UpgradeableSol: index$N
});

var index$L = /*#__PURE__*/Object.freeze({
  __proto__: null,
  erc20UpgradeableSol: index$P,
  extensions: index$M
});

var index$K = /*#__PURE__*/Object.freeze({
  __proto__: null,
  erc20: index$L
});

const _abi$x = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  }
];
class ContextUpgradeable__factory {
  static abi = _abi$x;
  static createInterface() {
    return new Interface(_abi$x);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$x, runner);
  }
}

var index$J = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ContextUpgradeable__factory: ContextUpgradeable__factory
});

const _abi$w = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "currentNonce",
        type: "uint256"
      }
    ],
    name: "InvalidAccountNonce",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
class NoncesUpgradeable__factory {
  static abi = _abi$w;
  static createInterface() {
    return new Interface(_abi$w);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$w, runner);
  }
}

var index$I = /*#__PURE__*/Object.freeze({
  __proto__: null,
  NoncesUpgradeable__factory: NoncesUpgradeable__factory
});

const _abi$v = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  }
];
class ReentrancyGuardUpgradeable__factory {
  static abi = _abi$v;
  static createInterface() {
    return new Interface(_abi$v);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi$v,
      runner
    );
  }
}

var index$H = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ReentrancyGuardUpgradeable__factory: ReentrancyGuardUpgradeable__factory
});

const _abi$u = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1"
      },
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "version",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
class EIP712Upgradeable__factory {
  static abi = _abi$u;
  static createInterface() {
    return new Interface(_abi$u);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$u, runner);
  }
}

var index$G = /*#__PURE__*/Object.freeze({
  __proto__: null,
  EIP712Upgradeable__factory: EIP712Upgradeable__factory
});

var index$F = /*#__PURE__*/Object.freeze({
  __proto__: null,
  eip712UpgradeableSol: index$G
});

var index$E = /*#__PURE__*/Object.freeze({
  __proto__: null,
  contextUpgradeableSol: index$J,
  cryptography: index$F,
  noncesUpgradeableSol: index$I,
  reentrancyGuardUpgradeableSol: index$H
});

var index$D = /*#__PURE__*/Object.freeze({
  __proto__: null,
  access: index$T,
  proxy: index$Q,
  token: index$K,
  utils: index$E
});

var index$C = /*#__PURE__*/Object.freeze({
  __proto__: null,
  contracts: index$V,
  contractsUpgradeable: index$D
});

const _abi$t = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_unlockTime",
        type: "uint256"
      }
    ],
    stateMutability: "payable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "when",
        type: "uint256"
      }
    ],
    name: "Withdrawal",
    type: "event"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "unlockTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
const _bytecode$d = "0x60806040526040516102a03803806102a08339810160408190526020916097565b804210607e5760405162461bcd60e51b815260206004820152602360248201527f556e6c6f636b2074696d652073686f756c6420626520696e207468652066757460448201526275726560e81b606482015260840160405180910390fd5b600055600180546001600160a01b0319163317905560af565b60006020828403121560a857600080fd5b5051919050565b6101e2806100be6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063251c1aa3146100465780633ccfd60b146100625780638da5cb5b1461006c575b600080fd5b61004f60005481565b6040519081526020015b60405180910390f35b61006a610097565b005b60015461007f906001600160a01b031681565b6040516001600160a01b039091168152602001610059565b6000544210156100e75760405162461bcd60e51b8152602060048201526016602482015275165bdd4818d85b89dd081dda5d1a191c985dc81e595d60521b60448201526064015b60405180910390fd5b6001546001600160a01b031633146101385760405162461bcd60e51b81526020600482015260146024820152732cb7ba9030b932b713ba103a34329037bbb732b960611b60448201526064016100de565b604080514781524260208201527fbf2ed60bd5b5965d685680c01195c9514e4382e28e3a5a2d2d5244bf59411b93910160405180910390a16001546040516001600160a01b03909116904780156108fc02916000818181858888f193505050501580156101a9573d6000803e3d6000fd5b5056fea26469706673582212203d8cdea9e2e3bedbee1b50ecfa728499f0d008df3b2b16d4c5a933ce25f3693064736f6c634300081e0033";
const isSuperArgs$d = (xs) => xs.length > 1;
class Lock__factory extends ContractFactory {
  constructor(...args) {
    if (isSuperArgs$d(args)) {
      super(...args);
    } else {
      super(_abi$t, _bytecode$d, args[0]);
    }
  }
  getDeployTransaction(_unlockTime, overrides) {
    return super.getDeployTransaction(_unlockTime, overrides || {});
  }
  deploy(_unlockTime, overrides) {
    return super.deploy(_unlockTime, overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$d;
  static abi = _abi$t;
  static createInterface() {
    return new Interface(_abi$t);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$t, runner);
  }
}

var index$B = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Lock__factory: Lock__factory
});

const _abi$s = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "int256",
        name: "current",
        type: "int256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256"
      }
    ],
    name: "AnswerUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address"
      }
    ],
    name: "NewAsset",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string"
      }
    ],
    name: "NewDescription",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "startedBy",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startedAt",
        type: "uint256"
      }
    ],
    name: "NewRound",
    type: "event"
  },
  {
    inputs: [],
    name: "asset",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "deploymentTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_roundId",
        type: "uint256"
      }
    ],
    name: "getAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "answer",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "_roundId",
        type: "uint80"
      }
    ],
    name: "getRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80"
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256"
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256"
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_roundId",
        type: "uint256"
      }
    ],
    name: "getTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256"
      }
    ],
    name: "getTimestampAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "answer",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_initOwner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_asset",
        type: "address"
      },
      {
        internalType: "string",
        name: "_description",
        type: "string"
      },
      {
        internalType: "int256",
        name: "_initAnswer",
        type: "int256"
      }
    ],
    name: "initializeFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "latestRound",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80"
      },
      {
        internalType: "int256",
        name: "",
        type: "int256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint80",
        name: "",
        type: "uint80"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "latestTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address"
      }
    ],
    name: "setAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_description",
        type: "string"
      }
    ],
    name: "setDescription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_version",
        type: "uint256"
      }
    ],
    name: "setVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "newAnswer",
        type: "int256"
      }
    ],
    name: "updateAnswer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
class IDataFeed__factory {
  static abi = _abi$s;
  static createInterface() {
    return new Interface(_abi$s);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$s, runner);
  }
}

var index$A = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IDataFeed__factory: IDataFeed__factory
});

const _abi$r = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8"
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class IERC20Exp__factory {
  static abi = _abi$r;
  static createInterface() {
    return new Interface(_abi$r);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$r, runner);
  }
}

const _abi$q = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8"
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class IERC20Mintable__factory {
  static abi = _abi$q;
  static createInterface() {
    return new Interface(_abi$q);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$q, runner);
  }
}

var index$z = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC20Exp__factory: IERC20Exp__factory,
  IERC20Mintable__factory: IERC20Mintable__factory
});

const _abi$p = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "until",
        type: "uint256"
      }
    ],
    name: "Lock",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "until",
        type: "uint256"
      }
    ],
    name: "LockedBy",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "isLocked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "until",
        type: "uint256"
      }
    ],
    name: "isLockedUntil",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "until",
        type: "uint256"
      }
    ],
    name: "lock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "until",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes"
      }
    ],
    name: "lockPermit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "lockedUntil",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8"
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class IERC20Lockable__factory {
  static abi = _abi$p;
  static createInterface() {
    return new Interface(_abi$p);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$p, runner);
  }
}

var index$y = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC20Lockable__factory: IERC20Lockable__factory
});

const _abi$o = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "Deposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "Withdraw",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "asset",
    outputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "convertToAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    name: "convertToShares",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "maxDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "maxAssets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "maxMint",
    outputs: [
      {
        internalType: "uint256",
        name: "maxShares",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "maxRedeem",
    outputs: [
      {
        internalType: "uint256",
        name: "maxShares",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "maxWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "maxAssets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    name: "previewDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "previewMint",
    outputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "previewRedeem",
    outputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    name: "previewWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "redeem",
    outputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "totalAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "totalAssets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class IERC4626__factory {
  static abi = _abi$o;
  static createInterface() {
    return new Interface(_abi$o);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$o, runner);
  }
}

var index$x = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC4626__factory: IERC4626__factory
});

const _abi$n = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "Deposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "Withdraw",
    type: "event"
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "asset",
    outputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "convertToAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    name: "convertToShares",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_masterPool",
        type: "address"
      },
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "_asset",
        type: "address"
      },
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address"
      }
    ],
    name: "initializeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "masterBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "masterMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "maxDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "maxAssets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "maxMint",
    outputs: [
      {
        internalType: "uint256",
        name: "maxShares",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "maxRedeem",
    outputs: [
      {
        internalType: "uint256",
        name: "maxShares",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "maxWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "maxAssets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8"
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    name: "previewDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "previewMint",
    outputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "previewRedeem",
    outputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    name: "previewWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "redeem",
    outputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "totalAssets",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class IERC4626Pool__factory {
  static abi = _abi$n;
  static createInterface() {
    return new Interface(_abi$n);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$n, runner);
  }
}

var index$w = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC4626Pool__factory: IERC4626Pool__factory
});

const _abi$m = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string"
      }
    ],
    name: "DescriptionChanged",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "changeProxyAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_description",
        type: "string"
      }
    ],
    name: "changeProxyDescription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_description",
        type: "string"
      },
      {
        internalType: "address",
        name: "newAdmin",
        type: "address"
      },
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "initializeProxy",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "proxyAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "proxyDescription",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
];
class IInitializableProxy__factory {
  static abi = _abi$m;
  static createInterface() {
    return new Interface(_abi$m);
  }
  static connect(address, runner) {
    return new Contract(
      address,
      _abi$m,
      runner
    );
  }
}

var index$v = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IInitializableProxy__factory: IInitializableProxy__factory
});

const _abi$l = [
  {
    inputs: [],
    name: "WETH",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpToken",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "_allocPoint",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "_startTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_endTime",
        type: "uint64"
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool"
      }
    ],
    name: "add",
    outputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "uint64",
        name: "_deadline",
        type: "uint64"
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes"
      }
    ],
    name: "depositPermit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "uint64",
        name: "_fromTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_toTime",
        type: "uint64"
      }
    ],
    name: "getMultiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "uint64",
        name: "_fromTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_toTime",
        type: "uint64"
      }
    ],
    name: "getPoolRewardsByTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      }
    ],
    name: "getPoolRewardsPerSec",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      }
    ],
    name: "getRewardsPerShare",
    outputs: [
      {
        internalType: "uint256",
        name: "rewardPerShare",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpToken",
        type: "address"
      }
    ],
    name: "hasPool",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_WETH",
        type: "address"
      },
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address"
      },
      {
        internalType: "address",
        name: "_rewardVault",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_rewardsPerSec",
        type: "uint256"
      },
      {
        internalType: "uint64",
        name: "_startTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_endTime",
        type: "uint64"
      },
      {
        internalType: "bool",
        name: "addPool",
        type: "bool"
      }
    ],
    name: "initializeChef",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "_user",
        type: "address"
      }
    ],
    name: "pendingRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "pendingReward",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address"
      }
    ],
    name: "poolId",
    outputs: [
      {
        internalType: "uint16",
        name: "pid",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "pid",
        type: "uint16"
      }
    ],
    name: "poolInfo",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "lpToken",
            type: "address"
          },
          {
            internalType: "uint32",
            name: "allocPoint",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "startTime",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "endTime",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "lastRewardTime",
            type: "uint64"
          },
          {
            internalType: "uint256",
            name: "accRewardsPerShare",
            type: "uint256"
          }
        ],
        internalType: "struct IMasterChef.PoolInfo",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "poolLength",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardVault",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardsPerSec",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "uint32",
        name: "_allocPoint",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "_startTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_endTime",
        type: "uint64"
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool"
      }
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rewardPerSec",
        type: "uint256"
      }
    ],
    name: "setRewardsPerSec",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "totalAllocPoint",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      }
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "pid",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "userInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "rewardDebt",
            type: "uint256"
          }
        ],
        internalType: "struct IMasterChef.UserInfo",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class IMasterChef__factory {
  static abi = _abi$l;
  static createInterface() {
    return new Interface(_abi$l);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$l, runner);
  }
}

var index$u = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IMasterChef__factory: IMasterChef__factory
});

const _abi$k = [
  {
    inputs: [],
    name: "WETH",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpToken",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "_allocPoint",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "_startTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_endTime",
        type: "uint64"
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool"
      }
    ],
    name: "add",
    outputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "uint64",
        name: "_deadline",
        type: "uint64"
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes"
      }
    ],
    name: "depositPermit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "uint64",
        name: "_fromTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_toTime",
        type: "uint64"
      }
    ],
    name: "getMultiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "uint64",
        name: "_fromTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_toTime",
        type: "uint64"
      }
    ],
    name: "getPoolRewardsByTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      }
    ],
    name: "getPoolRewardsPerSec",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      }
    ],
    name: "getRewardsPerShare",
    outputs: [
      {
        internalType: "uint256",
        name: "rewardPerShare",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "halvingInterval",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "halvingRate",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpToken",
        type: "address"
      }
    ],
    name: "hasPool",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolToken",
        type: "address"
      }
    ],
    name: "hasPoolToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_WETH",
        type: "address"
      },
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address"
      },
      {
        internalType: "address",
        name: "_rewardVault",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_rewardsPerSec",
        type: "uint256"
      },
      {
        internalType: "uint64",
        name: "_startTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_endTime",
        type: "uint64"
      },
      {
        internalType: "bool",
        name: "addPool",
        type: "bool"
      }
    ],
    name: "initializeChef",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_WETH",
        type: "address"
      },
      {
        internalType: "address",
        name: "_poolTokenImplementation",
        type: "address"
      },
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address"
      },
      {
        internalType: "address",
        name: "_rewardVault",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_rewardsPerSec",
        type: "uint256"
      },
      {
        internalType: "uint16",
        name: "_halvingRate",
        type: "uint16"
      },
      {
        internalType: "uint64",
        name: "_halvingInterval",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_startTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_endTime",
        type: "uint64"
      },
      {
        internalType: "bool",
        name: "addPool",
        type: "bool"
      }
    ],
    name: "initializePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "_user",
        type: "address"
      }
    ],
    name: "pendingRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "pendingReward",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "poolDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address"
      }
    ],
    name: "poolId",
    outputs: [
      {
        internalType: "uint16",
        name: "pid",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      }
    ],
    name: "poolIdByTokens",
    outputs: [
      {
        internalType: "uint16",
        name: "pid",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "pid",
        type: "uint16"
      }
    ],
    name: "poolInfo",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "lpToken",
            type: "address"
          },
          {
            internalType: "uint32",
            name: "allocPoint",
            type: "uint32"
          },
          {
            internalType: "uint64",
            name: "startTime",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "endTime",
            type: "uint64"
          },
          {
            internalType: "uint64",
            name: "lastRewardTime",
            type: "uint64"
          },
          {
            internalType: "uint256",
            name: "accRewardsPerShare",
            type: "uint256"
          }
        ],
        internalType: "struct IMasterChef.PoolInfo",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "poolLength",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      }
    ],
    name: "poolMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "poolTokenImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "pid",
        type: "uint16"
      }
    ],
    name: "poolTokens",
    outputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "poolTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "poolWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardVault",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardsPerSec",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "uint32",
        name: "_allocPoint",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "_startTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_endTime",
        type: "uint64"
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool"
      }
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_halvingInterval",
        type: "uint64"
      }
    ],
    name: "setHalvingInterval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_halvingRate",
        type: "uint16"
      }
    ],
    name: "setHalvingRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rewardPerSec",
        type: "uint256"
      }
    ],
    name: "setRewardsPerSec",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "totalAllocPoint",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      }
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "pid",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "userInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "rewardDebt",
            type: "uint256"
          }
        ],
        internalType: "struct IMasterChef.UserInfo",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class IMasterPool__factory {
  static abi = _abi$k;
  static createInterface() {
    return new Interface(_abi$k);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$k, runner);
  }
}

var index$t = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IMasterPool__factory: IMasterPool__factory
});

const _abi$j = [
  {
    inputs: [],
    name: "rewardPerSec",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "sendTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class IRewardVault__factory {
  static abi = _abi$j;
  static createInterface() {
    return new Interface(_abi$j);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$j, runner);
  }
}

var index$s = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IRewardVault__factory: IRewardVault__factory
});

const _abi$i = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "allPairs",
    outputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "allPairsLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address"
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address"
      }
    ],
    name: "createPair",
    outputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "feeTo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "feeToSetter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address"
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address"
      }
    ],
    name: "getPair",
    outputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "setFeeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "setFeeToSetter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class IUniswapV2Factory__factory {
  static abi = _abi$i;
  static createInterface() {
    return new Interface(_abi$i);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$i, runner);
  }
}

var index$r = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IUniswapV2Factory__factory: IUniswapV2Factory__factory
});

const _abi$h = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MINIMUM_LIQUIDITY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "burn",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint112",
        name: "reserve0",
        type: "uint112"
      },
      {
        internalType: "uint112",
        name: "reserve1",
        type: "uint112"
      },
      {
        internalType: "uint32",
        name: "blockTimestampLast",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "kLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8"
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "price0CumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "price1CumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "skim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "sync",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "token0",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class IUniswapV2Pair__factory {
  static abi = _abi$h;
  static createInterface() {
    return new Interface(_abi$h);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$h, runner);
  }
}

var index$q = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IUniswapV2Pair__factory: IUniswapV2Pair__factory
});

const _abi$g = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "int256",
        name: "current",
        type: "int256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256"
      }
    ],
    name: "AnswerUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address"
      }
    ],
    name: "NewAsset",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string"
      }
    ],
    name: "NewDescription",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "startedBy",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startedAt",
        type: "uint256"
      }
    ],
    name: "NewRound",
    type: "event"
  },
  {
    inputs: [],
    name: "USD",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "V2Price",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "WETH",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "asset",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "deploymentTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "ethUsdPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_roundId",
        type: "uint256"
      }
    ],
    name: "getAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "answer",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pair",
        type: "address"
      }
    ],
    name: "getLPTVL",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pair",
        type: "address"
      }
    ],
    name: "getLPUSD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "baseToken",
        type: "address"
      }
    ],
    name: "getPairByToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "_roundId",
        type: "uint80"
      }
    ],
    name: "getRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80"
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256"
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256"
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_roundId",
        type: "uint256"
      }
    ],
    name: "getTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256"
      }
    ],
    name: "getTimestampAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "answer",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "baseToken",
        type: "address"
      }
    ],
    name: "getTokenUSD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_initOwner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_asset",
        type: "address"
      },
      {
        internalType: "string",
        name: "_description",
        type: "string"
      },
      {
        internalType: "int256",
        name: "_initAnswer",
        type: "int256"
      }
    ],
    name: "initializeFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address"
      },
      {
        internalType: "address",
        name: "_feedImplementation",
        type: "address"
      },
      {
        internalType: "address",
        name: "_swapFactory",
        type: "address"
      },
      {
        internalType: "address",
        name: "_WETH",
        type: "address"
      },
      {
        internalType: "address",
        name: "_USD",
        type: "address"
      }
    ],
    name: "initializeSwapFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "latestRound",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80"
      },
      {
        internalType: "int256",
        name: "",
        type: "int256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint80",
        name: "",
        type: "uint80"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "latestTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address"
      }
    ],
    name: "setAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_description",
        type: "string"
      }
    ],
    name: "setDescription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_version",
        type: "uint256"
      }
    ],
    name: "setVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "swapFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "newAnswer",
        type: "int256"
      }
    ],
    name: "updateAnswer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "wethUsdPair",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
class IV2SwapFeed__factory {
  static abi = _abi$g;
  static createInterface() {
    return new Interface(_abi$g);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$g, runner);
  }
}

var index$p = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IV2SwapFeed__factory: IV2SwapFeed__factory
});

const _abi$f = [
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class IWETH__factory {
  static abi = _abi$f;
  static createInterface() {
    return new Interface(_abi$f);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$f, runner);
  }
}

var index$o = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IWETH__factory: IWETH__factory
});

var index$n = /*#__PURE__*/Object.freeze({
  __proto__: null,
  iDataFeedSol: index$A,
  iInitializableProxySol: index$v,
  iMasterChefSol: index$u,
  iMasterPoolSol: index$t,
  iRewardVaultSol: index$s,
  iUniswapV2FactorySol: index$r,
  iUniswapV2PairSol: index$q,
  ierc20LockableSol: index$y,
  ierc20Sol: index$z,
  ierc4626PoolSol: index$w,
  ierc4626Sol: index$x,
  iv2SwapFeedSol: index$p,
  iwethSol: index$o
});

const _abi$e = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "OwnableInvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class Ownable__factory {
  static abi = _abi$e;
  static createInterface() {
    return new Interface(_abi$e);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$e, runner);
  }
}

var index$m = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Ownable__factory: Ownable__factory
});

const _abi$d = [
  {
    inputs: [],
    name: "InvalidSignatureLength",
    type: "error"
  }
];
const _bytecode$c = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212204a8f521d45387c29cc190f1f9bab640054369d191aa1bf51fc8185209052a57264736f6c634300081e0033";
const isSuperArgs$c = (xs) => xs.length > 1;
class SigLib__factory extends ContractFactory {
  constructor(...args) {
    if (isSuperArgs$c(args)) {
      super(...args);
    } else {
      super(_abi$d, _bytecode$c, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$c;
  static abi = _abi$d;
  static createInterface() {
    return new Interface(_abi$d);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$d, runner);
  }
}

var index$l = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SigLib__factory: SigLib__factory
});

const _abi$c = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "OwnableInvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newSettler",
        type: "address"
      }
    ],
    name: "AddSettler",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldSettler",
        type: "address"
      }
    ],
    name: "RemoveSettler",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_settler",
        type: "address"
      }
    ],
    name: "addSettler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_initOwner",
        type: "address"
      }
    ],
    name: "initializeSettler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_settler",
        type: "address"
      }
    ],
    name: "removeSettler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "settlers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
const _bytecode$b = "0x6080604052348015600f57600080fd5b506016601a565b60ca565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff161560695760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b039081161460c75780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b610882806100d96000396000f3fe608060405234801561001057600080fd5b506004361061007c5760003560e01c8063715018a61161005b578063715018a6146100bc5780638da5cb5b146100c4578063b1da41fe14610103578063f2fde38b1461011857600080fd5b8062b105e61461008157806314d3940d14610096578063329bad17146100a9575b600080fd5b61009461008f36600461078a565b61012b565b005b6100946100a436600461078a565b6101cd565b6100946100b736600461078a565b610266565b6100946103bc565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546040516001600160a01b0390911681526020015b60405180910390f35b61010b6103d0565b6040516100fa91906107b3565b61009461012636600461078a565b6103e1565b61013361041f565b61013e600082610495565b6101815760405162461bcd60e51b815260206004820152600f60248201526e24a72b20a624a22fa9a2aa2a2622a960891b60448201526064015b60405180910390fd5b61018c6000826104bc565b506040516001600160a01b03821681527fc75b24622d5a8552bcfe775a11d9009ac47d4c050a3af79686aebe33f902fc03906020015b60405180910390a150565b6101d561041f565b6101e0600082610495565b156102215760405162461bcd60e51b8152602060048201526011602482015270222aa82624a1a0aa22afa9a2aa2a2622a960791b6044820152606401610178565b61022c6000826104d1565b506040516001600160a01b03821681527f0e8d4de8d62b8ad5b1837a4a13009121b82a40e3bdcd6e6f454a72418cc86b0e906020016101c2565b60006102706104e6565b805490915060ff600160401b820416159067ffffffffffffffff166000811580156102985750825b905060008267ffffffffffffffff1660011480156102b55750303b155b9050811580156102c3575080155b156102e15760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561030b57845460ff60401b1916600160401b1785555b6001600160a01b03861661031d573395505b6103268661050f565b6103316000876104d1565b506040516001600160a01b03871681527f0e8d4de8d62b8ad5b1837a4a13009121b82a40e3bdcd6e6f454a72418cc86b0e9060200160405180910390a183156103b457845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b6103c461041f565b6103ce6000610520565b565b60606103dc6000610591565b905090565b6103e961041f565b6001600160a01b03811661041357604051631e4fbdf760e01b815260006004820152602401610178565b61041c81610520565b50565b60006104527f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b90506001600160a01b0381161580159061047557506001600160a01b0381163314155b1561041c5760405163118cdaa760e01b8152336004820152602401610178565b6001600160a01b038116600090815260018301602052604081205415155b90505b92915050565b60006104b3836001600160a01b0384166105a5565b60006104b3836001600160a01b038416610698565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a006104b6565b6105176106e7565b61041c8161070c565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b6060600061059e83610714565b9392505050565b6000818152600183016020526040812054801561068e5760006105c96001836107ff565b85549091506000906105dd906001906107ff565b90508082146106425760008660000182815481106105fd576105fd610820565b906000526020600020015490508087600001848154811061062057610620610820565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061065357610653610836565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506104b6565b60009150506104b6565b60008181526001830160205260408120546106df575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556104b6565b5060006104b6565b6106ef610770565b6103ce57604051631afcd79f60e31b815260040160405180910390fd5b6103e96106e7565b60608160000180548060200260200160405190810160405280929190818152602001828054801561076457602002820191906000526020600020905b815481526020019060010190808311610750575b50505050509050919050565b600061077a6104e6565b54600160401b900460ff16919050565b60006020828403121561079c57600080fd5b81356001600160a01b038116811461059e57600080fd5b602080825282518282018190526000918401906040840190835b818110156107f45783516001600160a01b03168352602093840193909201916001016107cd565b509095945050505050565b818103818111156104b657634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea2646970667358221220953a7966112654b42a0f2562818ae16c2aee887f199ce28d7d977a8b8d23453264736f6c634300081e0033";
const isSuperArgs$b = (xs) => xs.length > 1;
class WithSettler__factory extends ContractFactory {
  constructor(...args) {
    if (isSuperArgs$b(args)) {
      super(...args);
    } else {
      super(_abi$c, _bytecode$b, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$b;
  static abi = _abi$c;
  static createInterface() {
    return new Interface(_abi$c);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$c, runner);
  }
}

var index$k = /*#__PURE__*/Object.freeze({
  __proto__: null,
  WithSettler__factory: WithSettler__factory
});

var index$j = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ownableSol: index$m,
  sigLibSol: index$l,
  withSettlerSol: index$k
});

const _abi$b = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "OwnableInvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newSettler",
        type: "address"
      }
    ],
    name: "AddSettler",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "int256",
        name: "current",
        type: "int256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256"
      }
    ],
    name: "AnswerUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address"
      }
    ],
    name: "NewAsset",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string"
      }
    ],
    name: "NewDescription",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "startedBy",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startedAt",
        type: "uint256"
      }
    ],
    name: "NewRound",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldSettler",
        type: "address"
      }
    ],
    name: "RemoveSettler",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_settler",
        type: "address"
      }
    ],
    name: "addSettler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "asset",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "deploymentTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "getAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "_roundId",
        type: "uint80"
      }
    ],
    name: "getRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80"
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256"
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256"
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "getTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "getTimestampAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_initOwner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_asset",
        type: "address"
      },
      {
        internalType: "string",
        name: "_description",
        type: "string"
      },
      {
        internalType: "int256",
        name: "_initAnswer",
        type: "int256"
      }
    ],
    name: "initializeFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_initOwner",
        type: "address"
      }
    ],
    name: "initializeSettler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "latestRound",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80"
      },
      {
        internalType: "int256",
        name: "",
        type: "int256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint80",
        name: "",
        type: "uint80"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "latestTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_settler",
        type: "address"
      }
    ],
    name: "removeSettler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address"
      }
    ],
    name: "setAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_description",
        type: "string"
      }
    ],
    name: "setDescription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_version",
        type: "uint256"
      }
    ],
    name: "setVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "settlers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "newAnswer",
        type: "int256"
      }
    ],
    name: "updateAnswer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
const _bytecode$a = "0x60806040526006600455348015601457600080fd5b50601b601f565b60cf565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff1615606e5760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b039081161460cc5780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b6111d5806100de6000396000f3fe608060405234801561001057600080fd5b50600436106101725760003560e01c80637dbaadf6116100de578063b1da41fe11610097578063bfc12c0511610071578063bfc12c0514610383578063d0d552dd1461038c578063f2fde38b1461039f578063feaf968c146103b257600080fd5b8063b1da41fe1461032e578063b5ab58dc14610343578063b633620c1461036357600080fd5b80637dbaadf6146102755780638205bf6a146102885780638da5cb5b1461029157806390c3f38f146102c15780639a6fc8f5146102d4578063a87a20ce1461031b57600080fd5b8063408def1e11610130578063408def1e1461022a57806350d25bcd1461023d57806354fd4d5014610246578063668a0f021461024f578063715018a6146102585780637284e4161461026057600080fd5b8062b105e61461017757806314d3940d1461018c578063313ce5671461019f578063329bad17146101be57806338d52e0f146101d15780633b2235fc146101fc575b600080fd5b61018a610185366004610db0565b6103ba565b005b61018a61019a366004610db0565b61045c565b6101a7600881565b60405160ff90911681526020015b60405180910390f35b61018a6101cc366004610db0565b6104f5565b6002546101e4906001600160a01b031681565b6040516001600160a01b0390911681526020016101b5565b61021c61020a366004610dcb565b600b6020526000908152604090205481565b6040519081526020016101b5565b61018a610238366004610dcb565b61064b565b61021c60065481565b61021c60045481565b61021c60085481565b61018a610658565b61026861066c565b6040516101b59190610de4565b61018a610283366004610ed7565b6106fa565b61021c60075481565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b03166101e4565b61018a6102cf366004610f3d565b610736565b6102e76102e2366004610f7a565b61077a565b604080516001600160501b03968716815260208101959095528401929092526060830152909116608082015260a0016101b5565b61018a610329366004610dcb565b6107f8565b61033661088e565b6040516101b59190610fa3565b61021c610351366004610dcb565b60096020526000908152604090205481565b61021c610371366004610dcb565b600a6020526000908152604090205481565b61021c60055481565b61018a61039a366004610db0565b61089f565b61018a6103ad366004610db0565b6108f1565b6102e761092f565b6103c2610953565b6103cd6000826109c9565b6104105760405162461bcd60e51b815260206004820152600f60248201526e24a72b20a624a22fa9a2aa2a2622a960891b60448201526064015b60405180910390fd5b61041b6000826109f0565b506040516001600160a01b03821681527fc75b24622d5a8552bcfe775a11d9009ac47d4c050a3af79686aebe33f902fc03906020015b60405180910390a150565b610464610953565b61046f6000826109c9565b156104b05760405162461bcd60e51b8152602060048201526011602482015270222aa82624a1a0aa22afa9a2aa2a2622a960791b6044820152606401610407565b6104bb600082610a05565b506040516001600160a01b03821681527f0e8d4de8d62b8ad5b1837a4a13009121b82a40e3bdcd6e6f454a72418cc86b0e90602001610451565b60006104ff610a1a565b805490915060ff600160401b820416159067ffffffffffffffff166000811580156105275750825b905060008267ffffffffffffffff1660011480156105445750303b155b905081158015610552575080155b156105705760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561059a57845460ff60401b1916600160401b1785555b6001600160a01b0386166105ac573395505b6105b586610a43565b6105c0600087610a05565b506040516001600160a01b03871681527f0e8d4de8d62b8ad5b1837a4a13009121b82a40e3bdcd6e6f454a72418cc86b0e9060200160405180910390a1831561064357845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b610653610953565b600455565b610660610953565b61066a6000610a54565b565b6003805461067990610fef565b80601f01602080910402602001604051908101604052809291908181526020018280546106a590610fef565b80156106f25780601f106106c7576101008083540402835291602001916106f2565b820191906000526020600020905b8154815290600101906020018083116106d557829003601f168201915b505050505081565b42600555600660045561070c8361089f565b61071582610736565b80156107275761072781600042610ac5565b610730846104f5565b50505050565b61073e610953565b600361074a8282611078565b507f16fbb51445345dabaa215e5f99a4bd4d8ba9818b508c76d5cd0ea30abcc491c6816040516104519190610de4565b6001600160501b0381166000818152600960205260408120548392909190819081906107a8576005546107d0565b600a60006107c060016001600160501b038a1661114d565b8152602001908152602001600020545b6001600160501b0387166000908152600a602052604090205495979496909594909350915050565b6108036000336109c9565b8061081557506108136000610b91565b155b61084f5760405162461bcd60e51b815260206004820152600b60248201526a2727aa2fa9a2aa2a2622a960a91b6044820152606401610407565b60006008546000141580610864575060065415155b61086f57600061087d565b60085461087d906001611160565b905061088a828242610ac5565b5050565b606061089a6000610b9b565b905090565b6108a7610953565b600280546001600160a01b0319166001600160a01b0383169081179091556040517fc7d9598af6004de7fa9c489a50a55414c75cfbce9fe56fe46956970744d6bc2c90600090a250565b6108f9610953565b6001600160a01b03811661092357604051631e4fbdf760e01b815260006004820152602401610407565b61092c81610a54565b50565b600080600080600061094260085461077a565b945094509450945094509091929394565b60006109867f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b90506001600160a01b038116158015906109a957506001600160a01b0381163314155b1561092c5760405163118cdaa760e01b8152336004820152602401610407565b6001600160a01b038116600090815260018301602052604081205415155b90505b92915050565b60006109e7836001600160a01b038416610baf565b60006109e7836001600160a01b038416610ca2565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a006109ea565b610a4b610cf1565b61092c81610d16565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b8060075410610ad357505050565b6006839055600781905560088290556000828152600a6020908152604080832080546009845282852088905590859055848452600b909252909120849055151580610b5057604051828152339084907f0109fc6f55cf40689f02fbaad7af7fe7bbac8a3d2186600afc7d3e10cac602719060200160405180910390a35b82847f0559884fd3a460db3073b7fc896cc77986f16e378210ded43186175bf646fc5f84604051610b8391815260200190565b60405180910390a350505050565b60006109ea825490565b60606000610ba883610d1e565b9392505050565b60008181526001830160205260408120548015610c98576000610bd360018361114d565b8554909150600090610be79060019061114d565b9050808214610c4c576000866000018281548110610c0757610c07611173565b9060005260206000200154905080876000018481548110610c2a57610c2a611173565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080610c5d57610c5d611189565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506109ea565b60009150506109ea565b6000818152600183016020526040812054610ce9575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556109ea565b5060006109ea565b610cf9610d7a565b61066a57604051631afcd79f60e31b815260040160405180910390fd5b6108f9610cf1565b606081600001805480602002602001604051908101604052809291908181526020018280548015610d6e57602002820191906000526020600020905b815481526020019060010190808311610d5a575b50505050509050919050565b6000610d84610a1a565b54600160401b900460ff16919050565b80356001600160a01b0381168114610dab57600080fd5b919050565b600060208284031215610dc257600080fd5b6109e782610d94565b600060208284031215610ddd57600080fd5b5035919050565b602081526000825180602084015260005b81811015610e125760208186018101516040868401015201610df5565b506000604082850101526040601f19601f83011684010191505092915050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610e5957600080fd5b813567ffffffffffffffff811115610e7357610e73610e32565b604051601f8201601f19908116603f0116810167ffffffffffffffff81118282101715610ea257610ea2610e32565b604052818152838201602001851015610eba57600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060808587031215610eed57600080fd5b610ef685610d94565b9350610f0460208601610d94565b9250604085013567ffffffffffffffff811115610f2057600080fd5b610f2c87828801610e48565b949793965093946060013593505050565b600060208284031215610f4f57600080fd5b813567ffffffffffffffff811115610f6657600080fd5b610f7284828501610e48565b949350505050565b600060208284031215610f8c57600080fd5b81356001600160501b0381168114610ba857600080fd5b602080825282518282018190526000918401906040840190835b81811015610fe45783516001600160a01b0316835260209384019390920191600101610fbd565b509095945050505050565b600181811c9082168061100357607f821691505b60208210810361102357634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561107357806000526020600020601f840160051c810160208510156110505750805b601f840160051c820191505b81811015611070576000815560010161105c565b50505b505050565b815167ffffffffffffffff81111561109257611092610e32565b6110a6816110a08454610fef565b84611029565b6020601f8211600181146110da57600083156110c25750848201515b600019600385901b1c1916600184901b178455611070565b600084815260208120601f198516915b8281101561110a57878501518255602094850194600190920191016110ea565b50848210156111285786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b818103818111156109ea576109ea611137565b808201808211156109ea576109ea611137565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea264697066735822122021c71eafd4a23b1f4d3ef5c4ed5ad696a914a99818d57a2d9bb9efe6a6aefb3c64736f6c634300081e0033";
const isSuperArgs$a = (xs) => xs.length > 1;
class DataFeed__factory extends ContractFactory {
  constructor(...args) {
    if (isSuperArgs$a(args)) {
      super(...args);
    } else {
      super(_abi$b, _bytecode$a, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$a;
  static abi = _abi$b;
  static createInterface() {
    return new Interface(_abi$b);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$b, runner);
  }
}

var index$i = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DataFeed__factory: DataFeed__factory
});

const _abi$a = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "int256",
        name: "current",
        type: "int256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256"
      }
    ],
    name: "AnswerUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address"
      }
    ],
    name: "NewAsset",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string"
      }
    ],
    name: "NewDescription",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "startedBy",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startedAt",
        type: "uint256"
      }
    ],
    name: "NewRound",
    type: "event"
  },
  {
    inputs: [],
    name: "USD",
    outputs: [
      {
        internalType: "contract IERC20Exp",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "V2Price",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "WETH",
    outputs: [
      {
        internalType: "contract IERC20Exp",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "asset",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "deploymentTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "ethUsdPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "feedImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IUniswapV2Pair",
        name: "_pair",
        type: "address"
      }
    ],
    name: "getLPTVL",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IUniswapV2Pair",
        name: "_pair",
        type: "address"
      }
    ],
    name: "getLPUSD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "baseToken",
        type: "address"
      }
    ],
    name: "getPairByToken",
    outputs: [
      {
        internalType: "contract IUniswapV2Pair",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "baseToken",
        type: "address"
      }
    ],
    name: "getTokenUSD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address"
      },
      {
        internalType: "address",
        name: "_feedImplementation",
        type: "address"
      },
      {
        internalType: "address",
        name: "_swapFactory",
        type: "address"
      },
      {
        internalType: "address",
        name: "_WETH",
        type: "address"
      },
      {
        internalType: "address",
        name: "_USD",
        type: "address"
      }
    ],
    name: "initializeSwapFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "latestRound",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "latestTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "swapFactory",
    outputs: [
      {
        internalType: "contract IUniswapV2Factory",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "wethUsdPair",
    outputs: [
      {
        internalType: "contract IUniswapV2Pair",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
const _bytecode$9 = "0x60a06040526008608052600660025534801561001a57600080fd5b50610023610028565b6100da565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff16156100785760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b03908116146100d75780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b6080516119e061010a6000396000818161018f01528181610a2501528181610cf50152610d5201526119e06000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806363e16a82116100ad5780638205bf6a116100715780638205bf6a146102765780639478ab8c1461027c578063ad5c464814610284578063bfc12c0514610297578063d4d3e9a5146102a057600080fd5b806363e16a8214610220578063668a0f02146102355780636c3721ed1461023b5780637284e4161461024e5780637944f9441461026357600080fd5b806338d52e0f116100f457806338d52e0f146101d657806338e9781b146101e957806350d25bcd146101fc57806352ef619b1461020457806354fd4d501461021757600080fd5b8063178bc56e146101315780631bf6c21b14610161578063287bd79e14610174578063313ce5671461018a578063320eb93c146101c3575b600080fd5b600454610144906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b600854610144906001600160a01b031681565b61017c6102b3565b604051908152602001610158565b6101b17f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610158565b61017c6101d136600461138c565b6102fc565b600054610144906001600160a01b031681565b61017c6101f736600461138c565b610316565b61017c6103d3565b600654610144906001600160a01b031681565b61017c60025481565b61023361022e3660046113b0565b6103dd565b005b4361017c565b61014461024936600461138c565b61072c565b610256610990565b6040516101589190611445565b600554610144906001600160a01b031681565b4261017c565b61017c610a1e565b600754610144906001600160a01b031681565b61017c60035481565b61017c6102ae36600461138c565b610a7c565b600080546102c9906001600160a01b0316610b6a565b6102e7576000546102e2906001600160a01b03166102fc565b905090565b6000546102e2906001600160a01b0316610a7c565b600061031061030a8361072c565b83610c41565b92915050565b60008061032283610dea565b905060006103308483610e8f565b50915050816001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610372573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103969190611478565b6103a190600a611598565b816103ac8685610c41565b6103b691906115a7565b6103c19060026115a7565b6103cb91906115be565b949350505050565b60006102e26102b3565b60006103e7610f49565b805490915060ff600160401b820416159067ffffffffffffffff1660008115801561040f5750825b905060008267ffffffffffffffff16600114801561042c5750303b155b90508115801561043a575080155b156104585760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561048257845460ff60401b1916600160401b1785555b600080546001600160a01b0319166001600160a01b038c169081178255604080516395d89b4160e01b81529051610592936395d89b4192600480820193918290030181865afa1580156104d9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261050191908101906115f6565b604080518082018252600381526201017960ed1b602082015260085482516395d89b4160e01b8152925161058d936001600160a01b03909216916395d89b419160048083019260009291908290030181865afa158015610565573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261058d91908101906115f6565b610f72565b60019061059f9082611734565b50600660025542600355600480546001600160a01b038b81166001600160a01b0319928316178355600580548c831693168317905560405163e6a4390560e01b81528a821693810193909352881660248301529063e6a4390590604401602060405180830381865afa158015610619573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063d91906117f3565b600680546001600160a01b03199081166001600160a01b03938416179091556007805482168a841617905560088054909116888316179055604051908b16907fc7d9598af6004de7fa9c489a50a55414c75cfbce9fe56fe46956970744d6bc2c90600090a27f16fbb51445345dabaa215e5f99a4bd4d8ba9818b508c76d5cd0ea30abcc491c660016040516106d29190611810565b60405180910390a1831561072057845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050505050565b60055460085460405163e6a4390560e01b81526001600160a01b03848116600483015291821660248201526000928392169063e6a4390590604401602060405180830381865afa158015610784573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a891906117f3565b60055460075460405163e6a4390560e01b81526001600160a01b038781166004830152918216602482015292935060009291169063e6a4390590604401602060405180830381865afa158015610802573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061082691906117f3565b905060006001600160a01b03831661083f5760006108a9565b6040516370a0823160e01b81526001600160a01b0384811660048301528616906370a0823190602401602060405180830381865afa158015610885573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a9919061189c565b905060006001600160a01b0383166108c257600061092c565b6040516370a0823160e01b81526001600160a01b0384811660048301528716906370a0823190602401602060405180830381865afa158015610908573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092c919061189c565b90508115801561093a575080155b156109765760405162461bcd60e51b81526020600482015260076024820152662727afa820a4a960c91b60448201526064015b60405180910390fd5b808210156109845782610986565b835b9695505050505050565b6001805461099d906116ab565b80601f01602080910402602001604051908101604052809291908181526020018280546109c9906116ab565b8015610a165780601f106109eb57610100808354040283529160200191610a16565b820191906000526020600020905b8154815290600101906020018083116109f957829003601f168201915b505050505081565b6000610a4b7f000000000000000000000000000000000000000000000000000000000000000060126118b5565b610a5690600a611598565b600654600754610a72916001600160a01b039081169116610f9e565b6102e291906115be565b6000816001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610abc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae0919061189c565b826001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b429190611478565b610b4d90600a611598565b610b5684610316565b610b6091906115a7565b61031091906115be565b60408051600481526024810182526020810180516001600160e01b031663c45a015560e01b1790529051600091829182916001600160a01b0386169161c35091610bb3916118ce565b6000604051808303818686fa925050503d8060008114610bef576040519150601f19603f3d011682016040523d82523d6000602084013e610bf4565b606091505b5091509150811580610c0557508051155b15610c14575060009392505050565b80806020019051810190610c2891906117f3565b6005546001600160a01b03908116911614949350505050565b6000806000610c4f8561125c565b90925090506001600160a01b03848116908316148080610c805750816001600160a01b0316856001600160a01b0316145b610cc15760405162461bcd60e51b815260206004820152601260248201527124a72b20a624a22fa820a4a92faa27a5a2a760711b604482015260640161096d565b6000610cce86858561132c565b6008546007549192506001600160a01b0380841691811682149216148115610d4757610d1b7f000000000000000000000000000000000000000000000000000000000000000060126118b5565b610d2690600a611598565b610d308a8a610f9e565b610d3a91906115be565b9650505050505050610310565b8015610db357610d787f000000000000000000000000000000000000000000000000000000000000000060246118b5565b610d8390600a611598565b600654600754610d9f916001600160a01b039081169116610f9e565b610da98b8b610f9e565b610d3091906115a7565b60405162461bcd60e51b815260206004820152600c60248201526b24a72b20a624a22fa820a4a960a11b604482015260640161096d565b6000806000610df88461125c565b6008549193509150610e14906001600160a01b0316838361132c565b92506001600160a01b038316610e3e57600754610e3b906001600160a01b0316838361132c565b92505b6001600160a01b038316610e885760405162461bcd60e51b8152602060048201526011602482015270494e56414c49445f504149525f4241534560781b604482015260640161096d565b5050919050565b600080600080610e9e8661125c565b509050600080876001600160a01b0316630902f1ac6040518163ffffffff1660e01b8152600401606060405180830381865afa158015610ee2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f069190611906565b5090925090506001600160a01b038781169084161480610f2857808284610f2c565b8083835b919b6001600160701b039182169b50911698509650505050505050565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00610310565b60608282604051602001610f87929190611956565b604051602081830303815290604052905092915050565b6000806000610fac8561125c565b915091506000806000610fbf8888610e8f565b9250925092508280610fe25750836001600160a01b0316876001600160a01b0316145b6110235760405162461bcd60e51b815260206004820152601260248201527124a72b20a624a22fa820a4a92faa27a5a2a760711b604482015260640161096d565b811580159061103157508015155b61106c5760405162461bcd60e51b815260206004820152600c60248201526b4e4f5f4c495155494449545960a01b604482015260640161096d565b60008361115157856001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110d59190611478565b856001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611113573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111379190611478565b611142906012611985565b61114c91906118b5565b61122a565b846001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561118f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111b39190611478565b866001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156111f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112159190611478565b611220906012611985565b61122a91906118b5565b60ff1690508261123b82600a61199e565b61124590846115a7565b61124f91906115be565b9998505050505050505050565b600080826001600160a01b0316630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa15801561129d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c191906117f3565b836001600160a01b031663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa1580156112ff573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061132391906117f3565b91509150915091565b6000826001600160a01b0316846001600160a01b03161461136d57816001600160a01b0316846001600160a01b0316146113675760006103cb565b826103cb565b5092915050565b6001600160a01b038116811461138957600080fd5b50565b60006020828403121561139e57600080fd5b81356113a981611374565b9392505050565b600080600080600060a086880312156113c857600080fd5b85356113d381611374565b945060208601356113e381611374565b935060408601356113f381611374565b9250606086013561140381611374565b9150608086013561141381611374565b809150509295509295909350565b60005b8381101561143c578181015183820152602001611424565b50506000910152565b6020815260008251806020840152611464816040850160208701611421565b601f01601f19169190910160400192915050565b60006020828403121561148a57600080fd5b815160ff811681146113a957600080fd5b634e487b7160e01b600052601160045260246000fd5b6001815b60018411156114ec578085048111156114d0576114d061149b565b60018416156114de57908102905b60019390931c9280026114b5565b935093915050565b60008261150357506001610310565b8161151057506000610310565b816001811461152657600281146115305761154c565b6001915050610310565b60ff8411156115415761154161149b565b50506001821b610310565b5060208310610133831016604e8410600b841016171561156f575081810a610310565b61157c60001984846114b1565b80600019048211156115905761159061149b565b029392505050565b60006113a960ff8416836114f4565b80820281158282048414176103105761031061149b565b6000826115db57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561160857600080fd5b815167ffffffffffffffff81111561161f57600080fd5b8201601f8101841361163057600080fd5b805167ffffffffffffffff81111561164a5761164a6115e0565b604051601f8201601f19908116603f0116810167ffffffffffffffff81118282101715611679576116796115e0565b60405281815282820160200186101561169157600080fd5b6116a2826020830160208601611421565b95945050505050565b600181811c908216806116bf57607f821691505b6020821081036116df57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561172f57806000526020600020601f840160051c8101602085101561170c5750805b601f840160051c820191505b8181101561172c5760008155600101611718565b50505b505050565b815167ffffffffffffffff81111561174e5761174e6115e0565b6117628161175c84546116ab565b846116e5565b6020601f821160018114611796576000831561177e5750848201515b600019600385901b1c1916600184901b17845561172c565b600084815260208120601f198516915b828110156117c657878501518255602094850194600190920191016117a6565b50848210156117e45786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b60006020828403121561180557600080fd5b81516113a981611374565b602081526000808354611822816116ab565b8060208601526001821660008114611841576001811461185d57611891565b60ff1983166040870152604082151560051b8701019350611891565b86600052602060002060005b8381101561188857815488820160400152600190910190602001611869565b87016040019450505b509195945050505050565b6000602082840312156118ae57600080fd5b5051919050565b60ff82811682821603908111156103105761031061149b565b600082516118e0818460208701611421565b9190910192915050565b80516001600160701b038116811461190157600080fd5b919050565b60008060006060848603121561191b57600080fd5b611924846118ea565b9250611932602085016118ea565b9150604084015163ffffffff8116811461194b57600080fd5b809150509250925092565b60008351611968818460208801611421565b83519083019061197c818360208801611421565b01949350505050565b60ff81811683821601908111156103105761031061149b565b60006113a983836114f456fea264697066735822122071b984b4f34aff0edbcd4e6e2da88f4efa1e8fc998242c93c44c747217a777b164736f6c634300081e0033";
const isSuperArgs$9 = (xs) => xs.length > 1;
class V2SwapFeed__factory extends ContractFactory {
  constructor(...args) {
    if (isSuperArgs$9(args)) {
      super(...args);
    } else {
      super(_abi$a, _bytecode$9, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$9;
  static abi = _abi$a;
  static createInterface() {
    return new Interface(_abi$a);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$a, runner);
  }
}

var index$h = /*#__PURE__*/Object.freeze({
  __proto__: null,
  V2SwapFeed__factory: V2SwapFeed__factory
});

const _abi$9 = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "FailedDeployment",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "InsufficientBalance",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "OwnableInvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "denomination",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "latestAggregator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "previousAggregator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "nextPhaseId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "FeedConfirmed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "denomination",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "proposedAggregator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "currentAggregator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "FeedProposed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "feedImplementation",
        type: "address"
      }
    ],
    name: "SetFeedImplementation",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "factory",
        type: "address"
      }
    ],
    name: "SetSwapFactory",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "usd",
        type: "address"
      }
    ],
    name: "SetUSD",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "weth",
        type: "address"
      }
    ],
    name: "SetWETH",
    type: "event"
  },
  {
    inputs: [],
    name: "USD",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "WETH",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address"
      }
    ],
    name: "createFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "feedImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "feeds",
    outputs: [
      {
        internalType: "contract IV2SwapFeed",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_initOwner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_feedImplementation",
        type: "address"
      },
      {
        internalType: "address",
        name: "_swapFactory",
        type: "address"
      },
      {
        internalType: "address",
        name: "_WETH",
        type: "address"
      },
      {
        internalType: "address",
        name: "_USD",
        type: "address"
      }
    ],
    name: "initializeFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address"
      }
    ],
    name: "latestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "phaseId",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feedImplementation",
        type: "address"
      }
    ],
    name: "setFeedImplementation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_swapFactory",
        type: "address"
      }
    ],
    name: "setSwapFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_USD",
        type: "address"
      }
    ],
    name: "setUSD",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_WETH",
        type: "address"
      }
    ],
    name: "setWETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "swapFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
const _bytecode$8 = "0x6080604052348015600f57600080fd5b506016601a565b60ca565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff161560695760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b039081161460c75780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b610af1806100d96000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80636e135eec11610097578063ad5c464811610066578063ad5c46481461024c578063c34e596f1461025f578063dbc4d32d14610272578063f2fde38b1461028557600080fd5b80636e135eec146101ee578063715018a6146102015780637944f944146102095780638da5cb5b1461021c57600080fd5b80634486b1c7116100d35780634486b1c714610186578063580a560e1461019957806358303b10146101ba5780635b769f3c146101db57600080fd5b8063178bc56e146101055780631bf6c21b146101355780632c626de5146101485780632fba4aa91461015d575b600080fd5b600254610118906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b600554610118906001600160a01b031681565b61015b610156366004610a22565b610298565b005b61011861016b366004610a87565b6001602052600090815260409020546001600160a01b031681565b61015b610194366004610a87565b6103d0565b6101ac6101a7366004610a87565b61042d565b60405190815260200161012c565b6000546101c89061ffff1681565b60405161ffff909116815260200161012c565b61015b6101e9366004610a87565b6104bf565b61015b6101fc366004610a87565b610515565b61015b610715565b600354610118906001600160a01b031681565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b0316610118565b600454610118906001600160a01b031681565b61015b61026d366004610a87565b610729565b61015b610280366004610a87565b61077f565b61015b610293366004610a87565b6107d5565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a008054600160401b810460ff16159067ffffffffffffffff166000811580156102de5750825b905060008267ffffffffffffffff1660011480156102fb5750303b155b905081158015610309575080155b156103275760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561035157845460ff60401b1916600160401b1785555b61035a896103d0565b61036388610729565b61036c876104bf565b6103758661077f565b61037e8a610818565b83156103c457845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050505050565b6103d8610829565b600280546001600160a01b0319166001600160a01b0383169081179091556040519081527fce025e89252f6ab5a030250b37df78e66a1d92854226981373dff41586821a6d906020015b60405180910390a150565b6001600160a01b03808216600090815260016020526040812054909116806104565760006104b8565b806001600160a01b03166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610494573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b89190610aa2565b9392505050565b6104c7610829565b600480546001600160a01b0319166001600160a01b0383169081179091556040519081527fe390bcec6614d6b1f8ae47a4d9d46531ce328e3d293ecd6ddd015cb01eff030090602001610422565b61051d610829565b6001600160a01b0381811660009081526001602090815260408083205460025460035460045460055494516bffffffffffffffffffffffff1960608b811b82169883019890985284881b8116603483015292871b8316604882015290861b8216605c8201529390941b90931660708301528416936105b59216906084016040516020818303038152906040528051906020012061089f565b600254600354600480546005546040516331f0b54160e11b81526001600160a01b038a81169482019490945294831660248601529282166044850152811660648401529081166084830152919250908216906363e16a829060a401600060405180830381600087803b15801561062a57600080fd5b505af115801561063e573d6000803e3d6000fd5b505050506001600160a01b0383811660008181526001602090815260409182902080546001600160a01b0319168686169081179091558251948716855233918501919091529261034892917fb56c4f88c3e344891ef92e51f036d7116e886f4ea57f5ba93e28b5f44925b9ce910160405180910390a4600054604080516001600160a01b03858116825261ffff9093166020820152338183015290518383169261034892908716917f27a180c70f2642f63d1694eb252b7df52e7ab2565e3f67adf7748acb7d82b9bc9181900360600190a4505050565b61071d610829565b61072760006108ad565b565b610731610829565b600380546001600160a01b0319166001600160a01b0383169081179091556040519081527f07925669a65c6cfe24a7577e4b501bf561d0ffe36d8d6707802d2d17e596076790602001610422565b610787610829565b600580546001600160a01b0319166001600160a01b0383169081179091556040519081527f0760150a180a9ab0096f89d108362c0cf356435a5f98f4359e45dd152761dccc90602001610422565b6107dd610829565b6001600160a01b03811661080c57604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b610815816108ad565b50565b61082061091e565b61081581610967565b600061085c7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b90506001600160a01b0381161580159061087f57506001600160a01b0381163314155b156108155760405163118cdaa760e01b8152336004820152602401610803565b60006104b88383600061096f565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0054600160401b900460ff1661072757604051631afcd79f60e31b815260040160405180910390fd5b6107dd61091e565b60008147101561099b5760405163cf47918160e01b815247600482015260248101839052604401610803565b763d602d80600a3d3981f3363d3d373d3d3d363d730000008460601b60e81c176000526e5af43d82803e903d91602b57fd5bf38460781b17602052826037600984f590506001600160a01b0381166104b85760405163b06ebf3d60e01b815260040160405180910390fd5b80356001600160a01b0381168114610a1d57600080fd5b919050565b600080600080600060a08688031215610a3a57600080fd5b610a4386610a06565b9450610a5160208701610a06565b9350610a5f60408701610a06565b9250610a6d60608701610a06565b9150610a7b60808701610a06565b90509295509295909350565b600060208284031215610a9957600080fd5b6104b882610a06565b600060208284031215610ab457600080fd5b505191905056fea264697066735822122040aa9a704eaca31ee2e3a3e08bf016627e2c9f9acea2e95aad80f58f782db9b264736f6c634300081e0033";
const isSuperArgs$8 = (xs) => xs.length > 1;
class V2SwapFeedFactory__factory extends ContractFactory {
  constructor(...args) {
    if (isSuperArgs$8(args)) {
      super(...args);
    } else {
      super(_abi$9, _bytecode$8, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$8;
  static abi = _abi$9;
  static createInterface() {
    return new Interface(_abi$9);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$9, runner);
  }
}

var index$g = /*#__PURE__*/Object.freeze({
  __proto__: null,
  V2SwapFeedFactory__factory: V2SwapFeedFactory__factory
});

var index$f = /*#__PURE__*/Object.freeze({
  __proto__: null,
  dataFeedSol: index$i,
  v2SwapFeedFactorySol: index$g,
  v2SwapFeedSol: index$h
});

const _abi$8 = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidSignatureLength",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "OwnableInvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error"
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      }
    ],
    name: "SafeERC20FailedOperation",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint16",
        name: "pid",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Deposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "WETH",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "rewardToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "rewardVault",
        type: "address"
      }
    ],
    name: "InitializedChef",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint16",
        name: "pid",
        type: "uint16"
      },
      {
        indexed: true,
        internalType: "address",
        name: "lpToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "newAllocPoint",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "startTime",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "endTime",
        type: "uint64"
      }
    ],
    name: "SetPool",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardsPerSec",
        type: "uint256"
      }
    ],
    name: "SetRewards",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint16",
        name: "pid",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Withdraw",
    type: "event"
  },
  {
    inputs: [],
    name: "WETH",
    outputs: [
      {
        internalType: "contract IWETH",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpToken",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "_allocPoint",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "_startTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_endTime",
        type: "uint64"
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool"
      }
    ],
    name: "add",
    outputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "uint64",
        name: "_deadline",
        type: "uint64"
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes"
      }
    ],
    name: "depositPermit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "uint64",
        name: "_fromTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_toTime",
        type: "uint64"
      }
    ],
    name: "getMultiplier",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "uint64",
        name: "_fromTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_toTime",
        type: "uint64"
      }
    ],
    name: "getPoolRewardsByTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      }
    ],
    name: "getPoolRewardsPerSec",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      }
    ],
    name: "getRewardsPerShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpToken",
        type: "address"
      }
    ],
    name: "hasPool",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_WETH",
        type: "address"
      },
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address"
      },
      {
        internalType: "address",
        name: "_rewardVault",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_rewardsPerSec",
        type: "uint256"
      },
      {
        internalType: "uint64",
        name: "_startTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_endTime",
        type: "uint64"
      },
      {
        internalType: "bool",
        name: "addPool",
        type: "bool"
      }
    ],
    name: "initializeChef",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "_user",
        type: "address"
      }
    ],
    name: "pendingRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "poolId",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "lpToken",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "allocPoint",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "startTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "endTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "lastRewardTime",
        type: "uint64"
      },
      {
        internalType: "uint256",
        name: "accRewardsPerShare",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "poolLength",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [
      {
        internalType: "contract IERC20Mintable",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardVault",
    outputs: [
      {
        internalType: "contract IRewardVault",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardsPerSec",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "uint32",
        name: "_allocPoint",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "_startTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_endTime",
        type: "uint64"
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool"
      }
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rewardsPerSec",
        type: "uint256"
      }
    ],
    name: "setRewardsPerSec",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "totalAllocPoint",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      }
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
];
const _bytecode$7 = "0x6080604052348015600f57600080fd5b506016601a565b60ca565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff161560695760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b039081161460c75780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b6120ae806100d96000396000f3fe60806040526004361061019f5760003560e01c80638da5cb5b116100ec578063e907d8c01161008a578063f64ba28b11610064578063f64ba28b146105b8578063f7c618c1146105d8578063fc7e4227146105f8578063ff51a2721461061857600080fd5b8063e907d8c014610524578063efaf059714610544578063f2fde38b1461059857600080fd5b8063ad5c4648116100c6578063ad5c4648146104a4578063b072797e146104c4578063cf2770d6146104e4578063d024fe7b1461050457600080fd5b80638da5cb5b146104275780638ef3d24d14610464578063a373e68d1461048457600080fd5b80633a2c677711610159578063630b5ba111610133578063630b5ba1146103b2578063715018a6146103c7578063859fe6c7146103dc5780638ae74894146103ef57600080fd5b80633a2c67771461033a5780633d9120331461037257806361249d861461039257600080fd5b8062893452146102005780630407539914610229578063081e3eda146102495780631246dbf51461026d5780631526fe271461029d57806317caf6f11461030857600080fd5b366101fb576000546001600160a01b031633036101b857005b6000546101cd906001600160a01b0316610649565b156101f957600080546001600160a01b03168152600460205260409020546101f99061ffff16346106bb565b005b600080fd5b34801561020c57600080fd5b5061021660035481565b6040519081526020015b60405180910390f35b34801561023557600080fd5b506101f9610244366004611bd1565b61073b565b34801561025557600080fd5b506005545b60405161ffff9091168152602001610220565b34801561027957600080fd5b5061028d610288366004611c06565b610649565b6040519015158152602001610220565b3480156102a957600080fd5b506102bd6102b8366004611bd1565b61077e565b604080516001600160a01b03909716875263ffffffff90951660208701526001600160401b0393841694860194909452908216606085015216608083015260a082015260c001610220565b34801561031457600080fd5b506007546103259063ffffffff1681565b60405163ffffffff9091168152602001610220565b34801561034657600080fd5b5060025461035a906001600160a01b031681565b6040516001600160a01b039091168152602001610220565b34801561037e57600080fd5b506101f961038d366004611c33565b6107e9565b34801561039e57600080fd5b506102166103ad366004611c5d565b610831565b3480156103be57600080fd5b506101f9610848565b3480156103d357600080fd5b506101f9610873565b6101f96103ea366004611c33565b6106bb565b3480156103fb57600080fd5b5061040f61040a366004611c8f565b610887565b6040516001600160401b039091168152602001610220565b34801561043357600080fd5b507f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031661035a565b34801561047057600080fd5b506101f961047f366004611ce8565b61096b565b34801561049057600080fd5b5061021661049f366004611c8f565b610a47565b3480156104b057600080fd5b5060005461035a906001600160a01b031681565b3480156104d057600080fd5b506101f96104df366004611dd9565b610ae5565b3480156104f057600080fd5b506101f96104ff366004611c5d565b610c97565b34801561051057600080fd5b506101f961051f366004611e7d565b610cfc565b34801561053057600080fd5b5061021661053f366004611ee2565b610f1b565b34801561055057600080fd5b5061058361055f366004611ee2565b60066020908152600092835260408084209091529082529020805460019091015482565b60408051928352602083019190915201610220565b3480156105a457600080fd5b506101f96105b3366004611c06565b610f7e565b3480156105c457600080fd5b506102166105d3366004611c5d565b610fbc565b3480156105e457600080fd5b5060015461035a906001600160a01b031681565b34801561060457600080fd5b5061025a610613366004611f15565b6110fd565b34801561062457600080fd5b5061025a610633366004611c06565b60046020526000908152604090205461ffff1681565b6001600160a01b03811660009081526004602052604081205461ffff161515806106b5575060055460011480156106b55750816001600160a01b0316600560008154811061069957610699611f36565b60009182526020909120600390910201546001600160a01b0316145b92915050565b6106c3611363565b60055461ffff8316106106f15760405162461bcd60e51b81526004016106e890611f4c565b60405180910390fd5b6106fb82336113ad565b801561070e5761070c823383611546565b505b61073760017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b5050565b6107436117b4565b60038190556040518181527f403d953100676c530ee357c0fe9f352dc6c18bd4e8594c49d2107ecbad6a6f099060200160405180910390a150565b6005818154811061078e57600080fd5b60009182526020909120600390910201805460018201546002909201546001600160a01b038216935063ffffffff600160a01b830416926001600160401b03600160c01b90930483169281811692600160401b909204169086565b6107f1611363565b60055461ffff8316106108165760405162461bcd60e51b81526004016106e890611f4c565b61082082336113ad565b801561070e5761070c82338361182a565b60006106b582610842600142611f88565b42610a47565b60055460005b818161ffff1610156107375761086381610c97565b61086c81611f9b565b905061084e565b61087b6117b4565b61088560006118f2565b565b6000816001600160401b0316836001600160401b0316106108aa57506000610964565b600060058561ffff16815481106108c3576108c3611f36565b600091825260208220600390910201805460018201549193506001600160401b03600160c01b9091048116929181169190871683106109025782610904565b865b90506000826001600160401b0316876001600160401b0316106109275782610929565b865b9050806001600160401b0316826001600160401b03161061095257600095505050505050610964565b61095c8282611fbc565b955050505050505b9392505050565b600080600061097984611963565b92509250925060058761ffff168154811061099657610996611f36565b600091825260209091206003909102015460405163d505accf60e01b8152336004820152306024820152604481018890526001600160401b038716606482015260ff8516608482015260a4810184905260c481018390526001600160a01b039091169063d505accf9060e401600060405180830381600087803b158015610a1c57600080fd5b505af1158015610a30573d6000803e3d6000fd5b50505050610a3e87876106bb565b50505050505050565b60075460009063ffffffff168103610a6157506000610964565b600060058561ffff1681548110610a7a57610a7a611f36565b6000918252602090912060075460039283029091018054925490935063ffffffff91821692600160a01b900490911690610ab5888888610887565b6001600160401b0316610ac89190611fdb565b610ad29190611fdb565b610adc9190611ff2565b95945050505050565b6000610aef6119ad565b805490915060ff600160401b82041615906001600160401b0316600081158015610b165750825b90506000826001600160401b03166001148015610b325750303b155b905081158015610b40575080155b15610b5e5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff191660011785558315610b8857845460ff60401b1916600160401b1785555b610b906119d6565b600080546001600160a01b03808f166001600160a01b031992831617909255600180548e841690831617905560028054928d1692909116919091179055610bd68961073b565b8515610bee57610bec8b6103e88a8a60006110fd565b505b610bf78d6119e6565b604080516001600160a01b038e811682528d811660208301528c168183015290517fe86209b390e8076baf4c4a616512319eb81d91e8b1f8ca206e88c5ff1c264e149181900360600190a18315610c8857845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050505050505050565b600060058261ffff1681548110610cb057610cb0611f36565b90600052602060002090600302019050610cc982610fbc565b600282015560010180546fffffffffffffffff00000000000000001916600160401b426001600160401b03160217905550565b610d046117b4565b60055461ffff861610610d295760405162461bcd60e51b81526004016106e890611f4c565b8015610d3757610d37610848565b8360058661ffff1681548110610d4f57610d4f611f36565b6000918252602090912060039091020154600754610d7d9163ffffffff600160a01b90910481169116612014565b610d879190612030565b600760006101000a81548163ffffffff021916908363ffffffff1602179055508360058661ffff1681548110610dbf57610dbf611f36565b906000526020600020906003020160000160146101000a81548163ffffffff021916908363ffffffff1602179055508260058661ffff1681548110610e0657610e06611f36565b906000526020600020906003020160000160186101000a8154816001600160401b0302191690836001600160401b031602179055508160058661ffff1681548110610e5357610e53611f36565b906000526020600020906003020160010160006101000a8154816001600160401b0302191690836001600160401b0316021790555060058561ffff1681548110610e9f57610e9f611f36565b6000918252602091829020600390910201546040805163ffffffff881681526001600160401b0380881694820194909452928516908301526001600160a01b03169061ffff8716907f8d79088268352e1a4ae18346d3aa40ff9d49bb8ec82b846a0bc32d12a7e477e39060600160405180910390a35050505050565b61ffff821660009081526006602090815260408083206001600160a01b03851684529091528120600181015464e8d4a51000610f5686610fbc565b8354610f629190611fdb565b610f6c9190611ff2565b610f769190611f88565b949350505050565b610f866117b4565b6001600160a01b038116610fb057604051631e4fbdf760e01b8152600060048201526024016106e8565b610fb9816118f2565b50565b60008060058361ffff1681548110610fd657610fd6611f36565b600091825260208083206040805160c08101825260039490940290910180546001600160a01b038116808652600160a01b820463ffffffff1694860194909452600160c01b90046001600160401b039081168584015260018201548082166060870152600160401b90041660808501526002015460a0840181905290516370a0823160e01b815230600482015292945092916370a0823190602401602060405180830381865afa15801561108e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b2919061204c565b905080156110f55760006110cb86856080015142610a47565b9050816110dd8264e8d4a51000611fdb565b6110e79190611ff2565b6110f19084612065565b9250505b509392505050565b60006111076117b4565b61111086610649565b1561114f5760405162461bcd60e51b815260206004820152600f60248201526e111d5c1b1a58d85d195908141bdbdb608a1b60448201526064016106e8565b811561115d5761115d610848565b506005546007805486919060009061117c90849063ffffffff16612030565b825463ffffffff9182166101009390930a9283029282021916919091179091556001600160a01b038089166000818152600460209081526040808320805461ffff8a1661ffff199091168117909155815160c0810183528581528d88169381019384526001600160401b03808e168285019081528d8216606084019081526080840188815260a08501898152600580546001810182559a52945160039099027f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db081018054995194518616600160c01b026001600160c01b0395909e16600160a01b026001600160c01b0319909a169a909c169990991797909717919091169990991790975596517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db18501805494518816600160401b026fffffffffffffffffffffffffffffffff1990951691909716179290921790945593517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db29091015590519092507f8d79088268352e1a4ae18346d3aa40ff9d49bb8ec82b846a0bc32d12a7e477e3906113529089908990899063ffffffff9390931683526001600160401b03918216602084015216604082015260600190565b60405180910390a395945050505050565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f008054600119016113a757604051633ee5aeb560e01b815260040160405180910390fd5b60029055565b600060058361ffff16815481106113c6576113c6611f36565b6000918252602080832061ffff871684526006825260408085206001600160a01b038816865290925292206003909102909101915061140484610c97565b805415611536576000816001015464e8d4a510008460020154846000015461142c9190611fdb565b6114369190611ff2565b6114409190611f88565b90508015611534576002546001600160a01b03166114c3576001546040516340c10f1960e01b81526001600160a01b03868116600483015260248201849052909116906340c10f1990604401600060405180830381600087803b1580156114a657600080fd5b505af11580156114ba573d6000803e3d6000fd5b50505050611534565b60025460015460405163ae63932960e01b81526001600160a01b03918216600482015286821660248201526044810184905291169063ae63932990606401600060405180830381600087803b15801561151b57600080fd5b505af115801561152f573d6000803e3d6000fd5b505050505b505b61154084846119f7565b50505050565b60008060058561ffff168154811061156057611560611f36565b6000918252602080832061ffff891684526006825260408085206001600160a01b03808b1687529352842093546003909302018054909450811691161480156115a857508334145b156116195760008054906101000a90046001600160a01b03166001600160a01b031663d0e30db0856040518263ffffffff1660e01b81526004016000604051808303818588803b1580156115fb57600080fd5b505af115801561160f573d6000803e3d6000fd5b5050505050611718565b81546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015611661573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611685919061204c565b835490915061169f906001600160a01b0316873088611a74565b82546040516370a0823160e01b815230600482015282916001600160a01b0316906370a0823190602401602060405180830381865afa1580156116e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061170a919061204c565b6117149190611f88565b9450505b8381600001600082825461172c9190612065565b9091555061173c905086866119f7565b8561ffff16856001600160a01b03167f2c00706df3fbb4a8ead830d4c0a7f278823843af15ad7e680c4f7db763dd779c8660405161177c91815260200190565b60405180910390a35091949350505050565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b60006117e77f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b90506001600160a01b0381161580159061180a57506001600160a01b0381163314155b15610fb95760405163118cdaa760e01b81523360048201526024016106e8565b60008060058561ffff168154811061184457611844611f36565b6000918252602080832061ffff891684526006825260408085206001600160a01b038a16865290925290832080546003909302909101935091859183919061188d908490611f88565b909155505081546118a8906001600160a01b03168686611adb565b6118b286866119f7565b8561ffff16856001600160a01b03167f4e2ebfe79f50514ade8e774c7f3c01250d6aa3a91cd1f5c33a78df9c459f6e9d8660405161177c91815260200190565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b6000806000835160410361198d5750505060208101516040820151606083015160001a91906119a6565b604051634be6321b60e01b815260040160405180910390fd5b9193909250565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a006106b5565b6119de611b11565b610885611b36565b6119ee611b11565b610fb981611b3e565b600060058361ffff1681548110611a1057611a10611f36565b6000918252602080832061ffff871684526006825260408085206001600160a01b038816865290925292206002600390920290920190810154825491935064e8d4a5100091611a5f9190611fdb565b611a699190611ff2565b600190910155505050565b6040516001600160a01b0384811660248301528381166044830152606482018390526115409186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050611b46565b6040516001600160a01b03838116602483015260448201839052611b0c91859182169063a9059cbb90606401611aa9565b505050565b611b19611bb7565b61088557604051631afcd79f60e31b815260040160405180910390fd5b61178e611b11565b610f86611b11565b600080602060008451602086016000885af180611b69576040513d6000823e3d81fd5b50506000513d91508115611b81578060011415611b8e565b6001600160a01b0384163b155b1561154057604051635274afe760e01b81526001600160a01b03851660048201526024016106e8565b6000611bc16119ad565b54600160401b900460ff16919050565b600060208284031215611be357600080fd5b5035919050565b80356001600160a01b0381168114611c0157600080fd5b919050565b600060208284031215611c1857600080fd5b61096482611bea565b803561ffff81168114611c0157600080fd5b60008060408385031215611c4657600080fd5b611c4f83611c21565b946020939093013593505050565b600060208284031215611c6f57600080fd5b61096482611c21565b80356001600160401b0381168114611c0157600080fd5b600080600060608486031215611ca457600080fd5b611cad84611c21565b9250611cbb60208501611c78565b9150611cc960408501611c78565b90509250925092565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215611cfe57600080fd5b611d0785611c21565b935060208501359250611d1c60408601611c78565b915060608501356001600160401b03811115611d3757600080fd5b8501601f81018713611d4857600080fd5b80356001600160401b03811115611d6157611d61611cd2565b604051601f8201601f19908116603f011681016001600160401b0381118282101715611d8f57611d8f611cd2565b604052818152828201602001891015611da757600080fd5b8160208401602083013760006020838301015280935050505092959194509250565b80358015158114611c0157600080fd5b600080600080600080600080610100898b031215611df657600080fd5b611dff89611bea565b9750611e0d60208a01611bea565b9650611e1b60408a01611bea565b9550611e2960608a01611bea565b945060808901359350611e3e60a08a01611c78565b9250611e4c60c08a01611c78565b9150611e5a60e08a01611dc9565b90509295985092959890939650565b803563ffffffff81168114611c0157600080fd5b600080600080600060a08688031215611e9557600080fd5b611e9e86611c21565b9450611eac60208701611e69565b9350611eba60408701611c78565b9250611ec860608701611c78565b9150611ed660808701611dc9565b90509295509295909350565b60008060408385031215611ef557600080fd5b611efe83611c21565b9150611f0c60208401611bea565b90509250929050565b600080600080600060a08688031215611f2d57600080fd5b611e9e86611bea565b634e487b7160e01b600052603260045260246000fd5b6020808252600c908201526b125b9d985b1a5908141bdbdb60a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b818103818111156106b5576106b5611f72565b600061ffff821661ffff8103611fb357611fb3611f72565b60010192915050565b6001600160401b0382811682821603908111156106b5576106b5611f72565b80820281158282048414176106b5576106b5611f72565b60008261200f57634e487b7160e01b600052601260045260246000fd5b500490565b63ffffffff82811682821603908111156106b5576106b5611f72565b63ffffffff81811683821601908111156106b5576106b5611f72565b60006020828403121561205e57600080fd5b5051919050565b808201808211156106b5576106b5611f7256fea2646970667358221220da4e20fb93ce3a5df779378a2fd09a5ae0601ac1f20bbc269bda5c7389908bf064736f6c634300081e0033";
const isSuperArgs$7 = (xs) => xs.length > 1;
class MasterChef__factory extends ContractFactory {
  constructor(...args) {
    if (isSuperArgs$7(args)) {
      super(...args);
    } else {
      super(_abi$8, _bytecode$7, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$7;
  static abi = _abi$8;
  static createInterface() {
    return new Interface(_abi$8);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$8, runner);
  }
}

var index$e = /*#__PURE__*/Object.freeze({
  __proto__: null,
  MasterChef__factory: MasterChef__factory
});

const _abi$7 = [
  {
    inputs: [],
    name: "FailedDeployment",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "InsufficientBalance",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidSignatureLength",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "OwnableInvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error"
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      }
    ],
    name: "SafeERC20FailedOperation",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint16",
        name: "pid",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Deposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "WETH",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "rewardToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "rewardVault",
        type: "address"
      }
    ],
    name: "InitializedChef",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "halvingInterval",
        type: "uint64"
      }
    ],
    name: "SetHalvingInterval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "halvingRate",
        type: "uint16"
      }
    ],
    name: "SetHalvingRate",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint16",
        name: "pid",
        type: "uint16"
      },
      {
        indexed: true,
        internalType: "address",
        name: "lpToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "newAllocPoint",
        type: "uint32"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "startTime",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "endTime",
        type: "uint64"
      }
    ],
    name: "SetPool",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint16",
        name: "pid",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "address",
        name: "poolToken",
        type: "address"
      }
    ],
    name: "SetPoolToken",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardsPerSec",
        type: "uint256"
      }
    ],
    name: "SetRewards",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint16",
        name: "pid",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Withdraw",
    type: "event"
  },
  {
    inputs: [],
    name: "WETH",
    outputs: [
      {
        internalType: "contract IWETH",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpToken",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "_allocPoint",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "_startTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_endTime",
        type: "uint64"
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool"
      }
    ],
    name: "add",
    outputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "uint64",
        name: "_deadline",
        type: "uint64"
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes"
      }
    ],
    name: "depositPermit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "uint64",
        name: "_fromTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_toTime",
        type: "uint64"
      }
    ],
    name: "getMultiplier",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "uint64",
        name: "_fromTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_toTime",
        type: "uint64"
      }
    ],
    name: "getPoolRewardsByTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      }
    ],
    name: "getPoolRewardsPerSec",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      }
    ],
    name: "getRewardsPerShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "halvingInterval",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "halvingRate",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lpToken",
        type: "address"
      }
    ],
    name: "hasPool",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolToken",
        type: "address"
      }
    ],
    name: "hasPoolToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_WETH",
        type: "address"
      },
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address"
      },
      {
        internalType: "address",
        name: "_rewardVault",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_rewardsPerSec",
        type: "uint256"
      },
      {
        internalType: "uint64",
        name: "_startTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_endTime",
        type: "uint64"
      },
      {
        internalType: "bool",
        name: "addPool",
        type: "bool"
      }
    ],
    name: "initializeChef",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_WETH",
        type: "address"
      },
      {
        internalType: "address",
        name: "_poolTokenImplementation",
        type: "address"
      },
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address"
      },
      {
        internalType: "address",
        name: "_rewardVault",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_rewardsPerSec",
        type: "uint256"
      },
      {
        internalType: "uint16",
        name: "_halvingRate",
        type: "uint16"
      },
      {
        internalType: "uint64",
        name: "_halvingInterval",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_startTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_endTime",
        type: "uint64"
      },
      {
        internalType: "bool",
        name: "addPool",
        type: "bool"
      }
    ],
    name: "initializePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "_user",
        type: "address"
      }
    ],
    name: "pendingRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "poolDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "poolId",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "poolIdByTokens",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "lpToken",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "allocPoint",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "startTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "endTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "lastRewardTime",
        type: "uint64"
      },
      {
        internalType: "uint256",
        name: "accRewardsPerShare",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "poolLength",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      }
    ],
    name: "poolMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "poolTokenImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "poolTokens",
    outputs: [
      {
        internalType: "contract IERC4626Pool",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "poolTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "poolWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [
      {
        internalType: "contract IERC20Mintable",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardVault",
    outputs: [
      {
        internalType: "contract IRewardVault",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardsPerSec",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "uint32",
        name: "_allocPoint",
        type: "uint32"
      },
      {
        internalType: "uint64",
        name: "_startTime",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_endTime",
        type: "uint64"
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool"
      }
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_halvingInterval",
        type: "uint64"
      }
    ],
    name: "setHalvingInterval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_halvingRate",
        type: "uint16"
      }
    ],
    name: "setHalvingRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rewardsPerSec",
        type: "uint256"
      }
    ],
    name: "setRewardsPerSec",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "totalAllocPoint",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      }
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
];
const _bytecode$6 = "0x6080604052348015600f57600080fd5b506016601a565b60ca565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff161560695760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b039081161460c75780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b612fac806100d96000396000f3fe60806040526004361061023e5760003560e01c8063859fe6c71161012e578063cf2770d6116100ab578063f2fde38b1161006f578063f2fde38b14610807578063f64ba28b14610827578063f7c618c114610847578063fc7e422714610867578063ff51a2721461088757600080fd5b8063cf2770d614610733578063d024fe7b14610753578063db2aa12714610773578063e907d8c014610793578063efaf0597146107b357600080fd5b8063a373e68d116100f2578063a373e68d14610682578063aa020654146106a2578063ad5c4648146106d3578063b072797e146106f3578063cd09525d1461071357600080fd5b8063859fe6c7146105d25780638ae74894146105e55780638af96a66146106055780638da5cb5b146106255780638ef3d24d1461066257600080fd5b80633d912033116101bc57806369ff74f11161018057806369ff74f11461051c5780636a47aa0614610544578063715018a61461058257806377ba7950146105975780637e6335f4146105b757600080fd5b80633d912033146104715780634fb4bb8c1461049157806361249d86146104b1578063630b5ba1146104d157806369eb9cdb146104e657600080fd5b806317caf6f11161020357806317caf6f1146103a7578063192e30f8146103d95780631973aa47146103f9578063364a620e146104195780633a2c67771461043957600080fd5b80628934521461029f57806304075399146102c8578063081e3eda146102e85780631246dbf51461030c5780631526fe271461033c57600080fd5b3661029a576000546001600160a01b0316330361025757005b60005461026c906001600160a01b03166108b8565b1561029857600080546001600160a01b03168152600460205260409020546102989061ffff163461092a565b005b600080fd5b3480156102ab57600080fd5b506102b560035481565b6040519081526020015b60405180910390f35b3480156102d457600080fd5b506102986102e33660046128d4565b6109aa565b3480156102f457600080fd5b506005545b60405161ffff90911681526020016102bf565b34801561031857600080fd5b5061032c610327366004612909565b6108b8565b60405190151581526020016102bf565b34801561034857600080fd5b5061035c6103573660046128d4565b6109ee565b604080516001600160a01b03909716875263ffffffff90951660208701526001600160401b0393841694860194909452908216606085015216608083015260a082015260c0016102bf565b3480156103b357600080fd5b506007546103c49063ffffffff1681565b60405163ffffffff90911681526020016102bf565b3480156103e557600080fd5b506102986103f4366004612924565b610a59565b34801561040557600080fd5b5061029861041436600461299a565b610bc3565b34801561042557600080fd5b50610298610434366004612a5f565b610c1e565b34801561044557600080fd5b50600254610459906001600160a01b031681565b6040516001600160a01b0390911681526020016102bf565b34801561047d57600080fd5b5061029861048c366004612a7a565b610c7f565b34801561049d57600080fd5b5061032c6104ac366004612909565b610cc7565b3480156104bd57600080fd5b506102b56104cc366004612aa4565b610d29565b3480156104dd57600080fd5b50610298610d40565b3480156104f257600080fd5b50610459610501366004612aa4565b6008602052600090815260409020546001600160a01b031681565b34801561052857600080fd5b506007546104599064010000000090046001600160a01b031681565b34801561055057600080fd5b50600a5461056a906201000090046001600160401b031681565b6040516001600160401b0390911681526020016102bf565b34801561058e57600080fd5b50610298610d6b565b3480156105a357600080fd5b506102986105b2366004612abf565b610d7f565b3480156105c357600080fd5b50600a546102f99061ffff1681565b6102986105e0366004612a7a565b61092a565b3480156105f157600080fd5b5061056a610600366004612adb565b610dda565b34801561061157600080fd5b50610298610620366004612aa4565b610ebe565b34801561063157600080fd5b507f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b0316610459565b34801561066e57600080fd5b5061029861067d366004612b34565b610f0a565b34801561068e57600080fd5b506102b561069d366004612adb565b610fe6565b3480156106ae57600080fd5b506102f96106bd366004612909565b60096020526000908152604090205461ffff1681565b3480156106df57600080fd5b50600054610459906001600160a01b031681565b3480156106ff57600080fd5b5061029861070e366004612c15565b61128a565b34801561071f57600080fd5b5061029861072e366004612909565b61143c565b34801561073f57600080fd5b5061029861074e366004612aa4565b6114ce565b34801561075f57600080fd5b5061029861076e366004612cb9565b611533565b34801561077f57600080fd5b5061029861078e366004612abf565b611752565b34801561079f57600080fd5b506102b56107ae366004612d1e565b6117a6565b3480156107bf57600080fd5b506107f26107ce366004612d1e565b60066020908152600092835260408084209091529082529020805460019091015482565b604080519283526020830191909152016102bf565b34801561081357600080fd5b50610298610822366004612909565b611809565b34801561083357600080fd5b506102b5610842366004612aa4565b611847565b34801561085357600080fd5b50600154610459906001600160a01b031681565b34801561087357600080fd5b506102f9610882366004612d51565b611988565b34801561089357600080fd5b506102f96108a2366004612909565b60046020526000908152604090205461ffff1681565b6001600160a01b03811660009081526004602052604081205461ffff16151580610924575060055460011480156109245750816001600160a01b0316600560008154811061090857610908612d72565b60009182526020909120600390910201546001600160a01b0316145b92915050565b610932611afa565b60055461ffff8316106109605760405162461bcd60e51b815260040161095790612d88565b60405180910390fd5b61096a8233611b44565b801561097d5761097b823383611cd7565b505b6109a660017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b5050565b6109b2611d8f565b60038190556040518181527f403d953100676c530ee357c0fe9f352dc6c18bd4e8594c49d2107ecbad6a6f09906020015b60405180910390a150565b600581815481106109fe57600080fd5b60009182526020909120600390910201805460018201546002909201546001600160a01b038216935063ffffffff600160a01b830416926001600160401b03600160c01b90930483169281811692600160401b909204169086565b610a6233610cc7565b610a7e5760405162461bcd60e51b815260040161095790612dae565b3360009081526009602090815260408083205461ffff16808452600683528184206001600160a01b03888116808752919094528285209387168552919093209015801590610acd575081548411155b15610b3f5783826000016000828254610ae69190612de6565b90915550610af690508387611e05565b8261ffff16866001600160a01b03167f4e2ebfe79f50514ade8e774c7f3c01250d6aa3a91cd1f5c33a78df9c459f6e9d86604051610b3691815260200190565b60405180910390a35b6001600160a01b03851615610bbb5783816000016000828254610b629190612df9565b90915550610b7290508386611e05565b8261ffff16856001600160a01b03167f2c00706df3fbb4a8ead830d4c0a7f278823843af15ad7e680c4f7db763dd779c86604051610bb291815260200190565b60405180910390a35b505050505050565b610bcc85610ebe565b610bd584610c1e565b610be58b8b8a8a8a88888861128a565b5050600780546001600160a01b0390981664010000000002640100000000600160c01b0319909816979097179096555050505050505050565b610c26611d8f565b600a805469ffffffffffffffff00001916620100006001600160401b038416908102919091179091556040519081527fb392a7f1d54c25770aab00ccc58fb2c88bc54b543e8371b4673a7c9e0f2651ab906020016109e3565b610c87611afa565b60055461ffff831610610cac5760405162461bcd60e51b815260040161095790612d88565b610cb68233611b44565b801561097d5761097b823383611e82565b6001600160a01b03811660009081526009602052604081205461ffff161515806109245750506000805260086020527f5eff886ea0ce6ca488a3d6e336d6c0f75f46d19b42c06ce5ee98e42c96d256c7546001600160a01b0391821691161490565b600061092482610d3a600142612de6565b42610fe6565b60055460005b818161ffff1610156109a657610d5b816114ce565b610d6481612e0c565b9050610d46565b610d73611d8f565b610d7d6000611edd565b565b610d8833610cc7565b610da45760405162461bcd60e51b815260040161095790612dae565b3360009081526009602052604090205461ffff16610dc28184611b44565b8115610dd557610dd3818484611cd7565b505b505050565b6000816001600160401b0316836001600160401b031610610dfd57506000610eb7565b600060058561ffff1681548110610e1657610e16612d72565b600091825260208220600390910201805460018201549193506001600160401b03600160c01b909104811692918116919087168310610e555782610e57565b865b90506000826001600160401b0316876001600160401b031610610e7a5782610e7c565b865b9050806001600160401b0316826001600160401b031610610ea557600095505050505050610eb7565b610eaf8282612e2d565b955050505050505b9392505050565b610ec6611d8f565b600a805461ffff191661ffff83169081179091556040519081527f6c8d6880a607b5400f9b0ad0718c6c3c499da1d676ddfc670abbae188543112c906020016109e3565b6000806000610f1884611f4e565b92509250925060058761ffff1681548110610f3557610f35612d72565b600091825260209091206003909102015460405163d505accf60e01b8152336004820152306024820152604481018890526001600160401b038716606482015260ff8516608482015260a4810184905260c481018390526001600160a01b039091169063d505accf9060e401600060405180830381600087803b158015610fbb57600080fd5b505af1158015610fcf573d6000803e3d6000fd5b50505050610fdd878761092a565b50505050505050565b6000816001600160401b0316836001600160401b031610158061100f575060075463ffffffff16155b1561101c57506000610eb7565b600060058561ffff168154811061103557611035612d72565b600091825260208220600390910201805460018201549193506001600160401b03600160c01b9091048116929181169190871683106110745782611076565b865b90506000826001600160401b0316876001600160401b031610611099578261109b565b865b9050806001600160401b0316826001600160401b0316106110c457600095505050505050610eb7565b600a546201000090046001600160401b031660000361113757600754855460035463ffffffff92831692600160a01b909204909116906111048585612e2d565b6001600160401b03166111179190612e4c565b6111219190612e4c565b61112b9190612e79565b95505050505050610eb7565b600354600a5460009190849083906201000090046001600160401b031661115e8984612e2d565b6111689190612e8d565b90505b846001600160401b0316826001600160401b031610801561118b57508215155b1561124f57600a546000906201000090046001600160401b03166111b0836001612ebb565b6111ba9190612eda565b6111c4908a612ebb565b90506000816001600160401b0316876001600160401b0316106111e757816111e9565b865b9050846111f68583612e2d565b6001600160401b03166112099190612e4c565b6112139087612df9565b600a54909650909350839060649061122f9061ffff1687612e4c565b6112399190612e79565b94508261124581612f03565b935050505061116b565b600754895463ffffffff9182169161126f91600160a01b90041686612e4c565b6112799190612e79565b9d9c50505050505050505050505050565b6000611294611f98565b805490915060ff600160401b82041615906001600160401b03166000811580156112bb5750825b90506000826001600160401b031660011480156112d75750303b155b9050811580156112e5575080155b156113035760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561132d57845460ff60401b1916600160401b1785555b611335611fc1565b600080546001600160a01b03808f166001600160a01b031992831617909255600180548e841690831617905560028054928d169290911691909117905561137b896109aa565b8515611393576113918b6103e88a8a6000611988565b505b61139c8d611fd1565b604080516001600160a01b038e811682528d811660208301528c168183015290517fe86209b390e8076baf4c4a616512319eb81d91e8b1f8ca206e88c5ff1c264e149181900360600190a1831561142d57845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050505050505050565b61144533610cc7565b6114615760405162461bcd60e51b815260040161095790612dae565b336000908152600960205260409020546001546005805461ffff909316926001600160a01b03909216918390811061149b5761149b612d72565b60009182526020909120600390910201546001600160a01b0316146114c4576109a68183611b44565b6109a68183611fe2565b600060058261ffff16815481106114e7576114e7612d72565b9060005260206000209060030201905061150082611847565b600282015560010180546fffffffffffffffff00000000000000001916600160401b426001600160401b03160217905550565b61153b611d8f565b60055461ffff8616106115605760405162461bcd60e51b815260040161095790612d88565b801561156e5761156e610d40565b8360058661ffff168154811061158657611586612d72565b60009182526020909120600390910201546007546115b49163ffffffff600160a01b90910481169116612f25565b6115be9190612f41565b600760006101000a81548163ffffffff021916908363ffffffff1602179055508360058661ffff16815481106115f6576115f6612d72565b906000526020600020906003020160000160146101000a81548163ffffffff021916908363ffffffff1602179055508260058661ffff168154811061163d5761163d612d72565b906000526020600020906003020160000160186101000a8154816001600160401b0302191690836001600160401b031602179055508160058661ffff168154811061168a5761168a612d72565b906000526020600020906003020160010160006101000a8154816001600160401b0302191690836001600160401b0316021790555060058561ffff16815481106116d6576116d6612d72565b6000918252602091829020600390910201546040805163ffffffff881681526001600160401b0380881694820194909452928516908301526001600160a01b03169061ffff8716907f8d79088268352e1a4ae18346d3aa40ff9d49bb8ec82b846a0bc32d12a7e477e39060600160405180910390a35050505050565b61175b33610cc7565b6117775760405162461bcd60e51b815260040161095790612dae565b3360009081526009602052604090205461ffff166117958184611b44565b8115610dd557610dd3818484611e82565b61ffff821660009081526006602090815260408083206001600160a01b03851684529091528120600181015464e8d4a510006117e186611847565b83546117ed9190612e4c565b6117f79190612e79565b6118019190612de6565b949350505050565b611811611d8f565b6001600160a01b03811661183b57604051631e4fbdf760e01b815260006004820152602401610957565b61184481611edd565b50565b60008060058361ffff168154811061186157611861612d72565b600091825260208083206040805160c08101825260039490940290910180546001600160a01b038116808652600160a01b820463ffffffff1694860194909452600160c01b90046001600160401b039081168584015260018201548082166060870152600160401b90041660808501526002015460a0840181905290516370a0823160e01b815230600482015292945092916370a0823190602401602060405180830381865afa158015611919573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061193d9190612f5d565b9050801561198057600061195686856080015142610fe6565b9050816119688264e8d4a51000612e4c565b6119729190612e79565b61197c9084612df9565b9250505b509392505050565b6000611992611d8f565b61199f8686868686612161565b600754604051606089901b6bffffffffffffffffffffffff191660208201529192506000916119f89164010000000090046001600160a01b031690603401604051602081830303815290604052805190602001206123c7565b600154604051630367f0b360e41b815230600482015261ffff851660248201526001600160a01b038a81166044830152918216606482015291925082919082169063367f0b3090608401600060405180830381600087803b158015611a5c57600080fd5b505af1158015611a70573d6000803e3d6000fd5b5050505061ffff8316600081815260086020908152604080832080546001600160a01b0319166001600160a01b038781169190911790915586168084526009835292819020805461ffff191685179055519182527ffaaf525512a973415b1e0c1013407f1249e700df4f7ef24c051bc874434d66b4910160405180910390a2505095945050505050565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00805460011901611b3e57604051633ee5aeb560e01b815260040160405180910390fd5b60029055565b600060058361ffff1681548110611b5d57611b5d612d72565b6000918252602080832061ffff871684526006825260408085206001600160a01b0388168652909252922060039091029091019150611b9b846114ce565b805415611ccd576000816001015464e8d4a5100084600201548460000154611bc39190612e4c565b611bcd9190612e79565b611bd79190612de6565b90508015611ccb576002546001600160a01b0316611c5a576001546040516340c10f1960e01b81526001600160a01b03868116600483015260248201849052909116906340c10f1990604401600060405180830381600087803b158015611c3d57600080fd5b505af1158015611c51573d6000803e3d6000fd5b50505050611ccb565b60025460015460405163ae63932960e01b81526001600160a01b03918216600482015286821660248201526044810184905291169063ae63932990606401600060405180830381600087803b158015611cb257600080fd5b505af1158015611cc6573d6000803e3d6000fd5b505050505b505b610dd38484611e05565b600080611ce58585856123d5565b61ffff861660009081526008602052604090819020549051631b96b2f960e01b81526001600160a01b03878116600483015260248201849052929350911690631b96b2f9906044015b600060405180830381600087803b158015611d4857600080fd5b505af1158015611d5c573d6000803e3d6000fd5b5092979650505050505050565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b6000611dc27f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b90506001600160a01b03811615801590611de557506001600160a01b0381163314155b156118445760405163118cdaa760e01b8152336004820152602401610957565b600060058361ffff1681548110611e1e57611e1e612d72565b6000918252602080832061ffff871684526006825260408085206001600160a01b038816865290925292206002600390920290920190810154825491935064e8d4a5100091611e6d9190612e4c565b611e779190612e79565b600190910155505050565b600080611e9085858561261d565b61ffff861660009081526008602052604090819020549051639fc8ae6d60e01b81526001600160a01b03878116600483015260248201849052929350911690639fc8ae6d90604401611d2e565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b60008060008351604103611f785750505060208101516040820151606083015160001a9190611f91565b604051634be6321b60e01b815260040160405180910390fd5b9193909250565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00610924565b611fc96126e5565b610d7d61270a565b611fd96126e5565b61184481612712565b600060058361ffff1681548110611ffb57611ffb612d72565b6000918252602080832061ffff871684526006825260408085206001600160a01b0388168652909252922060039091029091019150612039846114ce565b805415611ccd576000816001015464e8d4a51000846002015484600001546120619190612e4c565b61206b9190612e79565b6120759190612de6565b90508015611ccb57808260000160008282546120919190612df9565b909155505061ffff851660009081526008602052604090819020549051631b96b2f960e01b81526001600160a01b0386811660048301526024820184905290911690631b96b2f990604401600060405180830381600087803b1580156120f657600080fd5b505af115801561210a573d6000803e3d6000fd5b505050508461ffff16846001600160a01b03167f2c00706df3fbb4a8ead830d4c0a7f278823843af15ad7e680c4f7db763dd779c8360405161214e91815260200190565b60405180910390a350610dd38484611e05565b600061216b611d8f565b612174866108b8565b156121b35760405162461bcd60e51b815260206004820152600f60248201526e111d5c1b1a58d85d195908141bdbdb608a1b6044820152606401610957565b81156121c1576121c1610d40565b50600554600780548691906000906121e090849063ffffffff16612f41565b825463ffffffff9182166101009390930a9283029282021916919091179091556001600160a01b038089166000818152600460209081526040808320805461ffff8a1661ffff199091168117909155815160c0810183528581528d88169381019384526001600160401b03808e168285019081528d8216606084019081526080840188815260a08501898152600580546001810182559a52945160039099027f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db081018054995194518616600160c01b026001600160c01b0395909e16600160a01b026001600160c01b0319909a169a909c169990991797909717919091169990991790975596517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db18501805494518816600160401b026fffffffffffffffffffffffffffffffff1990951691909716179290921790945593517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db29091015590519092507f8d79088268352e1a4ae18346d3aa40ff9d49bb8ec82b846a0bc32d12a7e477e3906123b69089908990899063ffffffff9390931683526001600160401b03918216602084015216604082015260600190565b60405180910390a395945050505050565b6000610eb78383600061271a565b60008060058561ffff16815481106123ef576123ef612d72565b6000918252602080832061ffff891684526006825260408085206001600160a01b03808b16875293528420935460039093020180549094508116911614801561243757508334145b156124a85760008054906101000a90046001600160a01b03166001600160a01b031663d0e30db0856040518263ffffffff1660e01b81526004016000604051808303818588803b15801561248a57600080fd5b505af115801561249e573d6000803e3d6000fd5b50505050506125a7565b81546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa1580156124f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125149190612f5d565b835490915061252e906001600160a01b03168730886127b1565b82546040516370a0823160e01b815230600482015282916001600160a01b0316906370a0823190602401602060405180830381865afa158015612575573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125999190612f5d565b6125a39190612de6565b9450505b838160000160008282546125bb9190612df9565b909155506125cb90508686611e05565b8561ffff16856001600160a01b03167f2c00706df3fbb4a8ead830d4c0a7f278823843af15ad7e680c4f7db763dd779c8660405161260b91815260200190565b60405180910390a35091949350505050565b60008060058561ffff168154811061263757612637612d72565b6000918252602080832061ffff891684526006825260408085206001600160a01b038a168652909252908320805460039093029091019350918591839190612680908490612de6565b9091555050815461269b906001600160a01b03168686612818565b6126a58686611e05565b8561ffff16856001600160a01b03167f4e2ebfe79f50514ade8e774c7f3c01250d6aa3a91cd1f5c33a78df9c459f6e9d8660405161260b91815260200190565b6126ed612849565b610d7d57604051631afcd79f60e31b815260040160405180910390fd5b611d696126e5565b6118116126e5565b6000814710156127465760405163cf47918160e01b815247600482015260248101839052604401610957565b763d602d80600a3d3981f3363d3d373d3d3d363d730000008460601b60e81c176000526e5af43d82803e903d91602b57fd5bf38460781b17602052826037600984f590506001600160a01b038116610eb75760405163b06ebf3d60e01b815260040160405180910390fd5b6040516001600160a01b038481166024830152838116604483015260648201839052610dd39186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050612863565b6040516001600160a01b03838116602483015260448201839052610dd591859182169063a9059cbb906064016127e6565b6000612853611f98565b54600160401b900460ff16919050565b600080602060008451602086016000885af180612886576040513d6000823e3d81fd5b50506000513d9150811561289e5780600114156128ab565b6001600160a01b0384163b155b15610dd357604051635274afe760e01b81526001600160a01b0385166004820152602401610957565b6000602082840312156128e657600080fd5b5035919050565b80356001600160a01b038116811461290457600080fd5b919050565b60006020828403121561291b57600080fd5b610eb7826128ed565b60008060006060848603121561293957600080fd5b612942846128ed565b9250612950602085016128ed565b929592945050506040919091013590565b803561ffff8116811461290457600080fd5b80356001600160401b038116811461290457600080fd5b8035801515811461290457600080fd5b60008060008060008060008060008060006101608c8e0312156129bc57600080fd5b6129c58c6128ed565b9a506129d360208d016128ed565b99506129e160408d016128ed565b98506129ef60608d016128ed565b97506129fd60808d016128ed565b965060a08c01359550612a1260c08d01612961565b9450612a2060e08d01612973565b9350612a2f6101008d01612973565b9250612a3e6101208d01612973565b9150612a4d6101408d0161298a565b90509295989b509295989b9093969950565b600060208284031215612a7157600080fd5b610eb782612973565b60008060408385031215612a8d57600080fd5b612a9683612961565b946020939093013593505050565b600060208284031215612ab657600080fd5b610eb782612961565b60008060408385031215612ad257600080fd5b612a96836128ed565b600080600060608486031215612af057600080fd5b612af984612961565b9250612b0760208501612973565b9150612b1560408501612973565b90509250925092565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215612b4a57600080fd5b612b5385612961565b935060208501359250612b6860408601612973565b915060608501356001600160401b03811115612b8357600080fd5b8501601f81018713612b9457600080fd5b80356001600160401b03811115612bad57612bad612b1e565b604051601f8201601f19908116603f011681016001600160401b0381118282101715612bdb57612bdb612b1e565b604052818152828201602001891015612bf357600080fd5b8160208401602083013760006020838301015280935050505092959194509250565b600080600080600080600080610100898b031215612c3257600080fd5b612c3b896128ed565b9750612c4960208a016128ed565b9650612c5760408a016128ed565b9550612c6560608a016128ed565b945060808901359350612c7a60a08a01612973565b9250612c8860c08a01612973565b9150612c9660e08a0161298a565b90509295985092959890939650565b803563ffffffff8116811461290457600080fd5b600080600080600060a08688031215612cd157600080fd5b612cda86612961565b9450612ce860208701612ca5565b9350612cf660408701612973565b9250612d0460608701612973565b9150612d126080870161298a565b90509295509295909350565b60008060408385031215612d3157600080fd5b612d3a83612961565b9150612d48602084016128ed565b90509250929050565b600080600080600060a08688031215612d6957600080fd5b612cda866128ed565b634e487b7160e01b600052603260045260246000fd5b6020808252600c908201526b125b9d985b1a5908141bdbdb60a21b604082015260600190565b6020808252600890820152671393d517d413d3d360c21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561092457610924612dd0565b8082018082111561092457610924612dd0565b600061ffff821661ffff8103612e2457612e24612dd0565b60010192915050565b6001600160401b03828116828216039081111561092457610924612dd0565b808202811582820484141761092457610924612dd0565b634e487b7160e01b600052601260045260246000fd5b600082612e8857612e88612e63565b500490565b60006001600160401b03831680612ea657612ea6612e63565b806001600160401b0384160491505092915050565b6001600160401b03818116838216019081111561092457610924612dd0565b6001600160401b038181168382160290811690818114612efc57612efc612dd0565b5092915050565b60006001600160401b0382166001600160401b038103612e2457612e24612dd0565b63ffffffff828116828216039081111561092457610924612dd0565b63ffffffff818116838216019081111561092457610924612dd0565b600060208284031215612f6f57600080fd5b505191905056fea26469706673582212209bb6d6ae394db59d17422b36b4a64473c21858204b2e43cb6d869ed5782b0e4e64736f6c634300081e0033";
const isSuperArgs$6 = (xs) => xs.length > 1;
class MasterPool__factory extends ContractFactory {
  constructor(...args) {
    if (isSuperArgs$6(args)) {
      super(...args);
    } else {
      super(_abi$7, _bytecode$6, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$6;
  static abi = _abi$7;
  static createInterface() {
    return new Interface(_abi$7);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$7, runner);
  }
}

var index$d = /*#__PURE__*/Object.freeze({
  __proto__: null,
  MasterPool__factory: MasterPool__factory
});

const _abi$6 = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "OwnableInvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address"
      }
    ],
    name: "SafeERC20FailedOperation",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newSpender",
        type: "address"
      }
    ],
    name: "AddSpender",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldSpender",
        type: "address"
      }
    ],
    name: "RemoveSpender",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Rewarded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Withdrawn",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address"
      }
    ],
    name: "addSpender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_initOwner",
        type: "address"
      }
    ],
    name: "initializeVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address"
      }
    ],
    name: "removeSpender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "sendTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "spenders",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
const _bytecode$5 = "0x6080604052348015600f57600080fd5b506016601a565b60ca565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff161560695760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b039081161460c75780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b610aff806100d96000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063ae63932911610066578063ae6393291461010d578063ccb6a27014610120578063d9caed1214610133578063e7e31e7a14610146578063f2fde38b1461015957600080fd5b80631241803814610098578063715018a6146100b65780638ce5877c146100c05780638da5cb5b146100d3575b600080fd5b6100a061016c565b6040516100ad91906109bd565b60405180910390f35b6100be61017d565b005b6100be6100ce366004610a1e565b610191565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546040516001600160a01b0390911681526020016100ad565b6100be61011b366004610a3b565b610233565b6100be61012e366004610a1e565b6102ec565b6100be610141366004610a3b565b610442565b6100be610154366004610a1e565b6104ad565b6100be610167366004610a1e565b610546565b60606101786000610584565b905090565b610185610598565b61018f600061060e565b565b610199610598565b6101a460008261067f565b6101e75760405162461bcd60e51b815260206004820152600f60248201526e24a72b20a624a22fa9a822a72222a960891b60448201526064015b60405180910390fd5b6101f26000826106a6565b506040516001600160a01b03821681527f508e01dc09a24291350cfc3ad6e6ee056cfa6df6780f82e57e60190be9f35524906020015b60405180910390a150565b61023e60003361067f565b61027c5760405162461bcd60e51b815260206004820152600f60248201526e24a72b20a624a22fa9a822a72222a960891b60448201526064016101de565b6102906001600160a01b03841683836106bb565b816001600160a01b0316336001600160a01b0316846001600160a01b03167fa209447764afbca4d7c43c9962941f114f3465f7fde32167c76661eb75b3ef77846040516102df91815260200190565b60405180910390a4505050565b60006102f6610712565b805490915060ff600160401b820416159067ffffffffffffffff1660008115801561031e5750825b905060008267ffffffffffffffff16600114801561033b5750303b155b905081158015610349575080155b156103675760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561039157845460ff60401b1916600160401b1785555b6001600160a01b0386166103a3573395505b6103ac8661073b565b6103b760008761074c565b506040516001600160a01b03871681527ffb461a9d124e123750171741a89341defba2596b06be0c452e3e0f990c18bb9e9060200160405180910390a1831561043a57845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b61044a610598565b61045e6001600160a01b03841683836106bb565b816001600160a01b0316336001600160a01b0316846001600160a01b03167fa4195c37c2947bbe89165f03e320b6903116f0b10d8cfdb522330f7ce6f9fa24846040516102df91815260200190565b6104b5610598565b6104c060008261067f565b156105015760405162461bcd60e51b8152602060048201526011602482015270222aa82624a1a0aa22afa9a822a72222a960791b60448201526064016101de565b61050c60008261074c565b506040516001600160a01b03821681527ffb461a9d124e123750171741a89341defba2596b06be0c452e3e0f990c18bb9e90602001610228565b61054e610598565b6001600160a01b03811661057857604051631e4fbdf760e01b8152600060048201526024016101de565b6105818161060e565b50565b6060600061059183610761565b9392505050565b60006105cb7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b90506001600160a01b038116158015906105ee57506001600160a01b0381163314155b156105815760405163118cdaa760e01b81523360048201526024016101de565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b6001600160a01b038116600090815260018301602052604081205415155b90505b92915050565b600061069d836001600160a01b0384166107bd565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261070d9084906108b0565b505050565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a006106a0565b610743610927565b6105818161094c565b600061069d836001600160a01b038416610954565b6060816000018054806020026020016040519081016040528092919081815260200182805480156107b157602002820191906000526020600020905b81548152602001906001019080831161079d575b50505050509050919050565b600081815260018301602052604081205480156108a65760006107e1600183610a7c565b85549091506000906107f590600190610a7c565b905080821461085a57600086600001828154811061081557610815610a9d565b906000526020600020015490508087600001848154811061083857610838610a9d565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061086b5761086b610ab3565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506106a0565b60009150506106a0565b600080602060008451602086016000885af1806108d3576040513d6000823e3d81fd5b50506000513d915081156108eb5780600114156108f8565b6001600160a01b0384163b155b1561092157604051635274afe760e01b81526001600160a01b03851660048201526024016101de565b50505050565b61092f6109a3565b61018f57604051631afcd79f60e31b815260040160405180910390fd5b61054e610927565b600081815260018301602052604081205461099b575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556106a0565b5060006106a0565b60006109ad610712565b54600160401b900460ff16919050565b602080825282518282018190526000918401906040840190835b818110156109fe5783516001600160a01b03168352602093840193909201916001016109d7565b509095945050505050565b6001600160a01b038116811461058157600080fd5b600060208284031215610a3057600080fd5b813561059181610a09565b600080600060608486031215610a5057600080fd5b8335610a5b81610a09565b92506020840135610a6b81610a09565b929592945050506040919091013590565b818103818111156106a057634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea264697066735822122095396e8c851a9aaa1115c1e292fb27a97ec3ed0e6417b73f0e1eb40c663a8ae864736f6c634300081e0033";
const isSuperArgs$5 = (xs) => xs.length > 1;
class RewardVault__factory extends ContractFactory {
  constructor(...args) {
    if (isSuperArgs$5(args)) {
      super(...args);
    } else {
      super(_abi$6, _bytecode$5, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$5;
  static abi = _abi$6;
  static createInterface() {
    return new Interface(_abi$6);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$6, runner);
  }
}

var index$c = /*#__PURE__*/Object.freeze({
  __proto__: null,
  RewardVault__factory: RewardVault__factory
});

var index$b = /*#__PURE__*/Object.freeze({
  __proto__: null,
  masterChefSol: index$e,
  masterPoolSol: index$d,
  rewardVaultSol: index$c
});

const _abi$5 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address"
      }
    ],
    name: "ERC1967InvalidAdmin",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "ERC1967InvalidImplementation",
    type: "error"
  },
  {
    inputs: [],
    name: "ERC1967NonPayable",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "AdminChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string"
      }
    ],
    name: "DescriptionChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "Upgraded",
    type: "event"
  },
  {
    stateMutability: "payable",
    type: "fallback"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "changeProxyAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_description",
        type: "string"
      }
    ],
    name: "changeProxyDescription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_description",
        type: "string"
      },
      {
        internalType: "address",
        name: "newAdmin",
        type: "address"
      },
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "initializeProxy",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "proxyAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "proxyDescription",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
];
const _bytecode$4 = "0x6080604052348015600f57600080fd5b50610acf8061001f6000396000f3fe6080604052600436106100745760003560e01c80635c60da1b1161004e5780635c60da1b146100f05780639f712f2f14610105578063aba0017314610125578063ee0530f41461013857610083565b80633e47158c1461008b5780634f1ef286146100bd5780635a28dda4146100d057610083565b366100835761008161015a565b005b61008161015a565b34801561009757600080fd5b506100a061016c565b6040516001600160a01b0390911681526020015b60405180910390f35b6100816100cb366004610785565b61017b565b3480156100dc57600080fd5b506100816100eb3660046107d3565b61030e565b3480156100fc57600080fd5b506100a06103cd565b34801561011157600080fd5b50610081610120366004610810565b6103d7565b610081610133366004610832565b610431565b34801561014457600080fd5b5061014d6104bf565b6040516100b491906108e0565b61016a610165610570565b61057a565b565b60006101766105a3565b905090565b61018361016c565b6001600160a01b0316336001600160a01b031614806101b057506101a561016c565b6001600160a01b0316155b6101d55760405162461bcd60e51b81526004016101cc90610913565b60405180910390fd5b816001600160a01b03163b60000361020b57604051634c9c8ce360e01b81526001600160a01b03831660048201526024016101cc565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0384169081179091556040517fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a28051156102eb57600080836001600160a01b0316836040516102939190610936565b600060405180830381855af49150503d80600081146102ce576040519150601f19603f3d011682016040523d82523d6000602084013e6102d3565b606091505b5091509150816102e557805181602001fd5b50505050565b341561030a5760405163b398979f60e01b815260040160405180910390fd5b5050565b61031661016c565b6001600160a01b0316336001600160a01b03161480610343575061033861016c565b6001600160a01b0316155b61035f5760405162461bcd60e51b81526004016101cc90610913565b8051156103ca577ffcba12fcf625f4823c7c0c86b97ab29721afc9e784836bc00bf04553a0c8dff461039182826109da565b507f8a1bce929b257bfd582fa164d9b9fa4d4b0b7442b10b3aad23e2c56aa4e0d61a816040516103c191906108e0565b60405180910390a15b50565b6000610176610570565b6103df61016c565b6001600160a01b0316336001600160a01b0316148061040c575061040161016c565b6001600160a01b0316155b6104285760405162461bcd60e51b81526004016101cc90610913565b6103ca816105d6565b600061043b610570565b6001600160a01b03161480156104615750600061045661016c565b6001600160a01b0316145b6104a35760405162461bcd60e51b81526020600482015260136024820152721053149150511657d253925512505312569151606a1b60448201526064016101cc565b6104ad828261017b565b6104b68461030e565b6102e5836103d7565b60607ffcba12fcf625f4823c7c0c86b97ab29721afc9e784836bc00bf04553a0c8dff480546104ed90610952565b80601f016020809104026020016040519081016040528092919081815260200182805461051990610952565b80156105665780601f1061053b57610100808354040283529160200191610566565b820191906000526020600020905b81548152906001019060200180831161054957829003601f168201915b5050505050905090565b600061017661062a565b3660008037600080366000845af43d6000803e808015610599573d6000f35b3d6000fd5b505050565b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b546001600160a01b0316919050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6105ff6105a3565b604080516001600160a01b03928316815291841660208301520160405180910390a16103ca81610652565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc6105c7565b6001600160a01b03811661067c57604051633173bdd160e11b8152600060048201526024016101cc565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610380546001600160a01b0319166001600160a01b0392909216919091179055565b80356001600160a01b03811681146106d457600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261070057600080fd5b81356020830160008067ffffffffffffffff841115610721576107216106d9565b50604051601f19601f85018116603f0116810181811067ffffffffffffffff82111715610750576107506106d9565b60405283815290508082840187101561076857600080fd5b838360208301376000602085830101528094505050505092915050565b6000806040838503121561079857600080fd5b6107a1836106bd565b9150602083013567ffffffffffffffff8111156107bd57600080fd5b6107c9858286016106ef565b9150509250929050565b6000602082840312156107e557600080fd5b813567ffffffffffffffff8111156107fc57600080fd5b610808848285016106ef565b949350505050565b60006020828403121561082257600080fd5b61082b826106bd565b9392505050565b6000806000806080858703121561084857600080fd5b843567ffffffffffffffff81111561085f57600080fd5b61086b878288016106ef565b94505061087a602086016106bd565b9250610888604086016106bd565b9150606085013567ffffffffffffffff8111156108a457600080fd5b6108b0878288016106ef565b91505092959194509250565b60005b838110156108d75781810151838201526020016108bf565b50506000910152565b60208152600082518060208401526108ff8160408501602087016108bc565b601f01601f19169190910160400192915050565b6020808252600990820152682727aa2fa0a226a4a760b91b604082015260600190565b600082516109488184602087016108bc565b9190910192915050565b600181811c9082168061096657607f821691505b60208210810361098657634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561059e57806000526020600020601f840160051c810160208510156109b35750805b601f840160051c820191505b818110156109d357600081556001016109bf565b5050505050565b815167ffffffffffffffff8111156109f4576109f46106d9565b610a0881610a028454610952565b8461098c565b6020601f821160018114610a3c5760008315610a245750848201515b600019600385901b1c1916600184901b1784556109d3565b600084815260208120601f198516915b82811015610a6c5787850151825560209485019460019092019101610a4c565b5084821015610a8a5786840151600019600387901b60f8161c191681555b50505050600190811b0190555056fea264697066735822122041cbf6c44a1d45bc1c1cf819285dc9a575046545bb62f18ef0d43fc1b42aa80364736f6c634300081e0033";
const isSuperArgs$4 = (xs) => xs.length > 1;
class InitializableProxy__factory extends ContractFactory {
  constructor(...args) {
    if (isSuperArgs$4(args)) {
      super(...args);
    } else {
      super(_abi$5, _bytecode$4, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$4;
  static abi = _abi$5;
  static createInterface() {
    return new Interface(_abi$5);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$5, runner);
  }
}

var index$a = /*#__PURE__*/Object.freeze({
  __proto__: null,
  InitializableProxy__factory: InitializableProxy__factory
});

var index$9 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  initializableProxySol: index$a
});

const _abi$4 = [
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256"
      }
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientAllowance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC20InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC20InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSpender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "ERC20Locked",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      }
    ],
    name: "ERC2612ExpiredSignature",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "ERC2612InvalidSigner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "currentNonce",
        type: "uint256"
      }
    ],
    name: "InvalidAccountNonce",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "until",
        type: "uint256"
      }
    ],
    name: "Lock",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "until",
        type: "uint256"
      }
    ],
    name: "LockedBy",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1"
      },
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "version",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "isLocked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "until",
        type: "uint256"
      }
    ],
    name: "isLockedUntil",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "until",
        type: "uint256"
      }
    ],
    name: "lock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "until",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes"
      }
    ],
    name: "lockPermit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "lockedUntil",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8"
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class ERC20Lockable__factory {
  static abi = _abi$4;
  static createInterface() {
    return new Interface(_abi$4);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$4, runner);
  }
}

var index$8 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ERC20Lockable__factory: ERC20Lockable__factory
});

const _abi$3 = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string"
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string"
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8"
      },
      {
        internalType: "uint256",
        name: "supply_",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256"
      }
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientAllowance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC20InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC20InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSpender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      }
    ],
    name: "ERC2612ExpiredSignature",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "ERC2612InvalidSigner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "currentNonce",
        type: "uint256"
      }
    ],
    name: "InvalidAccountNonce",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "OwnableInvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string"
      }
    ],
    name: "StringTooLong",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1"
      },
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "version",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8"
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
const _bytecode$3 = "0x61018060405234801561001157600080fd5b506040516118a63803806118a68339810160408190526100309161045f565b338480604051806040016040528060018152602001603160f81b8152508787816003908161005e9190610571565b50600461006b8282610571565b5061007b91508390506005610175565b6101205261008a816006610175565b61014052815160208084019190912060e052815190820120610100524660a05261011760e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c052506001600160a01b03811661015057604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b610159816101a8565b5060ff82166101605261016c33826101fa565b505050506106a7565b60006020835110156101915761018a83610234565b90506101a2565b8161019c8482610571565b5060ff90505b92915050565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0382166102245760405163ec442f0560e01b815260006004820152602401610147565b61023060008383610272565b5050565b600080829050601f8151111561025f578260405163305a27a960e01b8152600401610147919061062f565b805161026a82610662565b179392505050565b6001600160a01b03831661029d5780600260008282546102929190610686565b9091555061030f9050565b6001600160a01b038316600090815260208190526040902054818110156102f05760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610147565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661032b5760028054829003905561034a565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161038f91815260200190565b60405180910390a3505050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156103cd5781810151838201526020016103b5565b50506000910152565b600082601f8301126103e757600080fd5b81516001600160401b038111156104005761040061039c565b604051601f8201601f19908116603f011681016001600160401b038111828210171561042e5761042e61039c565b60405281815283820160200185101561044657600080fd5b6104578260208301602087016103b2565b949350505050565b6000806000806080858703121561047557600080fd5b84516001600160401b0381111561048b57600080fd5b610497878288016103d6565b602087015190955090506001600160401b038111156104b557600080fd5b6104c1878288016103d6565b935050604085015160ff811681146104d857600080fd5b6060959095015193969295505050565b600181811c908216806104fc57607f821691505b60208210810361051c57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561056c57806000526020600020601f840160051c810160208510156105495750805b601f840160051c820191505b818110156105695760008155600101610555565b50505b505050565b81516001600160401b0381111561058a5761058a61039c565b61059e8161059884546104e8565b84610522565b6020601f8211600181146105d257600083156105ba5750848201515b600019600385901b1c1916600184901b178455610569565b600084815260208120601f198516915b8281101561060257878501518255602094850194600190920191016105e2565b50848210156106205786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b602081526000825180602084015261064e8160408501602087016103b2565b601f01601f19169190910160400192915050565b8051602080830151919081101561051c5760001960209190910360031b1b16919050565b808201808211156101a257634e487b7160e01b600052601160045260246000fd5b60805160a05160c05160e0516101005161012051610140516101605161119a61070c600039600061019e015260006109840152600061095701526000610814015260006107ec01526000610747015260006107710152600061079b015261119a6000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806379cc6790116100ad578063a0712d6811610071578063a0712d681461028d578063a9059cbb146102a0578063d505accf146102b3578063dd62ed3e146102c6578063f2fde38b146102ff57600080fd5b806379cc6790146102295780637ecebe001461023c57806384b0196e1461024f5780638da5cb5b1461026a57806395d89b411461028557600080fd5b80633644e515116100f45780633644e515146101c857806340c10f19146101d057806342966c68146101e557806370a08231146101f8578063715018a61461022157600080fd5b806306fdde0314610131578063095ea7b31461014f57806318160ddd1461017257806323b872dd14610184578063313ce56714610197575b600080fd5b610139610312565b6040516101469190610ee4565b60405180910390f35b61016261015d366004610f1a565b6103a4565b6040519015158152602001610146565b6002545b604051908152602001610146565b610162610192366004610f44565b6103be565b60405160ff7f0000000000000000000000000000000000000000000000000000000000000000168152602001610146565b6101766103e2565b6101e36101de366004610f1a565b6103f1565b005b6101e36101f3366004610f81565b610407565b610176610206366004610f9a565b6001600160a01b031660009081526020819052604090205490565b6101e3610414565b6101e3610237366004610f1a565b610428565b61017661024a366004610f9a565b61043d565b61025761045b565b6040516101469796959493929190610fb5565b6008546040516001600160a01b039091168152602001610146565b6101396104a1565b6101e361029b366004610f81565b6104b0565b6101626102ae366004610f1a565b6104c2565b6101e36102c136600461104d565b6104d0565b6101766102d43660046110c0565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101e361030d366004610f9a565b61060f565b606060038054610321906110f3565b80601f016020809104026020016040519081016040528092919081815260200182805461034d906110f3565b801561039a5780601f1061036f5761010080835404028352916020019161039a565b820191906000526020600020905b81548152906001019060200180831161037d57829003601f168201915b5050505050905090565b6000336103b281858561064a565b60019150505b92915050565b6000336103cc85828561065c565b6103d78585856106db565b506001949350505050565b60006103ec61073a565b905090565b6103f9610865565b6104038282610892565b5050565b61041133826108c8565b50565b61041c610865565b61042660006108fe565b565b61043382338361065c565b61040382826108c8565b6001600160a01b0381166000908152600760205260408120546103b8565b60006060806000806000606061046f610950565b61047761097d565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b606060048054610321906110f3565b6104b8610865565b6104113382610892565b6000336103b28185856106db565b834211156104f95760405163313c898160e11b8152600481018590526024015b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886105468c6001600160a01b0316600090815260076020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006105a1826109aa565b905060006105b1828787876109d7565b9050896001600160a01b0316816001600160a01b0316146105f8576040516325c0072360e11b81526001600160a01b0380831660048301528b1660248201526044016104f0565b6106038a8a8a61064a565b50505050505050505050565b610617610865565b6001600160a01b03811661064157604051631e4fbdf760e01b8152600060048201526024016104f0565b610411816108fe565b6106578383836001610a05565b505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198110156106d557818110156106c657604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064016104f0565b6106d584848484036000610a05565b50505050565b6001600160a01b03831661070557604051634b637e8f60e11b8152600060048201526024016104f0565b6001600160a01b03821661072f5760405163ec442f0560e01b8152600060048201526024016104f0565b610657838383610ada565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561079357507f000000000000000000000000000000000000000000000000000000000000000046145b156107bd57507f000000000000000000000000000000000000000000000000000000000000000090565b6103ec604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b6008546001600160a01b031633146104265760405163118cdaa760e01b81523360048201526024016104f0565b6001600160a01b0382166108bc5760405163ec442f0560e01b8152600060048201526024016104f0565b61040360008383610ada565b6001600160a01b0382166108f257604051634b637e8f60e11b8152600060048201526024016104f0565b61040382600083610ada565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60606103ec7f00000000000000000000000000000000000000000000000000000000000000006005610c04565b60606103ec7f00000000000000000000000000000000000000000000000000000000000000006006610c04565b60006103b86109b761073a565b8360405161190160f01b8152600281019290925260228201526042902090565b6000806000806109e988888888610caf565b9250925092506109f98282610d7e565b50909695505050505050565b6001600160a01b038416610a2f5760405163e602df0560e01b8152600060048201526024016104f0565b6001600160a01b038316610a5957604051634a1406b160e11b8152600060048201526024016104f0565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156106d557826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610acc91815260200190565b60405180910390a350505050565b6001600160a01b038316610b05578060026000828254610afa919061112d565b90915550610b779050565b6001600160a01b03831660009081526020819052604090205481811015610b585760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016104f0565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610b9357600280548290039055610bb2565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610bf791815260200190565b60405180910390a3505050565b606060ff8314610c1e57610c1783610e37565b90506103b8565b818054610c2a906110f3565b80601f0160208091040260200160405190810160405280929190818152602001828054610c56906110f3565b8015610ca35780601f10610c7857610100808354040283529160200191610ca3565b820191906000526020600020905b815481529060010190602001808311610c8657829003601f168201915b505050505090506103b8565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115610cea5750600091506003905082610d74565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015610d3e573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610d6a57506000925060019150829050610d74565b9250600091508190505b9450945094915050565b6000826003811115610d9257610d9261114e565b03610d9b575050565b6001826003811115610daf57610daf61114e565b03610dcd5760405163f645eedf60e01b815260040160405180910390fd5b6002826003811115610de157610de161114e565b03610e025760405163fce698f760e01b8152600481018290526024016104f0565b6003826003811115610e1657610e1661114e565b03610403576040516335e2f38360e21b8152600481018290526024016104f0565b60606000610e4483610e76565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600060ff8216601f8111156103b857604051632cd44ac360e21b815260040160405180910390fd5b6000815180845260005b81811015610ec457602081850181015186830182015201610ea8565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610ef76020830184610e9e565b9392505050565b80356001600160a01b0381168114610f1557600080fd5b919050565b60008060408385031215610f2d57600080fd5b610f3683610efe565b946020939093013593505050565b600080600060608486031215610f5957600080fd5b610f6284610efe565b9250610f7060208501610efe565b929592945050506040919091013590565b600060208284031215610f9357600080fd5b5035919050565b600060208284031215610fac57600080fd5b610ef782610efe565b60ff60f81b8816815260e060208201526000610fd460e0830189610e9e565b8281036040840152610fe68189610e9e565b606084018890526001600160a01b038716608085015260a0840186905283810360c08501528451808252602080870193509091019060005b8181101561103c57835183526020938401939092019160010161101e565b50909b9a5050505050505050505050565b600080600080600080600060e0888a03121561106857600080fd5b61107188610efe565b965061107f60208901610efe565b95506040880135945060608801359350608088013560ff811681146110a357600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080604083850312156110d357600080fd5b6110dc83610efe565b91506110ea60208401610efe565b90509250929050565b600181811c9082168061110757607f821691505b60208210810361112757634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156103b857634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fdfea2646970667358221220dc28ffbf9fc23f7cf2528a33152157d0b702abf9ac4fd499aef42b1e218fcbfd64736f6c634300081e0033";
const isSuperArgs$3 = (xs) => xs.length > 1;
class ERC20Mock__factory extends ContractFactory {
  constructor(...args) {
    if (isSuperArgs$3(args)) {
      super(...args);
    } else {
      super(_abi$3, _bytecode$3, args[0]);
    }
  }
  getDeployTransaction(name_, symbol_, decimals_, supply_, overrides) {
    return super.getDeployTransaction(
      name_,
      symbol_,
      decimals_,
      supply_,
      overrides || {}
    );
  }
  deploy(name_, symbol_, decimals_, supply_, overrides) {
    return super.deploy(
      name_,
      symbol_,
      decimals_,
      supply_,
      overrides || {}
    );
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$3;
  static abi = _abi$3;
  static createInterface() {
    return new Interface(_abi$3);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$3, runner);
  }
}

var index$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ERC20Mock__factory: ERC20Mock__factory
});

const _abi$2 = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256"
      }
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientAllowance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC20InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC20InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSpender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "ERC20Locked",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      }
    ],
    name: "ERC2612ExpiredSignature",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "ERC2612InvalidSigner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "max",
        type: "uint256"
      }
    ],
    name: "ERC4626ExceededMaxDeposit",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "max",
        type: "uint256"
      }
    ],
    name: "ERC4626ExceededMaxMint",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "max",
        type: "uint256"
      }
    ],
    name: "ERC4626ExceededMaxRedeem",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "max",
        type: "uint256"
      }
    ],
    name: "ERC4626ExceededMaxWithdraw",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "currentNonce",
        type: "uint256"
      }
    ],
    name: "InvalidAccountNonce",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "Deposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "masterPool",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "pid",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "address",
        name: "asset",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "rewardToken",
        type: "address"
      }
    ],
    name: "InitializedPool",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "until",
        type: "uint256"
      }
    ],
    name: "Lock",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "until",
        type: "uint256"
      }
    ],
    name: "LockedBy",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "Withdraw",
    type: "event"
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "asset",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "convertToAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    name: "convertToShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1"
      },
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "version",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_masterPool",
        type: "address"
      },
      {
        internalType: "uint16",
        name: "_pid",
        type: "uint16"
      },
      {
        internalType: "address",
        name: "_asset",
        type: "address"
      },
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address"
      }
    ],
    name: "initializeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "isLocked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "until",
        type: "uint256"
      }
    ],
    name: "isLockedUntil",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "isRewardNative",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "until",
        type: "uint256"
      }
    ],
    name: "lock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "until",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes"
      }
    ],
    name: "lockPermit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "lockedUntil",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "masterBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "masterMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "masterPool",
    outputs: [
      {
        internalType: "contract IMasterPool",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "maxDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "maxMint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "maxRedeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "maxWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8"
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "pid",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    name: "previewDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "previewMint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "previewRedeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      }
    ],
    name: "previewWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "redeem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "sharesOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalAssets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "assets",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
const _bytecode$2 = "0x6080604052348015600f57600080fd5b506016601a565b60ca565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff161560695760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b039081161460c75780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b612600806100d96000396000f3fe608060405234801561001057600080fd5b50600436106102695760003560e01c806384b0196e11610151578063c6e6f592116100c3578063dd62ed3e11610087578063dd62ed3e1461051a578063ef8b30f7146102d6578063f10684541461052d578063f5eb42dc14610555578063f7c618c114610568578063f97d3d071461057b57600080fd5b8063c6e6f592146102d6578063ce96cb77146104ce578063d505accf146104e1578063d905777e146104f4578063dd4670641461050757600080fd5b80639fc8ae6d116101155780639fc8ae6d14610482578063a9059cbb14610495578063b3d7f6b9146102d6578063b460af94146104a8578063ba087652146104bb578063c63d75b6146103b057600080fd5b806384b0196e146104195780638c7ab1d71461043457806394bf804d1461044757806395d89b411461045a5780639bc289f11461046257600080fd5b8063313ce567116101ea5780634a4fbeec116101ae5780634a4fbeec146103c55780634cdad506146102d65780636bcfdc34146103d85780636e553f65146103e057806370a08231146103f35780637ecebe001461040657600080fd5b8063313ce567146103495780633644e51514610363578063367f0b301461036b57806338d52e0f1461037e578063402d267d146103b057600080fd5b8063095ea7b311610231578063095ea7b3146102e95780630a28a477146102d657806318160ddd146102fc5780631b96b2f91461032357806323b872dd1461033657600080fd5b806301e1d1141461026e57806301ffc9a71461028957806302a19a9e146102ac57806306fdde03146102c157806307a2d13a146102d6575b600080fd5b6102766105a9565b6040519081526020015b60405180910390f35b61029c610297366004611e7d565b6105d8565b6040519015158152602001610280565b6102bf6102ba366004611f32565b61060f565b005b6102c9610778565b6040516102809190612037565b6102766102e436600461204a565b610821565b61029c6102f7366004612063565b610829565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace0254610276565b6102bf610331366004612063565b610841565b61029c61034436600461208d565b61089c565b6103516108c0565b60405160ff9091168152602001610280565b6102766108ca565b6102bf6103793660046120ca565b6108d4565b6000805160206125ab833981519152546001600160a01b03165b6040516001600160a01b039091168152602001610280565b6102766103be366004612127565b5060001990565b61029c6103d3366004612127565b610b3e565b61029c610b5f565b6102766103ee366004612142565b610b9c565b610276610401366004612127565b610bc2565b610276610414366004612127565b610c6c565b610421610c77565b604051610280979695949392919061216e565b600154610398906001600160a01b031681565b610276610455366004612142565b610d23565b6102c9610d41565b610276610470366004612127565b60006020819052908152604090205481565b6102bf610490366004612063565b610d80565b61029c6104a3366004612063565b610dd7565b6102766104b6366004612206565b610de5565b6102766104c9366004612206565b610e3d565b6102766104dc366004612127565b610e8c565b6102bf6104ef366004612242565b610e9d565b610276610502366004612127565b610fb9565b6102bf61051536600461204a565b610fc4565b6102766105283660046122b5565b610fd1565b60015461054290600160a01b900461ffff1681565b60405161ffff9091168152602001610280565b610276610563366004612127565b61101b565b600254610398906001600160a01b031681565b61029c610589366004612063565b6001600160a01b0391909116600090815260208190526040902054101590565b60006105d37f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace025490565b905090565b60006001600160e01b031982166307b8bf0760e51b148061060957506301ffc9a760e01b6001600160e01b03198316145b92915050565b814211156106385760405163313c898160e11b8152600481018390526024015b60405180910390fd5b60007f35eff6d814ac6266dcac97b73c7e53eaf4dabccaded194ea1b0d8c021e5060a18686866106678a611026565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810184905260e00160405160208183030381529060405280519060200120905060006106c282611068565b905060006106d08285611095565b9050876001600160a01b0316816001600160a01b031614610717576040516325c0072360e11b81526001600160a01b0380831660048301528916602482015260440161062f565b61072188876110bf565b866001600160a01b0316886001600160a01b03167fa2d3a0f9c14b593023a7113a6db3582e73f8990cedd0d8bb222ab65e20b1a1f68860405161076691815260200190565b60405180910390a35050505050505050565b6060600060008051602061256b8339815191525b905080600301805461079d906122df565b80601f01602080910402602001604051908101604052809291908181526020018280546107c9906122df565b80156108165780601f106107eb57610100808354040283529160200191610816565b820191906000526020600020905b8154815290600101906020018083116107f957829003601f168201915b505050505091505090565b600081610609565b600033610837818585611130565b5060019392505050565b6001546001600160a01b0316331461088e5760405162461bcd60e51b815260206004820152601060248201526f13d3931657d35054d5115497d413d3d360821b604482015260640161062f565b6108988282611142565b5050565b6000336108aa858285611178565b6108b58585856111cc565b506001949350505050565b60006105d361122b565b60006105d361125d565b60006108de611267565b805490915060ff600160401b820416159067ffffffffffffffff166000811580156109065750825b905060008267ffffffffffffffff1660011480156109235750303b155b905081158015610931575080155b1561094f5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561097957845460ff60401b1916600160401b1785555b600180546001600160a01b038b81166001600160b01b031990921691909117600160a01b61ffff8c160217909155600280546001600160a01b031916888316179055604080516395d89b4160e01b815290516000928a16916395d89b4191600480830192869291908290030181865afa1580156109fa573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a229190810190612319565b90506000610a4f60405180604001604052806007815260200166029ba30b5b2b2160cd1b81525083611290565b90506000610a77604051806040016040528060028152602001611cdd60f21b81525084611290565b9050610a8382826112bc565b610a8c826112ce565b610a958a6112f9565b604080516001600160a01b038e8116825261ffff8e1660208301528c8116828401528b16606082015290517f198ee228dde3a8038dd17502f21ee11bfa7273aea909a6ecaf1768195a6bea889181900360800190a15050508315610b3357845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050505050565b6001600160a01b038116600090815260208190526040812054421115610609565b6002546000906001600160a01b0316610b8d6000805160206125ab833981519152546001600160a01b031690565b6001600160a01b031614905090565b60006000196000610bac85610821565b9050610bba3385878461130a565b949350505050565b600080610bce836113bf565b9050610bd8610b5f565b15610609576001546040516303a41f6360e61b8152600160a01b820461ffff1660048201526001600160a01b0385811660248301529091169063e907d8c090604401602060405180830381865afa158015610c37573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5b91906123a8565b610c6590826123d7565b9392505050565b6000610609826113f2565b6000606080828080838160008051602061258b8339815191528054909150158015610ca457506001810154155b610ce85760405162461bcd60e51b81526020600482015260156024820152741152540dcc4c8e88155b9a5b9a5d1a585b1a5e9959605a1b604482015260640161062f565b610cf061141b565b610cf861145a565b60408051600080825260208201909252600f60f81b9c939b5091995046985030975095509350915050565b60006000196000610d3385610821565b9050610bba3385838861130a565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace04805460609160008051602061256b8339815191529161079d906122df565b6001546001600160a01b03163314610dcd5760405162461bcd60e51b815260206004820152601060248201526f13d3931657d35054d5115497d413d3d360821b604482015260640161062f565b6108988282611472565b6000336108378185856111cc565b600080610df183610e8c565b905080851115610e1a57828582604051633fa733bb60e21b815260040161062f93929190612387565b6000610e2586610821565b9050610e3433868689856114a8565b95945050505050565b600080610e4983610fb9565b905080851115610e7257828582604051632e52afbb60e21b815260040161062f93929190612387565b6000610e7d86610821565b9050610e34338686848a6114a8565b6000610609610e9a83610bc2565b90565b83421115610ec15760405163313c898160e11b81526004810185905260240161062f565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610ef08c611026565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610f4b82611068565b90506000610f5b828787876115a7565b9050896001600160a01b0316816001600160a01b031614610fa2576040516325c0072360e11b81526001600160a01b0380831660048301528b16602482015260440161062f565b610fad8a8a8a611130565b50505050505050505050565b600061060982610bc2565b610fce33826110bf565b50565b6001600160a01b0391821660009081527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace016020908152604080832093909416825291909152205490565b6000610609826113bf565b6001600160a01b031660009081527f5ab42ced628888259c08ac98db1eb0cf702fc1501344311d8b100cd1bfe4bb006020526040902080546001810190915590565b600061060961107561125d565b8360405161190160f01b8152600281019290925260228201526042902090565b6000806000806110a586866115d5565b9250925092506110b58282611622565b5090949350505050565b6001600160a01b038216600090815260208190526040902054811115610898576001600160a01b0382166000818152602081815260409182902084905590518381527f625fed9875dada8643f2418b838ae0bc78d9a148a18eee4ee1979ff0f3f5d427910160405180910390a25050565b61113d83838360016116db565b505050565b6001600160a01b03821661116c5760405163ec442f0560e01b81526000600482015260240161062f565b610898600083836117c3565b60006111848484610fd1565b90506000198110156111c657818110156111b757828183604051637dc7a0d960e11b815260040161062f93929190612387565b6111c6848484840360006116db565b50505050565b6001600160a01b0383166111f657604051634b637e8f60e11b81526000600482015260240161062f565b6001600160a01b0382166112205760405163ec442f0560e01b81526000600482015260240161062f565b61113d8383836117c3565b6000806000805160206125ab8339815191529050600081546112579190600160a01b900460ff166123ea565b91505090565b60006105d36118f2565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00610609565b606082826040516020016112a5929190612403565b604051602081830303815290604052905092915050565b6112c4611966565b610898828261198d565b6112d6611966565b610fce81604051806040016040528060018152602001603160f81b8152506119de565b611301611966565b610fce81611a3f565b60015460405163077ba79560e41b81526001600160a01b03858116600483015260248201859052909116906377ba795090604401600060405180830381600087803b15801561135857600080fd5b505af115801561136c573d6000803e3d6000fd5b505060408051858152602081018590526001600160a01b038088169450881692507fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d791015b60405180910390a350505050565b60008060008051602061256b8339815191525b6001600160a01b0390931660009081526020939093525050604090205490565b6000807f5ab42ced628888259c08ac98db1eb0cf702fc1501344311d8b100cd1bfe4bb006113d2565b7fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d102805460609160008051602061258b8339815191529161079d906122df565b6060600060008051602061258b83398151915261078c565b6001600160a01b03821661149c57604051634b637e8f60e11b81526000600482015260240161062f565b610898826000836117c3565b60006114b38461101b565b905060006114bf610b5f565b80156114ca57508183115b6114d457826114d6565b815b60015460405163db2aa12760e01b81526001600160a01b0388811660048301526024820184905292935091169063db2aa12790604401600060405180830381600087803b15801561152657600080fd5b505af115801561153a573d6000803e3d6000fd5b50505050846001600160a01b0316866001600160a01b0316886001600160a01b03167ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db8787604051611596929190918252602082015260400190565b60405180910390a450505050505050565b6000806000806115b988888888611ab1565b9250925092506115c98282611622565b50909695505050505050565b6000806000835160410361160f5760208401516040850151606086015160001a61160188828585611ab1565b95509550955050505061161b565b50508151600091506002905b9250925092565b600082600381111561163657611636612432565b0361163f575050565b600182600381111561165357611653612432565b036116715760405163f645eedf60e01b815260040160405180910390fd5b600282600381111561168557611685612432565b036116a65760405163fce698f760e01b81526004810182905260240161062f565b60038260038111156116ba576116ba612432565b03610898576040516335e2f38360e21b81526004810182905260240161062f565b60008051602061256b8339815191526001600160a01b0385166117145760405163e602df0560e01b81526000600482015260240161062f565b6001600160a01b03841661173e57604051634a1406b160e11b81526000600482015260240161062f565b6001600160a01b038086166000908152600183016020908152604080832093881683529290522083905581156117bc57836001600160a01b0316856001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925856040516117b391815260200190565b60405180910390a35b5050505050565b6117cb610b5f565b80156117df57506001600160a01b03831615155b156118445760015460405163cd09525d60e01b81526001600160a01b0385811660048301529091169063cd09525d90602401600060405180830381600087803b15801561182b57600080fd5b505af115801561183f573d6000803e3d6000fd5b505050505b61184f838383611b80565b6001600160a01b0383161580159061186f57506001600160a01b03821615155b801561187a57508015155b1561113d57600154604051630325c61f60e31b81526001600160a01b0385811660048301528481166024830152604482018490529091169063192e30f890606401600060405180830381600087803b1580156118d557600080fd5b505af11580156118e9573d6000803e3d6000fd5b50505050505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61191d611bbc565b611925611c26565b60408051602081019490945283019190915260608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b61196e611c6a565b61198b57604051631afcd79f60e31b815260040160405180910390fd5b565b611995611966565b60008051602061256b8339815191527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace036119cf848261248f565b50600481016111c6838261248f565b6119e6611966565b60008051602061258b8339815191527fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d102611a20848261248f565b5060038101611a2f838261248f565b5060008082556001909101555050565b611a47611966565b6000805160206125ab833981519152600080611a6284611c84565b9150915081611a72576012611a74565b805b83546001600160a81b031916600160a01b60ff92909216919091026001600160a01b031916176001600160a01b0394909416939093179091555050565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115611aec5750600091506003905082611b76565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015611b40573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611b6c57506000925060019150829050611b76565b9250600091508190505b9450945094915050565b611b8983610b3e565b15611bb1576040516233044d60e31b81526001600160a01b038416600482015260240161062f565b61113d838383611d60565b600060008051602061258b83398151915281611bd661141b565b805190915015611bee57805160209091012092915050565b81548015611bfd579392505050565b7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470935050505090565b600060008051602061258b83398151915281611c4061145a565b805190915015611c5857805160209091012092915050565b60018201548015611bfd579392505050565b6000611c74611267565b54600160401b900460ff16919050565b60408051600481526024810182526020810180516001600160e01b031663313ce56760e01b17905290516000918291829182916001600160a01b03871691611ccb9161254e565b600060405180830381855afa9150503d8060008114611d06576040519150601f19603f3d011682016040523d82523d6000602084013e611d0b565b606091505b5091509150818015611d1f57506020815110155b15611d5357600081806020019051810190611d3a91906123a8565b905060ff8111611d51576001969095509350505050565b505b5060009485945092505050565b60008051602061256b8339815191526001600160a01b038416611d9c5781816002016000828254611d9191906123d7565b90915550611dfb9050565b6001600160a01b03841660009081526020829052604090205482811015611ddc5784818460405163391434e360e21b815260040161062f93929190612387565b6001600160a01b03851660009081526020839052604090209083900390555b6001600160a01b038316611e19576002810180548390039055611e38565b6001600160a01b03831660009081526020829052604090208054830190555b826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516113b191815260200190565b600060208284031215611e8f57600080fd5b81356001600160e01b031981168114610c6557600080fd5b80356001600160a01b0381168114611ebe57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611f0257611f02611ec3565b604052919050565b600067ffffffffffffffff821115611f2457611f24611ec3565b50601f01601f191660200190565b600080600080600060a08688031215611f4a57600080fd5b611f5386611ea7565b9450611f6160208701611ea7565b93506040860135925060608601359150608086013567ffffffffffffffff811115611f8b57600080fd5b8601601f81018813611f9c57600080fd5b8035611faf611faa82611f0a565b611ed9565b818152896020838501011115611fc457600080fd5b816020840160208301376000602083830101528093505050509295509295909350565b60005b83811015612002578181015183820152602001611fea565b50506000910152565b60008151808452612023816020860160208601611fe7565b601f01601f19169290920160200192915050565b602081526000610c65602083018461200b565b60006020828403121561205c57600080fd5b5035919050565b6000806040838503121561207657600080fd5b61207f83611ea7565b946020939093013593505050565b6000806000606084860312156120a257600080fd5b6120ab84611ea7565b92506120b960208501611ea7565b929592945050506040919091013590565b600080600080608085870312156120e057600080fd5b6120e985611ea7565b9350602085013561ffff8116811461210057600080fd5b925061210e60408601611ea7565b915061211c60608601611ea7565b905092959194509250565b60006020828403121561213957600080fd5b610c6582611ea7565b6000806040838503121561215557600080fd5b8235915061216560208401611ea7565b90509250929050565b60ff60f81b8816815260e06020820152600061218d60e083018961200b565b828103604084015261219f818961200b565b606084018890526001600160a01b038716608085015260a0840186905283810360c08501528451808252602080870193509091019060005b818110156121f55783518352602093840193909201916001016121d7565b50909b9a5050505050505050505050565b60008060006060848603121561221b57600080fd5b8335925061222b60208501611ea7565b915061223960408501611ea7565b90509250925092565b600080600080600080600060e0888a03121561225d57600080fd5b61226688611ea7565b965061227460208901611ea7565b95506040880135945060608801359350608088013560ff8116811461229857600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080604083850312156122c857600080fd5b6122d183611ea7565b915061216560208401611ea7565b600181811c908216806122f357607f821691505b60208210810361231357634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561232b57600080fd5b815167ffffffffffffffff81111561234257600080fd5b8201601f8101841361235357600080fd5b8051612361611faa82611f0a565b81815285602083850101111561237657600080fd5b610e34826020830160208601611fe7565b6001600160a01b039390931683526020830191909152604082015260600190565b6000602082840312156123ba57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610609576106096123c1565b60ff8181168382160190811115610609576106096123c1565b60008351612415818460208801611fe7565b835190830190612429818360208801611fe7565b01949350505050565b634e487b7160e01b600052602160045260246000fd5b601f82111561113d57806000526020600020601f840160051c8101602085101561246f5750805b601f840160051c820191505b818110156117bc576000815560010161247b565b815167ffffffffffffffff8111156124a9576124a9611ec3565b6124bd816124b784546122df565b84612448565b6020601f8211600181146124f157600083156124d95750848201515b600019600385901b1c1916600184901b1784556117bc565b600084815260208120601f198516915b828110156125215787850151825560209485019460019092019101612501565b508482101561253f5786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b60008251612560818460208701611fe7565b919091019291505056fe52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace00a16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1000773e532dfede91f04b12a73d3d2acd361424f41f76b4fb79f090161e36b4e00a2646970667358221220fd041dd886bca7c371352d8de916cfb183eb9a803756302813206b1b43cd741664736f6c634300081e0033";
const isSuperArgs$2 = (xs) => xs.length > 1;
class ERC4626Pool__factory extends ContractFactory {
  constructor(...args) {
    if (isSuperArgs$2(args)) {
      super(...args);
    } else {
      super(_abi$2, _bytecode$2, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$2;
  static abi = _abi$2;
  static createInterface() {
    return new Interface(_abi$2);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$2, runner);
  }
}

var index$6 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ERC4626Pool__factory: ERC4626Pool__factory
});

const _abi$1 = [
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256"
      }
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientAllowance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC20InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC20InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSpender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      }
    ],
    name: "ERC2612ExpiredSignature",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "ERC2612InvalidSigner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "currentNonce",
        type: "uint256"
      }
    ],
    name: "InvalidAccountNonce",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string"
      }
    ],
    name: "StringTooLong",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256"
      }
    ],
    name: "Deposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256"
      }
    ],
    name: "Withdrawal",
    type: "event"
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1"
      },
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "version",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8"
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
];
const _bytecode$1 = "0x61016060405234801561001157600080fd5b506040518060400160405280600d81526020016c2bb930b83832b21022ba3432b960991b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600d81526020016c2bb930b83832b21022ba3432b960991b815250604051806040016040528060048152602001630ae8aa8960e31b81525081600390816100a59190610286565b5060046100b28282610286565b506100c29150839050600561016d565b610120526100d181600661016d565b61014052815160208084019190912060e052815190820120610100524660a05261015e60e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c052506103b6565b600060208351101561018957610182836101a0565b905061019a565b816101948482610286565b5060ff90505b92915050565b600080829050601f815111156101d4578260405163305a27a960e01b81526004016101cb9190610344565b60405180910390fd5b80516101df82610392565b179392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061021157607f821691505b60208210810361023157634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561028157806000526020600020601f840160051c8101602085101561025e5750805b601f840160051c820191505b8181101561027e576000815560010161026a565b50505b505050565b81516001600160401b0381111561029f5761029f6101e7565b6102b3816102ad84546101fd565b84610237565b6020601f8211600181146102e757600083156102cf5750848201515b600019600385901b1c1916600184901b17845561027e565b600084815260208120601f198516915b8281101561031757878501518255602094850194600190920191016102f7565b50848210156103355786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b602081526000825180602084015260005b818110156103725760208186018101516040868401015201610355565b506000604082850101526040601f19601f83011684010191505092915050565b805160208083015191908110156102315760001960209190910360031b1b16919050565b60805160a05160c05160e051610100516101205161014051611131610410600039600061091b015260006108ee015260006108960152600061086e015260006107c9015260006107f30152600061081d01526111316000f3fe6080604052600436106100ec5760003560e01c806370a082311161008a578063a9059cbb11610059578063a9059cbb1461027e578063d0e30db01461029e578063d505accf146102a6578063dd62ed3e146102c657600080fd5b806370a08231146101eb5780637ecebe001461022157806384b0196e1461024157806395d89b411461026957600080fd5b806323b872dd116100c657806323b872dd1461017a5780632e1a7d4d1461019a578063313ce567146101ba5780633644e515146101d657600080fd5b806306fdde0314610100578063095ea7b31461012b57806318160ddd1461015b57600080fd5b366100fb576100f961030c565b005b600080fd5b34801561010c57600080fd5b5061011561034d565b6040516101229190610e7b565b60405180910390f35b34801561013757600080fd5b5061014b610146366004610eb1565b6103df565b6040519015158152602001610122565b34801561016757600080fd5b506002545b604051908152602001610122565b34801561018657600080fd5b5061014b610195366004610edb565b6103f9565b3480156101a657600080fd5b506100f96101b5366004610f18565b61041d565b3480156101c657600080fd5b5060405160128152602001610122565b3480156101e257600080fd5b5061016c61048d565b3480156101f757600080fd5b5061016c610206366004610f31565b6001600160a01b031660009081526020819052604090205490565b34801561022d57600080fd5b5061016c61023c366004610f31565b61049c565b34801561024d57600080fd5b506102566104ba565b6040516101229796959493929190610f4c565b34801561027557600080fd5b50610115610500565b34801561028a57600080fd5b5061014b610299366004610eb1565b61050f565b6100f961030c565b3480156102b257600080fd5b506100f96102c1366004610fe4565b61051d565b3480156102d257600080fd5b5061016c6102e1366004611057565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610316333461065c565b60405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b60606003805461035c9061108a565b80601f01602080910402602001604051908101604052809291908181526020018280546103889061108a565b80156103d55780601f106103aa576101008083540402835291602001916103d5565b820191906000526020600020905b8154815290600101906020018083116103b857829003601f168201915b5050505050905090565b6000336103ed818585610696565b60019150505b92915050565b6000336104078582856106a8565b610412858585610727565b506001949350505050565b6104273382610786565b604051339082156108fc029083906000818181858888f19350505050158015610454573d6000803e3d6000fd5b5060405181815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a250565b60006104976107bc565b905090565b6001600160a01b0381166000908152600760205260408120546103f3565b6000606080600080600060606104ce6108e7565b6104d6610914565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b60606004805461035c9061108a565b6000336103ed818585610727565b834211156105465760405163313c898160e11b8152600481018590526024015b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886105938c6001600160a01b0316600090815260076020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006105ee82610941565b905060006105fe8287878761096e565b9050896001600160a01b0316816001600160a01b031614610645576040516325c0072360e11b81526001600160a01b0380831660048301528b16602482015260440161053d565b6106508a8a8a610696565b50505050505050505050565b6001600160a01b0382166106865760405163ec442f0560e01b81526000600482015260240161053d565b6106926000838361099c565b5050565b6106a38383836001610ac6565b505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811015610721578181101561071257604051637dc7a0d960e11b81526001600160a01b0384166004820152602481018290526044810183905260640161053d565b61072184848484036000610ac6565b50505050565b6001600160a01b03831661075157604051634b637e8f60e11b81526000600482015260240161053d565b6001600160a01b03821661077b5760405163ec442f0560e01b81526000600482015260240161053d565b6106a383838361099c565b6001600160a01b0382166107b057604051634b637e8f60e11b81526000600482015260240161053d565b6106928260008361099c565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561081557507f000000000000000000000000000000000000000000000000000000000000000046145b1561083f57507f000000000000000000000000000000000000000000000000000000000000000090565b610497604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60606104977f00000000000000000000000000000000000000000000000000000000000000006005610b9b565b60606104977f00000000000000000000000000000000000000000000000000000000000000006006610b9b565b60006103f361094e6107bc565b8360405161190160f01b8152600281019290925260228201526042902090565b60008060008061098088888888610c46565b9250925092506109908282610d15565b50909695505050505050565b6001600160a01b0383166109c75780600260008282546109bc91906110c4565b90915550610a399050565b6001600160a01b03831660009081526020819052604090205481811015610a1a5760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161053d565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610a5557600280548290039055610a74565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ab991815260200190565b60405180910390a3505050565b6001600160a01b038416610af05760405163e602df0560e01b81526000600482015260240161053d565b6001600160a01b038316610b1a57604051634a1406b160e11b81526000600482015260240161053d565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561072157826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610b8d91815260200190565b60405180910390a350505050565b606060ff8314610bb557610bae83610dce565b90506103f3565b818054610bc19061108a565b80601f0160208091040260200160405190810160405280929190818152602001828054610bed9061108a565b8015610c3a5780601f10610c0f57610100808354040283529160200191610c3a565b820191906000526020600020905b815481529060010190602001808311610c1d57829003601f168201915b505050505090506103f3565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115610c815750600091506003905082610d0b565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015610cd5573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610d0157506000925060019150829050610d0b565b9250600091508190505b9450945094915050565b6000826003811115610d2957610d296110e5565b03610d32575050565b6001826003811115610d4657610d466110e5565b03610d645760405163f645eedf60e01b815260040160405180910390fd5b6002826003811115610d7857610d786110e5565b03610d995760405163fce698f760e01b81526004810182905260240161053d565b6003826003811115610dad57610dad6110e5565b03610692576040516335e2f38360e21b81526004810182905260240161053d565b60606000610ddb83610e0d565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600060ff8216601f8111156103f357604051632cd44ac360e21b815260040160405180910390fd5b6000815180845260005b81811015610e5b57602081850181015186830182015201610e3f565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610e8e6020830184610e35565b9392505050565b80356001600160a01b0381168114610eac57600080fd5b919050565b60008060408385031215610ec457600080fd5b610ecd83610e95565b946020939093013593505050565b600080600060608486031215610ef057600080fd5b610ef984610e95565b9250610f0760208501610e95565b929592945050506040919091013590565b600060208284031215610f2a57600080fd5b5035919050565b600060208284031215610f4357600080fd5b610e8e82610e95565b60ff60f81b8816815260e060208201526000610f6b60e0830189610e35565b8281036040840152610f7d8189610e35565b606084018890526001600160a01b038716608085015260a0840186905283810360c08501528451808252602080870193509091019060005b81811015610fd3578351835260209384019390920191600101610fb5565b50909b9a5050505050505050505050565b600080600080600080600060e0888a031215610fff57600080fd5b61100888610e95565b965061101660208901610e95565b95506040880135945060608801359350608088013560ff8116811461103a57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561106a57600080fd5b61107383610e95565b915061108160208401610e95565b90509250929050565b600181811c9082168061109e57607f821691505b6020821081036110be57634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156103f357634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fdfea2646970667358221220ff4f3ed7ea519aa294fb44bef8d90ecc77bfdfaa535ec7b529d78116001182c664736f6c634300081e0033";
const isSuperArgs$1 = (xs) => xs.length > 1;
class WETH__factory extends ContractFactory {
  constructor(...args) {
    if (isSuperArgs$1(args)) {
      super(...args);
    } else {
      super(_abi$1, _bytecode$1, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$1;
  static abi = _abi$1;
  static createInterface() {
    return new Interface(_abi$1);
  }
  static connect(address, runner) {
    return new Contract(address, _abi$1, runner);
  }
}

var index$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  WETH__factory: WETH__factory
});

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "supply_",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256"
      }
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientAllowance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC20InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC20InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSpender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      }
    ],
    name: "ERC2612ExpiredSignature",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "ERC2612InvalidSigner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "currentNonce",
        type: "uint256"
      }
    ],
    name: "InvalidAccountNonce",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string"
      }
    ],
    name: "StringTooLong",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256"
      }
    ],
    name: "Deposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256"
      }
    ],
    name: "Withdrawal",
    type: "event"
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1"
      },
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "version",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8"
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
];
const _bytecode = "0x61016060405234801561001157600080fd5b5060405161170438038061170483398101604081905261003091610370565b6040518060400160405280600d81526020016c2bb930b83832b21022ba3432b960991b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600d81526020016c2bb930b83832b21022ba3432b960991b815250604051806040016040528060048152602001630ae8aa8960e31b81525081600390816100c39190610428565b5060046100d08282610428565b506100e091508390506005610196565b610120526100ef816006610196565b61014052815160208084019190912060e052815190820120610100524660a05261017c60e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c0525061019033826101c9565b50610579565b60006020835110156101b2576101ab83610208565b90506101c3565b816101bd8482610428565b5060ff90505b92915050565b6001600160a01b0382166101f85760405163ec442f0560e01b8152600060048201526024015b60405180910390fd5b61020460008383610246565b5050565b600080829050601f81511115610233578260405163305a27a960e01b81526004016101ef91906104e6565b805161023e82610534565b179392505050565b6001600160a01b0383166102715780600260008282546102669190610558565b909155506102e39050565b6001600160a01b038316600090815260208190526040902054818110156102c45760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016101ef565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166102ff5760028054829003905561031e565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161036391815260200190565b60405180910390a3505050565b60006020828403121561038257600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806103b357607f821691505b6020821081036103d357634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561042357806000526020600020601f840160051c810160208510156104005750805b601f840160051c820191505b81811015610420576000815560010161040c565b50505b505050565b81516001600160401b0381111561044157610441610389565b6104558161044f845461039f565b846103d9565b6020601f82116001811461048957600083156104715750848201515b600019600385901b1c1916600184901b178455610420565b600084815260208120601f198516915b828110156104b95787850151825560209485019460019092019101610499565b50848210156104d75786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b602081526000825180602084015260005b8181101561051457602081860181015160408684010152016104f7565b506000604082850101526040601f19601f83011684010191505092915050565b805160208083015191908110156103d35760001960209190910360031b1b16919050565b808201808211156101c357634e487b7160e01b600052601160045260246000fd5b60805160a05160c05160e0516101005161012051610140516111316105d3600039600061091b015260006108ee015260006108960152600061086e015260006107c9015260006107f30152600061081d01526111316000f3fe6080604052600436106100ec5760003560e01c806370a082311161008a578063a9059cbb11610059578063a9059cbb1461027e578063d0e30db01461029e578063d505accf146102a6578063dd62ed3e146102c657600080fd5b806370a08231146101eb5780637ecebe001461022157806384b0196e1461024157806395d89b411461026957600080fd5b806323b872dd116100c657806323b872dd1461017a5780632e1a7d4d1461019a578063313ce567146101ba5780633644e515146101d657600080fd5b806306fdde0314610100578063095ea7b31461012b57806318160ddd1461015b57600080fd5b366100fb576100f961030c565b005b600080fd5b34801561010c57600080fd5b5061011561034d565b6040516101229190610e7b565b60405180910390f35b34801561013757600080fd5b5061014b610146366004610eb1565b6103df565b6040519015158152602001610122565b34801561016757600080fd5b506002545b604051908152602001610122565b34801561018657600080fd5b5061014b610195366004610edb565b6103f9565b3480156101a657600080fd5b506100f96101b5366004610f18565b61041d565b3480156101c657600080fd5b5060405160128152602001610122565b3480156101e257600080fd5b5061016c61048d565b3480156101f757600080fd5b5061016c610206366004610f31565b6001600160a01b031660009081526020819052604090205490565b34801561022d57600080fd5b5061016c61023c366004610f31565b61049c565b34801561024d57600080fd5b506102566104ba565b6040516101229796959493929190610f4c565b34801561027557600080fd5b50610115610500565b34801561028a57600080fd5b5061014b610299366004610eb1565b61050f565b6100f961030c565b3480156102b257600080fd5b506100f96102c1366004610fe4565b61051d565b3480156102d257600080fd5b5061016c6102e1366004611057565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610316333461065c565b60405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b60606003805461035c9061108a565b80601f01602080910402602001604051908101604052809291908181526020018280546103889061108a565b80156103d55780601f106103aa576101008083540402835291602001916103d5565b820191906000526020600020905b8154815290600101906020018083116103b857829003601f168201915b5050505050905090565b6000336103ed818585610696565b60019150505b92915050565b6000336104078582856106a8565b610412858585610727565b506001949350505050565b6104273382610786565b604051339082156108fc029083906000818181858888f19350505050158015610454573d6000803e3d6000fd5b5060405181815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a250565b60006104976107bc565b905090565b6001600160a01b0381166000908152600760205260408120546103f3565b6000606080600080600060606104ce6108e7565b6104d6610914565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b60606004805461035c9061108a565b6000336103ed818585610727565b834211156105465760405163313c898160e11b8152600481018590526024015b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886105938c6001600160a01b0316600090815260076020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006105ee82610941565b905060006105fe8287878761096e565b9050896001600160a01b0316816001600160a01b031614610645576040516325c0072360e11b81526001600160a01b0380831660048301528b16602482015260440161053d565b6106508a8a8a610696565b50505050505050505050565b6001600160a01b0382166106865760405163ec442f0560e01b81526000600482015260240161053d565b6106926000838361099c565b5050565b6106a38383836001610ac6565b505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811015610721578181101561071257604051637dc7a0d960e11b81526001600160a01b0384166004820152602481018290526044810183905260640161053d565b61072184848484036000610ac6565b50505050565b6001600160a01b03831661075157604051634b637e8f60e11b81526000600482015260240161053d565b6001600160a01b03821661077b5760405163ec442f0560e01b81526000600482015260240161053d565b6106a383838361099c565b6001600160a01b0382166107b057604051634b637e8f60e11b81526000600482015260240161053d565b6106928260008361099c565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561081557507f000000000000000000000000000000000000000000000000000000000000000046145b1561083f57507f000000000000000000000000000000000000000000000000000000000000000090565b610497604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60606104977f00000000000000000000000000000000000000000000000000000000000000006005610b9b565b60606104977f00000000000000000000000000000000000000000000000000000000000000006006610b9b565b60006103f361094e6107bc565b8360405161190160f01b8152600281019290925260228201526042902090565b60008060008061098088888888610c46565b9250925092506109908282610d15565b50909695505050505050565b6001600160a01b0383166109c75780600260008282546109bc91906110c4565b90915550610a399050565b6001600160a01b03831660009081526020819052604090205481811015610a1a5760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161053d565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610a5557600280548290039055610a74565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ab991815260200190565b60405180910390a3505050565b6001600160a01b038416610af05760405163e602df0560e01b81526000600482015260240161053d565b6001600160a01b038316610b1a57604051634a1406b160e11b81526000600482015260240161053d565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561072157826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610b8d91815260200190565b60405180910390a350505050565b606060ff8314610bb557610bae83610dce565b90506103f3565b818054610bc19061108a565b80601f0160208091040260200160405190810160405280929190818152602001828054610bed9061108a565b8015610c3a5780601f10610c0f57610100808354040283529160200191610c3a565b820191906000526020600020905b815481529060010190602001808311610c1d57829003601f168201915b505050505090506103f3565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115610c815750600091506003905082610d0b565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015610cd5573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610d0157506000925060019150829050610d0b565b9250600091508190505b9450945094915050565b6000826003811115610d2957610d296110e5565b03610d32575050565b6001826003811115610d4657610d466110e5565b03610d645760405163f645eedf60e01b815260040160405180910390fd5b6002826003811115610d7857610d786110e5565b03610d995760405163fce698f760e01b81526004810182905260240161053d565b6003826003811115610dad57610dad6110e5565b03610692576040516335e2f38360e21b81526004810182905260240161053d565b60606000610ddb83610e0d565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600060ff8216601f8111156103f357604051632cd44ac360e21b815260040160405180910390fd5b6000815180845260005b81811015610e5b57602081850181015186830182015201610e3f565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610e8e6020830184610e35565b9392505050565b80356001600160a01b0381168114610eac57600080fd5b919050565b60008060408385031215610ec457600080fd5b610ecd83610e95565b946020939093013593505050565b600080600060608486031215610ef057600080fd5b610ef984610e95565b9250610f0760208501610e95565b929592945050506040919091013590565b600060208284031215610f2a57600080fd5b5035919050565b600060208284031215610f4357600080fd5b610e8e82610e95565b60ff60f81b8816815260e060208201526000610f6b60e0830189610e35565b8281036040840152610f7d8189610e35565b606084018890526001600160a01b038716608085015260a0840186905283810360c08501528451808252602080870193509091019060005b81811015610fd3578351835260209384019390920191600101610fb5565b50909b9a5050505050505050505050565b600080600080600080600060e0888a031215610fff57600080fd5b61100888610e95565b965061101660208901610e95565b95506040880135945060608801359350608088013560ff8116811461103a57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561106a57600080fd5b61107383610e95565b915061108160208401610e95565b90509250929050565b600181811c9082168061109e57607f821691505b6020821081036110be57634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156103f357634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fdfea2646970667358221220011784be22d21a5393259be1edb3e65c94cb967e0b3f88f40ac6109732abd51c64736f6c634300081e0033";
const isSuperArgs = (xs) => xs.length > 1;
class WETHMock__factory extends ContractFactory {
  constructor(...args) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }
  getDeployTransaction(supply_, overrides) {
    return super.getDeployTransaction(supply_, overrides || {});
  }
  deploy(supply_, overrides) {
    return super.deploy(supply_, overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode;
  static abi = _abi;
  static createInterface() {
    return new Interface(_abi);
  }
  static connect(address, runner) {
    return new Contract(address, _abi, runner);
  }
}

var index$4 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  WETHMock__factory: WETHMock__factory
});

var index$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  erc20LockableSol: index$8,
  erc20MockSol: index$7,
  erc4626PoolSol: index$6,
  wethMockSol: index$4,
  wethSol: index$5
});

var index$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  interfaces: index$n,
  libraries: index$j,
  lockSol: index$B,
  oracle: index$f,
  pools: index$b,
  proxy: index$9,
  tokens: index$3
});

var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  contracts: index$2,
  openzeppelin: index$C
});

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Address__factory: Address__factory,
  Clones__factory: Clones__factory,
  ContextUpgradeable__factory: ContextUpgradeable__factory,
  Create2__factory: Create2__factory,
  DataFeed__factory: DataFeed__factory,
  ECDSA__factory: ECDSA__factory,
  EIP712Upgradeable__factory: EIP712Upgradeable__factory,
  EIP712__factory: EIP712__factory,
  ERC165__factory: ERC165__factory,
  ERC1967Utils__factory: ERC1967Utils__factory,
  ERC20Burnable__factory: ERC20Burnable__factory,
  ERC20Lockable__factory: ERC20Lockable__factory,
  ERC20Mock__factory: ERC20Mock__factory,
  ERC20PermitUpgradeable__factory: ERC20PermitUpgradeable__factory,
  ERC20Permit__factory: ERC20Permit__factory,
  ERC20Upgradeable__factory: ERC20Upgradeable__factory,
  ERC20__factory: ERC20__factory,
  ERC4626Pool__factory: ERC4626Pool__factory,
  ERC4626Upgradeable__factory: ERC4626Upgradeable__factory,
  Errors__factory: Errors__factory,
  IBeacon__factory: IBeacon__factory,
  IDataFeed__factory: IDataFeed__factory,
  IERC1155Errors__factory: IERC1155Errors__factory,
  IERC1363__factory: IERC1363__factory,
  IERC165__factory: IERC165__factory,
  IERC1967__factory: IERC1967__factory,
  IERC20Errors__factory: IERC20Errors__factory,
  IERC20Exp__factory: IERC20Exp__factory,
  IERC20Lockable__factory: IERC20Lockable__factory,
  IERC20Metadata__factory: IERC20Metadata__factory,
  IERC20Mintable__factory: IERC20Mintable__factory,
  IERC20Permit__factory: IERC20Permit__factory,
  IERC20__factory: IERC20__factory,
  IERC4626Pool__factory: IERC4626Pool__factory,
  IERC4626__factory: IERC4626__factory,
  IERC5267__factory: IERC5267__factory,
  IERC721Errors__factory: IERC721Errors__factory,
  IInitializableProxy__factory: IInitializableProxy__factory,
  IMasterChef__factory: IMasterChef__factory,
  IMasterPool__factory: IMasterPool__factory,
  IRewardVault__factory: IRewardVault__factory,
  IUniswapV2Factory__factory: IUniswapV2Factory__factory,
  IUniswapV2Pair__factory: IUniswapV2Pair__factory,
  IV2SwapFeed__factory: IV2SwapFeed__factory,
  IWETH__factory: IWETH__factory,
  InitializableProxy__factory: InitializableProxy__factory,
  Initializable__factory: Initializable__factory,
  Lock__factory: Lock__factory,
  MasterChef__factory: MasterChef__factory,
  MasterPool__factory: MasterPool__factory,
  NoncesUpgradeable__factory: NoncesUpgradeable__factory,
  Nonces__factory: Nonces__factory,
  OwnableUpgradeable__factory: OwnableUpgradeable__factory,
  Ownable__factory: Ownable__factory,
  Proxy__factory: Proxy__factory,
  ReentrancyGuardUpgradeable__factory: ReentrancyGuardUpgradeable__factory,
  RewardVault__factory: RewardVault__factory,
  SafeCast__factory: SafeCast__factory,
  SafeERC20__factory: SafeERC20__factory,
  ShortStrings__factory: ShortStrings__factory,
  SigLib__factory: SigLib__factory,
  Strings__factory: Strings__factory,
  V2SwapFeedFactory__factory: V2SwapFeedFactory__factory,
  V2SwapFeed__factory: V2SwapFeed__factory,
  WETHMock__factory: WETHMock__factory,
  WETH__factory: WETH__factory,
  WithSettler__factory: WithSettler__factory,
  factories: index$1
});

const SECOND_PER_YEAR = 31622400;
function getFarmApr(rewardsPerSec, rewardTokenUSD, stakingTokenUSD, totalStakedBalance) {
  const yearlyRewards = SECOND_PER_YEAR * rewardsPerSec;
  const rewardsApr = yearlyRewards * rewardTokenUSD * 100 / (stakingTokenUSD * totalStakedBalance);
  return rewardsApr;
}

var Networks = /* @__PURE__ */ ((Networks2) => {
  Networks2[Networks2["MAINNET"] = 1] = "MAINNET";
  Networks2[Networks2["ARBITRUM_SEPOLIA"] = 421614] = "ARBITRUM_SEPOLIA";
  return Networks2;
})(Networks || {});
function findFarmByToken(config, tokenAddress) {
  return config.pools.find((f) => f.address === tokenAddress);
}
function getContractConfig(config, runner) {
  return {
    ...config,
    masterChef: MasterChef__factory.connect(config.masterChef, runner),
    rewardToken: {
      ...config.rewardToken,
      token: ERC20Mock__factory.connect(config.rewardToken.address, runner),
      oracle: IDataFeed__factory.connect(config.rewardToken.oracle, runner)
    },
    WETH: {
      ...config.WETH,
      token: ERC20Mock__factory.connect(config.WETH.address, runner),
      oracle: IDataFeed__factory.connect(config.WETH.oracle, runner)
    },
    pools: config.pools.map((pool) => {
      return {
        ...pool,
        token: ERC20Mock__factory.connect(pool.address, runner),
        oracle: IDataFeed__factory.connect(pool.oracle, runner)
      };
    })
  };
}
function getTotalRewards(config, timestamp) {
  const rewardFromTimestamp = config.rewardFromTimestamp || timestamp || 0;
  const rewardToTimestamp = (config.rewardToTimestamp || timestamp || 0) + SECOND_PER_YEAR;
  const rewardSeconds = rewardToTimestamp - rewardFromTimestamp || SECOND_PER_YEAR;
  const initRewardsPerSec = config.initRewardsPerSec || 1;
  const halvingInterval = config.halvingInterval || 0;
  const halvingRate = config.halvingRate || (halvingInterval ? 50 : 0);
  let totalRewards = 0;
  let rewards = Number(initRewardsPerSec);
  let localFrom = Number(rewardFromTimestamp);
  let halvingNumber = 0;
  if (halvingInterval) {
    while (localFrom < rewardToTimestamp && halvingNumber < 100) {
      const nextHalvingTime = rewardFromTimestamp + (halvingNumber + 1) * halvingInterval;
      const periodEnd = rewardToTimestamp < nextHalvingTime ? rewardToTimestamp : nextHalvingTime;
      totalRewards += (periodEnd - localFrom) * rewards;
      localFrom = periodEnd;
      rewards = rewards * (halvingRate || 50) / 100;
      halvingNumber++;
    }
  } else {
    totalRewards = rewardSeconds * initRewardsPerSec;
  }
  return {
    initRewardsPerSec,
    rewardFromTimestamp,
    rewardToTimestamp,
    halvingRate,
    halvingInterval,
    totalRewards
  };
}

async function getFarmStats(config) {
  const {
    rewardToken: { token: rewardToken, oracle: rewardTokenOracle }
  } = config;
  const [rewardTokenDecimals, rewardOracleDecimals, rewardTokenUsd] = await Promise.all([
    rewardToken.decimals().then((d) => Number(d)),
    rewardTokenOracle.decimals().then((d) => Number(d)),
    rewardTokenOracle.latestAnswer()
  ]);
  return {
    rewardTokenDecimals,
    rewardTokenUsd: Number(formatUnits(rewardTokenUsd, rewardOracleDecimals))
  };
}
async function getFarms(config, user) {
  const { masterChef } = config;
  const userAddress = user?.address || user;
  const [{ rewardTokenUsd, rewardTokenDecimals }, ...poolData] = await Promise.all([
    getFarmStats(config),
    ...config.pools.map(async (pool) => {
      const [
        poolInfo,
        rewardsPerSecBN,
        oracleDecimals,
        oracleUsd,
        tokenDecimals,
        poolBalance,
        userBalance,
        stakedBalance,
        pendingRewardsBN
      ] = await Promise.all([
        masterChef.poolInfo(pool.pid),
        masterChef.getPoolRewardsPerSec(pool.pid),
        pool.oracle.decimals().then((d) => Number(d)),
        pool.oracle.latestAnswer(),
        pool.token.decimals().then((d) => Number(d)),
        pool.token.balanceOf(masterChef.target),
        userAddress ? pool.token.balanceOf(userAddress) : 0n,
        userAddress ? masterChef.userInfo(pool.pid, userAddress).then((u) => u.amount) : 0n,
        userAddress ? masterChef.pendingRewards(pool.pid, userAddress) : 0n
      ]);
      const allocPoint = Number(poolInfo.allocPoint);
      const stakingTokenUsd = Number(formatUnits(oracleUsd, oracleDecimals));
      const totalStakedBalance = Number(formatUnits(poolBalance, tokenDecimals));
      const totalStakedUSD = totalStakedBalance * stakingTokenUsd;
      const userTokenBalance = Number(formatUnits(userBalance, tokenDecimals));
      const userTokenUSD = userTokenBalance * stakingTokenUsd;
      const userStakedBalance = Number(formatUnits(stakedBalance, tokenDecimals));
      const userStakedUSD = userStakedBalance * stakingTokenUsd;
      const apr = 0;
      return {
        ...pool,
        allocPoint,
        stakingTokenUsd,
        totalStakedBalance,
        totalStakedUSD,
        userTokenBalance,
        userTokenUSD,
        userStakedBalance,
        userStakedUSD,
        apr,
        rewardsPerSecBN,
        pendingRewardsBN
      };
    })
  ]);
  return poolData.map((p) => {
    const userPendingRewards = Number(formatUnits(p.pendingRewardsBN, rewardTokenDecimals));
    const userPendingRewardsUSD = userPendingRewards * rewardTokenUsd;
    const rewardsPerSec = Number(formatUnits(p.rewardsPerSecBN, rewardTokenDecimals));
    delete p.rewardsPerSecBN;
    return {
      ...p,
      userPendingRewards,
      userPendingRewardsUSD,
      rewardsPerSec,
      apr: getFarmApr(rewardsPerSec, rewardTokenUsd, p.stakingTokenUsd, p.totalStakedBalance)
    };
  });
}

export { Networks, SECOND_PER_YEAR, index as contracts, findFarmByToken, getContractConfig, getFarmApr, getFarmStats, getFarms, getTotalRewards };
