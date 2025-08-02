'use strict';

var ethers = require('ethers');

const _abi$V = [
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
class Ownable__factory {
  static abi = _abi$V;
  static createInterface() {
    return new ethers.Interface(_abi$V);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$V, runner);
  }
}

var index$1l = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Ownable__factory: Ownable__factory
});

var index$1k = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ownableSol: index$1l
});

const _abi$U = [
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
  static abi = _abi$U;
  static createInterface() {
    return new ethers.Interface(_abi$U);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$U, runner);
  }
}

var index$1j = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC1363__factory: IERC1363__factory
});

const _abi$T = [
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
  static abi = _abi$T;
  static createInterface() {
    return new ethers.Interface(_abi$T);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$T, runner);
  }
}

var index$1i = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC1967__factory: IERC1967__factory
});

const _abi$S = [
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
  static abi = _abi$S;
  static createInterface() {
    return new ethers.Interface(_abi$S);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$S, runner);
  }
};

var index$1h = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC4626__factory: IERC4626__factory$1
});

const _abi$R = [
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
  static abi = _abi$R;
  static createInterface() {
    return new ethers.Interface(_abi$R);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$R, runner);
  }
}

var index$1g = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC5267__factory: IERC5267__factory
});

const _abi$Q = [
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
  static abi = _abi$Q;
  static createInterface() {
    return new ethers.Interface(_abi$Q);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$Q, runner);
  }
}

const _abi$P = [
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
  static abi = _abi$P;
  static createInterface() {
    return new ethers.Interface(_abi$P);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$P, runner);
  }
}

const _abi$O = [
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
  static abi = _abi$O;
  static createInterface() {
    return new ethers.Interface(_abi$O);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$O, runner);
  }
}

var index$1f = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC1155Errors__factory: IERC1155Errors__factory,
  IERC20Errors__factory: IERC20Errors__factory,
  IERC721Errors__factory: IERC721Errors__factory
});

var index$1e = /*#__PURE__*/Object.freeze({
  __proto__: null,
  draftIerc6093Sol: index$1f,
  ierc1363Sol: index$1j,
  ierc1967Sol: index$1i,
  ierc4626Sol: index$1h,
  ierc5267Sol: index$1g
});

const _abi$N = [
  {
    inputs: [],
    name: "CloneArgumentsTooLong",
    type: "error"
  }
];
const _bytecode$j = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122039e9346b8eebd598e8a95fceb2ff6d264881156657ef34276dd2d09e1d933f1a64736f6c634300081e0033";
const isSuperArgs$j = (xs) => xs.length > 1;
class Clones__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$j(args)) {
      super(...args);
    } else {
      super(_abi$N, _bytecode$j, args[0]);
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
  static abi = _abi$N;
  static createInterface() {
    return new ethers.Interface(_abi$N);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$N, runner);
  }
}

var index$1d = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Clones__factory: Clones__factory
});

const _abi$M = [
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
const _bytecode$i = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212200157b0640511e14f579bbe52ffe7d75d1e4c8d72819a054c2c4b690db18e4b2564736f6c634300081e0033";
const isSuperArgs$i = (xs) => xs.length > 1;
class ERC1967Utils__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$i(args)) {
      super(...args);
    } else {
      super(_abi$M, _bytecode$i, args[0]);
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
  static abi = _abi$M;
  static createInterface() {
    return new ethers.Interface(_abi$M);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$M, runner);
  }
}

var index$1c = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ERC1967Utils__factory: ERC1967Utils__factory
});

var index$1b = /*#__PURE__*/Object.freeze({
  __proto__: null,
  erc1967UtilsSol: index$1c
});

const _abi$L = [
  {
    stateMutability: "payable",
    type: "fallback"
  }
];
class Proxy__factory {
  static abi = _abi$L;
  static createInterface() {
    return new ethers.Interface(_abi$L);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$L, runner);
  }
}

var index$1a = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Proxy__factory: Proxy__factory
});

const _abi$K = [
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
  static abi = _abi$K;
  static createInterface() {
    return new ethers.Interface(_abi$K);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$K, runner);
  }
}

var index$19 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IBeacon__factory: IBeacon__factory
});

var index$18 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  iBeaconSol: index$19
});

var index$17 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  beacon: index$18,
  clonesSol: index$1d,
  erc1967: index$1b,
  proxySol: index$1a
});

const _abi$J = [
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
  static abi = _abi$J;
  static createInterface() {
    return new ethers.Interface(_abi$J);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$J, runner);
  }
}

var index$16 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ERC20__factory: ERC20__factory
});

const _abi$I = [
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
  static abi = _abi$I;
  static createInterface() {
    return new ethers.Interface(_abi$I);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$I, runner);
  }
}

var index$15 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC20__factory: IERC20__factory
});

const _abi$H = [
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
  static abi = _abi$H;
  static createInterface() {
    return new ethers.Interface(_abi$H);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$H, runner);
  }
}

var index$14 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ERC20Burnable__factory: ERC20Burnable__factory
});

const _abi$G = [
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
  static abi = _abi$G;
  static createInterface() {
    return new ethers.Interface(_abi$G);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$G, runner);
  }
}

var index$13 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ERC20Permit__factory: ERC20Permit__factory
});

const _abi$F = [
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
  static abi = _abi$F;
  static createInterface() {
    return new ethers.Interface(_abi$F);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$F, runner);
  }
}

var index$12 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC20Metadata__factory: IERC20Metadata__factory
});

const _abi$E = [
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
  static abi = _abi$E;
  static createInterface() {
    return new ethers.Interface(_abi$E);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$E, runner);
  }
}

var index$11 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC20Permit__factory: IERC20Permit__factory
});

var index$10 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  erc20BurnableSol: index$14,
  erc20PermitSol: index$13,
  ierc20MetadataSol: index$12,
  ierc20PermitSol: index$11
});

const _abi$D = [
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
const _bytecode$h = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212206c464a7c65eaa243906b4e78cb62a8bd54bbb7be7f21bf08ec1bb71ec4d773d264736f6c634300081e0033";
const isSuperArgs$h = (xs) => xs.length > 1;
class SafeERC20__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$h(args)) {
      super(...args);
    } else {
      super(_abi$D, _bytecode$h, args[0]);
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
  static abi = _abi$D;
  static createInterface() {
    return new ethers.Interface(_abi$D);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$D, runner);
  }
}

var index$$ = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SafeERC20__factory: SafeERC20__factory
});

var index$_ = /*#__PURE__*/Object.freeze({
  __proto__: null,
  safeErc20Sol: index$$
});

var index$Z = /*#__PURE__*/Object.freeze({
  __proto__: null,
  erc20Sol: index$16,
  extensions: index$10,
  ierc20Sol: index$15,
  utils: index$_
});

var index$Y = /*#__PURE__*/Object.freeze({
  __proto__: null,
  erc20: index$Z
});

const _abi$C = [
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
const _bytecode$g = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b431bded8d4310738b0960a7232e0993cb784585ff96633fea8a8e670972989264736f6c634300081e0033";
const isSuperArgs$g = (xs) => xs.length > 1;
class Address__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$g(args)) {
      super(...args);
    } else {
      super(_abi$C, _bytecode$g, args[0]);
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
  static abi = _abi$C;
  static createInterface() {
    return new ethers.Interface(_abi$C);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$C, runner);
  }
}

var index$X = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Address__factory: Address__factory
});

const _abi$B = [
  {
    inputs: [],
    name: "Create2EmptyBytecode",
    type: "error"
  }
];
const _bytecode$f = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220edca4b88d78b50110d0cb08db3e692a46532ac38b866efd3ef98f2059df230e064736f6c634300081e0033";
const isSuperArgs$f = (xs) => xs.length > 1;
class Create2__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$f(args)) {
      super(...args);
    } else {
      super(_abi$B, _bytecode$f, args[0]);
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
  static abi = _abi$B;
  static createInterface() {
    return new ethers.Interface(_abi$B);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$B, runner);
  }
}

var index$W = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Create2__factory: Create2__factory
});

const _abi$A = [
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
const _bytecode$e = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122058c7529d153477542a4ea14888faf624240303d75499d31fa05ac048ae69ebe464736f6c634300081e0033";
const isSuperArgs$e = (xs) => xs.length > 1;
class Errors__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$e(args)) {
      super(...args);
    } else {
      super(_abi$A, _bytecode$e, args[0]);
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
  static abi = _abi$A;
  static createInterface() {
    return new ethers.Interface(_abi$A);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$A, runner);
  }
}

var index$V = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Errors__factory: Errors__factory
});

const _abi$z = [
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
  static abi = _abi$z;
  static createInterface() {
    return new ethers.Interface(_abi$z);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$z, runner);
  }
}

var index$U = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Nonces__factory: Nonces__factory
});

const _abi$y = [
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
const _bytecode$d = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220157ddc474d7d1d724783f12f40ae36c5173b34bab84ac91022185a7e2600b59864736f6c634300081e0033";
const isSuperArgs$d = (xs) => xs.length > 1;
class ShortStrings__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$d(args)) {
      super(...args);
    } else {
      super(_abi$y, _bytecode$d, args[0]);
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
  static bytecode = _bytecode$d;
  static abi = _abi$y;
  static createInterface() {
    return new ethers.Interface(_abi$y);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$y, runner);
  }
}

var index$T = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ShortStrings__factory: ShortStrings__factory
});

const _abi$x = [
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
const _bytecode$c = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122062ba1422d890f5918591de650c3dd67443c14c2bb6fd372105365d22b9cfb4d364736f6c634300081e0033";
const isSuperArgs$c = (xs) => xs.length > 1;
class Strings__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$c(args)) {
      super(...args);
    } else {
      super(_abi$x, _bytecode$c, args[0]);
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
  static abi = _abi$x;
  static createInterface() {
    return new ethers.Interface(_abi$x);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$x, runner);
  }
}

var index$S = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Strings__factory: Strings__factory
});

const _abi$w = [
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
const _bytecode$b = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122056dcadb6d15742cad6468dd89174169713f63d317d129733ad4716b164a0041364736f6c634300081e0033";
const isSuperArgs$b = (xs) => xs.length > 1;
class ECDSA__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$b(args)) {
      super(...args);
    } else {
      super(_abi$w, _bytecode$b, args[0]);
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
  static abi = _abi$w;
  static createInterface() {
    return new ethers.Interface(_abi$w);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$w, runner);
  }
}

var index$R = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ECDSA__factory: ECDSA__factory
});

const _abi$v = [
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
  static abi = _abi$v;
  static createInterface() {
    return new ethers.Interface(_abi$v);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$v, runner);
  }
}

var index$Q = /*#__PURE__*/Object.freeze({
  __proto__: null,
  EIP712__factory: EIP712__factory
});

var index$P = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ecdsaSol: index$R,
  eip712Sol: index$Q
});

const _abi$u = [
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
  static abi = _abi$u;
  static createInterface() {
    return new ethers.Interface(_abi$u);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$u, runner);
  }
}

var index$O = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC165__factory: IERC165__factory
});

var index$N = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ierc165Sol: index$O
});

const _abi$t = [
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
const _bytecode$a = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212200fb3822217d46040f28b88745db7ae5d02c50736452cf773f126fd79237f4cc764736f6c634300081e0033";
const isSuperArgs$a = (xs) => xs.length > 1;
class SafeCast__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$a(args)) {
      super(...args);
    } else {
      super(_abi$t, _bytecode$a, args[0]);
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
  static abi = _abi$t;
  static createInterface() {
    return new ethers.Interface(_abi$t);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$t, runner);
  }
}

var index$M = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SafeCast__factory: SafeCast__factory
});

var index$L = /*#__PURE__*/Object.freeze({
  __proto__: null,
  safeCastSol: index$M
});

var index$K = /*#__PURE__*/Object.freeze({
  __proto__: null,
  addressSol: index$X,
  create2Sol: index$W,
  cryptography: index$P,
  errorsSol: index$V,
  introspection: index$N,
  math: index$L,
  noncesSol: index$U,
  shortStringsSol: index$T,
  stringsSol: index$S
});

var index$J = /*#__PURE__*/Object.freeze({
  __proto__: null,
  access: index$1k,
  interfaces: index$1e,
  proxy: index$17,
  token: index$Y,
  utils: index$K
});

const _abi$s = [
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
  static abi = _abi$s;
  static createInterface() {
    return new ethers.Interface(_abi$s);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$s, runner);
  }
}

var index$I = /*#__PURE__*/Object.freeze({
  __proto__: null,
  OwnableUpgradeable__factory: OwnableUpgradeable__factory
});

var index$H = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ownableUpgradeableSol: index$I
});

const _abi$r = [
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
  static abi = _abi$r;
  static createInterface() {
    return new ethers.Interface(_abi$r);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$r, runner);
  }
}

var index$G = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Initializable__factory: Initializable__factory
});

var index$F = /*#__PURE__*/Object.freeze({
  __proto__: null,
  initializableSol: index$G
});

var index$E = /*#__PURE__*/Object.freeze({
  __proto__: null,
  utils: index$F
});

const _abi$q = [
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
  static abi = _abi$q;
  static createInterface() {
    return new ethers.Interface(_abi$q);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$q, runner);
  }
}

var index$D = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ERC20Upgradeable__factory: ERC20Upgradeable__factory
});

const _abi$p = [
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
  static abi = _abi$p;
  static createInterface() {
    return new ethers.Interface(_abi$p);
  }
  static connect(address, runner) {
    return new ethers.Contract(
      address,
      _abi$p,
      runner
    );
  }
}

var index$C = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ERC20PermitUpgradeable__factory: ERC20PermitUpgradeable__factory
});

const _abi$o = [
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
  static abi = _abi$o;
  static createInterface() {
    return new ethers.Interface(_abi$o);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$o, runner);
  }
}

var index$B = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ERC4626Upgradeable__factory: ERC4626Upgradeable__factory
});

var index$A = /*#__PURE__*/Object.freeze({
  __proto__: null,
  erc20PermitUpgradeableSol: index$C,
  erc4626UpgradeableSol: index$B
});

var index$z = /*#__PURE__*/Object.freeze({
  __proto__: null,
  erc20UpgradeableSol: index$D,
  extensions: index$A
});

var index$y = /*#__PURE__*/Object.freeze({
  __proto__: null,
  erc20: index$z
});

const _abi$n = [
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
  static abi = _abi$n;
  static createInterface() {
    return new ethers.Interface(_abi$n);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$n, runner);
  }
}

var index$x = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ContextUpgradeable__factory: ContextUpgradeable__factory
});

const _abi$m = [
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
  static abi = _abi$m;
  static createInterface() {
    return new ethers.Interface(_abi$m);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$m, runner);
  }
}

var index$w = /*#__PURE__*/Object.freeze({
  __proto__: null,
  NoncesUpgradeable__factory: NoncesUpgradeable__factory
});

const _abi$l = [
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
  static abi = _abi$l;
  static createInterface() {
    return new ethers.Interface(_abi$l);
  }
  static connect(address, runner) {
    return new ethers.Contract(
      address,
      _abi$l,
      runner
    );
  }
}

var index$v = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ReentrancyGuardUpgradeable__factory: ReentrancyGuardUpgradeable__factory
});

const _abi$k = [
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
  static abi = _abi$k;
  static createInterface() {
    return new ethers.Interface(_abi$k);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$k, runner);
  }
}

var index$u = /*#__PURE__*/Object.freeze({
  __proto__: null,
  EIP712Upgradeable__factory: EIP712Upgradeable__factory
});

var index$t = /*#__PURE__*/Object.freeze({
  __proto__: null,
  eip712UpgradeableSol: index$u
});

var index$s = /*#__PURE__*/Object.freeze({
  __proto__: null,
  contextUpgradeableSol: index$x,
  cryptography: index$t,
  noncesUpgradeableSol: index$w,
  reentrancyGuardUpgradeableSol: index$v
});

var index$r = /*#__PURE__*/Object.freeze({
  __proto__: null,
  access: index$H,
  proxy: index$E,
  token: index$y,
  utils: index$s
});

var index$q = /*#__PURE__*/Object.freeze({
  __proto__: null,
  contracts: index$J,
  contractsUpgradeable: index$r
});

const _abi$j = [
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
const _bytecode$9 = "0x60806040526040516102a03803806102a08339810160408190526020916097565b804210607e5760405162461bcd60e51b815260206004820152602360248201527f556e6c6f636b2074696d652073686f756c6420626520696e207468652066757460448201526275726560e81b606482015260840160405180910390fd5b600055600180546001600160a01b0319163317905560af565b60006020828403121560a857600080fd5b5051919050565b6101e2806100be6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063251c1aa3146100465780633ccfd60b146100625780638da5cb5b1461006c575b600080fd5b61004f60005481565b6040519081526020015b60405180910390f35b61006a610097565b005b60015461007f906001600160a01b031681565b6040516001600160a01b039091168152602001610059565b6000544210156100e75760405162461bcd60e51b8152602060048201526016602482015275165bdd4818d85b89dd081dda5d1a191c985dc81e595d60521b60448201526064015b60405180910390fd5b6001546001600160a01b031633146101385760405162461bcd60e51b81526020600482015260146024820152732cb7ba9030b932b713ba103a34329037bbb732b960611b60448201526064016100de565b604080514781524260208201527fbf2ed60bd5b5965d685680c01195c9514e4382e28e3a5a2d2d5244bf59411b93910160405180910390a16001546040516001600160a01b03909116904780156108fc02916000818181858888f193505050501580156101a9573d6000803e3d6000fd5b5056fea2646970667358221220a1577f546d6c0a9e25a86cb8fda39eeca35b736d118aa835021e9dfe21efadfb64736f6c634300081e0033";
const isSuperArgs$9 = (xs) => xs.length > 1;
class Lock__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$9(args)) {
      super(...args);
    } else {
      super(_abi$j, _bytecode$9, args[0]);
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
  static bytecode = _bytecode$9;
  static abi = _abi$j;
  static createInterface() {
    return new ethers.Interface(_abi$j);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$j, runner);
  }
}

var index$p = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Lock__factory: Lock__factory
});

const _abi$i = [
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
  static abi = _abi$i;
  static createInterface() {
    return new ethers.Interface(_abi$i);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$i, runner);
  }
}

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
  static abi = _abi$h;
  static createInterface() {
    return new ethers.Interface(_abi$h);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$h, runner);
  }
}

var index$o = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC20Exp__factory: IERC20Exp__factory,
  IERC20Mintable__factory: IERC20Mintable__factory
});

const _abi$g = [
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
  static abi = _abi$g;
  static createInterface() {
    return new ethers.Interface(_abi$g);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$g, runner);
  }
}

var index$n = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC4626__factory: IERC4626__factory
});

const _abi$f = [
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
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
    name: "initialize",
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
  static abi = _abi$f;
  static createInterface() {
    return new ethers.Interface(_abi$f);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$f, runner);
  }
}

var index$m = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC4626Pool__factory: IERC4626Pool__factory
});

const _abi$e = [
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "changeAdmin",
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
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
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
  }
];
class IInitializableProxy__factory {
  static abi = _abi$e;
  static createInterface() {
    return new ethers.Interface(_abi$e);
  }
  static connect(address, runner) {
    return new ethers.Contract(
      address,
      _abi$e,
      runner
    );
  }
}

var index$l = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IInitializableProxy__factory: IInitializableProxy__factory
});

const _abi$d = [
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
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256"
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
        internalType: "uint256",
        name: "_pid",
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
        name: "_pid",
        type: "uint256"
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
      }
    ],
    name: "getBlockRewardPerShare",
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_fromBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_toBlock",
        type: "uint256"
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
        internalType: "uint256",
        name: "_rewardPerBlock",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_rewardVault",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "addPool",
        type: "bool"
      }
    ],
    name: "initialize",
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
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
        internalType: "uint256",
        name: "pid",
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
        name: "pid",
        type: "uint256"
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
            internalType: "uint256",
            name: "allocPoint",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "startBlock",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "endBlock",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lastRewardBlock",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "accRewardPerShare",
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
    name: "rewardPerBlock",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256"
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
    inputs: [],
    name: "totalAllocPoint",
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
        name: "_pid",
        type: "uint256"
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
        internalType: "uint256",
        name: "newBlockReward",
        type: "uint256"
      }
    ],
    name: "updateRewardPerBlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256"
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
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
  static abi = _abi$d;
  static createInterface() {
    return new ethers.Interface(_abi$d);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$d, runner);
  }
}

var index$k = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IMasterChef__factory: IMasterChef__factory
});

const _abi$c = [
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
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256"
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
        internalType: "uint256",
        name: "_pid",
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
        name: "_pid",
        type: "uint256"
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256"
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
      }
    ],
    name: "getBlockRewardPerShare",
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_fromBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_toBlock",
        type: "uint256"
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
        internalType: "uint256",
        name: "_rewardPerBlock",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_rewardVault",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "addPool",
        type: "bool"
      }
    ],
    name: "initialize",
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
        internalType: "uint256",
        name: "_rewardPerBlock",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_rewardVault",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256"
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
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
        internalType: "uint256",
        name: "pid",
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
      }
    ],
    name: "poolIdByTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "pid",
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
        name: "pid",
        type: "uint256"
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
            internalType: "uint256",
            name: "allocPoint",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "startBlock",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "endBlock",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "lastRewardBlock",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "accRewardPerShare",
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
        internalType: "uint256",
        name: "pid",
        type: "uint256"
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
    name: "rewardPerBlock",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256"
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
    inputs: [],
    name: "totalAllocPoint",
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
        name: "_pid",
        type: "uint256"
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
        internalType: "uint256",
        name: "newBlockReward",
        type: "uint256"
      }
    ],
    name: "updateRewardPerBlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256"
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
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
  static abi = _abi$c;
  static createInterface() {
    return new ethers.Interface(_abi$c);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$c, runner);
  }
}

var index$j = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IMasterPool__factory: IMasterPool__factory
});

const _abi$b = [
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
  static abi = _abi$b;
  static createInterface() {
    return new ethers.Interface(_abi$b);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$b, runner);
  }
}

var index$i = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IRewardVault__factory: IRewardVault__factory
});

const _abi$a = [
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
  static abi = _abi$a;
  static createInterface() {
    return new ethers.Interface(_abi$a);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$a, runner);
  }
}

var index$h = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IWETH__factory: IWETH__factory
});

var index$g = /*#__PURE__*/Object.freeze({
  __proto__: null,
  iInitializableProxySol: index$l,
  iMasterChefSol: index$k,
  iMasterPoolSol: index$j,
  iRewardVaultSol: index$i,
  ierc20Sol: index$o,
  ierc4626PoolSol: index$m,
  ierc4626Sol: index$n,
  iwethSol: index$h
});

const _abi$9 = [
  {
    inputs: [],
    name: "InvalidSignatureLength",
    type: "error"
  }
];
const _bytecode$8 = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122016cd4f9d373628b43b9eb2be47e18b7f198be8786875ae3d6004579b6f510a2764736f6c634300081e0033";
const isSuperArgs$8 = (xs) => xs.length > 1;
class SigLib__factory extends ethers.ContractFactory {
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
    return new ethers.Interface(_abi$9);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$9, runner);
  }
}

var index$f = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SigLib__factory: SigLib__factory
});

var index$e = /*#__PURE__*/Object.freeze({
  __proto__: null,
  sigLibSol: index$f
});

const _abi$8 = [
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
        internalType: "uint256",
        name: "pid",
        type: "uint256"
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
        internalType: "uint256",
        name: "pid",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "lpToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newAllocPoint",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startBlock",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endBlock",
        type: "uint256"
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
        name: "newReward",
        type: "uint256"
      }
    ],
    name: "SetReward",
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
        internalType: "uint256",
        name: "pid",
        type: "uint256"
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
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256"
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
        internalType: "uint256",
        name: "_pid",
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
        name: "_pid",
        type: "uint256"
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
      }
    ],
    name: "getBlockRewardPerShare",
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
        name: "_pid",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_fromBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_toBlock",
        type: "uint256"
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
        internalType: "uint256",
        name: "_rewardPerBlock",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_rewardVault",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "addPool",
        type: "bool"
      }
    ],
    name: "initialize",
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
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
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "lpToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "startBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "endBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "accRewardPerShare",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardPerBlock",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256"
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
    inputs: [],
    name: "totalAllocPoint",
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
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
        internalType: "uint256",
        name: "newBlockReward",
        type: "uint256"
      }
    ],
    name: "updateRewardPerBlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
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
const _bytecode$7 = "0x6080604052348015600f57600080fd5b50611ccf8061001f6000396000f3fe60806040526004361061014f5760003560e01c80637bafb029116100b6578063d18df53c1161006f578063d18df53c14610476578063d7c5edf214610496578063e2bbb158146104b6578063f2fde38b146104c9578063f7c618c1146104e9578063ff51a2721461050957600080fd5b80637bafb0291461036f5780638ae39cac1461038f5780638da5cb5b146103a557806393f1a40b146103e2578063a17804b114610436578063ad5c46481461045657600080fd5b8063441a3e7011610108578063441a3e70146102c557806351eb05a6146102e55780635da7c1691461030557806360e4c4ce14610325578063630b5ba114610345578063715018a61461035a57600080fd5b806301f8a976146101ac578063081e3eda146101cc5780631246dbf5146101f05780631526fe271461022057806317caf6f1146102775780633a2c67771461028d57600080fd5b366101a7576000546001600160a01b0316330361016857005b60005461017d906001600160a01b0316610536565b156101a557600080546001600160a01b03168152600460205260409020546101a590346105a4565b005b600080fd5b3480156101b857600080fd5b506101a56101c73660046119e6565b610620565b3480156101d857600080fd5b506005545b6040519081526020015b60405180910390f35b3480156101fc57600080fd5b5061021061020b366004611a1b565b610536565b60405190151581526020016101e7565b34801561022c57600080fd5b5061024061023b3660046119e6565b610663565b604080516001600160a01b0390971687526020870195909552938501929092526060840152608083015260a082015260c0016101e7565b34801561028357600080fd5b506101dd60075481565b34801561029957600080fd5b506003546102ad906001600160a01b031681565b6040516001600160a01b0390911681526020016101e7565b3480156102d157600080fd5b506101a56102e0366004611a36565b6106b3565b3480156102f157600080fd5b506101a56103003660046119e6565b6106f7565b34801561031157600080fd5b506101dd610320366004611a68565b610734565b34801561033157600080fd5b506101a5610340366004611ab8565b610953565b34801561035157600080fd5b506101a5610abf565b34801561036657600080fd5b506101a5610ade565b34801561037b57600080fd5b506101dd61038a366004611af5565b610af2565b34801561039b57600080fd5b506101dd60025481565b3480156103b157600080fd5b507f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b03166102ad565b3480156103ee57600080fd5b506104216103fd366004611b21565b60066020908152600092835260408084209091529082529020805460019091015482565b604080519283526020830191909152016101e7565b34801561044257600080fd5b506101a5610451366004611b4d565b610c80565b34801561046257600080fd5b506000546102ad906001600160a01b031681565b34801561048257600080fd5b506101dd610491366004611b21565b610d8a565b3480156104a257600080fd5b506101dd6104b13660046119e6565b610de8565b6101a56104c4366004611a36565b6105a4565b3480156104d557600080fd5b506101a56104e4366004611a1b565b610f4b565b3480156104f557600080fd5b506001546102ad906001600160a01b031681565b34801561051557600080fd5b506101dd610524366004611a1b565b60046020526000908152604090205481565b6001600160a01b03811660009081526004602052604081205415158061059e5750600554600114801561059e5750816001600160a01b0316600560008154811061058257610582611bcf565b60009182526020909120600690910201546001600160a01b0316145b92915050565b6105ac610f89565b60055482106105d65760405162461bcd60e51b81526004016105cd90611be5565b60405180910390fd5b6105e08233610fd3565b80156105f3576105f1823383611164565b505b61061c60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b5050565b6106286113c4565b60028190556040518181527fb0864f3dd8e8d4f8f298a778d03bccfb0bc1114b8e89b686ae5a58c7d78a58759060200160405180910390a150565b6005818154811061067357600080fd5b60009182526020909120600690910201805460018201546002830154600384015460048501546005909501546001600160a01b0390941695509193909286565b6106bb610f89565b60055482106106dc5760405162461bcd60e51b81526004016105cd90611be5565b6106e68233610fd3565b80156105f3576105f182338361141f565b60006005828154811061070c5761070c611bcf565b9060005260206000209060060201905061072582610de8565b60058201554360049091015550565b600061073e6113c4565b61074786610536565b156107865760405162461bcd60e51b815260206004820152600f60248201526e111d5c1b1a58d85d195908141bdbdb608a1b60448201526064016105cd565b811561079457610794610abf565b50600554600780548691906000906107ad908490611c21565b90915550506001600160a01b038681166000818152600460209081526040808320869055805160c0810182528481528083018b81528183018b815260608084018c81526080850188815260a08601898152600580546001810182559a5295517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db06006909a02998a0180546001600160a01b03191691909c1617909a5592517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db188015590517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db287015590517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db386015595517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db4850155517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db5909301929092558151898152908101889052908101869052909183917fe7d0e18d4982c1e9b2d9b42996392d14cada23824467fbf84c9c34c9bc9c1631910160405180910390a395945050505050565b61095b6113c4565b600554851061097c5760405162461bcd60e51b81526004016105cd90611be5565b801561098a5761098a610abf565b836005868154811061099e5761099e611bcf565b9060005260206000209060060201600101546007546109bd9190611c34565b6109c79190611c21565b60078190555083600586815481106109e1576109e1611bcf565b9060005260206000209060060201600101819055508260058681548110610a0a57610a0a611bcf565b9060005260206000209060060201600201819055508160058681548110610a3357610a33611bcf565b90600052602060002090600602016003018190555060058581548110610a5b57610a5b611bcf565b6000918252602091829020600690910201546040805187815292830186905282018490526001600160a01b03169086907fe7d0e18d4982c1e9b2d9b42996392d14cada23824467fbf84c9c34c9bc9c16319060600160405180910390a35050505050565b60055460005b8181101561061c57610ad6816106f7565b600101610ac5565b610ae66113c4565b610af060006114d9565b565b60008060058581548110610b0857610b08611bcf565b60009182526020918290206040805160c081018252600690930290910180546001600160a01b0316835260018101549383019390935260028084015491830191909152600383015460608301526004830154608083015260059092015460a082015290549091501580610b7d57506020810151155b80610b885750600754155b15610b97576000915050610c79565b828410610ba8576000915050610c79565b80604001518311610bbd576000915050610c79565b80604001518411158015610bd5575080606001518311155b15610bf1576040810151610be99084611c34565b915050610c79565b80604001518411158015610c085750806060015183115b15610c215780604001518160600151610be99190611c34565b806040015184118015610c38575080606001518311155b15610c4757610be98484611c34565b80606001518411158015610c5e5750806060015183115b15610c7357838160600151610be99190611c34565b60009150505b9392505050565b6000610c8a61154a565b805490915060ff600160401b820416159067ffffffffffffffff16600081158015610cb25750825b905060008267ffffffffffffffff166001148015610ccf5750303b155b905081158015610cdd575080155b15610cfb5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff191660011785558315610d2557845460ff60401b1916600160401b1785555b610d358d8d8d8d8d8d8d8d611573565b8315610d7b57845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050505050505050565b60008281526006602090815260408083206001600160a01b03851684529091528120600181015464e8d4a51000610dc086610de8565b8354610dcc9190611c47565b610dd69190611c5e565b610de09190611c34565b949350505050565b60008060058381548110610dfe57610dfe611bcf565b600091825260208083206040805160c08101825260069490940290910180546001600160a01b031680855260018201549385019390935260028101548483015260038101546060850152600480820154608086015260059091015460a0850181905291516370a0823160e01b8152309181019190915292945092916370a0823190602401602060405180830381865afa158015610e9f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec39190611c80565b90506000610ed686856080015143610af2565b90508115801590610ee657508015155b15610f41576000600754856020015160025484610f039190611c47565b610f0d9190611c47565b610f179190611c5e565b905082610f298264e8d4a51000611c47565b610f339190611c5e565b610f3d9085611c21565b9350505b5090949350505050565b610f536113c4565b6001600160a01b038116610f7d57604051631e4fbdf760e01b8152600060048201526024016105cd565b610f86816114d9565b50565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00805460011901610fcd57604051633ee5aeb560e01b815260040160405180910390fd5b60029055565b600060058381548110610fe857610fe8611bcf565b60009182526020808320868452600680835260408086206001600160a01b03891687529093529190932091029091019150611022846106f7565b805415611154576000816001015464e8d4a510008460050154846000015461104a9190611c47565b6110549190611c5e565b61105e9190611c34565b90508015611152576003546001600160a01b03166110e1576001546040516340c10f1960e01b81526001600160a01b03868116600483015260248201849052909116906340c10f1990604401600060405180830381600087803b1580156110c457600080fd5b505af11580156110d8573d6000803e3d6000fd5b50505050611152565b60035460015460405163ae63932960e01b81526001600160a01b03918216600482015286821660248201526044810184905291169063ae63932990606401600060405180830381600087803b15801561113957600080fd5b505af115801561114d573d6000803e3d6000fd5b505050505b505b61115e84846117f4565b50505050565b6000806005858154811061117a5761117a611bcf565b60009182526020808320888452600680835260408086206001600160a01b03808c1688529452852094549302018054909450811691161480156111bc57508334145b1561122d5760008054906101000a90046001600160a01b03166001600160a01b031663d0e30db0856040518263ffffffff1660e01b81526004016000604051808303818588803b15801561120f57600080fd5b505af1158015611223573d6000803e3d6000fd5b505050505061132c565b81546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015611275573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112999190611c80565b83549091506112b3906001600160a01b0316873088611868565b82546040516370a0823160e01b815230600482015282916001600160a01b0316906370a0823190602401602060405180830381865afa1580156112fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061131e9190611c80565b6113289190611c34565b9450505b838160000160008282546113409190611c21565b90915550611350905086866117f4565b85856001600160a01b03167f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a158660405161138c91815260200190565b60405180910390a35091949350505050565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b336113f67f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b6001600160a01b031614610af05760405163118cdaa760e01b81523360048201526024016105cd565b6000806005858154811061143557611435611bcf565b60009182526020808320888452600680835260408086206001600160a01b038b168752909352918420805493909202019350918591839190611478908490611c34565b90915550508154611493906001600160a01b031686866118cf565b61149d86866117f4565b85856001600160a01b03167ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5688660405161138c91815260200190565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0061059e565b61157c88611905565b611584611916565b600080546001600160a01b038981166001600160a01b03199283161790925560018054898416908316179055600287905560038054928716929091169190911790556040518581527fb0864f3dd8e8d4f8f298a778d03bccfb0bc1114b8e89b686ae5a58c7d78a58759060200160405180910390a1604080516001600160a01b038981168252888116602083015286168183015290517fe86209b390e8076baf4c4a616512319eb81d91e8b1f8ca206e88c5ff1c264e149181900360600190a180156117ea576103e86007819055600580546001600160a01b038981166000818152600460209081526040808320869055805160c0810182528481528083018981528183018d815260608084018e81526080850188815260a0860189815260018d018e559c895294517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db06006909c029b8c0180546001600160a01b03191691909b161790995591517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db18a0155517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db289015595517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db3880155517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db487015595517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db590950194909455845186815293840189905293830187905292917fe7d0e18d4982c1e9b2d9b42996392d14cada23824467fbf84c9c34c9bc9c1631910160405180910390a3505b5050505050505050565b60006005838154811061180957611809611bcf565b60009182526020808320868452600680835260408086206001600160a01b03891687529093529190932091029091016005810154825491935064e8d4a51000916118539190611c47565b61185d9190611c5e565b600190910155505050565b6040516001600160a01b03848116602483015283811660448301526064820183905261115e9186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050611926565b6040516001600160a01b0383811660248301526044820183905261190091859182169063a9059cbb9060640161189d565b505050565b61190d611997565b610f86816119bc565b61191e611997565b610af06119c4565b600080602060008451602086016000885af180611949576040513d6000823e3d81fd5b50506000513d9150811561196157806001141561196e565b6001600160a01b0384163b155b1561115e57604051635274afe760e01b81526001600160a01b03851660048201526024016105cd565b61199f6119cc565b610af057604051631afcd79f60e31b815260040160405180910390fd5b610f53611997565b61139e611997565b60006119d661154a565b54600160401b900460ff16919050565b6000602082840312156119f857600080fd5b5035919050565b80356001600160a01b0381168114611a1657600080fd5b919050565b600060208284031215611a2d57600080fd5b610c79826119ff565b60008060408385031215611a4957600080fd5b50508035926020909101359150565b80358015158114611a1657600080fd5b600080600080600060a08688031215611a8057600080fd5b611a89866119ff565b9450602086013593506040860135925060608601359150611aac60808701611a58565b90509295509295909350565b600080600080600060a08688031215611ad057600080fd5b85359450602086013593506040860135925060608601359150611aac60808701611a58565b600080600060608486031215611b0a57600080fd5b505081359360208301359350604090920135919050565b60008060408385031215611b3457600080fd5b82359150611b44602084016119ff565b90509250929050565b600080600080600080600080610100898b031215611b6a57600080fd5b611b73896119ff565b9750611b8160208a016119ff565b9650611b8f60408a016119ff565b955060608901359450611ba460808a016119ff565b935060a0890135925060c08901359150611bc060e08a01611a58565b90509295985092959890939650565b634e487b7160e01b600052603260045260246000fd5b6020808252600c908201526b125b9d985b1a5908141bdbdb60a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8082018082111561059e5761059e611c0b565b8181038181111561059e5761059e611c0b565b808202811582820484141761059e5761059e611c0b565b600082611c7b57634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215611c9257600080fd5b505191905056fea26469706673582212209fbf19ae1bb324acf04b91a08112db64bbc01563f6de180caba02c3f5373c9df64736f6c634300081e0033";
const isSuperArgs$7 = (xs) => xs.length > 1;
class MasterChef__factory extends ethers.ContractFactory {
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
    return new ethers.Interface(_abi$8);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$8, runner);
  }
}

var index$d = /*#__PURE__*/Object.freeze({
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
        internalType: "uint256",
        name: "pid",
        type: "uint256"
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
        internalType: "uint256",
        name: "pid",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "lpToken",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newAllocPoint",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startBlock",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endBlock",
        type: "uint256"
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
        internalType: "uint256",
        name: "pid",
        type: "uint256"
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
        name: "newReward",
        type: "uint256"
      }
    ],
    name: "SetReward",
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
        internalType: "uint256",
        name: "pid",
        type: "uint256"
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
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256"
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
        internalType: "uint256",
        name: "_pid",
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
        name: "_pid",
        type: "uint256"
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256"
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
      }
    ],
    name: "getBlockRewardPerShare",
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
        name: "_pid",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_fromBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_toBlock",
        type: "uint256"
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
        internalType: "uint256",
        name: "_rewardPerBlock",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_rewardVault",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "addPool",
        type: "bool"
      }
    ],
    name: "initialize",
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
        internalType: "uint256",
        name: "_rewardPerBlock",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_rewardVault",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256"
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
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
    name: "poolIdByTokens",
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
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "lpToken",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "startBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "endBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "accRewardPerShare",
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
        internalType: "uint256",
        name: "",
        type: "uint256"
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
    name: "rewardPerBlock",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_endBlock",
        type: "uint256"
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
    inputs: [],
    name: "totalAllocPoint",
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
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
        internalType: "uint256",
        name: "newBlockReward",
        type: "uint256"
      }
    ],
    name: "updateRewardPerBlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
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
const _bytecode$6 = "0x6080604052348015600f57600080fd5b50612a5d8061001f6000396000f3fe6080604052600436106101fd5760003560e01c80637bafb0291161010d578063cd09525d116100a0578063dced1a5a1161006f578063dced1a5a14610691578063e2bbb158146106c7578063f2fde38b146106da578063f7c618c1146106fa578063ff51a2721461071a57600080fd5b8063cd09525d14610611578063d18df53c14610631578063d7c5edf214610651578063db2aa1271461067157600080fd5b80639b27e3dd116100dc5780639b27e3dd14610584578063a17804b1146105a4578063aa020654146105c4578063ad5c4648146105f157600080fd5b80637bafb029146104bd5780638ae39cac146104dd5780638da5cb5b146104f357806393f1a40b1461053057600080fd5b8063441a3e701161019057806360e4c4ce1161015f57806360e4c4ce14610433578063630b5ba11461045357806369ff74f114610468578063715018a61461048857806377ba79501461049d57600080fd5b8063441a3e70146103b35780634fb4bb8c146103d357806351eb05a6146103f35780635da7c1691461041357600080fd5b806317caf6f1116101cc57806317caf6f114610325578063192e30f81461033b5780631b6fabce1461035b5780633a2c67771461037b57600080fd5b806301f8a9761461025a578063081e3eda1461027a5780631246dbf51461029e5780631526fe27146102ce57600080fd5b36610255576000546001600160a01b0316330361021657005b60005461022b906001600160a01b0316610747565b1561025357600080546001600160a01b031681526004602052604090205461025390346107b5565b005b600080fd5b34801561026657600080fd5b5061025361027536600461256c565b610831565b34801561028657600080fd5b506005545b6040519081526020015b60405180910390f35b3480156102aa57600080fd5b506102be6102b93660046125a1565b610747565b6040519015158152602001610295565b3480156102da57600080fd5b506102ee6102e936600461256c565b610874565b604080516001600160a01b0390971687526020870195909552938501929092526060840152608083015260a082015260c001610295565b34801561033157600080fd5b5061028b60075481565b34801561034757600080fd5b506102536103563660046125bc565b6108c4565b34801561036757600080fd5b50610253610376366004612609565b610a22565b34801561038757600080fd5b5060035461039b906001600160a01b031681565b6040516001600160a01b039091168152602001610295565b3480156103bf57600080fd5b506102536103ce36600461269c565b610b48565b3480156103df57600080fd5b506102be6103ee3660046125a1565b610b8c565b3480156103ff57600080fd5b5061025361040e36600461256c565b610bea565b34801561041f57600080fd5b5061028b61042e3660046126be565b610c27565b34801561043f57600080fd5b5061025361044e36600461270e565b610d83565b34801561045f57600080fd5b50610253610eef565b34801561047457600080fd5b5060085461039b906001600160a01b031681565b34801561049457600080fd5b50610253610f0e565b3480156104a957600080fd5b506102536104b836600461274b565b610f22565b3480156104c957600080fd5b5061028b6104d8366004612775565b610f79565b3480156104e957600080fd5b5061028b60025481565b3480156104ff57600080fd5b507f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031661039b565b34801561053c57600080fd5b5061056f61054b3660046127a1565b60066020908152600092835260408084209091529082529020805460019091015482565b60408051928352602083019190915201610295565b34801561059057600080fd5b5061025361059f3660046127e3565b611107565b3480156105b057600080fd5b506102536105bf3660046128b9565b6111d7565b3480156105d057600080fd5b5061028b6105df3660046125a1565b600a6020526000908152604090205481565b3480156105fd57600080fd5b5060005461039b906001600160a01b031681565b34801561061d57600080fd5b5061025361062c3660046125a1565b6112e1565b34801561063d57600080fd5b5061028b61064c3660046127a1565b61136c565b34801561065d57600080fd5b5061028b61066c36600461256c565b6113ca565b34801561067d57600080fd5b5061025361068c36600461274b565b61152d565b34801561069d57600080fd5b5061039b6106ac36600461256c565b6009602052600090815260409020546001600160a01b031681565b6102536106d536600461269c565b6107b5565b3480156106e657600080fd5b506102536106f53660046125a1565b61157d565b34801561070657600080fd5b5060015461039b906001600160a01b031681565b34801561072657600080fd5b5061028b6107353660046125a1565b60046020526000908152604090205481565b6001600160a01b0381166000908152600460205260408120541515806107af575060055460011480156107af5750816001600160a01b031660056000815481106107935761079361293b565b60009182526020909120600690910201546001600160a01b0316145b92915050565b6107bd6115bb565b60055482106107e75760405162461bcd60e51b81526004016107de90612951565b60405180910390fd5b6107f18233611605565b801561080457610802823383611790565b505b61082d60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b5050565b610839611843565b60028190556040518181527fb0864f3dd8e8d4f8f298a778d03bccfb0bc1114b8e89b686ae5a58c7d78a58759060200160405180910390a150565b6005818154811061088457600080fd5b60009182526020909120600690910201805460018201546002830154600384015460048501546005909501546001600160a01b0390941695509193909286565b6108cd33610b8c565b6108e95760405162461bcd60e51b81526004016107de90612977565b336000908152600a6020908152604080832054808452600683528184206001600160a01b03888116808752919094528285209387168552919093209015801590610934575081548411155b156109a2578382600001600082825461094d91906129af565b9091555061095d9050838761189e565b82866001600160a01b03167ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5688660405161099991815260200190565b60405180910390a35b6001600160a01b03851615610a1a57838160000160008282546109c591906129c2565b909155506109d59050838661189e565b82856001600160a01b03167f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a1586604051610a1191815260200190565b60405180910390a35b505050505050565b6000610a2c611912565b805490915060ff600160401b820416159067ffffffffffffffff16600081158015610a545750825b905060008267ffffffffffffffff166001148015610a715750303b155b905081158015610a7f575080155b15610a9d5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff191660011785558315610ac757845460ff60401b1916600160401b1785555b610ad78e8e8d8d8d8d8d8d61193b565b600880546001600160a01b0319166001600160a01b038e161790558315610b3857845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b5050505050505050505050505050565b610b506115bb565b6005548210610b715760405162461bcd60e51b81526004016107de90612951565b610b7b8233611605565b801561080457610802823383611bbc565b6001600160a01b0381166000908152600a60205260408120541515806107af5750506000805260096020527fec8156718a8372b1db44bb411437d0870f3e3790d4a08526d024ce1b0b668f6b546001600160a01b0391821691161490565b600060058281548110610bff57610bff61293b565b90600052602060002090600602019050610c18826113ca565b60058201554360049091015550565b6000610c31611843565b610c3e8686868686611c12565b6008546040516bffffffffffffffffffffffff1960608a901b166020820152919250600091610c8f916001600160a01b03169060340160405160208183030381529060405280519060200120611e31565b6001546040516306b0729b60e31b8152306004820152602481018590526001600160a01b038a81166044830152918216606482015291925082919082169063358394d890608401600060405180830381600087803b158015610cf057600080fd5b505af1158015610d04573d6000803e3d6000fd5b505050600084815260096020908152604080832080546001600160a01b0319166001600160a01b03878116919091179091558616808452600a835292819020879055519182528592507f274ed179d8e71c36d126f361d97e5aa18d1ffc307ec6a33f2809e4a861ea89d3910160405180910390a2505095945050505050565b610d8b611843565b6005548510610dac5760405162461bcd60e51b81526004016107de90612951565b8015610dba57610dba610eef565b8360058681548110610dce57610dce61293b565b906000526020600020906006020160010154600754610ded91906129af565b610df791906129c2565b6007819055508360058681548110610e1157610e1161293b565b9060005260206000209060060201600101819055508260058681548110610e3a57610e3a61293b565b9060005260206000209060060201600201819055508160058681548110610e6357610e6361293b565b90600052602060002090600602016003018190555060058581548110610e8b57610e8b61293b565b6000918252602091829020600690910201546040805187815292830186905282018490526001600160a01b03169086907fe7d0e18d4982c1e9b2d9b42996392d14cada23824467fbf84c9c34c9bc9c16319060600160405180910390a35050505050565b60055460005b8181101561082d57610f0681610bea565b600101610ef5565b610f16611843565b610f206000611e3f565b565b610f2b33610b8c565b610f475760405162461bcd60e51b81526004016107de90612977565b336000908152600a6020526040902054610f618184611605565b8115610f7457610f72818484611790565b505b505050565b60008060058581548110610f8f57610f8f61293b565b60009182526020918290206040805160c081018252600690930290910180546001600160a01b0316835260018101549383019390935260028084015491830191909152600383015460608301526004830154608083015260059092015460a08201529054909150158061100457506020810151155b8061100f5750600754155b1561101e576000915050611100565b82841061102f576000915050611100565b80604001518311611044576000915050611100565b8060400151841115801561105c575080606001518311155b1561107857604081015161107090846129af565b915050611100565b8060400151841115801561108f5750806060015183115b156110a8578060400151816060015161107091906129af565b8060400151841180156110bf575080606001518311155b156110ce5761107084846129af565b806060015184111580156110e55750806060015183115b156110fa5783816060015161107091906129af565b60009150505b9392505050565b600080600061111584611eb0565b9250925092506005878154811061112e5761112e61293b565b600091825260209091206006909102015460405163d505accf60e01b8152336004820152306024820152604481018890526064810187905260ff8516608482015260a4810184905260c481018390526001600160a01b039091169063d505accf9060e401600060405180830381600087803b1580156111ac57600080fd5b505af11580156111c0573d6000803e3d6000fd5b505050506111ce87876107b5565b50505050505050565b60006111e1611912565b805490915060ff600160401b820416159067ffffffffffffffff166000811580156112095750825b905060008267ffffffffffffffff1660011480156112265750303b155b905081158015611234575080155b156112525760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561127c57845460ff60401b1916600160401b1785555b61128c8d8d8d8d8d8d8d8d61193b565b83156112d257845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050505050505050565b6112ea33610b8c565b6113065760405162461bcd60e51b81526004016107de90612977565b336000908152600a6020526040902054600154600580546001600160a01b0390921691839081106113395761133961293b565b60009182526020909120600690910201546001600160a01b0316146113625761082d8183611605565b61082d8183611efa565b60008281526006602090815260408083206001600160a01b03851684529091528120600181015464e8d4a510006113a2866113ca565b83546113ae91906129d5565b6113b891906129ec565b6113c291906129af565b949350505050565b600080600583815481106113e0576113e061293b565b600091825260208083206040805160c08101825260069490940290910180546001600160a01b031680855260018201549385019390935260028101548483015260038101546060850152600480820154608086015260059091015460a0850181905291516370a0823160e01b8152309181019190915292945092916370a0823190602401602060405180830381865afa158015611481573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114a59190612a0e565b905060006114b886856080015143610f79565b905081158015906114c857508015155b156115235760006007548560200151600254846114e591906129d5565b6114ef91906129d5565b6114f991906129ec565b90508261150b8264e8d4a510006129d5565b61151591906129ec565b61151f90856129c2565b9350505b5090949350505050565b61153633610b8c565b6115525760405162461bcd60e51b81526004016107de90612977565b336000908152600a602052604090205461156c8184611605565b8115610f7457610f72818484611bbc565b611585611843565b6001600160a01b0381166115af57604051631e4fbdf760e01b8152600060048201526024016107de565b6115b881611e3f565b50565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f008054600119016115ff57604051633ee5aeb560e01b815260040160405180910390fd5b60029055565b60006005838154811061161a5761161a61293b565b60009182526020808320868452600680835260408086206001600160a01b0389168752909352919093209102909101915061165484610bea565b805415611786576000816001015464e8d4a510008460050154846000015461167c91906129d5565b61168691906129ec565b61169091906129af565b90508015611784576003546001600160a01b0316611713576001546040516340c10f1960e01b81526001600160a01b03868116600483015260248201849052909116906340c10f1990604401600060405180830381600087803b1580156116f657600080fd5b505af115801561170a573d6000803e3d6000fd5b50505050611784565b60035460015460405163ae63932960e01b81526001600160a01b03918216600482015286821660248201526044810184905291169063ae63932990606401600060405180830381600087803b15801561176b57600080fd5b505af115801561177f573d6000803e3d6000fd5b505050505b505b610f72848461189e565b60008061179e858585612068565b60008681526009602052604090819020549051631b96b2f960e01b81526001600160a01b03878116600483015260248201849052929350911690631b96b2f9906044015b600060405180830381600087803b1580156117fc57600080fd5b505af1158015611810573d6000803e3d6000fd5b5092979650505050505050565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b336118757f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b6001600160a01b031614610f205760405163118cdaa760e01b81523360048201526024016107de565b6000600583815481106118b3576118b361293b565b60009182526020808320868452600680835260408086206001600160a01b03891687529093529190932091029091016005810154825491935064e8d4a51000916118fd91906129d5565b61190791906129ec565b600190910155505050565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a006107af565b611944886122a2565b61194c6122b3565b600080546001600160a01b038981166001600160a01b03199283161790925560018054898416908316179055600287905560038054928716929091169190911790556040518581527fb0864f3dd8e8d4f8f298a778d03bccfb0bc1114b8e89b686ae5a58c7d78a58759060200160405180910390a1604080516001600160a01b038981168252888116602083015286168183015290517fe86209b390e8076baf4c4a616512319eb81d91e8b1f8ca206e88c5ff1c264e149181900360600190a18015611bb2576103e86007819055600580546001600160a01b038981166000818152600460209081526040808320869055805160c0810182528481528083018981528183018d815260608084018e81526080850188815260a0860189815260018d018e559c895294517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db06006909c029b8c0180546001600160a01b03191691909b161790995591517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db18a0155517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db289015595517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db3880155517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db487015595517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db590950194909455845186815293840189905293830187905292917fe7d0e18d4982c1e9b2d9b42996392d14cada23824467fbf84c9c34c9bc9c1631910160405180910390a3505b5050505050505050565b600080611bca8585856122c3565b60008681526009602052604090819020549051639fc8ae6d60e01b81526001600160a01b03878116600483015260248201849052929350911690639fc8ae6d906044016117e2565b6000611c1c611843565b611c2586610747565b15611c645760405162461bcd60e51b815260206004820152600f60248201526e111d5c1b1a58d85d195908141bdbdb608a1b60448201526064016107de565b8115611c7257611c72610eef565b5060055460078054869190600090611c8b9084906129c2565b90915550506001600160a01b038681166000818152600460209081526040808320869055805160c0810182528481528083018b81528183018b815260608084018c81526080850188815260a08601898152600580546001810182559a5295517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db06006909a02998a0180546001600160a01b03191691909c1617909a5592517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db188015590517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db287015590517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db386015595517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db4850155517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db5909301929092558151898152908101889052908101869052909183917fe7d0e18d4982c1e9b2d9b42996392d14cada23824467fbf84c9c34c9bc9c1631910160405180910390a395945050505050565b60006111008383600061237d565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b60008060008351604103611eda5750505060208101516040820151606083015160001a9190611ef3565b604051634be6321b60e01b815260040160405180910390fd5b9193909250565b600060058381548110611f0f57611f0f61293b565b60009182526020808320868452600680835260408086206001600160a01b03891687529093529190932091029091019150611f4984610bea565b805415611786576000816001015464e8d4a5100084600501548460000154611f7191906129d5565b611f7b91906129ec565b611f8591906129af565b905080156117845780826000016000828254611fa191906129c2565b909155505060008581526009602052604090819020549051631b96b2f960e01b81526001600160a01b0386811660048301526024820184905290911690631b96b2f990604401600060405180830381600087803b15801561200157600080fd5b505af1158015612015573d6000803e3d6000fd5b5050505084846001600160a01b03167f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a158360405161205591815260200190565b60405180910390a350610f72848461189e565b6000806005858154811061207e5761207e61293b565b60009182526020808320888452600680835260408086206001600160a01b03808c1688529452852094549302018054909450811691161480156120c057508334145b156121315760008054906101000a90046001600160a01b03166001600160a01b031663d0e30db0856040518263ffffffff1660e01b81526004016000604051808303818588803b15801561211357600080fd5b505af1158015612127573d6000803e3d6000fd5b5050505050612230565b81546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015612179573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061219d9190612a0e565b83549091506121b7906001600160a01b0316873088612414565b82546040516370a0823160e01b815230600482015282916001600160a01b0316906370a0823190602401602060405180830381865afa1580156121fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122229190612a0e565b61222c91906129af565b9450505b8381600001600082825461224491906129c2565b909155506122549050868661189e565b85856001600160a01b03167f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a158660405161229091815260200190565b60405180910390a35091949350505050565b6122aa61247b565b6115b8816124a0565b6122bb61247b565b610f206124a8565b600080600585815481106122d9576122d961293b565b60009182526020808320888452600680835260408086206001600160a01b038b16875290935291842080549390920201935091859183919061231c9084906129af565b90915550508154612337906001600160a01b031686866124b0565b612341868661189e565b85856001600160a01b03167ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5688660405161229091815260200190565b6000814710156123a95760405163cf47918160e01b8152476004820152602481018390526044016107de565b763d602d80600a3d3981f3363d3d373d3d3d363d730000008460601b60e81c176000526e5af43d82803e903d91602b57fd5bf38460781b17602052826037600984f590506001600160a01b0381166111005760405163b06ebf3d60e01b815260040160405180910390fd5b6040516001600160a01b038481166024830152838116604483015260648201839052610f729186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b0383818316178352505050506124e1565b612483612552565b610f2057604051631afcd79f60e31b815260040160405180910390fd5b61158561247b565b61181d61247b565b6040516001600160a01b03838116602483015260448201839052610f7491859182169063a9059cbb90606401612449565b600080602060008451602086016000885af180612504576040513d6000823e3d81fd5b50506000513d9150811561251c578060011415612529565b6001600160a01b0384163b155b15610f7257604051635274afe760e01b81526001600160a01b03851660048201526024016107de565b600061255c611912565b54600160401b900460ff16919050565b60006020828403121561257e57600080fd5b5035919050565b80356001600160a01b038116811461259c57600080fd5b919050565b6000602082840312156125b357600080fd5b61110082612585565b6000806000606084860312156125d157600080fd5b6125da84612585565b92506125e860208501612585565b929592945050506040919091013590565b8035801515811461259c57600080fd5b60008060008060008060008060006101208a8c03121561262857600080fd5b6126318a612585565b985061263f60208b01612585565b975061264d60408b01612585565b965061265b60608b01612585565b955060808a0135945061267060a08b01612585565b935060c08a0135925060e08a0135915061268d6101008b016125f9565b90509295985092959850929598565b600080604083850312156126af57600080fd5b50508035926020909101359150565b600080600080600060a086880312156126d657600080fd5b6126df86612585565b9450602086013593506040860135925060608601359150612702608087016125f9565b90509295509295909350565b600080600080600060a0868803121561272657600080fd5b85359450602086013593506040860135925060608601359150612702608087016125f9565b6000806040838503121561275e57600080fd5b61276783612585565b946020939093013593505050565b60008060006060848603121561278a57600080fd5b505081359360208301359350604090920135919050565b600080604083850312156127b457600080fd5b823591506127c460208401612585565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156127f957600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561282557600080fd5b8501601f8101871361283657600080fd5b803567ffffffffffffffff811115612850576128506127cd565b604051601f8201601f19908116603f0116810167ffffffffffffffff8111828210171561287f5761287f6127cd565b60405281815282820160200189101561289757600080fd5b8160208401602083013760006020838301015280935050505092959194509250565b600080600080600080600080610100898b0312156128d657600080fd5b6128df89612585565b97506128ed60208a01612585565b96506128fb60408a01612585565b95506060890135945061291060808a01612585565b935060a0890135925060c0890135915061292c60e08a016125f9565b90509295985092959890939650565b634e487b7160e01b600052603260045260246000fd5b6020808252600c908201526b125b9d985b1a5908141bdbdb60a21b604082015260600190565b6020808252600890820152671393d517d413d3d360c21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b818103818111156107af576107af612999565b808201808211156107af576107af612999565b80820281158282048414176107af576107af612999565b600082612a0957634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215612a2057600080fd5b505191905056fea26469706673582212202dc9e330af8b854869101c8cac9a0f7f94aaa72c9518db3fbb1f27e2b21c16fc64736f6c634300081e0033";
const isSuperArgs$6 = (xs) => xs.length > 1;
class MasterPool__factory extends ethers.ContractFactory {
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
    return new ethers.Interface(_abi$7);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$7, runner);
  }
}

var index$c = /*#__PURE__*/Object.freeze({
  __proto__: null,
  MasterPool__factory: MasterPool__factory
});

const _abi$6 = [
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
    name: "initialize",
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
  }
];
const _bytecode$5 = "0x6080604052348015600f57600080fd5b50610a5b8061001f6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063ae6393291161005b578063ae63932914610102578063c4d66de814610115578063e7e31e7a14610128578063f2fde38b1461013b57600080fd5b8063124180381461008d578063715018a6146100ab5780638ce5877c146100b55780638da5cb5b146100c8575b600080fd5b61009561014e565b6040516100a29190610919565b60405180910390f35b6100b361015f565b005b6100b36100c336600461097a565b610173565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546040516001600160a01b0390911681526020016100a2565b6100b3610110366004610997565b610215565b6100b361012336600461097a565b6102ce565b6100b361013636600461097a565b610424565b6100b361014936600461097a565b6104bd565b606061015a60006104fb565b905090565b61016761050f565b610171600061056a565b565b61017b61050f565b6101866000826105db565b6101c95760405162461bcd60e51b815260206004820152600f60248201526e24a72b20a624a22fa9a822a72222a960891b60448201526064015b60405180910390fd5b6101d4600082610602565b506040516001600160a01b03821681527f508e01dc09a24291350cfc3ad6e6ee056cfa6df6780f82e57e60190be9f35524906020015b60405180910390a150565b6102206000336105db565b61025e5760405162461bcd60e51b815260206004820152600f60248201526e24a72b20a624a22fa9a822a72222a960891b60448201526064016101c0565b6102726001600160a01b0384168383610617565b816001600160a01b0316336001600160a01b0316846001600160a01b03167fa209447764afbca4d7c43c9962941f114f3465f7fde32167c76661eb75b3ef77846040516102c191815260200190565b60405180910390a4505050565b60006102d861066e565b805490915060ff600160401b820416159067ffffffffffffffff166000811580156103005750825b905060008267ffffffffffffffff16600114801561031d5750303b155b90508115801561032b575080155b156103495760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561037357845460ff60401b1916600160401b1785555b6001600160a01b038616610385573395505b61038e86610697565b6103996000876106a8565b506040516001600160a01b03871681527ffb461a9d124e123750171741a89341defba2596b06be0c452e3e0f990c18bb9e9060200160405180910390a1831561041c57845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b61042c61050f565b6104376000826105db565b156104785760405162461bcd60e51b8152602060048201526011602482015270222aa82624a1a0aa22afa9a822a72222a960791b60448201526064016101c0565b6104836000826106a8565b506040516001600160a01b03821681527ffb461a9d124e123750171741a89341defba2596b06be0c452e3e0f990c18bb9e9060200161020a565b6104c561050f565b6001600160a01b0381166104ef57604051631e4fbdf760e01b8152600060048201526024016101c0565b6104f88161056a565b50565b60606000610508836106bd565b9392505050565b336105417f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b6001600160a01b0316146101715760405163118cdaa760e01b81523360048201526024016101c0565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b6001600160a01b038116600090815260018301602052604081205415155b90505b92915050565b60006105f9836001600160a01b038416610719565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261066990849061080c565b505050565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a006105fc565b61069f610883565b6104f8816108a8565b60006105f9836001600160a01b0384166108b0565b60608160000180548060200260200160405190810160405280929190818152602001828054801561070d57602002820191906000526020600020905b8154815260200190600101908083116106f9575b50505050509050919050565b6000818152600183016020526040812054801561080257600061073d6001836109d8565b8554909150600090610751906001906109d8565b90508082146107b6576000866000018281548110610771576107716109f9565b9060005260206000200154905080876000018481548110610794576107946109f9565b6000918252602080832090910192909255918252600188019052604090208390555b85548690806107c7576107c7610a0f565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506105fc565b60009150506105fc565b600080602060008451602086016000885af18061082f576040513d6000823e3d81fd5b50506000513d91508115610847578060011415610854565b6001600160a01b0384163b155b1561087d57604051635274afe760e01b81526001600160a01b03851660048201526024016101c0565b50505050565b61088b6108ff565b61017157604051631afcd79f60e31b815260040160405180910390fd5b6104c5610883565b60008181526001830160205260408120546108f7575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556105fc565b5060006105fc565b600061090961066e565b54600160401b900460ff16919050565b602080825282518282018190526000918401906040840190835b8181101561095a5783516001600160a01b0316835260209384019390920191600101610933565b509095945050505050565b6001600160a01b03811681146104f857600080fd5b60006020828403121561098c57600080fd5b813561050881610965565b6000806000606084860312156109ac57600080fd5b83356109b781610965565b925060208401356109c781610965565b929592945050506040919091013590565b818103818111156105fc57634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea26469706673582212200941bed44abebd8250e1934e3201e4334cd94326c856ffa662509897db7ddd5d64736f6c634300081e0033";
const isSuperArgs$5 = (xs) => xs.length > 1;
class RewardVault__factory extends ethers.ContractFactory {
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
    return new ethers.Interface(_abi$6);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$6, runner);
  }
}

var index$b = /*#__PURE__*/Object.freeze({
  __proto__: null,
  RewardVault__factory: RewardVault__factory
});

var index$a = /*#__PURE__*/Object.freeze({
  __proto__: null,
  masterChefSol: index$d,
  masterPoolSol: index$c,
  rewardVaultSol: index$b
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
    inputs: [],
    name: "admin",
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
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "changeAdmin",
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
const _bytecode$4 = "0x6080604052348015600f57600080fd5b506106f18061001f6000396000f3fe60806040526004361061004e5760003560e01c80634f1ef286146100655780635c60da1b146100785780638f283970146100a9578063dce95104146100c9578063f851a440146100dc5761005d565b3661005d5761005b6100f1565b005b61005b6100f1565b61005b6100733660046105be565b610103565b34801561008457600080fd5b5061008d61016a565b6040516001600160a01b03909116815260200160405180910390f35b3480156100b557600080fd5b5061005b6100c436600461060c565b610179565b61005b6100d736600461062e565b6101d9565b3480156100e857600080fd5b5061008d610263565b6101016100fc61026d565b610277565b565b61010b61029b565b6001600160a01b0316336001600160a01b03161461015c5760405162461bcd60e51b81526020600482015260096024820152682727aa2fa0a226a4a760b91b60448201526064015b60405180910390fd5b61016682826102a5565b5050565b600061017461026d565b905090565b61018161029b565b6001600160a01b0316336001600160a01b0316146101cd5760405162461bcd60e51b81526020600482015260096024820152682727aa2fa0a226a4a760b91b6044820152606401610153565b6101d681610364565b50565b60006101e361026d565b6001600160a01b0316148015610209575060006101fe61029b565b6001600160a01b0316145b61024b5760405162461bcd60e51b81526020600482015260136024820152721053149150511657d253925512505312569151606a1b6044820152606401610153565b61025483610364565b61025e82826102a5565b505050565b600061017461029b565b60006101746103b8565b3660008037600080366000845af43d6000803e808015610296573d6000f35b3d6000fd5b60006101746103eb565b6102ae82610413565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a280511561035c57600080836001600160a01b031683604051610304919061068c565b600060405180830381855af49150503d806000811461033f576040519150601f19603f3d011682016040523d82523d6000602084013e610344565b606091505b50915091508161035657805181602001fd5b50505050565b61016661048d565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f61038d6103eb565b604080516001600160a01b03928316815291841660208301520160405180910390a16101d6816104ac565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5b546001600160a01b0316919050565b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61036103dc565b806001600160a01b03163b60000361044957604051634c9c8ce360e01b81526001600160a01b0382166004820152602401610153565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5b80546001600160a01b0319166001600160a01b039290921691909117905550565b34156101015760405163b398979f60e01b815260040160405180910390fd5b6001600160a01b0381166104d657604051633173bdd160e11b815260006004820152602401610153565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610361046c565b80356001600160a01b038116811461051457600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261054057600080fd5b813567ffffffffffffffff81111561055a5761055a610519565b604051601f8201601f19908116603f0116810167ffffffffffffffff8111828210171561058957610589610519565b6040528181528382016020018510156105a157600080fd5b816020850160208301376000918101602001919091529392505050565b600080604083850312156105d157600080fd5b6105da836104fd565b9150602083013567ffffffffffffffff8111156105f657600080fd5b6106028582860161052f565b9150509250929050565b60006020828403121561061e57600080fd5b610627826104fd565b9392505050565b60008060006060848603121561064357600080fd5b61064c846104fd565b925061065a602085016104fd565b9150604084013567ffffffffffffffff81111561067657600080fd5b6106828682870161052f565b9150509250925092565b6000825160005b818110156106ad5760208186018101518583015201610693565b50600092019182525091905056fea2646970667358221220d8f3e575724754343ed4950d89a16f1d7aedf31b33867b821f1b427cfc554adc64736f6c634300081e0033";
const isSuperArgs$4 = (xs) => xs.length > 1;
class InitializableProxy__factory extends ethers.ContractFactory {
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
    return new ethers.Interface(_abi$5);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$5, runner);
  }
}

var index$9 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  InitializableProxy__factory: InitializableProxy__factory
});

var index$8 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  initializableProxySol: index$9
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
    return new ethers.Interface(_abi$4);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$4, runner);
  }
}

var index$7 = /*#__PURE__*/Object.freeze({
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
const _bytecode$3 = "0x61018060405234801561001157600080fd5b506040516118a63803806118a68339810160408190526100309161045f565b338480604051806040016040528060018152602001603160f81b8152508787816003908161005e9190610571565b50600461006b8282610571565b5061007b91508390506005610175565b6101205261008a816006610175565b61014052815160208084019190912060e052815190820120610100524660a05261011760e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c052506001600160a01b03811661015057604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b610159816101a8565b5060ff82166101605261016c33826101fa565b505050506106a7565b60006020835110156101915761018a83610234565b90506101a2565b8161019c8482610571565b5060ff90505b92915050565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0382166102245760405163ec442f0560e01b815260006004820152602401610147565b61023060008383610272565b5050565b600080829050601f8151111561025f578260405163305a27a960e01b8152600401610147919061062f565b805161026a82610662565b179392505050565b6001600160a01b03831661029d5780600260008282546102929190610686565b9091555061030f9050565b6001600160a01b038316600090815260208190526040902054818110156102f05760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610147565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661032b5760028054829003905561034a565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161038f91815260200190565b60405180910390a3505050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156103cd5781810151838201526020016103b5565b50506000910152565b600082601f8301126103e757600080fd5b81516001600160401b038111156104005761040061039c565b604051601f8201601f19908116603f011681016001600160401b038111828210171561042e5761042e61039c565b60405281815283820160200185101561044657600080fd5b6104578260208301602087016103b2565b949350505050565b6000806000806080858703121561047557600080fd5b84516001600160401b0381111561048b57600080fd5b610497878288016103d6565b602087015190955090506001600160401b038111156104b557600080fd5b6104c1878288016103d6565b935050604085015160ff811681146104d857600080fd5b6060959095015193969295505050565b600181811c908216806104fc57607f821691505b60208210810361051c57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561056c57806000526020600020601f840160051c810160208510156105495750805b601f840160051c820191505b818110156105695760008155600101610555565b50505b505050565b81516001600160401b0381111561058a5761058a61039c565b61059e8161059884546104e8565b84610522565b6020601f8211600181146105d257600083156105ba5750848201515b600019600385901b1c1916600184901b178455610569565b600084815260208120601f198516915b8281101561060257878501518255602094850194600190920191016105e2565b50848210156106205786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b602081526000825180602084015261064e8160408501602087016103b2565b601f01601f19169190910160400192915050565b8051602080830151919081101561051c5760001960209190910360031b1b16919050565b808201808211156101a257634e487b7160e01b600052601160045260246000fd5b60805160a05160c05160e0516101005161012051610140516101605161119a61070c600039600061019e015260006109840152600061095701526000610814015260006107ec01526000610747015260006107710152600061079b015261119a6000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806379cc6790116100ad578063a0712d6811610071578063a0712d681461028d578063a9059cbb146102a0578063d505accf146102b3578063dd62ed3e146102c6578063f2fde38b146102ff57600080fd5b806379cc6790146102295780637ecebe001461023c57806384b0196e1461024f5780638da5cb5b1461026a57806395d89b411461028557600080fd5b80633644e515116100f45780633644e515146101c857806340c10f19146101d057806342966c68146101e557806370a08231146101f8578063715018a61461022157600080fd5b806306fdde0314610131578063095ea7b31461014f57806318160ddd1461017257806323b872dd14610184578063313ce56714610197575b600080fd5b610139610312565b6040516101469190610ee4565b60405180910390f35b61016261015d366004610f1a565b6103a4565b6040519015158152602001610146565b6002545b604051908152602001610146565b610162610192366004610f44565b6103be565b60405160ff7f0000000000000000000000000000000000000000000000000000000000000000168152602001610146565b6101766103e2565b6101e36101de366004610f1a565b6103f1565b005b6101e36101f3366004610f81565b610407565b610176610206366004610f9a565b6001600160a01b031660009081526020819052604090205490565b6101e3610414565b6101e3610237366004610f1a565b610428565b61017661024a366004610f9a565b61043d565b61025761045b565b6040516101469796959493929190610fb5565b6008546040516001600160a01b039091168152602001610146565b6101396104a1565b6101e361029b366004610f81565b6104b0565b6101626102ae366004610f1a565b6104c2565b6101e36102c136600461104d565b6104d0565b6101766102d43660046110c0565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101e361030d366004610f9a565b61060f565b606060038054610321906110f3565b80601f016020809104026020016040519081016040528092919081815260200182805461034d906110f3565b801561039a5780601f1061036f5761010080835404028352916020019161039a565b820191906000526020600020905b81548152906001019060200180831161037d57829003601f168201915b5050505050905090565b6000336103b281858561064a565b60019150505b92915050565b6000336103cc85828561065c565b6103d78585856106db565b506001949350505050565b60006103ec61073a565b905090565b6103f9610865565b6104038282610892565b5050565b61041133826108c8565b50565b61041c610865565b61042660006108fe565b565b61043382338361065c565b61040382826108c8565b6001600160a01b0381166000908152600760205260408120546103b8565b60006060806000806000606061046f610950565b61047761097d565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b606060048054610321906110f3565b6104b8610865565b6104113382610892565b6000336103b28185856106db565b834211156104f95760405163313c898160e11b8152600481018590526024015b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886105468c6001600160a01b0316600090815260076020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006105a1826109aa565b905060006105b1828787876109d7565b9050896001600160a01b0316816001600160a01b0316146105f8576040516325c0072360e11b81526001600160a01b0380831660048301528b1660248201526044016104f0565b6106038a8a8a61064a565b50505050505050505050565b610617610865565b6001600160a01b03811661064157604051631e4fbdf760e01b8152600060048201526024016104f0565b610411816108fe565b6106578383836001610a05565b505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198110156106d557818110156106c657604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064016104f0565b6106d584848484036000610a05565b50505050565b6001600160a01b03831661070557604051634b637e8f60e11b8152600060048201526024016104f0565b6001600160a01b03821661072f5760405163ec442f0560e01b8152600060048201526024016104f0565b610657838383610ada565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561079357507f000000000000000000000000000000000000000000000000000000000000000046145b156107bd57507f000000000000000000000000000000000000000000000000000000000000000090565b6103ec604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b6008546001600160a01b031633146104265760405163118cdaa760e01b81523360048201526024016104f0565b6001600160a01b0382166108bc5760405163ec442f0560e01b8152600060048201526024016104f0565b61040360008383610ada565b6001600160a01b0382166108f257604051634b637e8f60e11b8152600060048201526024016104f0565b61040382600083610ada565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60606103ec7f00000000000000000000000000000000000000000000000000000000000000006005610c04565b60606103ec7f00000000000000000000000000000000000000000000000000000000000000006006610c04565b60006103b86109b761073a565b8360405161190160f01b8152600281019290925260228201526042902090565b6000806000806109e988888888610caf565b9250925092506109f98282610d7e565b50909695505050505050565b6001600160a01b038416610a2f5760405163e602df0560e01b8152600060048201526024016104f0565b6001600160a01b038316610a5957604051634a1406b160e11b8152600060048201526024016104f0565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156106d557826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610acc91815260200190565b60405180910390a350505050565b6001600160a01b038316610b05578060026000828254610afa919061112d565b90915550610b779050565b6001600160a01b03831660009081526020819052604090205481811015610b585760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016104f0565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610b9357600280548290039055610bb2565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610bf791815260200190565b60405180910390a3505050565b606060ff8314610c1e57610c1783610e37565b90506103b8565b818054610c2a906110f3565b80601f0160208091040260200160405190810160405280929190818152602001828054610c56906110f3565b8015610ca35780601f10610c7857610100808354040283529160200191610ca3565b820191906000526020600020905b815481529060010190602001808311610c8657829003601f168201915b505050505090506103b8565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115610cea5750600091506003905082610d74565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015610d3e573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610d6a57506000925060019150829050610d74565b9250600091508190505b9450945094915050565b6000826003811115610d9257610d9261114e565b03610d9b575050565b6001826003811115610daf57610daf61114e565b03610dcd5760405163f645eedf60e01b815260040160405180910390fd5b6002826003811115610de157610de161114e565b03610e025760405163fce698f760e01b8152600481018290526024016104f0565b6003826003811115610e1657610e1661114e565b03610403576040516335e2f38360e21b8152600481018290526024016104f0565b60606000610e4483610e76565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600060ff8216601f8111156103b857604051632cd44ac360e21b815260040160405180910390fd5b6000815180845260005b81811015610ec457602081850181015186830182015201610ea8565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610ef76020830184610e9e565b9392505050565b80356001600160a01b0381168114610f1557600080fd5b919050565b60008060408385031215610f2d57600080fd5b610f3683610efe565b946020939093013593505050565b600080600060608486031215610f5957600080fd5b610f6284610efe565b9250610f7060208501610efe565b929592945050506040919091013590565b600060208284031215610f9357600080fd5b5035919050565b600060208284031215610fac57600080fd5b610ef782610efe565b60ff60f81b8816815260e060208201526000610fd460e0830189610e9e565b8281036040840152610fe68189610e9e565b606084018890526001600160a01b038716608085015260a0840186905283810360c08501528451808252602080870193509091019060005b8181101561103c57835183526020938401939092019160010161101e565b50909b9a5050505050505050505050565b600080600080600080600060e0888a03121561106857600080fd5b61107188610efe565b965061107f60208901610efe565b95506040880135945060608801359350608088013560ff811681146110a357600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080604083850312156110d357600080fd5b6110dc83610efe565b91506110ea60208401610efe565b90509250929050565b600181811c9082168061110757607f821691505b60208210810361112757634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156103b857634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fdfea2646970667358221220143565bfd7ebabe28a38c0c71d05fbfa76b60b442df54b9ea16c5eda9980e30664736f6c634300081e0033";
const isSuperArgs$3 = (xs) => xs.length > 1;
class ERC20Mock__factory extends ethers.ContractFactory {
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
    return new ethers.Interface(_abi$3);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$3, runner);
  }
}

var index$6 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ERC20Mock__factory: ERC20Mock__factory
});

const _abi$2 = [
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
        internalType: "uint256",
        name: "pid",
        type: "uint256"
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
        internalType: "uint256",
        name: "_pid",
        type: "uint256"
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
    name: "initialize",
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
const _bytecode$2 = "0x6080604052348015600f57600080fd5b5061253d8061001f6000396000f3fe608060405234801561001057600080fd5b506004361061025e5760003560e01c80638c7ab1d711610146578063c6e6f592116100c3578063dd62ed3e11610087578063dd62ed3e146104fc578063ef8b30f7146102a8578063f10684541461050f578063f5eb42dc14610518578063f7c618c11461052b578063f97d3d071461053e57600080fd5b8063c6e6f592146102a8578063ce96cb77146104b0578063d505accf146104c3578063d905777e146104d6578063dd467064146104e957600080fd5b8063a9059cbb1161010a578063a9059cbb14610477578063b3d7f6b9146102a8578063b460af941461048a578063ba0876521461049d578063c63d75b61461039257600080fd5b80638c7ab1d71461041657806394bf804d1461042957806395d89b411461043c5780639bc289f1146104445780639fc8ae6d1461046457600080fd5b8063358394d8116101df5780634cdad506116101a35780634cdad506146102a85780636bcfdc34146103ba5780636e553f65146103c257806370a08231146103d55780637ecebe00146103e857806384b0196e146103fb57600080fd5b8063358394d8146103455780633644e5151461035857806338d52e0f14610360578063402d267d146103925780634a4fbeec146103a757600080fd5b80630a28a477116102265780630a28a477146102a857806318160ddd146102de5780631b96b2f91461030557806323b872dd14610318578063313ce5671461032b57600080fd5b806301e1d1141461026357806302a19a9e1461027e57806306fdde031461029357806307a2d13a146102a8578063095ea7b3146102bb575b600080fd5b61026b61056c565b6040519081526020015b60405180910390f35b61029161028c366004611e7f565b61059b565b005b61029b610704565b6040516102759190611f84565b61026b6102b6366004611f97565b6107ad565b6102ce6102c9366004611fb0565b6107b7565b6040519015158152602001610275565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace025461026b565b610291610313366004611fb0565b6107cf565b6102ce610326366004611fda565b61082a565b61033361084e565b60405160ff9091168152602001610275565b610291610353366004612017565b610858565b61026b610ab0565b6000805160206124e8833981519152546001600160a01b03165b6040516001600160a01b039091168152602001610275565b61026b6103a0366004612064565b5060001990565b6102ce6103b5366004612064565b610aba565b6102ce610adb565b61026b6103d036600461207f565b610b18565b61026b6103e3366004612064565b610b3e565b61026b6103f6366004612064565b610be3565b610403610bee565b60405161027597969594939291906120ab565b60015461037a906001600160a01b031681565b61026b61043736600461207f565b610c9a565b61029b610cb8565b61026b610452366004612064565b60006020819052908152604090205481565b610291610472366004611fb0565b610cf7565b6102ce610485366004611fb0565b610d4e565b61026b610498366004612143565b610d5c565b61026b6104ab366004612143565b610db4565b61026b6104be366004612064565b610e03565b6102916104d136600461217f565b610e14565b61026b6104e4366004612064565b610f30565b6102916104f7366004611f97565b610f3b565b61026b61050a3660046121f2565b610f48565b61026b60025481565b61026b610526366004612064565b610f92565b60035461037a906001600160a01b031681565b6102ce61054c366004611fb0565b6001600160a01b0391909116600090815260208190526040902054101590565b60006105967f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace025490565b905090565b814211156105c45760405163313c898160e11b8152600481018390526024015b60405180910390fd5b60007f35eff6d814ac6266dcac97b73c7e53eaf4dabccaded194ea1b0d8c021e5060a18686866105f38a610f9d565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810184905260e001604051602081830303815290604052805190602001209050600061064e82610fdf565b9050600061065c828561100c565b9050876001600160a01b0316816001600160a01b0316146106a3576040516325c0072360e11b81526001600160a01b038083166004830152891660248201526044016105bb565b6106ad8887611036565b866001600160a01b0316886001600160a01b03167fa2d3a0f9c14b593023a7113a6db3582e73f8990cedd0d8bb222ab65e20b1a1f6886040516106f291815260200190565b60405180910390a35050505050505050565b606060006000805160206124a88339815191525b90508060030180546107299061221c565b80601f01602080910402602001604051908101604052809291908181526020018280546107559061221c565b80156107a25780601f10610777576101008083540402835291602001916107a2565b820191906000526020600020905b81548152906001019060200180831161078557829003601f168201915b505050505091505090565b6000815b92915050565b6000336107c58185856110a7565b5060019392505050565b6001546001600160a01b0316331461081c5760405162461bcd60e51b815260206004820152601060248201526f13d3931657d35054d5115497d413d3d360821b60448201526064016105bb565b61082682826110b9565b5050565b6000336108388582856110ef565b610843858585611143565b506001949350505050565b60006105966111a2565b60006108626111d4565b805490915060ff600160401b820416159067ffffffffffffffff1660008115801561088a5750825b905060008267ffffffffffffffff1660011480156108a75750303b155b9050811580156108b5575080155b156108d35760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff1916600117855583156108fd57845460ff60401b1916600160401b1785555b600180546001600160a01b03808c166001600160a01b03199283161790925560028a9055600380548984169216919091179055604080516395d89b4160e01b815290516000928a16916395d89b4191600480830192869291908290030181865afa15801561096f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109979190810190612256565b905060006109c460405180604001604052806007815260200166029ba30b5b2b2160cd1b815250836111fd565b905060006109ec604051806040016040528060028152602001611cdd60f21b815250846111fd565b90506109f88282611229565b610a018261123b565b610a0a8a611266565b604080516001600160a01b038e81168252602082018e90528c8116828401528b16606082015290517f4cbe1688aeaf2c1317c96624591bc5ddbd99724f79e47858bc85f24001dbee139181900360800190a15050508315610aa557845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050505050565b6000610596611277565b6001600160a01b0381166000908152602081905260408120544211156107b1565b6003546000906001600160a01b0316610b096000805160206124e8833981519152546001600160a01b031690565b6001600160a01b031614905090565b60006000196000610b28856107ad565b9050610b3633858784611281565b949350505050565b600080610b4a83611336565b9050610b54610adb565b156107b1576001546002546040516334637d4f60e21b815260048101919091526001600160a01b0385811660248301529091169063d18df53c90604401602060405180830381865afa158015610bae573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd291906122e5565b610bdc9082612314565b9392505050565b60006107b182611369565b600060608082808083816000805160206124c88339815191528054909150158015610c1b57506001810154155b610c5f5760405162461bcd60e51b81526020600482015260156024820152741152540dcc4c8e88155b9a5b9a5d1a585b1a5e9959605a1b60448201526064016105bb565b610c67611392565b610c6f6113d1565b60408051600080825260208201909252600f60f81b9c939b5091995046985030975095509350915050565b60006000196000610caa856107ad565b9050610b3633858388611281565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace0480546060916000805160206124a8833981519152916107299061221c565b6001546001600160a01b03163314610d445760405162461bcd60e51b815260206004820152601060248201526f13d3931657d35054d5115497d413d3d360821b60448201526064016105bb565b61082682826113e9565b6000336107c5818585611143565b600080610d6883610e03565b905080851115610d9157828582604051633fa733bb60e21b81526004016105bb939291906122c4565b6000610d9c866107ad565b9050610dab338686898561141f565b95945050505050565b600080610dc083610f30565b905080851115610de957828582604051632e52afbb60e21b81526004016105bb939291906122c4565b6000610df4866107ad565b9050610dab338686848a61141f565b60006107b1610e1183610b3e565b90565b83421115610e385760405163313c898160e11b8152600481018590526024016105bb565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610e678c610f9d565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610ec282610fdf565b90506000610ed28287878761151e565b9050896001600160a01b0316816001600160a01b031614610f19576040516325c0072360e11b81526001600160a01b0380831660048301528b1660248201526044016105bb565b610f248a8a8a6110a7565b50505050505050505050565b60006107b182610b3e565b610f453382611036565b50565b6001600160a01b0391821660009081527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace016020908152604080832093909416825291909152205490565b60006107b182611336565b6001600160a01b031660009081527f5ab42ced628888259c08ac98db1eb0cf702fc1501344311d8b100cd1bfe4bb006020526040902080546001810190915590565b60006107b1610fec611277565b8360405161190160f01b8152600281019290925260228201526042902090565b60008060008061101c868661154c565b92509250925061102c8282611599565b5090949350505050565b6001600160a01b038216600090815260208190526040902054811115610826576001600160a01b0382166000818152602081815260409182902084905590518381527f625fed9875dada8643f2418b838ae0bc78d9a148a18eee4ee1979ff0f3f5d427910160405180910390a25050565b6110b48383836001611652565b505050565b6001600160a01b0382166110e35760405163ec442f0560e01b8152600060048201526024016105bb565b6108266000838361173a565b60006110fb8484610f48565b905060001981101561113d578181101561112e57828183604051637dc7a0d960e11b81526004016105bb939291906122c4565b61113d84848484036000611652565b50505050565b6001600160a01b03831661116d57604051634b637e8f60e11b8152600060048201526024016105bb565b6001600160a01b0382166111975760405163ec442f0560e01b8152600060048201526024016105bb565b6110b483838361173a565b6000806000805160206124e88339815191529050600081546111ce9190600160a01b900460ff16612327565b91505090565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a006107b1565b60608282604051602001611212929190612340565b604051602081830303815290604052905092915050565b611231611869565b6108268282611890565b611243611869565b610f4581604051806040016040528060018152602001603160f81b8152506118e1565b61126e611869565b610f4581611942565b60006105966119b4565b60015460405163077ba79560e41b81526001600160a01b03858116600483015260248201859052909116906377ba795090604401600060405180830381600087803b1580156112cf57600080fd5b505af11580156112e3573d6000803e3d6000fd5b505060408051858152602081018590526001600160a01b038088169450881692507fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d791015b60405180910390a350505050565b6000806000805160206124a88339815191525b6001600160a01b0390931660009081526020939093525050604090205490565b6000807f5ab42ced628888259c08ac98db1eb0cf702fc1501344311d8b100cd1bfe4bb00611349565b7fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d10280546060916000805160206124c8833981519152916107299061221c565b606060006000805160206124c8833981519152610718565b6001600160a01b03821661141357604051634b637e8f60e11b8152600060048201526024016105bb565b6108268260008361173a565b600061142a84610f92565b90506000611436610adb565b801561144157508183115b61144b578261144d565b815b60015460405163db2aa12760e01b81526001600160a01b0388811660048301526024820184905292935091169063db2aa12790604401600060405180830381600087803b15801561149d57600080fd5b505af11580156114b1573d6000803e3d6000fd5b50505050846001600160a01b0316866001600160a01b0316886001600160a01b03167ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db878760405161150d929190918252602082015260400190565b60405180910390a450505050505050565b60008060008061153088888888611a28565b9250925092506115408282611599565b50909695505050505050565b600080600083516041036115865760208401516040850151606086015160001a61157888828585611a28565b955095509550505050611592565b50508151600091506002905b9250925092565b60008260038111156115ad576115ad61236f565b036115b6575050565b60018260038111156115ca576115ca61236f565b036115e85760405163f645eedf60e01b815260040160405180910390fd5b60028260038111156115fc576115fc61236f565b0361161d5760405163fce698f760e01b8152600481018290526024016105bb565b60038260038111156116315761163161236f565b03610826576040516335e2f38360e21b8152600481018290526024016105bb565b6000805160206124a88339815191526001600160a01b03851661168b5760405163e602df0560e01b8152600060048201526024016105bb565b6001600160a01b0384166116b557604051634a1406b160e11b8152600060048201526024016105bb565b6001600160a01b0380861660009081526001830160209081526040808320938816835292905220839055811561173357836001600160a01b0316856001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258560405161172a91815260200190565b60405180910390a35b5050505050565b611742610adb565b801561175657506001600160a01b03831615155b156117bb5760015460405163cd09525d60e01b81526001600160a01b0385811660048301529091169063cd09525d90602401600060405180830381600087803b1580156117a257600080fd5b505af11580156117b6573d6000803e3d6000fd5b505050505b6117c6838383611af7565b6001600160a01b038316158015906117e657506001600160a01b03821615155b80156117f157508015155b156110b457600154604051630325c61f60e31b81526001600160a01b0385811660048301528481166024830152604482018490529091169063192e30f890606401600060405180830381600087803b15801561184c57600080fd5b505af1158015611860573d6000803e3d6000fd5b50505050505050565b611871611b33565b61188e57604051631afcd79f60e31b815260040160405180910390fd5b565b611898611869565b6000805160206124a88339815191527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace036118d284826123cc565b506004810161113d83826123cc565b6118e9611869565b6000805160206124c88339815191527fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d10261192384826123cc565b506003810161193283826123cc565b5060008082556001909101555050565b61194a611869565b6000805160206124e883398151915260008061196584611b4d565b9150915081611975576012611977565b805b83546001600160a81b031916600160a01b60ff92909216919091026001600160a01b031916176001600160a01b0394909416939093179091555050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6119df611c29565b6119e7611c93565b60408051602081019490945283019190915260608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115611a635750600091506003905082611aed565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015611ab7573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611ae357506000925060019150829050611aed565b9250600091508190505b9450945094915050565b611b0083610aba565b15611b28576040516233044d60e31b81526001600160a01b03841660048201526024016105bb565b6110b4838383611cd7565b6000611b3d6111d4565b54600160401b900460ff16919050565b60408051600481526024810182526020810180516001600160e01b031663313ce56760e01b17905290516000918291829182916001600160a01b03871691611b949161248b565b600060405180830381855afa9150503d8060008114611bcf576040519150601f19603f3d011682016040523d82523d6000602084013e611bd4565b606091505b5091509150818015611be857506020815110155b15611c1c57600081806020019051810190611c0391906122e5565b905060ff8111611c1a576001969095509350505050565b505b5060009485945092505050565b60006000805160206124c883398151915281611c43611392565b805190915015611c5b57805160209091012092915050565b81548015611c6a579392505050565b7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470935050505090565b60006000805160206124c883398151915281611cad6113d1565b805190915015611cc557805160209091012092915050565b60018201548015611c6a579392505050565b6000805160206124a88339815191526001600160a01b038416611d135781816002016000828254611d089190612314565b90915550611d729050565b6001600160a01b03841660009081526020829052604090205482811015611d535784818460405163391434e360e21b81526004016105bb939291906122c4565b6001600160a01b03851660009081526020839052604090209083900390555b6001600160a01b038316611d90576002810180548390039055611daf565b6001600160a01b03831660009081526020829052604090208054830190555b826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161132891815260200190565b80356001600160a01b0381168114611e0b57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611e4f57611e4f611e10565b604052919050565b600067ffffffffffffffff821115611e7157611e71611e10565b50601f01601f191660200190565b600080600080600060a08688031215611e9757600080fd5b611ea086611df4565b9450611eae60208701611df4565b93506040860135925060608601359150608086013567ffffffffffffffff811115611ed857600080fd5b8601601f81018813611ee957600080fd5b8035611efc611ef782611e57565b611e26565b818152896020838501011115611f1157600080fd5b816020840160208301376000602083830101528093505050509295509295909350565b60005b83811015611f4f578181015183820152602001611f37565b50506000910152565b60008151808452611f70816020860160208601611f34565b601f01601f19169290920160200192915050565b602081526000610bdc6020830184611f58565b600060208284031215611fa957600080fd5b5035919050565b60008060408385031215611fc357600080fd5b611fcc83611df4565b946020939093013593505050565b600080600060608486031215611fef57600080fd5b611ff884611df4565b925061200660208501611df4565b929592945050506040919091013590565b6000806000806080858703121561202d57600080fd5b61203685611df4565b93506020850135925061204b60408601611df4565b915061205960608601611df4565b905092959194509250565b60006020828403121561207657600080fd5b610bdc82611df4565b6000806040838503121561209257600080fd5b823591506120a260208401611df4565b90509250929050565b60ff60f81b8816815260e0602082015260006120ca60e0830189611f58565b82810360408401526120dc8189611f58565b606084018890526001600160a01b038716608085015260a0840186905283810360c08501528451808252602080870193509091019060005b81811015612132578351835260209384019390920191600101612114565b50909b9a5050505050505050505050565b60008060006060848603121561215857600080fd5b8335925061216860208501611df4565b915061217660408501611df4565b90509250925092565b600080600080600080600060e0888a03121561219a57600080fd5b6121a388611df4565b96506121b160208901611df4565b95506040880135945060608801359350608088013560ff811681146121d557600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561220557600080fd5b61220e83611df4565b91506120a260208401611df4565b600181811c9082168061223057607f821691505b60208210810361225057634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561226857600080fd5b815167ffffffffffffffff81111561227f57600080fd5b8201601f8101841361229057600080fd5b805161229e611ef782611e57565b8181528560208385010111156122b357600080fd5b610dab826020830160208601611f34565b6001600160a01b039390931683526020830191909152604082015260600190565b6000602082840312156122f757600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156107b1576107b16122fe565b60ff81811683821601908111156107b1576107b16122fe565b60008351612352818460208801611f34565b835190830190612366818360208801611f34565b01949350505050565b634e487b7160e01b600052602160045260246000fd5b601f8211156110b457806000526020600020601f840160051c810160208510156123ac5750805b601f840160051c820191505b8181101561173357600081556001016123b8565b815167ffffffffffffffff8111156123e6576123e6611e10565b6123fa816123f4845461221c565b84612385565b6020601f82116001811461242e57600083156124165750848201515b600019600385901b1c1916600184901b178455611733565b600084815260208120601f198516915b8281101561245e578785015182556020948501946001909201910161243e565b508482101561247c5786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b6000825161249d818460208701611f34565b919091019291505056fe52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace00a16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1000773e532dfede91f04b12a73d3d2acd361424f41f76b4fb79f090161e36b4e00a2646970667358221220332f2eb8320e90bf750d257c99ac6bcf861b67723bfcb62a44bc25dd779f999664736f6c634300081e0033";
const isSuperArgs$2 = (xs) => xs.length > 1;
class ERC4626Pool__factory extends ethers.ContractFactory {
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
    return new ethers.Interface(_abi$2);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$2, runner);
  }
}

var index$5 = /*#__PURE__*/Object.freeze({
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
const _bytecode$1 = "0x61016060405234801561001157600080fd5b506040518060400160405280600d81526020016c2bb930b83832b21022ba3432b960991b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600d81526020016c2bb930b83832b21022ba3432b960991b815250604051806040016040528060048152602001630ae8aa8960e31b81525081600390816100a59190610286565b5060046100b28282610286565b506100c29150839050600561016d565b610120526100d181600661016d565b61014052815160208084019190912060e052815190820120610100524660a05261015e60e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c052506103b6565b600060208351101561018957610182836101a0565b905061019a565b816101948482610286565b5060ff90505b92915050565b600080829050601f815111156101d4578260405163305a27a960e01b81526004016101cb9190610344565b60405180910390fd5b80516101df82610392565b179392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061021157607f821691505b60208210810361023157634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561028157806000526020600020601f840160051c8101602085101561025e5750805b601f840160051c820191505b8181101561027e576000815560010161026a565b50505b505050565b81516001600160401b0381111561029f5761029f6101e7565b6102b3816102ad84546101fd565b84610237565b6020601f8211600181146102e757600083156102cf5750848201515b600019600385901b1c1916600184901b17845561027e565b600084815260208120601f198516915b8281101561031757878501518255602094850194600190920191016102f7565b50848210156103355786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b602081526000825180602084015260005b818110156103725760208186018101516040868401015201610355565b506000604082850101526040601f19601f83011684010191505092915050565b805160208083015191908110156102315760001960209190910360031b1b16919050565b60805160a05160c05160e051610100516101205161014051611131610410600039600061091b015260006108ee015260006108960152600061086e015260006107c9015260006107f30152600061081d01526111316000f3fe6080604052600436106100ec5760003560e01c806370a082311161008a578063a9059cbb11610059578063a9059cbb1461027e578063d0e30db01461029e578063d505accf146102a6578063dd62ed3e146102c657600080fd5b806370a08231146101eb5780637ecebe001461022157806384b0196e1461024157806395d89b411461026957600080fd5b806323b872dd116100c657806323b872dd1461017a5780632e1a7d4d1461019a578063313ce567146101ba5780633644e515146101d657600080fd5b806306fdde0314610100578063095ea7b31461012b57806318160ddd1461015b57600080fd5b366100fb576100f961030c565b005b600080fd5b34801561010c57600080fd5b5061011561034d565b6040516101229190610e7b565b60405180910390f35b34801561013757600080fd5b5061014b610146366004610eb1565b6103df565b6040519015158152602001610122565b34801561016757600080fd5b506002545b604051908152602001610122565b34801561018657600080fd5b5061014b610195366004610edb565b6103f9565b3480156101a657600080fd5b506100f96101b5366004610f18565b61041d565b3480156101c657600080fd5b5060405160128152602001610122565b3480156101e257600080fd5b5061016c61048d565b3480156101f757600080fd5b5061016c610206366004610f31565b6001600160a01b031660009081526020819052604090205490565b34801561022d57600080fd5b5061016c61023c366004610f31565b61049c565b34801561024d57600080fd5b506102566104ba565b6040516101229796959493929190610f4c565b34801561027557600080fd5b50610115610500565b34801561028a57600080fd5b5061014b610299366004610eb1565b61050f565b6100f961030c565b3480156102b257600080fd5b506100f96102c1366004610fe4565b61051d565b3480156102d257600080fd5b5061016c6102e1366004611057565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610316333461065c565b60405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b60606003805461035c9061108a565b80601f01602080910402602001604051908101604052809291908181526020018280546103889061108a565b80156103d55780601f106103aa576101008083540402835291602001916103d5565b820191906000526020600020905b8154815290600101906020018083116103b857829003601f168201915b5050505050905090565b6000336103ed818585610696565b60019150505b92915050565b6000336104078582856106a8565b610412858585610727565b506001949350505050565b6104273382610786565b604051339082156108fc029083906000818181858888f19350505050158015610454573d6000803e3d6000fd5b5060405181815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a250565b60006104976107bc565b905090565b6001600160a01b0381166000908152600760205260408120546103f3565b6000606080600080600060606104ce6108e7565b6104d6610914565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b60606004805461035c9061108a565b6000336103ed818585610727565b834211156105465760405163313c898160e11b8152600481018590526024015b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886105938c6001600160a01b0316600090815260076020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006105ee82610941565b905060006105fe8287878761096e565b9050896001600160a01b0316816001600160a01b031614610645576040516325c0072360e11b81526001600160a01b0380831660048301528b16602482015260440161053d565b6106508a8a8a610696565b50505050505050505050565b6001600160a01b0382166106865760405163ec442f0560e01b81526000600482015260240161053d565b6106926000838361099c565b5050565b6106a38383836001610ac6565b505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811015610721578181101561071257604051637dc7a0d960e11b81526001600160a01b0384166004820152602481018290526044810183905260640161053d565b61072184848484036000610ac6565b50505050565b6001600160a01b03831661075157604051634b637e8f60e11b81526000600482015260240161053d565b6001600160a01b03821661077b5760405163ec442f0560e01b81526000600482015260240161053d565b6106a383838361099c565b6001600160a01b0382166107b057604051634b637e8f60e11b81526000600482015260240161053d565b6106928260008361099c565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561081557507f000000000000000000000000000000000000000000000000000000000000000046145b1561083f57507f000000000000000000000000000000000000000000000000000000000000000090565b610497604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60606104977f00000000000000000000000000000000000000000000000000000000000000006005610b9b565b60606104977f00000000000000000000000000000000000000000000000000000000000000006006610b9b565b60006103f361094e6107bc565b8360405161190160f01b8152600281019290925260228201526042902090565b60008060008061098088888888610c46565b9250925092506109908282610d15565b50909695505050505050565b6001600160a01b0383166109c75780600260008282546109bc91906110c4565b90915550610a399050565b6001600160a01b03831660009081526020819052604090205481811015610a1a5760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161053d565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610a5557600280548290039055610a74565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ab991815260200190565b60405180910390a3505050565b6001600160a01b038416610af05760405163e602df0560e01b81526000600482015260240161053d565b6001600160a01b038316610b1a57604051634a1406b160e11b81526000600482015260240161053d565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561072157826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610b8d91815260200190565b60405180910390a350505050565b606060ff8314610bb557610bae83610dce565b90506103f3565b818054610bc19061108a565b80601f0160208091040260200160405190810160405280929190818152602001828054610bed9061108a565b8015610c3a5780601f10610c0f57610100808354040283529160200191610c3a565b820191906000526020600020905b815481529060010190602001808311610c1d57829003601f168201915b505050505090506103f3565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115610c815750600091506003905082610d0b565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015610cd5573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610d0157506000925060019150829050610d0b565b9250600091508190505b9450945094915050565b6000826003811115610d2957610d296110e5565b03610d32575050565b6001826003811115610d4657610d466110e5565b03610d645760405163f645eedf60e01b815260040160405180910390fd5b6002826003811115610d7857610d786110e5565b03610d995760405163fce698f760e01b81526004810182905260240161053d565b6003826003811115610dad57610dad6110e5565b03610692576040516335e2f38360e21b81526004810182905260240161053d565b60606000610ddb83610e0d565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600060ff8216601f8111156103f357604051632cd44ac360e21b815260040160405180910390fd5b6000815180845260005b81811015610e5b57602081850181015186830182015201610e3f565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610e8e6020830184610e35565b9392505050565b80356001600160a01b0381168114610eac57600080fd5b919050565b60008060408385031215610ec457600080fd5b610ecd83610e95565b946020939093013593505050565b600080600060608486031215610ef057600080fd5b610ef984610e95565b9250610f0760208501610e95565b929592945050506040919091013590565b600060208284031215610f2a57600080fd5b5035919050565b600060208284031215610f4357600080fd5b610e8e82610e95565b60ff60f81b8816815260e060208201526000610f6b60e0830189610e35565b8281036040840152610f7d8189610e35565b606084018890526001600160a01b038716608085015260a0840186905283810360c08501528451808252602080870193509091019060005b81811015610fd3578351835260209384019390920191600101610fb5565b50909b9a5050505050505050505050565b600080600080600080600060e0888a031215610fff57600080fd5b61100888610e95565b965061101660208901610e95565b95506040880135945060608801359350608088013560ff8116811461103a57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561106a57600080fd5b61107383610e95565b915061108160208401610e95565b90509250929050565b600181811c9082168061109e57607f821691505b6020821081036110be57634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156103f357634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fdfea2646970667358221220cf936561a4791fd70b5dbaf6f63ad87ff88cfe8ebcc91389374956d3e199572464736f6c634300081e0033";
const isSuperArgs$1 = (xs) => xs.length > 1;
class WETH__factory extends ethers.ContractFactory {
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
    return new ethers.Interface(_abi$1);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$1, runner);
  }
}

var index$4 = /*#__PURE__*/Object.freeze({
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
const _bytecode = "0x61016060405234801561001157600080fd5b5060405161170438038061170483398101604081905261003091610370565b6040518060400160405280600d81526020016c2bb930b83832b21022ba3432b960991b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600d81526020016c2bb930b83832b21022ba3432b960991b815250604051806040016040528060048152602001630ae8aa8960e31b81525081600390816100c39190610428565b5060046100d08282610428565b506100e091508390506005610196565b610120526100ef816006610196565b61014052815160208084019190912060e052815190820120610100524660a05261017c60e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c0525061019033826101c9565b50610579565b60006020835110156101b2576101ab83610208565b90506101c3565b816101bd8482610428565b5060ff90505b92915050565b6001600160a01b0382166101f85760405163ec442f0560e01b8152600060048201526024015b60405180910390fd5b61020460008383610246565b5050565b600080829050601f81511115610233578260405163305a27a960e01b81526004016101ef91906104e6565b805161023e82610534565b179392505050565b6001600160a01b0383166102715780600260008282546102669190610558565b909155506102e39050565b6001600160a01b038316600090815260208190526040902054818110156102c45760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016101ef565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166102ff5760028054829003905561031e565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161036391815260200190565b60405180910390a3505050565b60006020828403121561038257600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806103b357607f821691505b6020821081036103d357634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561042357806000526020600020601f840160051c810160208510156104005750805b601f840160051c820191505b81811015610420576000815560010161040c565b50505b505050565b81516001600160401b0381111561044157610441610389565b6104558161044f845461039f565b846103d9565b6020601f82116001811461048957600083156104715750848201515b600019600385901b1c1916600184901b178455610420565b600084815260208120601f198516915b828110156104b95787850151825560209485019460019092019101610499565b50848210156104d75786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b602081526000825180602084015260005b8181101561051457602081860181015160408684010152016104f7565b506000604082850101526040601f19601f83011684010191505092915050565b805160208083015191908110156103d35760001960209190910360031b1b16919050565b808201808211156101c357634e487b7160e01b600052601160045260246000fd5b60805160a05160c05160e0516101005161012051610140516111316105d3600039600061091b015260006108ee015260006108960152600061086e015260006107c9015260006107f30152600061081d01526111316000f3fe6080604052600436106100ec5760003560e01c806370a082311161008a578063a9059cbb11610059578063a9059cbb1461027e578063d0e30db01461029e578063d505accf146102a6578063dd62ed3e146102c657600080fd5b806370a08231146101eb5780637ecebe001461022157806384b0196e1461024157806395d89b411461026957600080fd5b806323b872dd116100c657806323b872dd1461017a5780632e1a7d4d1461019a578063313ce567146101ba5780633644e515146101d657600080fd5b806306fdde0314610100578063095ea7b31461012b57806318160ddd1461015b57600080fd5b366100fb576100f961030c565b005b600080fd5b34801561010c57600080fd5b5061011561034d565b6040516101229190610e7b565b60405180910390f35b34801561013757600080fd5b5061014b610146366004610eb1565b6103df565b6040519015158152602001610122565b34801561016757600080fd5b506002545b604051908152602001610122565b34801561018657600080fd5b5061014b610195366004610edb565b6103f9565b3480156101a657600080fd5b506100f96101b5366004610f18565b61041d565b3480156101c657600080fd5b5060405160128152602001610122565b3480156101e257600080fd5b5061016c61048d565b3480156101f757600080fd5b5061016c610206366004610f31565b6001600160a01b031660009081526020819052604090205490565b34801561022d57600080fd5b5061016c61023c366004610f31565b61049c565b34801561024d57600080fd5b506102566104ba565b6040516101229796959493929190610f4c565b34801561027557600080fd5b50610115610500565b34801561028a57600080fd5b5061014b610299366004610eb1565b61050f565b6100f961030c565b3480156102b257600080fd5b506100f96102c1366004610fe4565b61051d565b3480156102d257600080fd5b5061016c6102e1366004611057565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610316333461065c565b60405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b60606003805461035c9061108a565b80601f01602080910402602001604051908101604052809291908181526020018280546103889061108a565b80156103d55780601f106103aa576101008083540402835291602001916103d5565b820191906000526020600020905b8154815290600101906020018083116103b857829003601f168201915b5050505050905090565b6000336103ed818585610696565b60019150505b92915050565b6000336104078582856106a8565b610412858585610727565b506001949350505050565b6104273382610786565b604051339082156108fc029083906000818181858888f19350505050158015610454573d6000803e3d6000fd5b5060405181815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a250565b60006104976107bc565b905090565b6001600160a01b0381166000908152600760205260408120546103f3565b6000606080600080600060606104ce6108e7565b6104d6610914565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b60606004805461035c9061108a565b6000336103ed818585610727565b834211156105465760405163313c898160e11b8152600481018590526024015b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886105938c6001600160a01b0316600090815260076020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006105ee82610941565b905060006105fe8287878761096e565b9050896001600160a01b0316816001600160a01b031614610645576040516325c0072360e11b81526001600160a01b0380831660048301528b16602482015260440161053d565b6106508a8a8a610696565b50505050505050505050565b6001600160a01b0382166106865760405163ec442f0560e01b81526000600482015260240161053d565b6106926000838361099c565b5050565b6106a38383836001610ac6565b505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811015610721578181101561071257604051637dc7a0d960e11b81526001600160a01b0384166004820152602481018290526044810183905260640161053d565b61072184848484036000610ac6565b50505050565b6001600160a01b03831661075157604051634b637e8f60e11b81526000600482015260240161053d565b6001600160a01b03821661077b5760405163ec442f0560e01b81526000600482015260240161053d565b6106a383838361099c565b6001600160a01b0382166107b057604051634b637e8f60e11b81526000600482015260240161053d565b6106928260008361099c565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561081557507f000000000000000000000000000000000000000000000000000000000000000046145b1561083f57507f000000000000000000000000000000000000000000000000000000000000000090565b610497604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60606104977f00000000000000000000000000000000000000000000000000000000000000006005610b9b565b60606104977f00000000000000000000000000000000000000000000000000000000000000006006610b9b565b60006103f361094e6107bc565b8360405161190160f01b8152600281019290925260228201526042902090565b60008060008061098088888888610c46565b9250925092506109908282610d15565b50909695505050505050565b6001600160a01b0383166109c75780600260008282546109bc91906110c4565b90915550610a399050565b6001600160a01b03831660009081526020819052604090205481811015610a1a5760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161053d565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610a5557600280548290039055610a74565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ab991815260200190565b60405180910390a3505050565b6001600160a01b038416610af05760405163e602df0560e01b81526000600482015260240161053d565b6001600160a01b038316610b1a57604051634a1406b160e11b81526000600482015260240161053d565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561072157826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610b8d91815260200190565b60405180910390a350505050565b606060ff8314610bb557610bae83610dce565b90506103f3565b818054610bc19061108a565b80601f0160208091040260200160405190810160405280929190818152602001828054610bed9061108a565b8015610c3a5780601f10610c0f57610100808354040283529160200191610c3a565b820191906000526020600020905b815481529060010190602001808311610c1d57829003601f168201915b505050505090506103f3565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115610c815750600091506003905082610d0b565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015610cd5573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610d0157506000925060019150829050610d0b565b9250600091508190505b9450945094915050565b6000826003811115610d2957610d296110e5565b03610d32575050565b6001826003811115610d4657610d466110e5565b03610d645760405163f645eedf60e01b815260040160405180910390fd5b6002826003811115610d7857610d786110e5565b03610d995760405163fce698f760e01b81526004810182905260240161053d565b6003826003811115610dad57610dad6110e5565b03610692576040516335e2f38360e21b81526004810182905260240161053d565b60606000610ddb83610e0d565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600060ff8216601f8111156103f357604051632cd44ac360e21b815260040160405180910390fd5b6000815180845260005b81811015610e5b57602081850181015186830182015201610e3f565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610e8e6020830184610e35565b9392505050565b80356001600160a01b0381168114610eac57600080fd5b919050565b60008060408385031215610ec457600080fd5b610ecd83610e95565b946020939093013593505050565b600080600060608486031215610ef057600080fd5b610ef984610e95565b9250610f0760208501610e95565b929592945050506040919091013590565b600060208284031215610f2a57600080fd5b5035919050565b600060208284031215610f4357600080fd5b610e8e82610e95565b60ff60f81b8816815260e060208201526000610f6b60e0830189610e35565b8281036040840152610f7d8189610e35565b606084018890526001600160a01b038716608085015260a0840186905283810360c08501528451808252602080870193509091019060005b81811015610fd3578351835260209384019390920191600101610fb5565b50909b9a5050505050505050505050565b600080600080600080600060e0888a031215610fff57600080fd5b61100888610e95565b965061101660208901610e95565b95506040880135945060608801359350608088013560ff8116811461103a57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561106a57600080fd5b61107383610e95565b915061108160208401610e95565b90509250929050565b600181811c9082168061109e57607f821691505b6020821081036110be57634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156103f357634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fdfea2646970667358221220acd411bf3a3dcc711d2b573137ff4425f7d50182ae51c5c35238e07c336c90c264736f6c634300081e0033";
const isSuperArgs = (xs) => xs.length > 1;
class WETHMock__factory extends ethers.ContractFactory {
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
    return new ethers.Interface(_abi);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi, runner);
  }
}

var index$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  WETHMock__factory: WETHMock__factory
});

var index$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  erc20LockableSol: index$7,
  erc20MockSol: index$6,
  erc4626PoolSol: index$5,
  wethMockSol: index$3,
  wethSol: index$4
});

var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  interfaces: index$g,
  libraries: index$e,
  lockSol: index$p,
  pools: index$a,
  proxy: index$8,
  tokens: index$2
});

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  contracts: index$1,
  openzeppelin: index$q
});

exports.Address__factory = Address__factory;
exports.Clones__factory = Clones__factory;
exports.ContextUpgradeable__factory = ContextUpgradeable__factory;
exports.Create2__factory = Create2__factory;
exports.ECDSA__factory = ECDSA__factory;
exports.EIP712Upgradeable__factory = EIP712Upgradeable__factory;
exports.EIP712__factory = EIP712__factory;
exports.ERC1967Utils__factory = ERC1967Utils__factory;
exports.ERC20Burnable__factory = ERC20Burnable__factory;
exports.ERC20Lockable__factory = ERC20Lockable__factory;
exports.ERC20Mock__factory = ERC20Mock__factory;
exports.ERC20PermitUpgradeable__factory = ERC20PermitUpgradeable__factory;
exports.ERC20Permit__factory = ERC20Permit__factory;
exports.ERC20Upgradeable__factory = ERC20Upgradeable__factory;
exports.ERC20__factory = ERC20__factory;
exports.ERC4626Pool__factory = ERC4626Pool__factory;
exports.ERC4626Upgradeable__factory = ERC4626Upgradeable__factory;
exports.Errors__factory = Errors__factory;
exports.IBeacon__factory = IBeacon__factory;
exports.IERC1155Errors__factory = IERC1155Errors__factory;
exports.IERC1363__factory = IERC1363__factory;
exports.IERC165__factory = IERC165__factory;
exports.IERC1967__factory = IERC1967__factory;
exports.IERC20Errors__factory = IERC20Errors__factory;
exports.IERC20Exp__factory = IERC20Exp__factory;
exports.IERC20Metadata__factory = IERC20Metadata__factory;
exports.IERC20Mintable__factory = IERC20Mintable__factory;
exports.IERC20Permit__factory = IERC20Permit__factory;
exports.IERC20__factory = IERC20__factory;
exports.IERC4626Pool__factory = IERC4626Pool__factory;
exports.IERC4626__factory = IERC4626__factory;
exports.IERC5267__factory = IERC5267__factory;
exports.IERC721Errors__factory = IERC721Errors__factory;
exports.IInitializableProxy__factory = IInitializableProxy__factory;
exports.IMasterChef__factory = IMasterChef__factory;
exports.IMasterPool__factory = IMasterPool__factory;
exports.IRewardVault__factory = IRewardVault__factory;
exports.IWETH__factory = IWETH__factory;
exports.InitializableProxy__factory = InitializableProxy__factory;
exports.Initializable__factory = Initializable__factory;
exports.Lock__factory = Lock__factory;
exports.MasterChef__factory = MasterChef__factory;
exports.MasterPool__factory = MasterPool__factory;
exports.NoncesUpgradeable__factory = NoncesUpgradeable__factory;
exports.Nonces__factory = Nonces__factory;
exports.OwnableUpgradeable__factory = OwnableUpgradeable__factory;
exports.Ownable__factory = Ownable__factory;
exports.Proxy__factory = Proxy__factory;
exports.ReentrancyGuardUpgradeable__factory = ReentrancyGuardUpgradeable__factory;
exports.RewardVault__factory = RewardVault__factory;
exports.SafeCast__factory = SafeCast__factory;
exports.SafeERC20__factory = SafeERC20__factory;
exports.ShortStrings__factory = ShortStrings__factory;
exports.SigLib__factory = SigLib__factory;
exports.Strings__factory = Strings__factory;
exports.WETHMock__factory = WETHMock__factory;
exports.WETH__factory = WETH__factory;
exports.factories = index;
