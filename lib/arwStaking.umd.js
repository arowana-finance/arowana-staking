(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ethers')) :
  typeof define === 'function' && define.amd ? define(['exports', 'ethers'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.arwStaking = {}, global.ethers));
})(this, (function (exports, ethers) { 'use strict';

  const _abi$1c = [
    {
      inputs: [],
      name: "AccessControlBadConfirmation",
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
          internalType: "bytes32",
          name: "neededRole",
          type: "bytes32"
        }
      ],
      name: "AccessControlUnauthorizedAccount",
      type: "error"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "previousAdminRole",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "newAdminRole",
          type: "bytes32"
        }
      ],
      name: "RoleAdminChanged",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address"
        }
      ],
      name: "RoleGranted",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address"
        }
      ],
      name: "RoleRevoked",
      type: "event"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        }
      ],
      name: "getRoleAdmin",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "address",
          name: "account",
          type: "address"
        }
      ],
      name: "grantRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "address",
          name: "account",
          type: "address"
        }
      ],
      name: "hasRole",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "address",
          name: "callerConfirmation",
          type: "address"
        }
      ],
      name: "renounceRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "address",
          name: "account",
          type: "address"
        }
      ],
      name: "revokeRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }
  ];
  class IAccessControl__factory {
    static abi = _abi$1c;
    static createInterface() {
      return new ethers.Interface(_abi$1c);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$1c, runner);
    }
  }

  var index$1J = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IAccessControl__factory: IAccessControl__factory
  });

  const _abi$1b = [
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
    static abi = _abi$1b;
    static createInterface() {
      return new ethers.Interface(_abi$1b);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$1b, runner);
    }
  };

  var index$1I = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Ownable__factory: Ownable__factory$1
  });

  const _abi$1a = [
    {
      inputs: [],
      name: "AccessControlBadConfirmation",
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
          internalType: "bytes32",
          name: "neededRole",
          type: "bytes32"
        }
      ],
      name: "AccessControlUnauthorizedAccount",
      type: "error"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "previousAdminRole",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "newAdminRole",
          type: "bytes32"
        }
      ],
      name: "RoleAdminChanged",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address"
        }
      ],
      name: "RoleGranted",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address"
        }
      ],
      name: "RoleRevoked",
      type: "event"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        }
      ],
      name: "getRoleAdmin",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "uint256",
          name: "index",
          type: "uint256"
        }
      ],
      name: "getRoleMember",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        }
      ],
      name: "getRoleMemberCount",
      outputs: [
        {
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "address",
          name: "account",
          type: "address"
        }
      ],
      name: "grantRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "address",
          name: "account",
          type: "address"
        }
      ],
      name: "hasRole",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "address",
          name: "callerConfirmation",
          type: "address"
        }
      ],
      name: "renounceRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "address",
          name: "account",
          type: "address"
        }
      ],
      name: "revokeRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }
  ];
  class IAccessControlEnumerable__factory {
    static abi = _abi$1a;
    static createInterface() {
      return new ethers.Interface(_abi$1a);
    }
    static connect(address, runner) {
      return new ethers.Contract(
        address,
        _abi$1a,
        runner
      );
    }
  }

  var index$1H = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IAccessControlEnumerable__factory: IAccessControlEnumerable__factory
  });

  var index$1G = /*#__PURE__*/Object.freeze({
    __proto__: null,
    iAccessControlEnumerableSol: index$1H
  });

  var index$1F = /*#__PURE__*/Object.freeze({
    __proto__: null,
    extensions: index$1G,
    iAccessControlSol: index$1J,
    ownableSol: index$1I
  });

  const _abi$19 = [
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
    static abi = _abi$19;
    static createInterface() {
      return new ethers.Interface(_abi$19);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$19, runner);
    }
  }

  var index$1E = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IERC1363__factory: IERC1363__factory
  });

  const _abi$18 = [
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
    static abi = _abi$18;
    static createInterface() {
      return new ethers.Interface(_abi$18);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$18, runner);
    }
  }

  var index$1D = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IERC1967__factory: IERC1967__factory
  });

  const _abi$17 = [
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
    static abi = _abi$17;
    static createInterface() {
      return new ethers.Interface(_abi$17);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$17, runner);
    }
  };

  var index$1C = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IERC4626__factory: IERC4626__factory$1
  });

  const _abi$16 = [
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
    static abi = _abi$16;
    static createInterface() {
      return new ethers.Interface(_abi$16);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$16, runner);
    }
  }

  var index$1B = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IERC5267__factory: IERC5267__factory
  });

  const _abi$15 = [
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
    static abi = _abi$15;
    static createInterface() {
      return new ethers.Interface(_abi$15);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$15, runner);
    }
  }

  const _abi$14 = [
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
    static abi = _abi$14;
    static createInterface() {
      return new ethers.Interface(_abi$14);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$14, runner);
    }
  }

  const _abi$13 = [
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
    static abi = _abi$13;
    static createInterface() {
      return new ethers.Interface(_abi$13);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$13, runner);
    }
  }

  var index$1A = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IERC1155Errors__factory: IERC1155Errors__factory,
    IERC20Errors__factory: IERC20Errors__factory,
    IERC721Errors__factory: IERC721Errors__factory
  });

  var index$1z = /*#__PURE__*/Object.freeze({
    __proto__: null,
    draftIerc6093Sol: index$1A,
    ierc1363Sol: index$1E,
    ierc1967Sol: index$1D,
    ierc4626Sol: index$1C,
    ierc5267Sol: index$1B
  });

  const _abi$12 = [
    {
      inputs: [],
      name: "CloneArgumentsTooLong",
      type: "error"
    }
  ];
  const _bytecode$m = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220a8ff8e257a6886f6399fd37fa9a3fe3bec438e6b75cfdc9c975c5ac1281a61ae64736f6c634300081e0033";
  const isSuperArgs$m = (xs) => xs.length > 1;
  class Clones__factory extends ethers.ContractFactory {
    constructor(...args) {
      if (isSuperArgs$m(args)) {
        super(...args);
      } else {
        super(_abi$12, _bytecode$m, args[0]);
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
    static abi = _abi$12;
    static createInterface() {
      return new ethers.Interface(_abi$12);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$12, runner);
    }
  }

  var index$1y = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Clones__factory: Clones__factory
  });

  const _abi$11 = [
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
  const _bytecode$l = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122028f3a3e46349c06e38f8d2c90b3cf2c39e9253b3f20f784ebdec9fc4c64253d464736f6c634300081e0033";
  const isSuperArgs$l = (xs) => xs.length > 1;
  class ERC1967Utils__factory extends ethers.ContractFactory {
    constructor(...args) {
      if (isSuperArgs$l(args)) {
        super(...args);
      } else {
        super(_abi$11, _bytecode$l, args[0]);
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
    static abi = _abi$11;
    static createInterface() {
      return new ethers.Interface(_abi$11);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$11, runner);
    }
  }

  var index$1x = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ERC1967Utils__factory: ERC1967Utils__factory
  });

  var index$1w = /*#__PURE__*/Object.freeze({
    __proto__: null,
    erc1967UtilsSol: index$1x
  });

  const _abi$10 = [
    {
      stateMutability: "payable",
      type: "fallback"
    }
  ];
  class Proxy__factory {
    static abi = _abi$10;
    static createInterface() {
      return new ethers.Interface(_abi$10);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$10, runner);
    }
  }

  var index$1v = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Proxy__factory: Proxy__factory
  });

  const _abi$$ = [
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
    static abi = _abi$$;
    static createInterface() {
      return new ethers.Interface(_abi$$);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$$, runner);
    }
  }

  var index$1u = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IBeacon__factory: IBeacon__factory
  });

  var index$1t = /*#__PURE__*/Object.freeze({
    __proto__: null,
    iBeaconSol: index$1u
  });

  var index$1s = /*#__PURE__*/Object.freeze({
    __proto__: null,
    beacon: index$1t,
    clonesSol: index$1y,
    erc1967: index$1w,
    proxySol: index$1v
  });

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
    static abi = _abi$_;
    static createInterface() {
      return new ethers.Interface(_abi$_);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$_, runner);
    }
  }

  var index$1r = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ERC20__factory: ERC20__factory
  });

  const _abi$Z = [
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
    static abi = _abi$Z;
    static createInterface() {
      return new ethers.Interface(_abi$Z);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$Z, runner);
    }
  }

  var index$1q = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IERC20__factory: IERC20__factory
  });

  const _abi$Y = [
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
    static abi = _abi$Y;
    static createInterface() {
      return new ethers.Interface(_abi$Y);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$Y, runner);
    }
  }

  var index$1p = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ERC20Burnable__factory: ERC20Burnable__factory
  });

  const _abi$X = [
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
    static abi = _abi$X;
    static createInterface() {
      return new ethers.Interface(_abi$X);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$X, runner);
    }
  }

  var index$1o = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ERC20Permit__factory: ERC20Permit__factory
  });

  const _abi$W = [
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
    static abi = _abi$W;
    static createInterface() {
      return new ethers.Interface(_abi$W);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$W, runner);
    }
  }

  var index$1n = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IERC20Metadata__factory: IERC20Metadata__factory
  });

  const _abi$V = [
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
    static abi = _abi$V;
    static createInterface() {
      return new ethers.Interface(_abi$V);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$V, runner);
    }
  }

  var index$1m = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IERC20Permit__factory: IERC20Permit__factory
  });

  var index$1l = /*#__PURE__*/Object.freeze({
    __proto__: null,
    erc20BurnableSol: index$1p,
    erc20PermitSol: index$1o,
    ierc20MetadataSol: index$1n,
    ierc20PermitSol: index$1m
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
  const _bytecode$k = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122099b0f97da89578696a332ee60d4a011d20002d45816449f112af85072a80881d64736f6c634300081e0033";
  const isSuperArgs$k = (xs) => xs.length > 1;
  class SafeERC20__factory extends ethers.ContractFactory {
    constructor(...args) {
      if (isSuperArgs$k(args)) {
        super(...args);
      } else {
        super(_abi$U, _bytecode$k, args[0]);
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
    static abi = _abi$U;
    static createInterface() {
      return new ethers.Interface(_abi$U);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$U, runner);
    }
  }

  var index$1k = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SafeERC20__factory: SafeERC20__factory
  });

  var index$1j = /*#__PURE__*/Object.freeze({
    __proto__: null,
    safeErc20Sol: index$1k
  });

  var index$1i = /*#__PURE__*/Object.freeze({
    __proto__: null,
    erc20Sol: index$1r,
    extensions: index$1l,
    ierc20Sol: index$1q,
    utils: index$1j
  });

  var index$1h = /*#__PURE__*/Object.freeze({
    __proto__: null,
    erc20: index$1i
  });

  const _abi$T = [
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
  const _bytecode$j = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220940d9a07aaa05999e07ca0ea6629c29ff6f80910af914eede5e457f481e874ef64736f6c634300081e0033";
  const isSuperArgs$j = (xs) => xs.length > 1;
  class Address__factory extends ethers.ContractFactory {
    constructor(...args) {
      if (isSuperArgs$j(args)) {
        super(...args);
      } else {
        super(_abi$T, _bytecode$j, args[0]);
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
    static abi = _abi$T;
    static createInterface() {
      return new ethers.Interface(_abi$T);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$T, runner);
    }
  }

  var index$1g = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Address__factory: Address__factory
  });

  const _abi$S = [
    {
      inputs: [],
      name: "Create2EmptyBytecode",
      type: "error"
    }
  ];
  const _bytecode$i = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220221cb67a51532e83d135e4d107fc3f7934434adfbaf6d439629d4713b0e54e8164736f6c634300081e0033";
  const isSuperArgs$i = (xs) => xs.length > 1;
  class Create2__factory extends ethers.ContractFactory {
    constructor(...args) {
      if (isSuperArgs$i(args)) {
        super(...args);
      } else {
        super(_abi$S, _bytecode$i, args[0]);
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
    static abi = _abi$S;
    static createInterface() {
      return new ethers.Interface(_abi$S);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$S, runner);
    }
  }

  var index$1f = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Create2__factory: Create2__factory
  });

  const _abi$R = [
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
  const _bytecode$h = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212208a3b04b24b9d57640cffd6781f2b942bd271feb041ca4d4bf54f7ed3e192ed3764736f6c634300081e0033";
  const isSuperArgs$h = (xs) => xs.length > 1;
  class Errors__factory extends ethers.ContractFactory {
    constructor(...args) {
      if (isSuperArgs$h(args)) {
        super(...args);
      } else {
        super(_abi$R, _bytecode$h, args[0]);
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
    static abi = _abi$R;
    static createInterface() {
      return new ethers.Interface(_abi$R);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$R, runner);
    }
  }

  var index$1e = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Errors__factory: Errors__factory
  });

  const _abi$Q = [
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
    static abi = _abi$Q;
    static createInterface() {
      return new ethers.Interface(_abi$Q);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$Q, runner);
    }
  }

  var index$1d = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Nonces__factory: Nonces__factory
  });

  const _abi$P = [
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
  const _bytecode$g = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122087516ad6afe4f48ed9ba5fd73e9f9e77ebfa7482107f1ac293aeca9d0189e68064736f6c634300081e0033";
  const isSuperArgs$g = (xs) => xs.length > 1;
  class ShortStrings__factory extends ethers.ContractFactory {
    constructor(...args) {
      if (isSuperArgs$g(args)) {
        super(...args);
      } else {
        super(_abi$P, _bytecode$g, args[0]);
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
    static abi = _abi$P;
    static createInterface() {
      return new ethers.Interface(_abi$P);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$P, runner);
    }
  }

  var index$1c = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ShortStrings__factory: ShortStrings__factory
  });

  const _abi$O = [
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
  const _bytecode$f = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b77b097f552acf056cb2ca8b1adc91220deaa2f97509c0d8c23497860d77053b64736f6c634300081e0033";
  const isSuperArgs$f = (xs) => xs.length > 1;
  class Strings__factory extends ethers.ContractFactory {
    constructor(...args) {
      if (isSuperArgs$f(args)) {
        super(...args);
      } else {
        super(_abi$O, _bytecode$f, args[0]);
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
    static abi = _abi$O;
    static createInterface() {
      return new ethers.Interface(_abi$O);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$O, runner);
    }
  }

  var index$1b = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Strings__factory: Strings__factory
  });

  const _abi$N = [
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
  const _bytecode$e = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220ecb02bd0eae046fb0bab7e782563070e25f82b6bcdf0c353c206f019239a60f564736f6c634300081e0033";
  const isSuperArgs$e = (xs) => xs.length > 1;
  class ECDSA__factory extends ethers.ContractFactory {
    constructor(...args) {
      if (isSuperArgs$e(args)) {
        super(...args);
      } else {
        super(_abi$N, _bytecode$e, args[0]);
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
    static abi = _abi$N;
    static createInterface() {
      return new ethers.Interface(_abi$N);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$N, runner);
    }
  }

  var index$1a = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ECDSA__factory: ECDSA__factory
  });

  const _abi$M = [
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
    static abi = _abi$M;
    static createInterface() {
      return new ethers.Interface(_abi$M);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$M, runner);
    }
  }

  var index$19 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    EIP712__factory: EIP712__factory
  });

  var index$18 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ecdsaSol: index$1a,
    eip712Sol: index$19
  });

  const _abi$L = [
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
    static abi = _abi$L;
    static createInterface() {
      return new ethers.Interface(_abi$L);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$L, runner);
    }
  }

  var index$17 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ERC165__factory: ERC165__factory
  });

  const _abi$K = [
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
    static abi = _abi$K;
    static createInterface() {
      return new ethers.Interface(_abi$K);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$K, runner);
    }
  }

  var index$16 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IERC165__factory: IERC165__factory
  });

  var index$15 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    erc165Sol: index$17,
    ierc165Sol: index$16
  });

  const _abi$J = [
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
  const _bytecode$d = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220f8e9687ec015e23057d93993befb374d8e468863f90e00c8467840b48264576c64736f6c634300081e0033";
  const isSuperArgs$d = (xs) => xs.length > 1;
  class SafeCast__factory extends ethers.ContractFactory {
    constructor(...args) {
      if (isSuperArgs$d(args)) {
        super(...args);
      } else {
        super(_abi$J, _bytecode$d, args[0]);
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
    static abi = _abi$J;
    static createInterface() {
      return new ethers.Interface(_abi$J);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$J, runner);
    }
  }

  var index$14 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SafeCast__factory: SafeCast__factory
  });

  var index$13 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    safeCastSol: index$14
  });

  var index$12 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    addressSol: index$1g,
    create2Sol: index$1f,
    cryptography: index$18,
    errorsSol: index$1e,
    introspection: index$15,
    math: index$13,
    noncesSol: index$1d,
    shortStringsSol: index$1c,
    stringsSol: index$1b
  });

  var index$11 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    access: index$1F,
    interfaces: index$1z,
    proxy: index$1s,
    token: index$1h,
    utils: index$12
  });

  const _abi$I = [
    {
      inputs: [],
      name: "AccessControlBadConfirmation",
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
          internalType: "bytes32",
          name: "neededRole",
          type: "bytes32"
        }
      ],
      name: "AccessControlUnauthorizedAccount",
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
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "previousAdminRole",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "newAdminRole",
          type: "bytes32"
        }
      ],
      name: "RoleAdminChanged",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address"
        }
      ],
      name: "RoleGranted",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address"
        }
      ],
      name: "RoleRevoked",
      type: "event"
    },
    {
      inputs: [],
      name: "DEFAULT_ADMIN_ROLE",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        }
      ],
      name: "getRoleAdmin",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "address",
          name: "account",
          type: "address"
        }
      ],
      name: "grantRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "address",
          name: "account",
          type: "address"
        }
      ],
      name: "hasRole",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "address",
          name: "callerConfirmation",
          type: "address"
        }
      ],
      name: "renounceRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "address",
          name: "account",
          type: "address"
        }
      ],
      name: "revokeRole",
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
    }
  ];
  class AccessControlUpgradeable__factory {
    static abi = _abi$I;
    static createInterface() {
      return new ethers.Interface(_abi$I);
    }
    static connect(address, runner) {
      return new ethers.Contract(
        address,
        _abi$I,
        runner
      );
    }
  }

  var index$10 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AccessControlUpgradeable__factory: AccessControlUpgradeable__factory
  });

  const _abi$H = [
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
    static abi = _abi$H;
    static createInterface() {
      return new ethers.Interface(_abi$H);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$H, runner);
    }
  }

  var index$$ = /*#__PURE__*/Object.freeze({
    __proto__: null,
    OwnableUpgradeable__factory: OwnableUpgradeable__factory
  });

  const _abi$G = [
    {
      inputs: [],
      name: "AccessControlBadConfirmation",
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
          internalType: "bytes32",
          name: "neededRole",
          type: "bytes32"
        }
      ],
      name: "AccessControlUnauthorizedAccount",
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
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "previousAdminRole",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "newAdminRole",
          type: "bytes32"
        }
      ],
      name: "RoleAdminChanged",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address"
        }
      ],
      name: "RoleGranted",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address"
        }
      ],
      name: "RoleRevoked",
      type: "event"
    },
    {
      inputs: [],
      name: "DEFAULT_ADMIN_ROLE",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        }
      ],
      name: "getRoleAdmin",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "uint256",
          name: "index",
          type: "uint256"
        }
      ],
      name: "getRoleMember",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        }
      ],
      name: "getRoleMemberCount",
      outputs: [
        {
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        }
      ],
      name: "getRoleMembers",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "address",
          name: "account",
          type: "address"
        }
      ],
      name: "grantRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "address",
          name: "account",
          type: "address"
        }
      ],
      name: "hasRole",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "address",
          name: "callerConfirmation",
          type: "address"
        }
      ],
      name: "renounceRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "address",
          name: "account",
          type: "address"
        }
      ],
      name: "revokeRole",
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
    }
  ];
  class AccessControlEnumerableUpgradeable__factory {
    static abi = _abi$G;
    static createInterface() {
      return new ethers.Interface(_abi$G);
    }
    static connect(address, runner) {
      return new ethers.Contract(
        address,
        _abi$G,
        runner
      );
    }
  }

  var index$_ = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AccessControlEnumerableUpgradeable__factory: AccessControlEnumerableUpgradeable__factory
  });

  var index$Z = /*#__PURE__*/Object.freeze({
    __proto__: null,
    accessControlEnumerableUpgradeableSol: index$_
  });

  var index$Y = /*#__PURE__*/Object.freeze({
    __proto__: null,
    accessControlUpgradeableSol: index$10,
    extensions: index$Z,
    ownableUpgradeableSol: index$$
  });

  const _abi$F = [
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
    static abi = _abi$F;
    static createInterface() {
      return new ethers.Interface(_abi$F);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$F, runner);
    }
  }

  var index$X = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Initializable__factory: Initializable__factory
  });

  var index$W = /*#__PURE__*/Object.freeze({
    __proto__: null,
    initializableSol: index$X
  });

  var index$V = /*#__PURE__*/Object.freeze({
    __proto__: null,
    utils: index$W
  });

  const _abi$E = [
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
    static abi = _abi$E;
    static createInterface() {
      return new ethers.Interface(_abi$E);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$E, runner);
    }
  }

  var index$U = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ERC20Upgradeable__factory: ERC20Upgradeable__factory
  });

  const _abi$D = [
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
    static abi = _abi$D;
    static createInterface() {
      return new ethers.Interface(_abi$D);
    }
    static connect(address, runner) {
      return new ethers.Contract(
        address,
        _abi$D,
        runner
      );
    }
  }

  var index$T = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ERC20PermitUpgradeable__factory: ERC20PermitUpgradeable__factory
  });

  const _abi$C = [
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
    static abi = _abi$C;
    static createInterface() {
      return new ethers.Interface(_abi$C);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$C, runner);
    }
  }

  var index$S = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ERC4626Upgradeable__factory: ERC4626Upgradeable__factory
  });

  var index$R = /*#__PURE__*/Object.freeze({
    __proto__: null,
    erc20PermitUpgradeableSol: index$T,
    erc4626UpgradeableSol: index$S
  });

  var index$Q = /*#__PURE__*/Object.freeze({
    __proto__: null,
    erc20UpgradeableSol: index$U,
    extensions: index$R
  });

  var index$P = /*#__PURE__*/Object.freeze({
    __proto__: null,
    erc20: index$Q
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
  class ContextUpgradeable__factory {
    static abi = _abi$B;
    static createInterface() {
      return new ethers.Interface(_abi$B);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$B, runner);
    }
  }

  var index$O = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ContextUpgradeable__factory: ContextUpgradeable__factory
  });

  const _abi$A = [
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
    static abi = _abi$A;
    static createInterface() {
      return new ethers.Interface(_abi$A);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$A, runner);
    }
  }

  var index$N = /*#__PURE__*/Object.freeze({
    __proto__: null,
    NoncesUpgradeable__factory: NoncesUpgradeable__factory
  });

  const _abi$z = [
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
    static abi = _abi$z;
    static createInterface() {
      return new ethers.Interface(_abi$z);
    }
    static connect(address, runner) {
      return new ethers.Contract(
        address,
        _abi$z,
        runner
      );
    }
  }

  var index$M = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ReentrancyGuardUpgradeable__factory: ReentrancyGuardUpgradeable__factory
  });

  const _abi$y = [
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
    static abi = _abi$y;
    static createInterface() {
      return new ethers.Interface(_abi$y);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$y, runner);
    }
  }

  var index$L = /*#__PURE__*/Object.freeze({
    __proto__: null,
    EIP712Upgradeable__factory: EIP712Upgradeable__factory
  });

  var index$K = /*#__PURE__*/Object.freeze({
    __proto__: null,
    eip712UpgradeableSol: index$L
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
    }
  ];
  class ERC165Upgradeable__factory {
    static abi = _abi$x;
    static createInterface() {
      return new ethers.Interface(_abi$x);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$x, runner);
    }
  }

  var index$J = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ERC165Upgradeable__factory: ERC165Upgradeable__factory
  });

  var index$I = /*#__PURE__*/Object.freeze({
    __proto__: null,
    erc165UpgradeableSol: index$J
  });

  var index$H = /*#__PURE__*/Object.freeze({
    __proto__: null,
    contextUpgradeableSol: index$O,
    cryptography: index$K,
    introspection: index$I,
    noncesUpgradeableSol: index$N,
    reentrancyGuardUpgradeableSol: index$M
  });

  var index$G = /*#__PURE__*/Object.freeze({
    __proto__: null,
    access: index$Y,
    proxy: index$V,
    token: index$P,
    utils: index$H
  });

  var index$F = /*#__PURE__*/Object.freeze({
    __proto__: null,
    contracts: index$11,
    contractsUpgradeable: index$G
  });

  const _abi$w = [
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
  const _bytecode$c = "0x60806040526040516102a03803806102a08339810160408190526020916097565b804210607e5760405162461bcd60e51b815260206004820152602360248201527f556e6c6f636b2074696d652073686f756c6420626520696e207468652066757460448201526275726560e81b606482015260840160405180910390fd5b600055600180546001600160a01b0319163317905560af565b60006020828403121560a857600080fd5b5051919050565b6101e2806100be6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063251c1aa3146100465780633ccfd60b146100625780638da5cb5b1461006c575b600080fd5b61004f60005481565b6040519081526020015b60405180910390f35b61006a610097565b005b60015461007f906001600160a01b031681565b6040516001600160a01b039091168152602001610059565b6000544210156100e75760405162461bcd60e51b8152602060048201526016602482015275165bdd4818d85b89dd081dda5d1a191c985dc81e595d60521b60448201526064015b60405180910390fd5b6001546001600160a01b031633146101385760405162461bcd60e51b81526020600482015260146024820152732cb7ba9030b932b713ba103a34329037bbb732b960611b60448201526064016100de565b604080514781524260208201527fbf2ed60bd5b5965d685680c01195c9514e4382e28e3a5a2d2d5244bf59411b93910160405180910390a16001546040516001600160a01b03909116904780156108fc02916000818181858888f193505050501580156101a9573d6000803e3d6000fd5b5056fea26469706673582212207d4f974eb754bf0733b80225c41153d74a900e1f51cc6b2b0df3fe672145a1f664736f6c634300081e0033";
  const isSuperArgs$c = (xs) => xs.length > 1;
  class Lock__factory extends ethers.ContractFactory {
    constructor(...args) {
      if (isSuperArgs$c(args)) {
        super(...args);
      } else {
        super(_abi$w, _bytecode$c, args[0]);
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
    static bytecode = _bytecode$c;
    static abi = _abi$w;
    static createInterface() {
      return new ethers.Interface(_abi$w);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$w, runner);
    }
  }

  var index$E = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Lock__factory: Lock__factory
  });

  const _abi$v = [
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
    static abi = _abi$v;
    static createInterface() {
      return new ethers.Interface(_abi$v);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$v, runner);
    }
  }

  var index$D = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IDataFeed__factory: IDataFeed__factory
  });

  const _abi$u = [
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
    static abi = _abi$u;
    static createInterface() {
      return new ethers.Interface(_abi$u);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$u, runner);
    }
  }

  const _abi$t = [
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
    static abi = _abi$t;
    static createInterface() {
      return new ethers.Interface(_abi$t);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$t, runner);
    }
  }

  var index$C = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IERC20Exp__factory: IERC20Exp__factory,
    IERC20Mintable__factory: IERC20Mintable__factory
  });

  const _abi$s = [
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address"
        }
      ],
      name: "AccountLocked",
      type: "error"
    },
    {
      inputs: [
        {
          internalType: "uint48",
          name: "deadline",
          type: "uint48"
        }
      ],
      name: "LockedExpiredSignature",
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
      name: "LockedInvalidSigner",
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
          name: "owner",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint48",
          name: "lockUntil",
          type: "uint48"
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
          name: "lockBy",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint48",
          name: "lockUntil",
          type: "uint48"
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
          internalType: "uint48",
          name: "until",
          type: "uint48"
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
          internalType: "uint48",
          name: "until",
          type: "uint48"
        },
        {
          internalType: "bytes",
          name: "lockParams",
          type: "bytes"
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
          name: "lockBy",
          type: "address"
        },
        {
          internalType: "uint48",
          name: "lockUntil",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "deadline",
          type: "uint48"
        },
        {
          internalType: "bytes",
          name: "signature",
          type: "bytes"
        },
        {
          internalType: "bytes",
          name: "lockParams",
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
          name: "owner",
          type: "address"
        }
      ],
      name: "lockedBalance",
      outputs: [
        {
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
          internalType: "uint256",
          name: "until",
          type: "uint256"
        }
      ],
      name: "lockedBalanceUntil",
      outputs: [
        {
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
      name: "lockedUntil",
      outputs: [
        {
          internalType: "uint48",
          name: "timestamp",
          type: "uint48"
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
    static abi = _abi$s;
    static createInterface() {
      return new ethers.Interface(_abi$s);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$s, runner);
    }
  }

  var index$B = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IERC20Lockable__factory: IERC20Lockable__factory
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
    static abi = _abi$r;
    static createInterface() {
      return new ethers.Interface(_abi$r);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$r, runner);
    }
  }

  var index$A = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IERC4626__factory: IERC4626__factory
  });

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
    static abi = _abi$q;
    static createInterface() {
      return new ethers.Interface(_abi$q);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$q, runner);
    }
  }

  var index$z = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IERC4626Pool__factory: IERC4626Pool__factory
  });

  const _abi$p = [
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

  var index$y = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IInitializableProxy__factory: IInitializableProxy__factory
  });

  const _abi$o = [
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address"
        }
      ],
      name: "AccountLocked",
      type: "error"
    },
    {
      inputs: [
        {
          internalType: "uint48",
          name: "deadline",
          type: "uint48"
        }
      ],
      name: "LockedExpiredSignature",
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
      name: "LockedInvalidSigner",
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
          indexed: false,
          internalType: "uint48",
          name: "lockUntil",
          type: "uint48"
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
          name: "lockBy",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint48",
          name: "lockUntil",
          type: "uint48"
        }
      ],
      name: "LockedBy",
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
          internalType: "uint48",
          name: "until",
          type: "uint48"
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
          internalType: "uint48",
          name: "until",
          type: "uint48"
        },
        {
          internalType: "bytes",
          name: "lockParams",
          type: "bytes"
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
        }
      ],
      name: "lockedUntil",
      outputs: [
        {
          internalType: "uint48",
          name: "timestamp",
          type: "uint48"
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
    }
  ];
  class ILockable__factory {
    static abi = _abi$o;
    static createInterface() {
      return new ethers.Interface(_abi$o);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$o, runner);
    }
  }

  var index$x = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ILockable__factory: ILockable__factory
  });

  const _abi$n = [
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
          internalType: "uint48",
          name: "_startTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "_endTime",
          type: "uint48"
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
          internalType: "uint48",
          name: "_deadline",
          type: "uint48"
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
          internalType: "uint48",
          name: "_fromTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "_toTime",
          type: "uint48"
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
          internalType: "uint48",
          name: "_fromTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "_toTime",
          type: "uint48"
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
          internalType: "uint48",
          name: "_startTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "_endTime",
          type: "uint48"
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
              internalType: "uint48",
              name: "startTime",
              type: "uint48"
            },
            {
              internalType: "uint48",
              name: "endTime",
              type: "uint48"
            },
            {
              internalType: "uint48",
              name: "lastRewardTime",
              type: "uint48"
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
          internalType: "uint48",
          name: "_startTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "_endTime",
          type: "uint48"
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
    static abi = _abi$n;
    static createInterface() {
      return new ethers.Interface(_abi$n);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$n, runner);
    }
  }

  var index$w = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IMasterChef__factory: IMasterChef__factory
  });

  const _abi$m = [
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
          internalType: "uint48",
          name: "_startTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "_endTime",
          type: "uint48"
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
          internalType: "uint48",
          name: "_deadline",
          type: "uint48"
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
          internalType: "uint48",
          name: "_fromTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "_toTime",
          type: "uint48"
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
          internalType: "uint48",
          name: "_fromTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "_toTime",
          type: "uint48"
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
          internalType: "uint48",
          name: "",
          type: "uint48"
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
          internalType: "uint48",
          name: "_startTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "_endTime",
          type: "uint48"
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
          internalType: "uint48",
          name: "_halvingInterval",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "_startTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "_endTime",
          type: "uint48"
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
              internalType: "uint48",
              name: "startTime",
              type: "uint48"
            },
            {
              internalType: "uint48",
              name: "endTime",
              type: "uint48"
            },
            {
              internalType: "uint48",
              name: "lastRewardTime",
              type: "uint48"
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
          internalType: "uint48",
          name: "_startTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "_endTime",
          type: "uint48"
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
          internalType: "uint48",
          name: "_halvingInterval",
          type: "uint48"
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
    static abi = _abi$m;
    static createInterface() {
      return new ethers.Interface(_abi$m);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$m, runner);
    }
  }

  var index$v = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IMasterPool__factory: IMasterPool__factory
  });

  const _abi$l = [
    {
      inputs: [],
      name: "OwnableInvalidOp",
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
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "newSubowner",
          type: "address"
        }
      ],
      name: "SubownerAdded",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "oldSubowner",
          type: "address"
        }
      ],
      name: "SubownerRemoved",
      type: "event"
    },
    {
      inputs: [],
      name: "DEFAULT_SUBOWNER_ROLE",
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
          name: "newSubowner",
          type: "address"
        }
      ],
      name: "addSubowner",
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
      name: "isSubowner",
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
          name: "oldSubowner",
          type: "address"
        }
      ],
      name: "removeSubowner",
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
      name: "subowners",
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
  class IOwnableControl__factory {
    static abi = _abi$l;
    static createInterface() {
      return new ethers.Interface(_abi$l);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$l, runner);
    }
  }

  var index$u = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IOwnableControl__factory: IOwnableControl__factory
  });

  const _abi$k = [
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
    static abi = _abi$k;
    static createInterface() {
      return new ethers.Interface(_abi$k);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$k, runner);
    }
  }

  var index$t = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IRewardVault__factory: IRewardVault__factory
  });

  const _abi$j = [
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
    static abi = _abi$j;
    static createInterface() {
      return new ethers.Interface(_abi$j);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$j, runner);
    }
  }

  var index$s = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IUniswapV2Factory__factory: IUniswapV2Factory__factory
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
    static abi = _abi$i;
    static createInterface() {
      return new ethers.Interface(_abi$i);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$i, runner);
    }
  }

  var index$r = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IUniswapV2Pair__factory: IUniswapV2Pair__factory
  });

  const _abi$h = [
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
    static abi = _abi$h;
    static createInterface() {
      return new ethers.Interface(_abi$h);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$h, runner);
    }
  }

  var index$q = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IV2SwapFeed__factory: IV2SwapFeed__factory
  });

  const _abi$g = [
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
    static abi = _abi$g;
    static createInterface() {
      return new ethers.Interface(_abi$g);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$g, runner);
    }
  }

  var index$p = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IWETH__factory: IWETH__factory
  });

  var index$o = /*#__PURE__*/Object.freeze({
    __proto__: null,
    iDataFeedSol: index$D,
    iInitializableProxySol: index$y,
    iLockableSol: index$x,
    iMasterChefSol: index$w,
    iMasterPoolSol: index$v,
    iOwnableControlSol: index$u,
    iRewardVaultSol: index$t,
    iUniswapV2FactorySol: index$s,
    iUniswapV2PairSol: index$r,
    ierc20LockableSol: index$B,
    ierc20Sol: index$C,
    ierc4626PoolSol: index$z,
    ierc4626Sol: index$A,
    iv2SwapFeedSol: index$q,
    iwethSol: index$p
  });

  const _abi$f = [
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address"
        }
      ],
      name: "AccountLocked",
      type: "error"
    },
    {
      inputs: [
        {
          internalType: "uint48",
          name: "deadline",
          type: "uint48"
        }
      ],
      name: "LockedExpiredSignature",
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
      name: "LockedInvalidSigner",
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
          indexed: false,
          internalType: "uint48",
          name: "lockUntil",
          type: "uint48"
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
          name: "lockBy",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint48",
          name: "lockUntil",
          type: "uint48"
        }
      ],
      name: "LockedBy",
      type: "event"
    },
    {
      inputs: [],
      name: "LOCK_TYPEHASH",
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
          internalType: "uint48",
          name: "until",
          type: "uint48"
        },
        {
          internalType: "bytes",
          name: "",
          type: "bytes"
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
        }
      ],
      name: "lockedUntil",
      outputs: [
        {
          internalType: "uint48",
          name: "",
          type: "uint48"
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
    }
  ];
  class Lockable__factory {
    static abi = _abi$f;
    static createInterface() {
      return new ethers.Interface(_abi$f);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$f, runner);
    }
  }

  var index$n = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Lockable__factory: Lockable__factory
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
      return new ethers.Interface(_abi$e);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$e, runner);
    }
  }

  var index$m = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Ownable__factory: Ownable__factory
  });

  const _abi$d = [
    {
      inputs: [],
      name: "AccessControlBadConfirmation",
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
          internalType: "bytes32",
          name: "neededRole",
          type: "bytes32"
        }
      ],
      name: "AccessControlUnauthorizedAccount",
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
      inputs: [],
      name: "OwnableInvalidOp",
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
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "previousAdminRole",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "newAdminRole",
          type: "bytes32"
        }
      ],
      name: "RoleAdminChanged",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address"
        }
      ],
      name: "RoleGranted",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address"
        }
      ],
      name: "RoleRevoked",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "newSubowner",
          type: "address"
        }
      ],
      name: "SubownerAdded",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "oldSubowner",
          type: "address"
        }
      ],
      name: "SubownerRemoved",
      type: "event"
    },
    {
      inputs: [],
      name: "DEFAULT_ADMIN_ROLE",
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
      name: "DEFAULT_SUBOWNER_ROLE",
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
          name: "newSubowner",
          type: "address"
        }
      ],
      name: "addSubowner",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        }
      ],
      name: "getRoleAdmin",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "uint256",
          name: "index",
          type: "uint256"
        }
      ],
      name: "getRoleMember",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        }
      ],
      name: "getRoleMemberCount",
      outputs: [
        {
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        }
      ],
      name: "getRoleMembers",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "address",
          name: "account",
          type: "address"
        }
      ],
      name: "grantRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "address",
          name: "account",
          type: "address"
        }
      ],
      name: "hasRole",
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
          name: "account",
          type: "address"
        }
      ],
      name: "isSubowner",
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
          name: "oldSubowner",
          type: "address"
        }
      ],
      name: "removeSubowner",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "address",
          name: "callerConfirmation",
          type: "address"
        }
      ],
      name: "renounceRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "address",
          name: "account",
          type: "address"
        }
      ],
      name: "revokeRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "subowners",
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
  class OwnableControl__factory {
    static abi = _abi$d;
    static createInterface() {
      return new ethers.Interface(_abi$d);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$d, runner);
    }
  }

  var index$l = /*#__PURE__*/Object.freeze({
    __proto__: null,
    OwnableControl__factory: OwnableControl__factory
  });

  const _abi$c = [
    {
      inputs: [],
      name: "InvalidSignatureLength",
      type: "error"
    }
  ];
  const _bytecode$b = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220cae3926a868152c06222cd53620b6c37dc17efa7c69bbb03d62983d56643c11264736f6c634300081e0033";
  const isSuperArgs$b = (xs) => xs.length > 1;
  class SigLib__factory extends ethers.ContractFactory {
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
      return new ethers.Interface(_abi$c);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$c, runner);
    }
  }

  var index$k = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SigLib__factory: SigLib__factory
  });

  var index$j = /*#__PURE__*/Object.freeze({
    __proto__: null,
    lockableSol: index$n,
    ownableControlSol: index$l,
    ownableSol: index$m,
    sigLibSol: index$k
  });

  const _abi$b = [
    {
      inputs: [],
      name: "AccessControlBadConfirmation",
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
          internalType: "bytes32",
          name: "neededRole",
          type: "bytes32"
        }
      ],
      name: "AccessControlUnauthorizedAccount",
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
      inputs: [],
      name: "OwnableInvalidOp",
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
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "previousAdminRole",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "newAdminRole",
          type: "bytes32"
        }
      ],
      name: "RoleAdminChanged",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address"
        }
      ],
      name: "RoleGranted",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address"
        }
      ],
      name: "RoleRevoked",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "newSubowner",
          type: "address"
        }
      ],
      name: "SubownerAdded",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "oldSubowner",
          type: "address"
        }
      ],
      name: "SubownerRemoved",
      type: "event"
    },
    {
      inputs: [],
      name: "DEFAULT_ADMIN_ROLE",
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
      name: "DEFAULT_SUBOWNER_ROLE",
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
          name: "newSubowner",
          type: "address"
        }
      ],
      name: "addSubowner",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        }
      ],
      name: "getRoleAdmin",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "uint256",
          name: "index",
          type: "uint256"
        }
      ],
      name: "getRoleMember",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        }
      ],
      name: "getRoleMemberCount",
      outputs: [
        {
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        }
      ],
      name: "getRoleMembers",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "address",
          name: "account",
          type: "address"
        }
      ],
      name: "grantRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "address",
          name: "account",
          type: "address"
        }
      ],
      name: "hasRole",
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
          name: "account",
          type: "address"
        }
      ],
      name: "isSubowner",
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
          name: "oldSubowner",
          type: "address"
        }
      ],
      name: "removeSubowner",
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
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "address",
          name: "callerConfirmation",
          type: "address"
        }
      ],
      name: "renounceRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32"
        },
        {
          internalType: "address",
          name: "account",
          type: "address"
        }
      ],
      name: "revokeRole",
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
      name: "subowners",
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
  const _bytecode$a = "0x60806040526006600255348015601457600080fd5b50611843806100246000396000f3fe608060405234801561001057600080fd5b506004361061021c5760003560e01c80639010d07c11610125578063bfc12c05116100ad578063d547741f1161007c578063d547741f146104cb578063f269b7bf146104de578063f2fde38b146104f1578063f707163114610504578063feaf968c1461050c57600080fd5b8063bfc12c0514610489578063c2f3621e14610492578063ca15c873146104a5578063d0d552dd146104b857600080fd5b8063a217fddf116100f4578063a217fddf1461040e578063a3246ad314610416578063a87a20ce14610436578063b5ab58dc14610449578063b633620c1461046957600080fd5b80639010d07c1461038e57806390c3f38f146103a157806391d14854146103b45780639a6fc8f5146103c757600080fd5b8063408def1e116101a8578063715018a611610177578063715018a61461034d5780637284e416146103555780637dbaadf61461036a5780638205bf6a1461037d5780638da5cb5b1461038657600080fd5b8063408def1e1461031f57806350d25bcd1461033257806354fd4d501461033b578063668a0f021461034457600080fd5b80632f2ff15d116101ef5780632f2ff15d14610294578063313ce567146102a757806336568abe146102c157806338d52e0f146102d45780633b2235fc146102ff57600080fd5b806301ffc9a71461022157806315c1fc0114610249578063248a9ca31461026c5780632a4c3b011461027f575b600080fd5b61023461022f366004611333565b610514565b60405190151581526020015b60405180910390f35b61025e6000805160206117ae83398151915281565b604051908152602001610240565b61025e61027a36600461135d565b61053f565b61029261028d366004611392565b610561565b005b6102926102a23660046113ad565b6105d0565b6102af600881565b60405160ff9091168152602001610240565b6102926102cf3660046113ad565b6105f2565b6000546102e7906001600160a01b031681565b6040516001600160a01b039091168152602001610240565b61025e61030d36600461135d565b60096020526000908152604090205481565b61029261032d36600461135d565b61062a565b61025e60045481565b61025e60025481565b61025e60065481565b610292610637565b61035d610669565b60405161024091906113d9565b6102926103783660046114cc565b6106f7565b61025e60055481565b6102e7610823565b6102e761039c366004611532565b610863565b6102926103af366004611554565b610892565b6102346103c23660046113ad565b6108e1565b6103da6103d5366004611589565b610919565b604080516001600160501b03968716815260208101959095528401929092526060830152909116608082015260a001610240565b61025e600081565b61042961042436600461135d565b610997565b60405161024091906115b2565b61029261044436600461135d565b6109c9565b61025e61045736600461135d565b60076020526000908152604090205481565b61025e61047736600461135d565b60086020526000908152604090205481565b61025e60035481565b6102346104a0366004611392565b610a10565b61025e6104b336600461135d565b610a2a565b6102926104c6366004611392565b610a50565b6102926104d93660046113ad565b610aa0565b6102926104ec366004611392565b610abc565b6102926104ff366004611392565b610b06565b610429610b43565b6103da610b61565b60006001600160e01b03198216635a05180f60e01b1480610539575061053982610b85565b92915050565b60009081526000805160206117ee833981519152602052604090206001015490565b610569610bba565b6001600160a01b03811661059857604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b6105b06000805160206117ae83398151915282610c07565b6105cd576040516363e886c360e11b815260040160405180910390fd5b50565b6105d98261053f565b6105e281610c6e565b6105ec8383610c78565b50505050565b6001600160a01b038116331461061b5760405163334bd91960e11b815260040160405180910390fd5b6106258282610c07565b505050565b610632610bba565b600255565b61063f610bba565b61064a600080610c78565b610667576040516363e886c360e11b815260040160405180910390fd5b565b60018054610676906115fe565b80601f01602080910402602001604051908101604052809291908181526020018280546106a2906115fe565b80156106ef5780601f106106c4576101008083540402835291602001916106ef565b820191906000526020600020905b8154815290600101906020018083116106d257829003601f168201915b505050505081565b6000610701610d80565b805490915060ff600160401b820416159067ffffffffffffffff166000811580156107295750825b905060008267ffffffffffffffff1660011480156107465750303b155b905081158015610754575080155b156107725760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561079c57845460ff60401b1916600160401b1785555b4260035560066002556107ae88610a50565b6107b787610892565b85156107c9576107c986600042610da9565b6107d289610e75565b831561081857845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050505050565b60008061082f81610997565b9050805160000361084157600061085d565b8060008151811061085457610854611638565b60200260200101515b91505090565b60008281526000805160206117ce83398151915260208190526040822061088a9084610eb2565b949350505050565b61089a610bba565b60016108a6828261169c565b507f16fbb51445345dabaa215e5f99a4bd4d8ba9818b508c76d5cd0ea30abcc491c6816040516108d691906113d9565b60405180910390a150565b60009182526000805160206117ee833981519152602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6001600160501b0381166000818152600760205260408120548392909190819081906109475760035461096f565b6008600061095f60016001600160501b038a16611771565b8152602001908152602001600020545b6001600160501b03871660009081526008602052604090205495979496909594909350915050565b60008181526000805160206117ce83398151915260208190526040909120606091906109c290610ebe565b9392505050565b6109d1610ecb565b600060065460001415806109e6575060045415155b6109f15760006109ff565b6006546109ff906001611784565b9050610a0c828242610da9565b5050565b60006105396000805160206117ae833981519152836108e1565b60008181526000805160206117ce8339815191526020819052604082206109c290610f27565b610a58610bba565b600080546001600160a01b0319166001600160a01b038316908117825560405190917fc7d9598af6004de7fa9c489a50a55414c75cfbce9fe56fe46956970744d6bc2c91a250565b610aa98261053f565b610ab281610c6e565b6105ec8383610c07565b610ac4610bba565b6001600160a01b038116610aee57604051631e4fbdf760e01b81526000600482015260240161058f565b6105b06000805160206117ae83398151915282610c78565b610b0e610bba565b6001600160a01b038116610b3857604051631e4fbdf760e01b81526000600482015260240161058f565b6105b0600082610c78565b6060610b5c6000805160206117ae833981519152610997565b905090565b6000806000806000610b74600654610919565b945094509450945094509091929394565b60006001600160e01b03198216637965db0b60e01b148061053957506301ffc9a760e01b6001600160e01b0319831614610539565b6000610bc4610823565b90506001600160a01b0381163314801590610be757506001600160a01b03811615155b156105cd5760405163118cdaa760e01b815233600482015260240161058f565b6000610c138383610f31565b90506000805160206117ae83398151915283148015610c2f5750805b15610539576040516001600160a01b038316907fe508d338b89b7e085a90e1f7132e20bffaf3c56d6ed143467d9781b9c8d99d1790600090a292915050565b6105cd8133610f76565b60008083610cc857610c88610823565b90506001600160a01b03811615801590610caa5750610ca8600082610c07565b155b15610cc8576040516363e886c360e11b815260040160405180910390fd5b610cd28484610faf565b915083158015610cdf5750815b15610d2557826001600160a01b0316816001600160a01b03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35b6000805160206117ae83398151915284148015610d3f5750815b15610d79576040516001600160a01b038416907fd40f5d389157222345207b3aee9b8e1c5864f5be29072e6f66d18b5a4d1785b790600090a25b5092915050565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00610539565b8060055410610db757505050565b6004839055600581905560068290556000828152600860209081526040808320805460078452828520889055908590558484526009909252909120849055151580610e3457604051828152339084907f0109fc6f55cf40689f02fbaad7af7fe7bbac8a3d2186600afc7d3e10cac602719060200160405180910390a35b82847f0559884fd3a460db3073b7fc896cc77986f16e378210ded43186175bf646fc5f84604051610e6791815260200190565b60405180910390a350505050565b610e7d610feb565b6001600160a01b038116610ea757604051631e4fbdf760e01b81526000600482015260240161058f565b610a0c600082610c78565b60006109c28383611010565b606060006109c28361103a565b6000610ed5610823565b9050610ee033610a10565b158015610ef657506001600160a01b0381163314155b8015610be757506001600160a01b038116156105cd5760405163118cdaa760e01b815233600482015260240161058f565b6000610539825490565b60006000805160206117ce83398151915281610f4d8585611096565b9050801561088a576000858152602083905260409020610f6d908561111c565b50949350505050565b610f8082826108e1565b610a0c5760405163e2517d3f60e01b81526001600160a01b03821660048201526024810183905260440161058f565b60006000805160206117ce83398151915281610fcb8585611131565b9050801561088a576000858152602083905260409020610f6d90856111cc565b610ff36111e1565b61066757604051631afcd79f60e31b815260040160405180910390fd5b600082600001828154811061102757611027611638565b9060005260206000200154905092915050565b60608160000180548060200260200160405190810160405280929190818152602001828054801561108a57602002820191906000526020600020905b815481526020019060010190808311611076575b50505050509050919050565b60006000805160206117ee8339815191526110b184846108e1565b15611112576000848152602082815260408083206001600160a01b0387168085529252808320805460ff1916905551339287917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a46001915050610539565b6000915050610539565b60006109c2836001600160a01b0384166111fb565b60006000805160206117ee83398151915261114c84846108e1565b611112576000848152602082815260408083206001600160a01b03871684529091529020805460ff191660011790556111823390565b6001600160a01b0316836001600160a01b0316857f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001915050610539565b60006109c2836001600160a01b0384166112e4565b60006111eb610d80565b54600160401b900460ff16919050565b6000818152600183016020526040812054801561111257600061121f600183611771565b855490915060009061123390600190611771565b905080821461129857600086600001828154811061125357611253611638565b906000526020600020015490508087600001848154811061127657611276611638565b6000918252602080832090910192909255918252600188019052604090208390555b85548690806112a9576112a9611797565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610539565b600081815260018301602052604081205461132b57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610539565b506000610539565b60006020828403121561134557600080fd5b81356001600160e01b0319811681146109c257600080fd5b60006020828403121561136f57600080fd5b5035919050565b80356001600160a01b038116811461138d57600080fd5b919050565b6000602082840312156113a457600080fd5b6109c282611376565b600080604083850312156113c057600080fd5b823591506113d060208401611376565b90509250929050565b602081526000825180602084015260005b8181101561140757602081860181015160408684010152016113ea565b506000604082850101526040601f19601f83011684010191505092915050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261144e57600080fd5b813567ffffffffffffffff81111561146857611468611427565b604051601f8201601f19908116603f0116810167ffffffffffffffff8111828210171561149757611497611427565b6040528181528382016020018510156114af57600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080608085870312156114e257600080fd5b6114eb85611376565b93506114f960208601611376565b9250604085013567ffffffffffffffff81111561151557600080fd5b6115218782880161143d565b949793965093946060013593505050565b6000806040838503121561154557600080fd5b50508035926020909101359150565b60006020828403121561156657600080fd5b813567ffffffffffffffff81111561157d57600080fd5b61088a8482850161143d565b60006020828403121561159b57600080fd5b81356001600160501b03811681146109c257600080fd5b602080825282518282018190526000918401906040840190835b818110156115f35783516001600160a01b03168352602093840193909201916001016115cc565b509095945050505050565b600181811c9082168061161257607f821691505b60208210810361163257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b601f82111561062557806000526020600020601f840160051c810160208510156116755750805b601f840160051c820191505b818110156116955760008155600101611681565b5050505050565b815167ffffffffffffffff8111156116b6576116b6611427565b6116ca816116c484546115fe565b8461164e565b6020601f8211600181146116fe57600083156116e65750848201515b600019600385901b1c1916600184901b178455611695565b600084815260208120601f198516915b8281101561172e578785015182556020948501946001909201910161170e565b508482101561174c5786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b818103818111156105395761053961175b565b808201808211156105395761053961175b565b634e487b7160e01b600052603160045260246000fdfec15dd078e4e39310dfccaa3c336166b52c3edd34b05da2d3601e09db0f714000c1f6fe24621ce81ec5827caf0253cadb74709b061630e6b55e8237170593200002dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800a264697066735822122033055a2f76d8f7907fae568b6d4ddfe0976c049f242b100aea32ec594baa4d9264736f6c634300081e0033";
  const isSuperArgs$a = (xs) => xs.length > 1;
  class DataFeed__factory extends ethers.ContractFactory {
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
      return new ethers.Interface(_abi$b);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$b, runner);
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
  const _bytecode$9 = "0x60a06040526008608052600660025534801561001a57600080fd5b50610023610028565b6100da565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff16156100785760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b03908116146100d75780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b6080516119e061010a6000396000818161018f01528181610a2501528181610cf50152610d5201526119e06000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806363e16a82116100ad5780638205bf6a116100715780638205bf6a146102765780639478ab8c1461027c578063ad5c464814610284578063bfc12c0514610297578063d4d3e9a5146102a057600080fd5b806363e16a8214610220578063668a0f02146102355780636c3721ed1461023b5780637284e4161461024e5780637944f9441461026357600080fd5b806338d52e0f116100f457806338d52e0f146101d657806338e9781b146101e957806350d25bcd146101fc57806352ef619b1461020457806354fd4d501461021757600080fd5b8063178bc56e146101315780631bf6c21b14610161578063287bd79e14610174578063313ce5671461018a578063320eb93c146101c3575b600080fd5b600454610144906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b600854610144906001600160a01b031681565b61017c6102b3565b604051908152602001610158565b6101b17f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610158565b61017c6101d136600461138c565b6102fc565b600054610144906001600160a01b031681565b61017c6101f736600461138c565b610316565b61017c6103d3565b600654610144906001600160a01b031681565b61017c60025481565b61023361022e3660046113b0565b6103dd565b005b4361017c565b61014461024936600461138c565b61072c565b610256610990565b6040516101589190611445565b600554610144906001600160a01b031681565b4261017c565b61017c610a1e565b600754610144906001600160a01b031681565b61017c60035481565b61017c6102ae36600461138c565b610a7c565b600080546102c9906001600160a01b0316610b6a565b6102e7576000546102e2906001600160a01b03166102fc565b905090565b6000546102e2906001600160a01b0316610a7c565b600061031061030a8361072c565b83610c41565b92915050565b60008061032283610dea565b905060006103308483610e8f565b50915050816001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610372573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103969190611478565b6103a190600a611598565b816103ac8685610c41565b6103b691906115a7565b6103c19060026115a7565b6103cb91906115be565b949350505050565b60006102e26102b3565b60006103e7610f49565b805490915060ff600160401b820416159067ffffffffffffffff1660008115801561040f5750825b905060008267ffffffffffffffff16600114801561042c5750303b155b90508115801561043a575080155b156104585760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561048257845460ff60401b1916600160401b1785555b600080546001600160a01b0319166001600160a01b038c169081178255604080516395d89b4160e01b81529051610592936395d89b4192600480820193918290030181865afa1580156104d9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261050191908101906115f6565b604080518082018252600381526201017960ed1b602082015260085482516395d89b4160e01b8152925161058d936001600160a01b03909216916395d89b419160048083019260009291908290030181865afa158015610565573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261058d91908101906115f6565b610f72565b60019061059f9082611734565b50600660025542600355600480546001600160a01b038b81166001600160a01b0319928316178355600580548c831693168317905560405163e6a4390560e01b81528a821693810193909352881660248301529063e6a4390590604401602060405180830381865afa158015610619573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063d91906117f3565b600680546001600160a01b03199081166001600160a01b03938416179091556007805482168a841617905560088054909116888316179055604051908b16907fc7d9598af6004de7fa9c489a50a55414c75cfbce9fe56fe46956970744d6bc2c90600090a27f16fbb51445345dabaa215e5f99a4bd4d8ba9818b508c76d5cd0ea30abcc491c660016040516106d29190611810565b60405180910390a1831561072057845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050505050565b60055460085460405163e6a4390560e01b81526001600160a01b03848116600483015291821660248201526000928392169063e6a4390590604401602060405180830381865afa158015610784573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a891906117f3565b60055460075460405163e6a4390560e01b81526001600160a01b038781166004830152918216602482015292935060009291169063e6a4390590604401602060405180830381865afa158015610802573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061082691906117f3565b905060006001600160a01b03831661083f5760006108a9565b6040516370a0823160e01b81526001600160a01b0384811660048301528616906370a0823190602401602060405180830381865afa158015610885573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a9919061189c565b905060006001600160a01b0383166108c257600061092c565b6040516370a0823160e01b81526001600160a01b0384811660048301528716906370a0823190602401602060405180830381865afa158015610908573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092c919061189c565b90508115801561093a575080155b156109765760405162461bcd60e51b81526020600482015260076024820152662727afa820a4a960c91b60448201526064015b60405180910390fd5b808210156109845782610986565b835b9695505050505050565b6001805461099d906116ab565b80601f01602080910402602001604051908101604052809291908181526020018280546109c9906116ab565b8015610a165780601f106109eb57610100808354040283529160200191610a16565b820191906000526020600020905b8154815290600101906020018083116109f957829003601f168201915b505050505081565b6000610a4b7f000000000000000000000000000000000000000000000000000000000000000060126118b5565b610a5690600a611598565b600654600754610a72916001600160a01b039081169116610f9e565b6102e291906115be565b6000816001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610abc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae0919061189c565b826001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b429190611478565b610b4d90600a611598565b610b5684610316565b610b6091906115a7565b61031091906115be565b60408051600481526024810182526020810180516001600160e01b031663c45a015560e01b1790529051600091829182916001600160a01b0386169161c35091610bb3916118ce565b6000604051808303818686fa925050503d8060008114610bef576040519150601f19603f3d011682016040523d82523d6000602084013e610bf4565b606091505b5091509150811580610c0557508051155b15610c14575060009392505050565b80806020019051810190610c2891906117f3565b6005546001600160a01b03908116911614949350505050565b6000806000610c4f8561125c565b90925090506001600160a01b03848116908316148080610c805750816001600160a01b0316856001600160a01b0316145b610cc15760405162461bcd60e51b815260206004820152601260248201527124a72b20a624a22fa820a4a92faa27a5a2a760711b604482015260640161096d565b6000610cce86858561132c565b6008546007549192506001600160a01b0380841691811682149216148115610d4757610d1b7f000000000000000000000000000000000000000000000000000000000000000060126118b5565b610d2690600a611598565b610d308a8a610f9e565b610d3a91906115be565b9650505050505050610310565b8015610db357610d787f000000000000000000000000000000000000000000000000000000000000000060246118b5565b610d8390600a611598565b600654600754610d9f916001600160a01b039081169116610f9e565b610da98b8b610f9e565b610d3091906115a7565b60405162461bcd60e51b815260206004820152600c60248201526b24a72b20a624a22fa820a4a960a11b604482015260640161096d565b6000806000610df88461125c565b6008549193509150610e14906001600160a01b0316838361132c565b92506001600160a01b038316610e3e57600754610e3b906001600160a01b0316838361132c565b92505b6001600160a01b038316610e885760405162461bcd60e51b8152602060048201526011602482015270494e56414c49445f504149525f4241534560781b604482015260640161096d565b5050919050565b600080600080610e9e8661125c565b509050600080876001600160a01b0316630902f1ac6040518163ffffffff1660e01b8152600401606060405180830381865afa158015610ee2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f069190611906565b5090925090506001600160a01b038781169084161480610f2857808284610f2c565b8083835b919b6001600160701b039182169b50911698509650505050505050565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00610310565b60608282604051602001610f87929190611956565b604051602081830303815290604052905092915050565b6000806000610fac8561125c565b915091506000806000610fbf8888610e8f565b9250925092508280610fe25750836001600160a01b0316876001600160a01b0316145b6110235760405162461bcd60e51b815260206004820152601260248201527124a72b20a624a22fa820a4a92faa27a5a2a760711b604482015260640161096d565b811580159061103157508015155b61106c5760405162461bcd60e51b815260206004820152600c60248201526b4e4f5f4c495155494449545960a01b604482015260640161096d565b60008361115157856001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156110b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110d59190611478565b856001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015611113573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111379190611478565b611142906012611985565b61114c91906118b5565b61122a565b846001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561118f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111b39190611478565b866001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156111f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112159190611478565b611220906012611985565b61122a91906118b5565b60ff1690508261123b82600a61199e565b61124590846115a7565b61124f91906115be565b9998505050505050505050565b600080826001600160a01b0316630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa15801561129d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c191906117f3565b836001600160a01b031663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa1580156112ff573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061132391906117f3565b91509150915091565b6000826001600160a01b0316846001600160a01b03161461136d57816001600160a01b0316846001600160a01b0316146113675760006103cb565b826103cb565b5092915050565b6001600160a01b038116811461138957600080fd5b50565b60006020828403121561139e57600080fd5b81356113a981611374565b9392505050565b600080600080600060a086880312156113c857600080fd5b85356113d381611374565b945060208601356113e381611374565b935060408601356113f381611374565b9250606086013561140381611374565b9150608086013561141381611374565b809150509295509295909350565b60005b8381101561143c578181015183820152602001611424565b50506000910152565b6020815260008251806020840152611464816040850160208701611421565b601f01601f19169190910160400192915050565b60006020828403121561148a57600080fd5b815160ff811681146113a957600080fd5b634e487b7160e01b600052601160045260246000fd5b6001815b60018411156114ec578085048111156114d0576114d061149b565b60018416156114de57908102905b60019390931c9280026114b5565b935093915050565b60008261150357506001610310565b8161151057506000610310565b816001811461152657600281146115305761154c565b6001915050610310565b60ff8411156115415761154161149b565b50506001821b610310565b5060208310610133831016604e8410600b841016171561156f575081810a610310565b61157c60001984846114b1565b80600019048211156115905761159061149b565b029392505050565b60006113a960ff8416836114f4565b80820281158282048414176103105761031061149b565b6000826115db57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561160857600080fd5b815167ffffffffffffffff81111561161f57600080fd5b8201601f8101841361163057600080fd5b805167ffffffffffffffff81111561164a5761164a6115e0565b604051601f8201601f19908116603f0116810167ffffffffffffffff81118282101715611679576116796115e0565b60405281815282820160200186101561169157600080fd5b6116a2826020830160208601611421565b95945050505050565b600181811c908216806116bf57607f821691505b6020821081036116df57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561172f57806000526020600020601f840160051c8101602085101561170c5750805b601f840160051c820191505b8181101561172c5760008155600101611718565b50505b505050565b815167ffffffffffffffff81111561174e5761174e6115e0565b6117628161175c84546116ab565b846116e5565b6020601f821160018114611796576000831561177e5750848201515b600019600385901b1c1916600184901b17845561172c565b600084815260208120601f198516915b828110156117c657878501518255602094850194600190920191016117a6565b50848210156117e45786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b60006020828403121561180557600080fd5b81516113a981611374565b602081526000808354611822816116ab565b8060208601526001821660008114611841576001811461185d57611891565b60ff1983166040870152604082151560051b8701019350611891565b86600052602060002060005b8381101561188857815488820160400152600190910190602001611869565b87016040019450505b509195945050505050565b6000602082840312156118ae57600080fd5b5051919050565b60ff82811682821603908111156103105761031061149b565b600082516118e0818460208701611421565b9190910192915050565b80516001600160701b038116811461190157600080fd5b919050565b60008060006060848603121561191b57600080fd5b611924846118ea565b9250611932602085016118ea565b9150604084015163ffffffff8116811461194b57600080fd5b809150509250925092565b60008351611968818460208801611421565b83519083019061197c818360208801611421565b01949350505050565b60ff81811683821601908111156103105761031061149b565b60006113a983836114f456fea2646970667358221220e811ba0cf2fb38c43d656a583cb7ce77a29b4d79e2b33297d0af15cd0869234364736f6c634300081e0033";
  const isSuperArgs$9 = (xs) => xs.length > 1;
  class V2SwapFeed__factory extends ethers.ContractFactory {
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
      return new ethers.Interface(_abi$a);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$a, runner);
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
  const _bytecode$8 = "0x6080604052348015600f57600080fd5b506016601a565b60ca565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff161560695760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b039081161460c75780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b610af1806100d96000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80636e135eec11610097578063ad5c464811610066578063ad5c46481461024c578063c34e596f1461025f578063dbc4d32d14610272578063f2fde38b1461028557600080fd5b80636e135eec146101ee578063715018a6146102015780637944f944146102095780638da5cb5b1461021c57600080fd5b80634486b1c7116100d35780634486b1c714610186578063580a560e1461019957806358303b10146101ba5780635b769f3c146101db57600080fd5b8063178bc56e146101055780631bf6c21b146101355780632c626de5146101485780632fba4aa91461015d575b600080fd5b600254610118906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b600554610118906001600160a01b031681565b61015b610156366004610a22565b610298565b005b61011861016b366004610a87565b6001602052600090815260409020546001600160a01b031681565b61015b610194366004610a87565b6103d0565b6101ac6101a7366004610a87565b61042d565b60405190815260200161012c565b6000546101c89061ffff1681565b60405161ffff909116815260200161012c565b61015b6101e9366004610a87565b6104bf565b61015b6101fc366004610a87565b610515565b61015b610715565b600354610118906001600160a01b031681565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b0316610118565b600454610118906001600160a01b031681565b61015b61026d366004610a87565b610729565b61015b610280366004610a87565b61077f565b61015b610293366004610a87565b6107d5565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a008054600160401b810460ff16159067ffffffffffffffff166000811580156102de5750825b905060008267ffffffffffffffff1660011480156102fb5750303b155b905081158015610309575080155b156103275760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561035157845460ff60401b1916600160401b1785555b61035a896103d0565b61036388610729565b61036c876104bf565b6103758661077f565b61037e8a610818565b83156103c457845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050505050565b6103d8610829565b600280546001600160a01b0319166001600160a01b0383169081179091556040519081527fce025e89252f6ab5a030250b37df78e66a1d92854226981373dff41586821a6d906020015b60405180910390a150565b6001600160a01b03808216600090815260016020526040812054909116806104565760006104b8565b806001600160a01b03166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610494573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b89190610aa2565b9392505050565b6104c7610829565b600480546001600160a01b0319166001600160a01b0383169081179091556040519081527fe390bcec6614d6b1f8ae47a4d9d46531ce328e3d293ecd6ddd015cb01eff030090602001610422565b61051d610829565b6001600160a01b0381811660009081526001602090815260408083205460025460035460045460055494516bffffffffffffffffffffffff1960608b811b82169883019890985284881b8116603483015292871b8316604882015290861b8216605c8201529390941b90931660708301528416936105b59216906084016040516020818303038152906040528051906020012061089f565b600254600354600480546005546040516331f0b54160e11b81526001600160a01b038a81169482019490945294831660248601529282166044850152811660648401529081166084830152919250908216906363e16a829060a401600060405180830381600087803b15801561062a57600080fd5b505af115801561063e573d6000803e3d6000fd5b505050506001600160a01b0383811660008181526001602090815260409182902080546001600160a01b0319168686169081179091558251948716855233918501919091529261034892917fb56c4f88c3e344891ef92e51f036d7116e886f4ea57f5ba93e28b5f44925b9ce910160405180910390a4600054604080516001600160a01b03858116825261ffff9093166020820152338183015290518383169261034892908716917f27a180c70f2642f63d1694eb252b7df52e7ab2565e3f67adf7748acb7d82b9bc9181900360600190a4505050565b61071d610829565b61072760006108ad565b565b610731610829565b600380546001600160a01b0319166001600160a01b0383169081179091556040519081527f07925669a65c6cfe24a7577e4b501bf561d0ffe36d8d6707802d2d17e596076790602001610422565b610787610829565b600580546001600160a01b0319166001600160a01b0383169081179091556040519081527f0760150a180a9ab0096f89d108362c0cf356435a5f98f4359e45dd152761dccc90602001610422565b6107dd610829565b6001600160a01b03811661080c57604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b610815816108ad565b50565b61082061091e565b61081581610967565b600061085c7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b90506001600160a01b038116331480159061087f57506001600160a01b03811615155b156108155760405163118cdaa760e01b8152336004820152602401610803565b60006104b88383600061096f565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0054600160401b900460ff1661072757604051631afcd79f60e31b815260040160405180910390fd5b6107dd61091e565b60008147101561099b5760405163cf47918160e01b815247600482015260248101839052604401610803565b763d602d80600a3d3981f3363d3d373d3d3d363d730000008460601b60e81c176000526e5af43d82803e903d91602b57fd5bf38460781b17602052826037600984f590506001600160a01b0381166104b85760405163b06ebf3d60e01b815260040160405180910390fd5b80356001600160a01b0381168114610a1d57600080fd5b919050565b600080600080600060a08688031215610a3a57600080fd5b610a4386610a06565b9450610a5160208701610a06565b9350610a5f60408701610a06565b9250610a6d60608701610a06565b9150610a7b60808701610a06565b90509295509295909350565b600060208284031215610a9957600080fd5b6104b882610a06565b600060208284031215610ab457600080fd5b505191905056fea2646970667358221220882e9d94337c9d99e806974e52e4798a5f86efcf650744156aacf65c856a044864736f6c634300081e0033";
  const isSuperArgs$8 = (xs) => xs.length > 1;
  class V2SwapFeedFactory__factory extends ethers.ContractFactory {
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
          internalType: "uint48",
          name: "startTime",
          type: "uint48"
        },
        {
          indexed: false,
          internalType: "uint48",
          name: "endTime",
          type: "uint48"
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
          internalType: "uint48",
          name: "_startTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "_endTime",
          type: "uint48"
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
          internalType: "uint48",
          name: "_deadline",
          type: "uint48"
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
          internalType: "uint48",
          name: "_fromTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "_toTime",
          type: "uint48"
        }
      ],
      name: "getMultiplier",
      outputs: [
        {
          internalType: "uint48",
          name: "",
          type: "uint48"
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
          internalType: "uint48",
          name: "_fromTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "_toTime",
          type: "uint48"
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
          internalType: "uint48",
          name: "_startTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "_endTime",
          type: "uint48"
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
          internalType: "uint48",
          name: "startTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "endTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "lastRewardTime",
          type: "uint48"
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
          internalType: "uint48",
          name: "_startTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "_endTime",
          type: "uint48"
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
  const _bytecode$7 = "0x6080604052348015600f57600080fd5b506016601a565b60ca565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff161560695760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b039081161460c75780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b612097806100d96000396000f3fe60806040526004361061019f5760003560e01c8063715018a6116100ec578063e907d8c01161008a578063f64ba28b11610064578063f64ba28b146105b6578063f7c618c1146105d6578063f83a9e87146105f6578063ff51a2721461061657600080fd5b8063e907d8c014610522578063efaf059714610542578063f2fde38b1461059657600080fd5b80638da5cb5b116100c65780638da5cb5b1461048557806395007576146104c2578063ad5c4648146104e2578063cf2770d61461050257600080fd5b8063715018a6146104265780637b9eac7c1461043b578063859fe6c71461047257600080fd5b806317caf6f1116101595780633c9e4e3e116101335780633c9e4e3e146103b15780633d912033146103d157806361249d86146103f1578063630b5ba11461041157600080fd5b806317caf6f1146103275780632e7980a2146103595780633a2c67771461037957600080fd5b8062893452146102005780630407539914610229578063081e3eda146102495780631246dbf51461026d5780631526fe271461029d578063171e82a21461030757600080fd5b366101fb576000546001600160a01b031633036101b857005b6000546101cd906001600160a01b0316610647565b156101f957600080546001600160a01b03168152600460205260409020546101f99061ffff16346106b9565b005b600080fd5b34801561020c57600080fd5b5061021660035481565b6040519081526020015b60405180910390f35b34801561023557600080fd5b506101f9610244366004611bb9565b610739565b34801561025557600080fd5b506005545b60405161ffff9091168152602001610220565b34801561027957600080fd5b5061028d610288366004611bee565b610647565b6040519015158152602001610220565b3480156102a957600080fd5b506102bd6102b8366004611bb9565b61077c565b604080516001600160a01b03909716875263ffffffff909516602087015265ffffffffffff93841694860194909452908216606085015216608083015260a082015260c001610220565b34801561031357600080fd5b506101f9610322366004611c55565b6107e6565b34801561033357600080fd5b506007546103449063ffffffff1681565b60405163ffffffff9091168152602001610220565b34801561036557600080fd5b5061025a610374366004611cba565b610a00565b34801561038557600080fd5b50600254610399906001600160a01b031681565b6040516001600160a01b039091168152602001610220565b3480156103bd57600080fd5b506101f96103cc366004611cdb565b610c63565b3480156103dd57600080fd5b506101f96103ec366004611d6b565b610e17565b3480156103fd57600080fd5b5061021661040c366004611d95565b610e5f565b34801561041d57600080fd5b506101f9610e76565b34801561043257600080fd5b506101f9610ea1565b34801561044757600080fd5b5061045b610456366004611db0565b610eb5565b60405165ffffffffffff9091168152602001610220565b6101f9610480366004611d6b565b6106b9565b34801561049157600080fd5b507f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b0316610399565b3480156104ce57600080fd5b506101f96104dd366004611e09565b610f92565b3480156104ee57600080fd5b50600054610399906001600160a01b031681565b34801561050e57600080fd5b506101f961051d366004611d95565b61106d565b34801561052e57600080fd5b5061021661053d366004611eed565b6110cd565b34801561054e57600080fd5b5061058161055d366004611eed565b60066020908152600092835260408084209091529082529020805460019091015482565b60408051928352602083019190915201610220565b3480156105a257600080fd5b506101f96105b1366004611bee565b611130565b3480156105c257600080fd5b506102166105d1366004611d95565b61116e565b3480156105e257600080fd5b50600154610399906001600160a01b031681565b34801561060257600080fd5b50610216610611366004611db0565b6112ae565b34801561062257600080fd5b5061025a610631366004611bee565b60046020526000908152604090205461ffff1681565b6001600160a01b03811660009081526004602052604081205461ffff161515806106b3575060055460011480156106b35750816001600160a01b0316600560008154811061069757610697611f20565b60009182526020909120600390910201546001600160a01b0316145b92915050565b6106c161134b565b60055461ffff8316106106ef5760405162461bcd60e51b81526004016106e690611f36565b60405180910390fd5b6106f98233611395565b801561070c5761070a82338361152e565b505b61073560017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b5050565b61074161179c565b60038190556040518181527f403d953100676c530ee357c0fe9f352dc6c18bd4e8594c49d2107ecbad6a6f099060200160405180910390a150565b6005818154811061078c57600080fd5b60009182526020909120600390910201805460018201546002909201546001600160a01b038216935063ffffffff600160a01b8304169265ffffffffffff600160c01b90930483169281811692600160301b909204169086565b6107ee61179c565b60055461ffff8616106108135760405162461bcd60e51b81526004016106e690611f36565b801561082157610821610e76565b8360058661ffff168154811061083957610839611f20565b60009182526020909120600390910201546007546108679163ffffffff600160a01b90910481169116611f72565b6108719190611f8e565b600760006101000a81548163ffffffff021916908363ffffffff1602179055508360058661ffff16815481106108a9576108a9611f20565b906000526020600020906003020160000160146101000a81548163ffffffff021916908363ffffffff1602179055508260058661ffff16815481106108f0576108f0611f20565b906000526020600020906003020160000160186101000a81548165ffffffffffff021916908365ffffffffffff1602179055508160058661ffff168154811061093b5761093b611f20565b906000526020600020906003020160010160006101000a81548165ffffffffffff021916908365ffffffffffff16021790555060058561ffff168154811061098557610985611f20565b6000918252602091829020600390910201546040805163ffffffff8816815265ffffffffffff80881694820194909452928516908301526001600160a01b03169061ffff8716907f68a8292d2ea1e779a0f3ac4b3d3958c3fbc336064432311947b08a714bcbf8409060600160405180910390a35050505050565b6000610a0a61179c565b610a1386610647565b15610a525760405162461bcd60e51b815260206004820152600f60248201526e111d5c1b1a58d85d195908141bdbdb608a1b60448201526064016106e6565b8115610a6057610a60610e76565b5060055460078054869190600090610a7f90849063ffffffff16611f8e565b825463ffffffff9182166101009390930a9283029282021916919091179091556001600160a01b038089166000818152600460209081526040808320805461ffff8a1661ffff199091168117909155815160c0810183528581528d881693810193845265ffffffffffff808e168285019081528d8216606084019081526080840188815260a08501898152600580546001810182559a52945160039099027f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db081018054995194518616600160c01b0265ffffffffffff60c01b1995909e16600160a01b026001600160c01b0319909a169a909c169990991797909717919091169990991790975596517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db18501805494518816600160301b026bffffffffffffffffffffffff1990951691909716179290921790945593517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db29091015590519092507f68a8292d2ea1e779a0f3ac4b3d3958c3fbc336064432311947b08a714bcbf84090610c529089908990899063ffffffff93909316835265ffffffffffff918216602084015216604082015260600190565b60405180910390a395945050505050565b6000610c6d611812565b805490915060ff600160401b820416159067ffffffffffffffff16600081158015610c955750825b905060008267ffffffffffffffff166001148015610cb25750303b155b905081158015610cc0575080155b15610cde5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff191660011785558315610d0857845460ff60401b1916600160401b1785555b610d1061183b565b600080546001600160a01b03808f166001600160a01b031992831617909255600180548e841690831617905560028054928d1692909116919091179055610d5689610739565b8515610d6e57610d6c8b6103e88a8a6000610a00565b505b610d778d61184b565b604080516001600160a01b038e811682528d811660208301528c168183015290517fe86209b390e8076baf4c4a616512319eb81d91e8b1f8ca206e88c5ff1c264e149181900360600190a18315610e0857845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050505050505050565b610e1f61134b565b60055461ffff831610610e445760405162461bcd60e51b81526004016106e690611f36565b610e4e8233611395565b801561070c5761070a82338361185c565b60006106b382610e70600142611faa565b426112ae565b60055460005b818161ffff16101561073557610e918161106d565b610e9a81611fbd565b9050610e7c565b610ea961179c565b610eb36000611924565b565b60008165ffffffffffff168365ffffffffffff1610610ed657506000610f8b565b600060058561ffff1681548110610eef57610eef611f20565b6000918252602082206003909102018054600182015491935065ffffffffffff600160c01b909104811692918116919087168310610f2d5782610f2f565b865b905060008265ffffffffffff168765ffffffffffff1610610f505782610f52565b865b90508065ffffffffffff168265ffffffffffff1610610f7957600095505050505050610f8b565b610f838282611fde565b955050505050505b9392505050565b6000806000610fa084611995565b92509250925060058761ffff1681548110610fbd57610fbd611f20565b600091825260209091206003909102015460405163d505accf60e01b81523360048201523060248201526044810188905265ffffffffffff8716606482015260ff8516608482015260a4810184905260c481018390526001600160a01b039091169063d505accf9060e401600060405180830381600087803b15801561104257600080fd5b505af1158015611056573d6000803e3d6000fd5b5050505061106487876106b9565b50505050505050565b600060058261ffff168154811061108657611086611f20565b9060005260206000209060030201905061109f8261116e565b600282015560010180546bffffffffffff0000000000001916600160301b4265ffffffffffff160217905550565b61ffff821660009081526006602090815260408083206001600160a01b03851684529091528120600181015464e8d4a510006111088661116e565b83546111149190611ffc565b61111e9190612013565b6111289190611faa565b949350505050565b61113861179c565b6001600160a01b03811661116257604051631e4fbdf760e01b8152600060048201526024016106e6565b61116b81611924565b50565b60008060058361ffff168154811061118857611188611f20565b600091825260208083206040805160c08101825260039490940290910180546001600160a01b038116808652600160a01b820463ffffffff1694860194909452600160c01b900465ffffffffffff9081168584015260018201548082166060870152600160301b90041660808501526002015460a0840181905290516370a0823160e01b815230600482015292945092916370a0823190602401602060405180830381865afa15801561123f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112639190612035565b905080156112a657600061127c868560800151426112ae565b90508161128e8264e8d4a51000611ffc565b6112989190612013565b6112a2908461204e565b9250505b509392505050565b60075460009063ffffffff1681036112c857506000610f8b565b600060058561ffff16815481106112e1576112e1611f20565b6000918252602090912060075460039283029091018054925490935063ffffffff91821692600160a01b90049091169061131c888888610eb5565b65ffffffffffff1661132e9190611ffc565b6113389190611ffc565b6113429190612013565b95945050505050565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0080546001190161138f57604051633ee5aeb560e01b815260040160405180910390fd5b60029055565b600060058361ffff16815481106113ae576113ae611f20565b6000918252602080832061ffff871684526006825260408085206001600160a01b03881686529092529220600390910290910191506113ec8461106d565b80541561151e576000816001015464e8d4a51000846002015484600001546114149190611ffc565b61141e9190612013565b6114289190611faa565b9050801561151c576002546001600160a01b03166114ab576001546040516340c10f1960e01b81526001600160a01b03868116600483015260248201849052909116906340c10f1990604401600060405180830381600087803b15801561148e57600080fd5b505af11580156114a2573d6000803e3d6000fd5b5050505061151c565b60025460015460405163ae63932960e01b81526001600160a01b03918216600482015286821660248201526044810184905291169063ae63932990606401600060405180830381600087803b15801561150357600080fd5b505af1158015611517573d6000803e3d6000fd5b505050505b505b61152884846119df565b50505050565b60008060058561ffff168154811061154857611548611f20565b6000918252602080832061ffff891684526006825260408085206001600160a01b03808b16875293528420935460039093020180549094508116911614801561159057508334145b156116015760008054906101000a90046001600160a01b03166001600160a01b031663d0e30db0856040518263ffffffff1660e01b81526004016000604051808303818588803b1580156115e357600080fd5b505af11580156115f7573d6000803e3d6000fd5b5050505050611700565b81546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015611649573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061166d9190612035565b8354909150611687906001600160a01b0316873088611a5c565b82546040516370a0823160e01b815230600482015282916001600160a01b0316906370a0823190602401602060405180830381865afa1580156116ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116f29190612035565b6116fc9190611faa565b9450505b83816000016000828254611714919061204e565b90915550611724905086866119df565b8561ffff16856001600160a01b03167f2c00706df3fbb4a8ead830d4c0a7f278823843af15ad7e680c4f7db763dd779c8660405161176491815260200190565b60405180910390a35091949350505050565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b60006117cf7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b90506001600160a01b03811633148015906117f257506001600160a01b03811615155b1561116b5760405163118cdaa760e01b81523360048201526024016106e6565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a006106b3565b611843611ac3565b610eb3611ae8565b611853611ac3565b61116b81611af0565b60008060058561ffff168154811061187657611876611f20565b6000918252602080832061ffff891684526006825260408085206001600160a01b038a1686529092529083208054600390930290910193509185918391906118bf908490611faa565b909155505081546118da906001600160a01b03168686611af8565b6118e486866119df565b8561ffff16856001600160a01b03167f4e2ebfe79f50514ade8e774c7f3c01250d6aa3a91cd1f5c33a78df9c459f6e9d8660405161176491815260200190565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b600080600083516041036119bf5750505060208101516040820151606083015160001a91906119d8565b604051634be6321b60e01b815260040160405180910390fd5b9193909250565b600060058361ffff16815481106119f8576119f8611f20565b6000918252602080832061ffff871684526006825260408085206001600160a01b038816865290925292206002600390920290920190810154825491935064e8d4a5100091611a479190611ffc565b611a519190612013565b600190910155505050565b6040516001600160a01b0384811660248301528381166044830152606482018390526115289186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050611b2e565b611acb611b9f565b610eb357604051631afcd79f60e31b815260040160405180910390fd5b611776611ac3565b611138611ac3565b6040516001600160a01b03838116602483015260448201839052611b2991859182169063a9059cbb90606401611a91565b505050565b600080602060008451602086016000885af180611b51576040513d6000823e3d81fd5b50506000513d91508115611b69578060011415611b76565b6001600160a01b0384163b155b1561152857604051635274afe760e01b81526001600160a01b03851660048201526024016106e6565b6000611ba9611812565b54600160401b900460ff16919050565b600060208284031215611bcb57600080fd5b5035919050565b80356001600160a01b0381168114611be957600080fd5b919050565b600060208284031215611c0057600080fd5b610f8b82611bd2565b803561ffff81168114611be957600080fd5b803563ffffffff81168114611be957600080fd5b803565ffffffffffff81168114611be957600080fd5b80358015158114611be957600080fd5b600080600080600060a08688031215611c6d57600080fd5b611c7686611c09565b9450611c8460208701611c1b565b9350611c9260408701611c2f565b9250611ca060608701611c2f565b9150611cae60808701611c45565b90509295509295909350565b600080600080600060a08688031215611cd257600080fd5b611c7686611bd2565b600080600080600080600080610100898b031215611cf857600080fd5b611d0189611bd2565b9750611d0f60208a01611bd2565b9650611d1d60408a01611bd2565b9550611d2b60608a01611bd2565b945060808901359350611d4060a08a01611c2f565b9250611d4e60c08a01611c2f565b9150611d5c60e08a01611c45565b90509295985092959890939650565b60008060408385031215611d7e57600080fd5b611d8783611c09565b946020939093013593505050565b600060208284031215611da757600080fd5b610f8b82611c09565b600080600060608486031215611dc557600080fd5b611dce84611c09565b9250611ddc60208501611c2f565b9150611dea60408501611c2f565b90509250925092565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215611e1f57600080fd5b611e2885611c09565b935060208501359250611e3d60408601611c2f565b9150606085013567ffffffffffffffff811115611e5957600080fd5b8501601f81018713611e6a57600080fd5b803567ffffffffffffffff811115611e8457611e84611df3565b604051601f8201601f19908116603f0116810167ffffffffffffffff81118282101715611eb357611eb3611df3565b604052818152828201602001891015611ecb57600080fd5b8160208401602083013760006020838301015280935050505092959194509250565b60008060408385031215611f0057600080fd5b611f0983611c09565b9150611f1760208401611bd2565b90509250929050565b634e487b7160e01b600052603260045260246000fd5b6020808252600c908201526b125b9d985b1a5908141bdbdb60a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b63ffffffff82811682821603908111156106b3576106b3611f5c565b63ffffffff81811683821601908111156106b3576106b3611f5c565b818103818111156106b3576106b3611f5c565b600061ffff821661ffff8103611fd557611fd5611f5c565b60010192915050565b65ffffffffffff82811682821603908111156106b3576106b3611f5c565b80820281158282048414176106b3576106b3611f5c565b60008261203057634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561204757600080fd5b5051919050565b808201808211156106b3576106b3611f5c56fea2646970667358221220e34cfeda41048bd9af9d6cea7f2593b45626c03459bb7944cc1f364b9972054e64736f6c634300081e0033";
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
          internalType: "uint48",
          name: "halvingInterval",
          type: "uint48"
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
          internalType: "uint48",
          name: "startTime",
          type: "uint48"
        },
        {
          indexed: false,
          internalType: "uint48",
          name: "endTime",
          type: "uint48"
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
          internalType: "uint48",
          name: "_startTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "_endTime",
          type: "uint48"
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
          internalType: "uint48",
          name: "_deadline",
          type: "uint48"
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
          internalType: "uint48",
          name: "_fromTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "_toTime",
          type: "uint48"
        }
      ],
      name: "getMultiplier",
      outputs: [
        {
          internalType: "uint48",
          name: "",
          type: "uint48"
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
          internalType: "uint48",
          name: "_fromTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "_toTime",
          type: "uint48"
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
          internalType: "uint48",
          name: "",
          type: "uint48"
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
          internalType: "uint48",
          name: "_startTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "_endTime",
          type: "uint48"
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
          internalType: "uint48",
          name: "_halvingInterval",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "_startTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "_endTime",
          type: "uint48"
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
          internalType: "uint48",
          name: "startTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "endTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "lastRewardTime",
          type: "uint48"
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
          internalType: "uint48",
          name: "_startTime",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "_endTime",
          type: "uint48"
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
          internalType: "uint48",
          name: "_halvingInterval",
          type: "uint48"
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
  const _bytecode$6 = "0x6080604052348015600f57600080fd5b506016601a565b60ca565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff161560695760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b039081161460c75780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b612f7c806100d96000396000f3fe60806040526004361061023e5760003560e01c806377ba79501161012e578063cf2770d6116100ab578063f2fde38b1161006f578063f2fde38b14610804578063f64ba28b14610824578063f7c618c114610844578063f83a9e8714610864578063ff51a2721461088457600080fd5b8063cf2770d614610730578063d3efaf3a14610750578063db2aa12714610770578063e907d8c014610790578063efaf0597146107b057600080fd5b80638da5cb5b116100f25780638da5cb5b14610662578063950075761461069f578063aa020654146106bf578063ad5c4648146106f0578063cd09525d1461071057600080fd5b806377ba7950146105d45780637b9eac7c146105f45780637e6335f414610614578063859fe6c71461062f5780638af96a661461064257600080fd5b80633a2c6777116101bc578063630b5ba111610180578063630b5ba11461051057806369eb9cdb1461052557806369ff74f11461055b5780636a47aa0614610583578063715018a6146105bf57600080fd5b80633a2c6777146104585780633c9e4e3e146104905780633d912033146104b05780634fb4bb8c146104d057806361249d86146104f057600080fd5b8063171e82a211610203578063171e82a2146103a657806317c52c47146103c657806317caf6f1146103e6578063192e30f8146104185780632e7980a21461043857600080fd5b80628934521461029f57806304075399146102c8578063081e3eda146102e85780631246dbf51461030c5780631526fe271461033c57600080fd5b3661029a576000546001600160a01b0316330361025757005b60005461026c906001600160a01b03166108b5565b1561029857600080546001600160a01b03168152600460205260409020546102989061ffff1634610927565b005b600080fd5b3480156102ab57600080fd5b506102b560035481565b6040519081526020015b60405180910390f35b3480156102d457600080fd5b506102986102e33660046128a9565b6109a7565b3480156102f457600080fd5b506005545b60405161ffff90911681526020016102bf565b34801561031857600080fd5b5061032c6103273660046128de565b6108b5565b60405190151581526020016102bf565b34801561034857600080fd5b5061035c6103573660046128a9565b6109eb565b604080516001600160a01b03909716875263ffffffff909516602087015265ffffffffffff93841694860194909452908216606085015216608083015260a082015260c0016102bf565b3480156103b257600080fd5b506102986103c1366004612945565b610a55565b3480156103d257600080fd5b506102986103e13660046129aa565b610c6f565b3480156103f257600080fd5b506007546104039063ffffffff1681565b60405163ffffffff90911681526020016102bf565b34801561042457600080fd5b506102986104333660046129c5565b610ccd565b34801561044457600080fd5b506102f9610453366004612a02565b610e37565b34801561046457600080fd5b50600254610478906001600160a01b031681565b6040516001600160a01b0390911681526020016102bf565b34801561049c57600080fd5b506102986104ab366004612a23565b610fa9565b3480156104bc57600080fd5b506102986104cb366004612ab3565b61115d565b3480156104dc57600080fd5b5061032c6104eb3660046128de565b6111a5565b3480156104fc57600080fd5b506102b561050b366004612add565b611207565b34801561051c57600080fd5b5061029861121e565b34801561053157600080fd5b50610478610540366004612add565b6008602052600090815260409020546001600160a01b031681565b34801561056757600080fd5b506007546104789064010000000090046001600160a01b031681565b34801561058f57600080fd5b50600a546105a89062010000900465ffffffffffff1681565b60405165ffffffffffff90911681526020016102bf565b3480156105cb57600080fd5b50610298611249565b3480156105e057600080fd5b506102986105ef366004612af8565b61125d565b34801561060057600080fd5b506105a861060f366004612b14565b6112b8565b34801561062057600080fd5b50600a546102f99061ffff1681565b61029861063d366004612ab3565b610927565b34801561064e57600080fd5b5061029861065d366004612add565b611395565b34801561066e57600080fd5b507f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b0316610478565b3480156106ab57600080fd5b506102986106ba366004612b6d565b6113e1565b3480156106cb57600080fd5b506102f96106da3660046128de565b60096020526000908152604090205461ffff1681565b3480156106fc57600080fd5b50600054610478906001600160a01b031681565b34801561071c57600080fd5b5061029861072b3660046128de565b6114bc565b34801561073c57600080fd5b5061029861074b366004612add565b61154e565b34801561075c57600080fd5b5061029861076b366004612c51565b6115ae565b34801561077c57600080fd5b5061029861078b366004612af8565b611609565b34801561079c57600080fd5b506102b56107ab366004612d16565b61165d565b3480156107bc57600080fd5b506107ef6107cb366004612d16565b60066020908152600092835260408084209091529082529020805460019091015482565b604080519283526020830191909152016102bf565b34801561081057600080fd5b5061029861081f3660046128de565b6116c0565b34801561083057600080fd5b506102b561083f366004612add565b6116fe565b34801561085057600080fd5b50600154610478906001600160a01b031681565b34801561087057600080fd5b506102b561087f366004612b14565b61183e565b34801561089057600080fd5b506102f961089f3660046128de565b60046020526000908152604090205461ffff1681565b6001600160a01b03811660009081526004602052604081205461ffff16151580610921575060055460011480156109215750816001600160a01b0316600560008154811061090557610905612d49565b60009182526020909120600390910201546001600160a01b0316145b92915050565b61092f611ad2565b60055461ffff83161061095d5760405162461bcd60e51b815260040161095490612d5f565b60405180910390fd5b6109678233611b1c565b801561097a57610978823383611caf565b505b6109a360017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b5050565b6109af611d67565b60038190556040518181527f403d953100676c530ee357c0fe9f352dc6c18bd4e8594c49d2107ecbad6a6f09906020015b60405180910390a150565b600581815481106109fb57600080fd5b60009182526020909120600390910201805460018201546002909201546001600160a01b038216935063ffffffff600160a01b8304169265ffffffffffff600160c01b90930483169281811692600160301b909204169086565b610a5d611d67565b60055461ffff861610610a825760405162461bcd60e51b815260040161095490612d5f565b8015610a9057610a9061121e565b8360058661ffff1681548110610aa857610aa8612d49565b6000918252602090912060039091020154600754610ad69163ffffffff600160a01b90910481169116612d9b565b610ae09190612db7565b600760006101000a81548163ffffffff021916908363ffffffff1602179055508360058661ffff1681548110610b1857610b18612d49565b906000526020600020906003020160000160146101000a81548163ffffffff021916908363ffffffff1602179055508260058661ffff1681548110610b5f57610b5f612d49565b906000526020600020906003020160000160186101000a81548165ffffffffffff021916908365ffffffffffff1602179055508160058661ffff1681548110610baa57610baa612d49565b906000526020600020906003020160010160006101000a81548165ffffffffffff021916908365ffffffffffff16021790555060058561ffff1681548110610bf457610bf4612d49565b6000918252602091829020600390910201546040805163ffffffff8816815265ffffffffffff80881694820194909452928516908301526001600160a01b03169061ffff8716907f68a8292d2ea1e779a0f3ac4b3d3958c3fbc336064432311947b08a714bcbf8409060600160405180910390a35050505050565b610c77611d67565b600a805467ffffffffffff000019166201000065ffffffffffff8416908102919091179091556040519081527f3cf3f9e376cc97abf512b97a34cd163a9e3eb003aac711f2bc23ac363f3749db906020016109e0565b610cd6336111a5565b610cf25760405162461bcd60e51b815260040161095490612dd3565b3360009081526009602090815260408083205461ffff16808452600683528184206001600160a01b03888116808752919094528285209387168552919093209015801590610d41575081548411155b15610db35783826000016000828254610d5a9190612df5565b90915550610d6a90508387611ddd565b8261ffff16866001600160a01b03167f4e2ebfe79f50514ade8e774c7f3c01250d6aa3a91cd1f5c33a78df9c459f6e9d86604051610daa91815260200190565b60405180910390a35b6001600160a01b03851615610e2f5783816000016000828254610dd69190612e08565b90915550610de690508386611ddd565b8261ffff16856001600160a01b03167f2c00706df3fbb4a8ead830d4c0a7f278823843af15ad7e680c4f7db763dd779c86604051610e2691815260200190565b60405180910390a35b505050505050565b6000610e41611d67565b610e4e8686868686611e5a565b600754604051606089901b6bffffffffffffffffffffffff19166020820152919250600091610ea79164010000000090046001600160a01b031690603401604051602081830303815290604052805190602001206120bd565b600154604051630367f0b360e41b815230600482015261ffff851660248201526001600160a01b038a81166044830152918216606482015291925082919082169063367f0b3090608401600060405180830381600087803b158015610f0b57600080fd5b505af1158015610f1f573d6000803e3d6000fd5b5050505061ffff8316600081815260086020908152604080832080546001600160a01b0319166001600160a01b038781169190911790915586168084526009835292819020805461ffff191685179055519182527ffaaf525512a973415b1e0c1013407f1249e700df4f7ef24c051bc874434d66b4910160405180910390a2505095945050505050565b6000610fb36120cb565b805490915060ff600160401b820416159067ffffffffffffffff16600081158015610fdb5750825b905060008267ffffffffffffffff166001148015610ff85750303b155b905081158015611006575080155b156110245760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561104e57845460ff60401b1916600160401b1785555b6110566120f4565b600080546001600160a01b03808f166001600160a01b031992831617909255600180548e841690831617905560028054928d169290911691909117905561109c896109a7565b85156110b4576110b28b6103e88a8a6000610e37565b505b6110bd8d612104565b604080516001600160a01b038e811682528d811660208301528c168183015290517fe86209b390e8076baf4c4a616512319eb81d91e8b1f8ca206e88c5ff1c264e149181900360600190a1831561114e57845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050505050505050565b611165611ad2565b60055461ffff83161061118a5760405162461bcd60e51b815260040161095490612d5f565b6111948233611b1c565b801561097a57610978823383612115565b6001600160a01b03811660009081526009602052604081205461ffff161515806109215750506000805260086020527f5eff886ea0ce6ca488a3d6e336d6c0f75f46d19b42c06ce5ee98e42c96d256c7546001600160a01b0391821691161490565b600061092182611218600142612df5565b4261183e565b60055460005b818161ffff1610156109a3576112398161154e565b61124281612e1b565b9050611224565b611251611d67565b61125b6000612170565b565b611266336111a5565b6112825760405162461bcd60e51b815260040161095490612dd3565b3360009081526009602052604090205461ffff166112a08184611b1c565b81156112b3576112b1818484611caf565b505b505050565b60008165ffffffffffff168365ffffffffffff16106112d95750600061138e565b600060058561ffff16815481106112f2576112f2612d49565b6000918252602082206003909102018054600182015491935065ffffffffffff600160c01b9091048116929181169190871683106113305782611332565b865b905060008265ffffffffffff168765ffffffffffff16106113535782611355565b865b90508065ffffffffffff168265ffffffffffff161061137c5760009550505050505061138e565b6113868282612e3c565b955050505050505b9392505050565b61139d611d67565b600a805461ffff191661ffff83169081179091556040519081527f6c8d6880a607b5400f9b0ad0718c6c3c499da1d676ddfc670abbae188543112c906020016109e0565b60008060006113ef846121e1565b92509250925060058761ffff168154811061140c5761140c612d49565b600091825260209091206003909102015460405163d505accf60e01b81523360048201523060248201526044810188905265ffffffffffff8716606482015260ff8516608482015260a4810184905260c481018390526001600160a01b039091169063d505accf9060e401600060405180830381600087803b15801561149157600080fd5b505af11580156114a5573d6000803e3d6000fd5b505050506114b38787610927565b50505050505050565b6114c5336111a5565b6114e15760405162461bcd60e51b815260040161095490612dd3565b336000908152600960205260409020546001546005805461ffff909316926001600160a01b03909216918390811061151b5761151b612d49565b60009182526020909120600390910201546001600160a01b031614611544576109a38183611b1c565b6109a3818361222b565b600060058261ffff168154811061156757611567612d49565b90600052602060002090600302019050611580826116fe565b600282015560010180546bffffffffffff0000000000001916600160301b4265ffffffffffff160217905550565b6115b785611395565b6115c084610c6f565b6115d08b8b8a8a8a888888610fa9565b5050600780546001600160a01b0390981664010000000002640100000000600160c01b0319909816979097179096555050505050505050565b611612336111a5565b61162e5760405162461bcd60e51b815260040161095490612dd3565b3360009081526009602052604090205461ffff1661164c8184611b1c565b81156112b3576112b1818484612115565b61ffff821660009081526006602090815260408083206001600160a01b03851684529091528120600181015464e8d4a51000611698866116fe565b83546116a49190612e5a565b6116ae9190612e87565b6116b89190612df5565b949350505050565b6116c8611d67565b6001600160a01b0381166116f257604051631e4fbdf760e01b815260006004820152602401610954565b6116fb81612170565b50565b60008060058361ffff168154811061171857611718612d49565b600091825260208083206040805160c08101825260039490940290910180546001600160a01b038116808652600160a01b820463ffffffff1694860194909452600160c01b900465ffffffffffff9081168584015260018201548082166060870152600160301b90041660808501526002015460a0840181905290516370a0823160e01b815230600482015292945092916370a0823190602401602060405180830381865afa1580156117cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117f39190612e9b565b9050801561183657600061180c8685608001514261183e565b90508161181e8264e8d4a51000612e5a565b6118289190612e87565b6118329084612e08565b9250505b509392505050565b60008165ffffffffffff168365ffffffffffff16101580611865575060075463ffffffff16155b156118725750600061138e565b600060058561ffff168154811061188b5761188b612d49565b6000918252602082206003909102018054600182015491935065ffffffffffff600160c01b9091048116929181169190871683106118c957826118cb565b865b905060008265ffffffffffff168765ffffffffffff16106118ec57826118ee565b865b90508065ffffffffffff168265ffffffffffff16106119155760009550505050505061138e565b600a5462010000900465ffffffffffff1660000361198657600754855460035463ffffffff92831692600160a01b909204909116906119548585612e3c565b65ffffffffffff166119669190612e5a565b6119709190612e5a565b61197a9190612e87565b9550505050505061138e565b600354600a54600091908490839062010000900465ffffffffffff166119ac8984612e3c565b6119b69190612eb4565b90505b8465ffffffffffff168265ffffffffffff161080156119d757508215155b15611a9757600a5460009062010000900465ffffffffffff166119fb836001612ee0565b611a059190612efe565b611a0f908a612ee0565b905060008165ffffffffffff168765ffffffffffff1610611a305781611a32565b865b905084611a3f8583612e3c565b65ffffffffffff16611a519190612e5a565b611a5b9087612e08565b600a549096509093508390606490611a779061ffff1687612e5a565b611a819190612e87565b945082611a8d81612f26565b93505050506119b9565b600754895463ffffffff91821691611ab791600160a01b90041686612e5a565b611ac19190612e87565b9d9c50505050505050505050505050565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f00805460011901611b1657604051633ee5aeb560e01b815260040160405180910390fd5b60029055565b600060058361ffff1681548110611b3557611b35612d49565b6000918252602080832061ffff871684526006825260408085206001600160a01b0388168652909252922060039091029091019150611b738461154e565b805415611ca5576000816001015464e8d4a5100084600201548460000154611b9b9190612e5a565b611ba59190612e87565b611baf9190612df5565b90508015611ca3576002546001600160a01b0316611c32576001546040516340c10f1960e01b81526001600160a01b03868116600483015260248201849052909116906340c10f1990604401600060405180830381600087803b158015611c1557600080fd5b505af1158015611c29573d6000803e3d6000fd5b50505050611ca3565b60025460015460405163ae63932960e01b81526001600160a01b03918216600482015286821660248201526044810184905291169063ae63932990606401600060405180830381600087803b158015611c8a57600080fd5b505af1158015611c9e573d6000803e3d6000fd5b505050505b505b6112b18484611ddd565b600080611cbd8585856123aa565b61ffff861660009081526008602052604090819020549051631b96b2f960e01b81526001600160a01b03878116600483015260248201849052929350911690631b96b2f9906044015b600060405180830381600087803b158015611d2057600080fd5b505af1158015611d34573d6000803e3d6000fd5b5092979650505050505050565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b6000611d9a7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b90506001600160a01b0381163314801590611dbd57506001600160a01b03811615155b156116fb5760405163118cdaa760e01b8152336004820152602401610954565b600060058361ffff1681548110611df657611df6612d49565b6000918252602080832061ffff871684526006825260408085206001600160a01b038816865290925292206002600390920290920190810154825491935064e8d4a5100091611e459190612e5a565b611e4f9190612e87565b600190910155505050565b6000611e64611d67565b611e6d866108b5565b15611eac5760405162461bcd60e51b815260206004820152600f60248201526e111d5c1b1a58d85d195908141bdbdb608a1b6044820152606401610954565b8115611eba57611eba61121e565b5060055460078054869190600090611ed990849063ffffffff16612db7565b825463ffffffff9182166101009390930a9283029282021916919091179091556001600160a01b038089166000818152600460209081526040808320805461ffff8a1661ffff199091168117909155815160c0810183528581528d881693810193845265ffffffffffff808e168285019081528d8216606084019081526080840188815260a08501898152600580546001810182559a52945160039099027f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db081018054995194518616600160c01b0265ffffffffffff60c01b1995909e16600160a01b026001600160c01b0319909a169a909c169990991797909717919091169990991790975596517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db18501805494518816600160301b026bffffffffffffffffffffffff1990951691909716179290921790945593517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db29091015590519092507f68a8292d2ea1e779a0f3ac4b3d3958c3fbc336064432311947b08a714bcbf840906120ac9089908990899063ffffffff93909316835265ffffffffffff918216602084015216604082015260600190565b60405180910390a395945050505050565b600061138e838360006125f2565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00610921565b6120fc612689565b61125b6126ae565b61210c612689565b6116fb816126b6565b6000806121238585856126be565b61ffff861660009081526008602052604090819020549051639fc8ae6d60e01b81526001600160a01b03878116600483015260248201849052929350911690639fc8ae6d90604401611d06565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b6000806000835160410361220b5750505060208101516040820151606083015160001a9190612224565b604051634be6321b60e01b815260040160405180910390fd5b9193909250565b600060058361ffff168154811061224457612244612d49565b6000918252602080832061ffff871684526006825260408085206001600160a01b03881686529092529220600390910290910191506122828461154e565b805415611ca5576000816001015464e8d4a51000846002015484600001546122aa9190612e5a565b6122b49190612e87565b6122be9190612df5565b90508015611ca357808260000160008282546122da9190612e08565b909155505061ffff851660009081526008602052604090819020549051631b96b2f960e01b81526001600160a01b0386811660048301526024820184905290911690631b96b2f990604401600060405180830381600087803b15801561233f57600080fd5b505af1158015612353573d6000803e3d6000fd5b505050508461ffff16846001600160a01b03167f2c00706df3fbb4a8ead830d4c0a7f278823843af15ad7e680c4f7db763dd779c8360405161239791815260200190565b60405180910390a3506112b18484611ddd565b60008060058561ffff16815481106123c4576123c4612d49565b6000918252602080832061ffff891684526006825260408085206001600160a01b03808b16875293528420935460039093020180549094508116911614801561240c57508334145b1561247d5760008054906101000a90046001600160a01b03166001600160a01b031663d0e30db0856040518263ffffffff1660e01b81526004016000604051808303818588803b15801561245f57600080fd5b505af1158015612473573d6000803e3d6000fd5b505050505061257c565b81546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa1580156124c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124e99190612e9b565b8354909150612503906001600160a01b0316873088612786565b82546040516370a0823160e01b815230600482015282916001600160a01b0316906370a0823190602401602060405180830381865afa15801561254a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061256e9190612e9b565b6125789190612df5565b9450505b838160000160008282546125909190612e08565b909155506125a090508686611ddd565b8561ffff16856001600160a01b03167f2c00706df3fbb4a8ead830d4c0a7f278823843af15ad7e680c4f7db763dd779c866040516125e091815260200190565b60405180910390a35091949350505050565b60008147101561261e5760405163cf47918160e01b815247600482015260248101839052604401610954565b763d602d80600a3d3981f3363d3d373d3d3d363d730000008460601b60e81c176000526e5af43d82803e903d91602b57fd5bf38460781b17602052826037600984f590506001600160a01b03811661138e5760405163b06ebf3d60e01b815260040160405180910390fd5b6126916127ed565b61125b57604051631afcd79f60e31b815260040160405180910390fd5b611d41612689565b6116c8612689565b60008060058561ffff16815481106126d8576126d8612d49565b6000918252602080832061ffff891684526006825260408085206001600160a01b038a168652909252908320805460039093029091019350918591839190612721908490612df5565b9091555050815461273c906001600160a01b03168686612807565b6127468686611ddd565b8561ffff16856001600160a01b03167f4e2ebfe79f50514ade8e774c7f3c01250d6aa3a91cd1f5c33a78df9c459f6e9d866040516125e091815260200190565b6040516001600160a01b0384811660248301528381166044830152606482018390526112b19186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180516001600160e01b038381831617835250505050612838565b60006127f76120cb565b54600160401b900460ff16919050565b6040516001600160a01b038381166024830152604482018390526112b391859182169063a9059cbb906064016127bb565b600080602060008451602086016000885af18061285b576040513d6000823e3d81fd5b50506000513d91508115612873578060011415612880565b6001600160a01b0384163b155b156112b157604051635274afe760e01b81526001600160a01b0385166004820152602401610954565b6000602082840312156128bb57600080fd5b5035919050565b80356001600160a01b03811681146128d957600080fd5b919050565b6000602082840312156128f057600080fd5b61138e826128c2565b803561ffff811681146128d957600080fd5b803563ffffffff811681146128d957600080fd5b803565ffffffffffff811681146128d957600080fd5b803580151581146128d957600080fd5b600080600080600060a0868803121561295d57600080fd5b612966866128f9565b94506129746020870161290b565b93506129826040870161291f565b92506129906060870161291f565b915061299e60808701612935565b90509295509295909350565b6000602082840312156129bc57600080fd5b61138e8261291f565b6000806000606084860312156129da57600080fd5b6129e3846128c2565b92506129f1602085016128c2565b929592945050506040919091013590565b600080600080600060a08688031215612a1a57600080fd5b612966866128c2565b600080600080600080600080610100898b031215612a4057600080fd5b612a49896128c2565b9750612a5760208a016128c2565b9650612a6560408a016128c2565b9550612a7360608a016128c2565b945060808901359350612a8860a08a0161291f565b9250612a9660c08a0161291f565b9150612aa460e08a01612935565b90509295985092959890939650565b60008060408385031215612ac657600080fd5b612acf836128f9565b946020939093013593505050565b600060208284031215612aef57600080fd5b61138e826128f9565b60008060408385031215612b0b57600080fd5b612acf836128c2565b600080600060608486031215612b2957600080fd5b612b32846128f9565b9250612b406020850161291f565b9150612b4e6040850161291f565b90509250925092565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215612b8357600080fd5b612b8c856128f9565b935060208501359250612ba16040860161291f565b9150606085013567ffffffffffffffff811115612bbd57600080fd5b8501601f81018713612bce57600080fd5b803567ffffffffffffffff811115612be857612be8612b57565b604051601f8201601f19908116603f0116810167ffffffffffffffff81118282101715612c1757612c17612b57565b604052818152828201602001891015612c2f57600080fd5b8160208401602083013760006020838301015280935050505092959194509250565b60008060008060008060008060008060006101608c8e031215612c7357600080fd5b612c7c8c6128c2565b9a50612c8a60208d016128c2565b9950612c9860408d016128c2565b9850612ca660608d016128c2565b9750612cb460808d016128c2565b965060a08c01359550612cc960c08d016128f9565b9450612cd760e08d0161291f565b9350612ce66101008d0161291f565b9250612cf56101208d0161291f565b9150612d046101408d01612935565b90509295989b509295989b9093969950565b60008060408385031215612d2957600080fd5b612d32836128f9565b9150612d40602084016128c2565b90509250929050565b634e487b7160e01b600052603260045260246000fd5b6020808252600c908201526b125b9d985b1a5908141bdbdb60a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b63ffffffff828116828216039081111561092157610921612d85565b63ffffffff818116838216019081111561092157610921612d85565b6020808252600890820152671393d517d413d3d360c21b604082015260600190565b8181038181111561092157610921612d85565b8082018082111561092157610921612d85565b600061ffff821661ffff8103612e3357612e33612d85565b60010192915050565b65ffffffffffff828116828216039081111561092157610921612d85565b808202811582820484141761092157610921612d85565b634e487b7160e01b600052601260045260246000fd5b600082612e9657612e96612e71565b500490565b600060208284031215612ead57600080fd5b5051919050565b600065ffffffffffff831680612ecc57612ecc612e71565b8065ffffffffffff84160491505092915050565b65ffffffffffff818116838216019081111561092157610921612d85565b65ffffffffffff8181168382160290811690818114612f1f57612f1f612d85565b5092915050565b600065ffffffffffff821665ffffffffffff8103612e3357612e33612d8556fea264697066735822122095aeb246d96729bbff38c7a4a70eeaec7b3ac47d5ab15d2e5a45f0a42cb927ce64736f6c634300081e0033";
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
  const _bytecode$5 = "0x6080604052348015600f57600080fd5b506016601a565b60ca565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff161560695760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b039081161460c75780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b610aff806100d96000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063ae63932911610066578063ae6393291461010d578063ccb6a27014610120578063d9caed1214610133578063e7e31e7a14610146578063f2fde38b1461015957600080fd5b80631241803814610098578063715018a6146100b65780638ce5877c146100c05780638da5cb5b146100d3575b600080fd5b6100a061016c565b6040516100ad91906109bd565b60405180910390f35b6100be61017d565b005b6100be6100ce366004610a1e565b610191565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546040516001600160a01b0390911681526020016100ad565b6100be61011b366004610a3b565b610233565b6100be61012e366004610a1e565b6102ec565b6100be610141366004610a3b565b610442565b6100be610154366004610a1e565b6104ad565b6100be610167366004610a1e565b610546565b60606101786000610584565b905090565b610185610598565b61018f600061060e565b565b610199610598565b6101a460008261067f565b6101e75760405162461bcd60e51b815260206004820152600f60248201526e24a72b20a624a22fa9a822a72222a960891b60448201526064015b60405180910390fd5b6101f26000826106a6565b506040516001600160a01b03821681527f508e01dc09a24291350cfc3ad6e6ee056cfa6df6780f82e57e60190be9f35524906020015b60405180910390a150565b61023e60003361067f565b61027c5760405162461bcd60e51b815260206004820152600f60248201526e24a72b20a624a22fa9a822a72222a960891b60448201526064016101de565b6102906001600160a01b03841683836106bb565b816001600160a01b0316336001600160a01b0316846001600160a01b03167fa209447764afbca4d7c43c9962941f114f3465f7fde32167c76661eb75b3ef77846040516102df91815260200190565b60405180910390a4505050565b60006102f6610712565b805490915060ff600160401b820416159067ffffffffffffffff1660008115801561031e5750825b905060008267ffffffffffffffff16600114801561033b5750303b155b905081158015610349575080155b156103675760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561039157845460ff60401b1916600160401b1785555b6001600160a01b0386166103a3573395505b6103ac8661073b565b6103b760008761074c565b506040516001600160a01b03871681527ffb461a9d124e123750171741a89341defba2596b06be0c452e3e0f990c18bb9e9060200160405180910390a1831561043a57845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b61044a610598565b61045e6001600160a01b03841683836106bb565b816001600160a01b0316336001600160a01b0316846001600160a01b03167fa4195c37c2947bbe89165f03e320b6903116f0b10d8cfdb522330f7ce6f9fa24846040516102df91815260200190565b6104b5610598565b6104c060008261067f565b156105015760405162461bcd60e51b8152602060048201526011602482015270222aa82624a1a0aa22afa9a822a72222a960791b60448201526064016101de565b61050c60008261074c565b506040516001600160a01b03821681527ffb461a9d124e123750171741a89341defba2596b06be0c452e3e0f990c18bb9e90602001610228565b61054e610598565b6001600160a01b03811661057857604051631e4fbdf760e01b8152600060048201526024016101de565b6105818161060e565b50565b6060600061059183610761565b9392505050565b60006105cb7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b90506001600160a01b03811633148015906105ee57506001600160a01b03811615155b156105815760405163118cdaa760e01b81523360048201526024016101de565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b6001600160a01b038116600090815260018301602052604081205415155b90505b92915050565b600061069d836001600160a01b0384166107bd565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261070d9084906108b0565b505050565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a006106a0565b610743610927565b6105818161094c565b600061069d836001600160a01b038416610954565b6060816000018054806020026020016040519081016040528092919081815260200182805480156107b157602002820191906000526020600020905b81548152602001906001019080831161079d575b50505050509050919050565b600081815260018301602052604081205480156108a65760006107e1600183610a7c565b85549091506000906107f590600190610a7c565b905080821461085a57600086600001828154811061081557610815610a9d565b906000526020600020015490508087600001848154811061083857610838610a9d565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061086b5761086b610ab3565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506106a0565b60009150506106a0565b600080602060008451602086016000885af1806108d3576040513d6000823e3d81fd5b50506000513d915081156108eb5780600114156108f8565b6001600160a01b0384163b155b1561092157604051635274afe760e01b81526001600160a01b03851660048201526024016101de565b50505050565b61092f6109a3565b61018f57604051631afcd79f60e31b815260040160405180910390fd5b61054e610927565b600081815260018301602052604081205461099b575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556106a0565b5060006106a0565b60006109ad610712565b54600160401b900460ff16919050565b602080825282518282018190526000918401906040840190835b818110156109fe5783516001600160a01b03168352602093840193909201916001016109d7565b509095945050505050565b6001600160a01b038116811461058157600080fd5b600060208284031215610a3057600080fd5b813561059181610a09565b600080600060608486031215610a5057600080fd5b8335610a5b81610a09565b92506020840135610a6b81610a09565b929592945050506040919091013590565b818103818111156106a057634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea264697066735822122064c4752b90e416302d303f368fcc1460a18f56476f1a1e577db3311ef90aca4a64736f6c634300081e0033";
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
  const _bytecode$4 = "0x6080604052348015600f57600080fd5b50610acf8061001f6000396000f3fe6080604052600436106100745760003560e01c80635c60da1b1161004e5780635c60da1b146100f05780639f712f2f14610105578063aba0017314610125578063ee0530f41461013857610083565b80633e47158c1461008b5780634f1ef286146100bd5780635a28dda4146100d057610083565b366100835761008161015a565b005b61008161015a565b34801561009757600080fd5b506100a061016c565b6040516001600160a01b0390911681526020015b60405180910390f35b6100816100cb366004610785565b61017b565b3480156100dc57600080fd5b506100816100eb3660046107d3565b61030e565b3480156100fc57600080fd5b506100a06103cd565b34801561011157600080fd5b50610081610120366004610810565b6103d7565b610081610133366004610832565b610431565b34801561014457600080fd5b5061014d6104bf565b6040516100b491906108e0565b61016a610165610570565b61057a565b565b60006101766105a3565b905090565b61018361016c565b6001600160a01b0316336001600160a01b031614806101b057506101a561016c565b6001600160a01b0316155b6101d55760405162461bcd60e51b81526004016101cc90610913565b60405180910390fd5b816001600160a01b03163b60000361020b57604051634c9c8ce360e01b81526001600160a01b03831660048201526024016101cc565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0384169081179091556040517fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a28051156102eb57600080836001600160a01b0316836040516102939190610936565b600060405180830381855af49150503d80600081146102ce576040519150601f19603f3d011682016040523d82523d6000602084013e6102d3565b606091505b5091509150816102e557805181602001fd5b50505050565b341561030a5760405163b398979f60e01b815260040160405180910390fd5b5050565b61031661016c565b6001600160a01b0316336001600160a01b03161480610343575061033861016c565b6001600160a01b0316155b61035f5760405162461bcd60e51b81526004016101cc90610913565b8051156103ca577ffcba12fcf625f4823c7c0c86b97ab29721afc9e784836bc00bf04553a0c8dff461039182826109da565b507f8a1bce929b257bfd582fa164d9b9fa4d4b0b7442b10b3aad23e2c56aa4e0d61a816040516103c191906108e0565b60405180910390a15b50565b6000610176610570565b6103df61016c565b6001600160a01b0316336001600160a01b0316148061040c575061040161016c565b6001600160a01b0316155b6104285760405162461bcd60e51b81526004016101cc90610913565b6103ca816105d6565b600061043b610570565b6001600160a01b03161480156104615750600061045661016c565b6001600160a01b0316145b6104a35760405162461bcd60e51b81526020600482015260136024820152721053149150511657d253925512505312569151606a1b60448201526064016101cc565b6104ad828261017b565b6104b68461030e565b6102e5836103d7565b60607ffcba12fcf625f4823c7c0c86b97ab29721afc9e784836bc00bf04553a0c8dff480546104ed90610952565b80601f016020809104026020016040519081016040528092919081815260200182805461051990610952565b80156105665780601f1061053b57610100808354040283529160200191610566565b820191906000526020600020905b81548152906001019060200180831161054957829003601f168201915b5050505050905090565b600061017661062a565b3660008037600080366000845af43d6000803e808015610599573d6000f35b3d6000fd5b505050565b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b546001600160a01b0316919050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6105ff6105a3565b604080516001600160a01b03928316815291841660208301520160405180910390a16103ca81610652565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc6105c7565b6001600160a01b03811661067c57604051633173bdd160e11b8152600060048201526024016101cc565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610380546001600160a01b0319166001600160a01b0392909216919091179055565b80356001600160a01b03811681146106d457600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261070057600080fd5b81356020830160008067ffffffffffffffff841115610721576107216106d9565b50604051601f19601f85018116603f0116810181811067ffffffffffffffff82111715610750576107506106d9565b60405283815290508082840187101561076857600080fd5b838360208301376000602085830101528094505050505092915050565b6000806040838503121561079857600080fd5b6107a1836106bd565b9150602083013567ffffffffffffffff8111156107bd57600080fd5b6107c9858286016106ef565b9150509250929050565b6000602082840312156107e557600080fd5b813567ffffffffffffffff8111156107fc57600080fd5b610808848285016106ef565b949350505050565b60006020828403121561082257600080fd5b61082b826106bd565b9392505050565b6000806000806080858703121561084857600080fd5b843567ffffffffffffffff81111561085f57600080fd5b61086b878288016106ef565b94505061087a602086016106bd565b9250610888604086016106bd565b9150606085013567ffffffffffffffff8111156108a457600080fd5b6108b0878288016106ef565b91505092959194509250565b60005b838110156108d75781810151838201526020016108bf565b50506000910152565b60208152600082518060208401526108ff8160408501602087016108bc565b601f01601f19169190910160400192915050565b6020808252600990820152682727aa2fa0a226a4a760b91b604082015260600190565b600082516109488184602087016108bc565b9190910192915050565b600181811c9082168061096657607f821691505b60208210810361098657634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561059e57806000526020600020601f840160051c810160208510156109b35750805b601f840160051c820191505b818110156109d357600081556001016109bf565b5050505050565b815167ffffffffffffffff8111156109f4576109f46106d9565b610a0881610a028454610952565b8461098c565b6020601f821160018114610a3c5760008315610a245750848201515b600019600385901b1c1916600184901b1784556109d3565b600084815260208120601f198516915b82811015610a6c5787850151825560209485019460019092019101610a4c565b5084821015610a8a5786840151600019600387901b60f8161c191681555b50505050600190811b0190555056fea2646970667358221220ff3a74e5f11c3293d669294e2fd12cea024602c6623dc864512fbb196a4f3bb164736f6c634300081e0033";
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
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address"
        }
      ],
      name: "AccountLocked",
      type: "error"
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
      name: "InvalidInitialization",
      type: "error"
    },
    {
      inputs: [
        {
          internalType: "uint48",
          name: "deadline",
          type: "uint48"
        }
      ],
      name: "LockedExpiredSignature",
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
      name: "LockedInvalidSigner",
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
          internalType: "uint48",
          name: "lockUntil",
          type: "uint48"
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
          name: "lockBy",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint48",
          name: "lockUntil",
          type: "uint48"
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
      inputs: [],
      name: "LOCK_TYPEHASH",
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
          internalType: "uint48",
          name: "until",
          type: "uint48"
        },
        {
          internalType: "bytes",
          name: "",
          type: "bytes"
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
          name: "lockBy",
          type: "address"
        },
        {
          internalType: "uint48",
          name: "lockUntil",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "deadline",
          type: "uint48"
        },
        {
          internalType: "bytes",
          name: "signature",
          type: "bytes"
        },
        {
          internalType: "bytes",
          name: "",
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
          name: "owner",
          type: "address"
        }
      ],
      name: "lockedBalance",
      outputs: [
        {
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
          internalType: "uint256",
          name: "until",
          type: "uint256"
        }
      ],
      name: "lockedBalanceUntil",
      outputs: [
        {
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
      name: "lockedUntil",
      outputs: [
        {
          internalType: "uint48",
          name: "",
          type: "uint48"
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
      return new ethers.Interface(_abi$4);
    }
    static connect(address, runner) {
      return new ethers.Contract(address, _abi$4, runner);
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
  const _bytecode$3 = "0x61018060405234801561001157600080fd5b506040516118a63803806118a68339810160408190526100309161045f565b338480604051806040016040528060018152602001603160f81b8152508787816003908161005e9190610571565b50600461006b8282610571565b5061007b91508390506005610175565b6101205261008a816006610175565b61014052815160208084019190912060e052815190820120610100524660a05261011760e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c052506001600160a01b03811661015057604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b610159816101a8565b5060ff82166101605261016c33826101fa565b505050506106a7565b60006020835110156101915761018a83610234565b90506101a2565b8161019c8482610571565b5060ff90505b92915050565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0382166102245760405163ec442f0560e01b815260006004820152602401610147565b61023060008383610272565b5050565b600080829050601f8151111561025f578260405163305a27a960e01b8152600401610147919061062f565b805161026a82610662565b179392505050565b6001600160a01b03831661029d5780600260008282546102929190610686565b9091555061030f9050565b6001600160a01b038316600090815260208190526040902054818110156102f05760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610147565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661032b5760028054829003905561034a565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161038f91815260200190565b60405180910390a3505050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156103cd5781810151838201526020016103b5565b50506000910152565b600082601f8301126103e757600080fd5b81516001600160401b038111156104005761040061039c565b604051601f8201601f19908116603f011681016001600160401b038111828210171561042e5761042e61039c565b60405281815283820160200185101561044657600080fd5b6104578260208301602087016103b2565b949350505050565b6000806000806080858703121561047557600080fd5b84516001600160401b0381111561048b57600080fd5b610497878288016103d6565b602087015190955090506001600160401b038111156104b557600080fd5b6104c1878288016103d6565b935050604085015160ff811681146104d857600080fd5b6060959095015193969295505050565b600181811c908216806104fc57607f821691505b60208210810361051c57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561056c57806000526020600020601f840160051c810160208510156105495750805b601f840160051c820191505b818110156105695760008155600101610555565b50505b505050565b81516001600160401b0381111561058a5761058a61039c565b61059e8161059884546104e8565b84610522565b6020601f8211600181146105d257600083156105ba5750848201515b600019600385901b1c1916600184901b178455610569565b600084815260208120601f198516915b8281101561060257878501518255602094850194600190920191016105e2565b50848210156106205786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b602081526000825180602084015261064e8160408501602087016103b2565b601f01601f19169190910160400192915050565b8051602080830151919081101561051c5760001960209190910360031b1b16919050565b808201808211156101a257634e487b7160e01b600052601160045260246000fd5b60805160a05160c05160e0516101005161012051610140516101605161119a61070c600039600061019e015260006109840152600061095701526000610814015260006107ec01526000610747015260006107710152600061079b015261119a6000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806379cc6790116100ad578063a0712d6811610071578063a0712d681461028d578063a9059cbb146102a0578063d505accf146102b3578063dd62ed3e146102c6578063f2fde38b146102ff57600080fd5b806379cc6790146102295780637ecebe001461023c57806384b0196e1461024f5780638da5cb5b1461026a57806395d89b411461028557600080fd5b80633644e515116100f45780633644e515146101c857806340c10f19146101d057806342966c68146101e557806370a08231146101f8578063715018a61461022157600080fd5b806306fdde0314610131578063095ea7b31461014f57806318160ddd1461017257806323b872dd14610184578063313ce56714610197575b600080fd5b610139610312565b6040516101469190610ee4565b60405180910390f35b61016261015d366004610f1a565b6103a4565b6040519015158152602001610146565b6002545b604051908152602001610146565b610162610192366004610f44565b6103be565b60405160ff7f0000000000000000000000000000000000000000000000000000000000000000168152602001610146565b6101766103e2565b6101e36101de366004610f1a565b6103f1565b005b6101e36101f3366004610f81565b610407565b610176610206366004610f9a565b6001600160a01b031660009081526020819052604090205490565b6101e3610414565b6101e3610237366004610f1a565b610428565b61017661024a366004610f9a565b61043d565b61025761045b565b6040516101469796959493929190610fb5565b6008546040516001600160a01b039091168152602001610146565b6101396104a1565b6101e361029b366004610f81565b6104b0565b6101626102ae366004610f1a565b6104c2565b6101e36102c136600461104d565b6104d0565b6101766102d43660046110c0565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101e361030d366004610f9a565b61060f565b606060038054610321906110f3565b80601f016020809104026020016040519081016040528092919081815260200182805461034d906110f3565b801561039a5780601f1061036f5761010080835404028352916020019161039a565b820191906000526020600020905b81548152906001019060200180831161037d57829003601f168201915b5050505050905090565b6000336103b281858561064a565b60019150505b92915050565b6000336103cc85828561065c565b6103d78585856106db565b506001949350505050565b60006103ec61073a565b905090565b6103f9610865565b6104038282610892565b5050565b61041133826108c8565b50565b61041c610865565b61042660006108fe565b565b61043382338361065c565b61040382826108c8565b6001600160a01b0381166000908152600760205260408120546103b8565b60006060806000806000606061046f610950565b61047761097d565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b606060048054610321906110f3565b6104b8610865565b6104113382610892565b6000336103b28185856106db565b834211156104f95760405163313c898160e11b8152600481018590526024015b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886105468c6001600160a01b0316600090815260076020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006105a1826109aa565b905060006105b1828787876109d7565b9050896001600160a01b0316816001600160a01b0316146105f8576040516325c0072360e11b81526001600160a01b0380831660048301528b1660248201526044016104f0565b6106038a8a8a61064a565b50505050505050505050565b610617610865565b6001600160a01b03811661064157604051631e4fbdf760e01b8152600060048201526024016104f0565b610411816108fe565b6106578383836001610a05565b505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198110156106d557818110156106c657604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064016104f0565b6106d584848484036000610a05565b50505050565b6001600160a01b03831661070557604051634b637e8f60e11b8152600060048201526024016104f0565b6001600160a01b03821661072f5760405163ec442f0560e01b8152600060048201526024016104f0565b610657838383610ada565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561079357507f000000000000000000000000000000000000000000000000000000000000000046145b156107bd57507f000000000000000000000000000000000000000000000000000000000000000090565b6103ec604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b6008546001600160a01b031633146104265760405163118cdaa760e01b81523360048201526024016104f0565b6001600160a01b0382166108bc5760405163ec442f0560e01b8152600060048201526024016104f0565b61040360008383610ada565b6001600160a01b0382166108f257604051634b637e8f60e11b8152600060048201526024016104f0565b61040382600083610ada565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60606103ec7f00000000000000000000000000000000000000000000000000000000000000006005610c04565b60606103ec7f00000000000000000000000000000000000000000000000000000000000000006006610c04565b60006103b86109b761073a565b8360405161190160f01b8152600281019290925260228201526042902090565b6000806000806109e988888888610caf565b9250925092506109f98282610d7e565b50909695505050505050565b6001600160a01b038416610a2f5760405163e602df0560e01b8152600060048201526024016104f0565b6001600160a01b038316610a5957604051634a1406b160e11b8152600060048201526024016104f0565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156106d557826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610acc91815260200190565b60405180910390a350505050565b6001600160a01b038316610b05578060026000828254610afa919061112d565b90915550610b779050565b6001600160a01b03831660009081526020819052604090205481811015610b585760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016104f0565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610b9357600280548290039055610bb2565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610bf791815260200190565b60405180910390a3505050565b606060ff8314610c1e57610c1783610e37565b90506103b8565b818054610c2a906110f3565b80601f0160208091040260200160405190810160405280929190818152602001828054610c56906110f3565b8015610ca35780601f10610c7857610100808354040283529160200191610ca3565b820191906000526020600020905b815481529060010190602001808311610c8657829003601f168201915b505050505090506103b8565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115610cea5750600091506003905082610d74565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015610d3e573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610d6a57506000925060019150829050610d74565b9250600091508190505b9450945094915050565b6000826003811115610d9257610d9261114e565b03610d9b575050565b6001826003811115610daf57610daf61114e565b03610dcd5760405163f645eedf60e01b815260040160405180910390fd5b6002826003811115610de157610de161114e565b03610e025760405163fce698f760e01b8152600481018290526024016104f0565b6003826003811115610e1657610e1661114e565b03610403576040516335e2f38360e21b8152600481018290526024016104f0565b60606000610e4483610e76565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600060ff8216601f8111156103b857604051632cd44ac360e21b815260040160405180910390fd5b6000815180845260005b81811015610ec457602081850181015186830182015201610ea8565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610ef76020830184610e9e565b9392505050565b80356001600160a01b0381168114610f1557600080fd5b919050565b60008060408385031215610f2d57600080fd5b610f3683610efe565b946020939093013593505050565b600080600060608486031215610f5957600080fd5b610f6284610efe565b9250610f7060208501610efe565b929592945050506040919091013590565b600060208284031215610f9357600080fd5b5035919050565b600060208284031215610fac57600080fd5b610ef782610efe565b60ff60f81b8816815260e060208201526000610fd460e0830189610e9e565b8281036040840152610fe68189610e9e565b606084018890526001600160a01b038716608085015260a0840186905283810360c08501528451808252602080870193509091019060005b8181101561103c57835183526020938401939092019160010161101e565b50909b9a5050505050505050505050565b600080600080600080600060e0888a03121561106857600080fd5b61107188610efe565b965061107f60208901610efe565b95506040880135945060608801359350608088013560ff811681146110a357600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080604083850312156110d357600080fd5b6110dc83610efe565b91506110ea60208401610efe565b90509250929050565b600181811c9082168061110757607f821691505b60208210810361112757634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156103b857634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fdfea2646970667358221220c857784d74f63ba820553e29e4c29834a14d5a7e76128451664dfcb0b8d78d4264736f6c634300081e0033";
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
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address"
        }
      ],
      name: "AccountLocked",
      type: "error"
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
      inputs: [
        {
          internalType: "uint48",
          name: "deadline",
          type: "uint48"
        }
      ],
      name: "LockedExpiredSignature",
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
      name: "LockedInvalidSigner",
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
          internalType: "uint48",
          name: "lockUntil",
          type: "uint48"
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
          name: "lockBy",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint48",
          name: "lockUntil",
          type: "uint48"
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
      inputs: [],
      name: "LOCK_TYPEHASH",
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
          internalType: "uint48",
          name: "until",
          type: "uint48"
        },
        {
          internalType: "bytes",
          name: "",
          type: "bytes"
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
          name: "lockBy",
          type: "address"
        },
        {
          internalType: "uint48",
          name: "lockUntil",
          type: "uint48"
        },
        {
          internalType: "uint48",
          name: "deadline",
          type: "uint48"
        },
        {
          internalType: "bytes",
          name: "signature",
          type: "bytes"
        },
        {
          internalType: "bytes",
          name: "",
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
          name: "owner",
          type: "address"
        }
      ],
      name: "lockedBalance",
      outputs: [
        {
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
          internalType: "uint256",
          name: "until",
          type: "uint256"
        }
      ],
      name: "lockedBalanceUntil",
      outputs: [
        {
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
      name: "lockedUntil",
      outputs: [
        {
          internalType: "uint48",
          name: "",
          type: "uint48"
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
  const _bytecode$2 = "0x6080604052348015600f57600080fd5b506016601a565b60ca565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff161560695760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b039081161460c75780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b6127ef806100d96000396000f3fe608060405234801561001057600080fd5b506004361061028a5760003560e01c806394bf804d1161015c578063c63d75b6116100ce578063ef8b30f711610087578063ef8b30f7146102e2578063f106845414610592578063f3738764146105ba578063f5eb42dc146105cd578063f7c618c1146105e0578063f97d3d07146105f357600080fd5b8063c63d75b6146103d1578063c6e6f592146102e2578063ce96cb7714610546578063d505accf14610559578063d905777e1461056c578063dd62ed3e1461057f57600080fd5b8063a9059cbb11610120578063a9059cbb146104d3578063b2924620146104e6578063b3d7f6b9146102e2578063b460af941461050d578063ba08765214610520578063c60411221461053357600080fd5b806394bf804d1461046857806395d89b411461047b5780639ae697bf146104835780639bc289f1146104965780639fc8ae6d146104c057600080fd5b80633644e515116102005780636bcfdc34116101b95780636bcfdc34146103f95780636e553f651461040157806370a08231146104145780637ecebe001461042757806384b0196e1461043a5780638c7ab1d71461045557600080fd5b80633644e51514610384578063367f0b301461038c57806338d52e0f1461039f578063402d267d146103d15780634a4fbeec146103e65780634cdad506146102e257600080fd5b80630a28a477116102525780630a28a477146102e257806318160ddd146103085780631b96b2f91461032f57806323b872dd1461034457806327f2a1ae14610357578063313ce5671461036a57600080fd5b806301e1d1141461028f57806301ffc9a7146102aa57806306fdde03146102cd57806307a2d13a146102e2578063095ea7b3146102f5575b600080fd5b610297610606565b6040519081526020015b60405180910390f35b6102bd6102b8366004611fbd565b610635565b60405190151581526020016102a1565b6102d561066c565b6040516102a19190612037565b6102976102f036600461204a565b610715565b6102bd61030336600461207f565b61071d565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace0254610297565b61034261033d36600461207f565b610735565b005b6102bd6103523660046120a9565b610795565b6103426103653660046121c1565b6107b9565b610372610929565b60405160ff90911681526020016102a1565b610297610933565b61034261039a36600461226b565b61093d565b60008051602061279a833981519152546001600160a01b03165b6040516001600160a01b0390911681526020016102a1565b6102976103df3660046122c8565b5060001990565b6102bd6103f43660046122c8565b610ba5565b6102bd610bb1565b61029761040f3660046122e3565b610bee565b6102976104223660046122c8565b610c14565b6102976104353660046122c8565b610cbe565b610442610cc9565b6040516102a1979695949392919061230f565b6000546103b9906001600160a01b031681565b6102976104763660046122e3565b610d75565b6102d5610d93565b6102976104913660046122c8565b610dd2565b6104a96104a43660046122c8565b610df1565b60405165ffffffffffff90911681526020016102a1565b6103426104ce36600461207f565b610e33565b6102bd6104e136600461207f565b610e8a565b6102977f017c8ff5fcb79b926e5568e4aaadf8e98192f7a5f63a4c18e3e6686c1212b6da81565b61029761051b3660046123a7565b610e98565b61029761052e3660046123a7565b610ef0565b6103426105413660046123e3565b610f3f565b6102976105543660046122c8565b610f49565b610342610567366004612431565b610f5a565b61029761057a3660046122c8565b611076565b61029761058d3660046124a4565b611081565b6000546105a790600160a01b900461ffff1681565b60405161ffff90911681526020016102a1565b6102976105c836600461207f565b6110cb565b6102976105db3660046122c8565b6110eb565b6001546103b9906001600160a01b031681565b6102bd61060136600461207f565b6110f6565b60006106307f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace025490565b905090565b60006001600160e01b03198216630579eb7360e41b148061066657506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600060008051602061275a8339815191525b9050806003018054610691906124ce565b80601f01602080910402602001604051908101604052809291908181526020018280546106bd906124ce565b801561070a5780601f106106df5761010080835404028352916020019161070a565b820191906000526020600020905b8154815290600101906020018083116106ed57829003601f168201915b505050505091505090565b600081610666565b60003361072b818585611113565b5060019392505050565b6000546001600160a01b031633146107875760405162461bcd60e51b815260206004820152601060248201526f13d3931657d35054d5115497d413d3d360821b60448201526064015b60405180910390fd5b6107918282611125565b5050565b6000336107a385828561115b565b6107ae8585856111af565b506001949350505050565b8265ffffffffffff164211156107ec57604051637ae96d3560e01b815265ffffffffffff8416600482015260240161077e565b600061088461087e7f017c8ff5fcb79b926e5568e4aaadf8e98192f7a5f63a4c18e3e6686c1212b6da8989896108218361120e565b6040805160208101969096526001600160a01b039485169086015291909216606084015265ffffffffffff918216608084015260a0830152871660c082015260e00160405160208183030381529060405280519060200120611250565b8461127d565b9050866001600160a01b0316816001600160a01b0316146108cb5760405163e75a9bdf60e01b81526001600160a01b0380831660048301528816602482015260440161077e565b60405165ffffffffffff861681526001600160a01b0380881691908916907fe7da15c886b4d64b28c9c88081d1878f11a80706e0a90a8300eb12bd7dd2f6ea9060200160405180910390a361092087866112a7565b50505050505050565b600061063061135d565b600061063061138f565b6000610947611399565b805490915060ff600160401b820416159067ffffffffffffffff1660008115801561096f5750825b905060008267ffffffffffffffff16600114801561098c5750303b155b90508115801561099a575080155b156109b85760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff1916600117855583156109e257845460ff60401b1916600160401b1785555b600080546001600160a01b038b81166001600160b01b031990921691909117600160a01b61ffff8c1602178255600180546001600160a01b031916898316179055604080516395d89b4160e01b81529051918a16916395d89b419160048082019286929091908290030181865afa158015610a61573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a899190810190612508565b90506000610ab660405180604001604052806007815260200166029ba30b5b2b2160cd1b815250836113c2565b90506000610ade604051806040016040528060028152602001611cdd60f21b815250846113c2565b9050610aea82826113ee565b610af382611400565b610afc8a61142e565b604080516001600160a01b038e8116825261ffff8e1660208301528c8116828401528b16606082015290517f198ee228dde3a8038dd17502f21ee11bfa7273aea909a6ecaf1768195a6bea889181900360800190a15050508315610b9a57845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050505050565b600061066682426110f6565b6001546000906001600160a01b0316610bdf60008051602061279a833981519152546001600160a01b031690565b6001600160a01b031614905090565b60006000196000610bfe85610715565b9050610c0c3385878461143f565b949350505050565b600080610c20836114f4565b9050610c2a610bb1565b15610666576000546040516303a41f6360e61b8152600160a01b820461ffff1660048201526001600160a01b0385811660248301529091169063e907d8c090604401602060405180830381865afa158015610c89573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cad9190612597565b610cb790826125c6565b9392505050565b600061066682611527565b6000606080828080838160008051602061277a8339815191528054909150158015610cf657506001810154155b610d3a5760405162461bcd60e51b81526020600482015260156024820152741152540dcc4c8e88155b9a5b9a5d1a585b1a5e9959605a1b604482015260640161077e565b610d42611550565b610d4a61158f565b60408051600080825260208201909252600f60f81b9c939b5091995046985030975095509350915050565b60006000196000610d8585610715565b9050610c0c3385838861143f565b7f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace04805460609160008051602061275a83398151915291610691906124ce565b6000610ddd82610ba5565b610de8576000610666565b61066682610c14565b6001600160a01b031660009081527f0f0dff1d6914bba9be37c82e8318527ba5ab0fb58046a830c549113041588900602052604090205465ffffffffffff1690565b6000546001600160a01b03163314610e805760405162461bcd60e51b815260206004820152601060248201526f13d3931657d35054d5115497d413d3d360821b604482015260640161077e565b61079182826115a7565b60003361072b8185856111af565b600080610ea483610f49565b905080851115610ecd57828582604051633fa733bb60e21b815260040161077e93929190612576565b6000610ed886610715565b9050610ee733868689856115dd565b95945050505050565b600080610efc83611076565b905080851115610f2557828582604051632e52afbb60e21b815260040161077e93929190612576565b6000610f3086610715565b9050610ee7338686848a6115dd565b61079133836112a7565b6000610666610f5783610c14565b90565b83421115610f7e5760405163313c898160e11b81526004810185905260240161077e565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610fad8c61120e565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061100882611250565b90506000611018828787876116dc565b9050896001600160a01b0316816001600160a01b03161461105f576040516325c0072360e11b81526001600160a01b0380831660048301528b16602482015260440161077e565b61106a8a8a8a611113565b50505050505050505050565b600061066682610c14565b6001600160a01b0391821660009081527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace016020908152604080832093909416825291909152205490565b60006110d783836110f6565b6110e2576000610cb7565b610cb783610c14565b6000610666826114f4565b60008161110284610df1565b65ffffffffffff1610159392505050565b611120838383600161170a565b505050565b6001600160a01b03821661114f5760405163ec442f0560e01b81526000600482015260240161077e565b610791600083836117f2565b60006111678484611081565b90506000198110156111a9578181101561119a57828183604051637dc7a0d960e11b815260040161077e93929190612576565b6111a98484848403600061170a565b50505050565b6001600160a01b0383166111d957604051634b637e8f60e11b81526000600482015260240161077e565b6001600160a01b0382166112035760405163ec442f0560e01b81526000600482015260240161077e565b6111208383836117f2565b6001600160a01b031660009081527f5ab42ced628888259c08ac98db1eb0cf702fc1501344311d8b100cd1bfe4bb006020526040902080546001810190915590565b600061066661125d61138f565b8360405161190160f01b8152600281019290925260228201526042902090565b60008060008061128d8686611918565b92509250925061129d8282611965565b5090949350505050565b6001600160a01b03821660009081527f0f0dff1d6914bba9be37c82e8318527ba5ab0fb58046a830c549113041588900602081905260409091205465ffffffffffff83811691161015611120576001600160a01b03831660008181526020838152604091829020805465ffffffffffff191665ffffffffffff871690811790915591519182527f5d99a0a6b184924ae2b454dc2d6008e100891227e673b67019d33fec7bf1155c910160405180910390a2505050565b60008060008051602061279a8339815191529050600081546113899190600160a01b900460ff166125d9565b91505090565b6000610630611a1e565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00610666565b606082826040516020016113d79291906125f2565b604051602081830303815290604052905092915050565b6113f6611a92565b6107918282611ab9565b611408611a92565b61142b81604051806040016040528060018152602001603160f81b815250611b0a565b50565b611436611a92565b61142b81611b6b565b60005460405163077ba79560e41b81526001600160a01b03858116600483015260248201859052909116906377ba795090604401600060405180830381600087803b15801561148d57600080fd5b505af11580156114a1573d6000803e3d6000fd5b505060408051858152602081018590526001600160a01b038088169450881692507fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d791015b60405180910390a350505050565b60008060008051602061275a8339815191525b6001600160a01b0390931660009081526020939093525050604090205490565b6000807f5ab42ced628888259c08ac98db1eb0cf702fc1501344311d8b100cd1bfe4bb00611507565b7fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d102805460609160008051602061277a83398151915291610691906124ce565b6060600060008051602061277a833981519152610680565b6001600160a01b0382166115d157604051634b637e8f60e11b81526000600482015260240161077e565b610791826000836117f2565b60006115e8846110eb565b905060006115f4610bb1565b80156115ff57508183115b611609578261160b565b815b60005460405163db2aa12760e01b81526001600160a01b0388811660048301526024820184905292935091169063db2aa12790604401600060405180830381600087803b15801561165b57600080fd5b505af115801561166f573d6000803e3d6000fd5b50505050846001600160a01b0316866001600160a01b0316886001600160a01b03167ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db87876040516116cb929190918252602082015260400190565b60405180910390a450505050505050565b6000806000806116ee88888888611bdd565b9250925092506116fe8282611965565b50909695505050505050565b60008051602061275a8339815191526001600160a01b0385166117435760405163e602df0560e01b81526000600482015260240161077e565b6001600160a01b03841661176d57604051634a1406b160e11b81526000600482015260240161077e565b6001600160a01b038086166000908152600183016020908152604080832093881683529290522083905581156117eb57836001600160a01b0316856001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925856040516117e291815260200190565b60405180910390a35b5050505050565b6117fa610bb1565b801561180e57506001600160a01b03831615155b156118735760005460405163cd09525d60e01b81526001600160a01b0385811660048301529091169063cd09525d90602401600060405180830381600087803b15801561185a57600080fd5b505af115801561186e573d6000803e3d6000fd5b505050505b61187e838383611cac565b6001600160a01b0383161580159061189e57506001600160a01b03821615155b80156118a957508015155b1561112057600054604051630325c61f60e31b81526001600160a01b0385811660048301528481166024830152604482018490529091169063192e30f890606401600060405180830381600087803b15801561190457600080fd5b505af1158015610920573d6000803e3d6000fd5b600080600083516041036119525760208401516040850151606086015160001a61194488828585611bdd565b95509550955050505061195e565b50508151600091506002905b9250925092565b600082600381111561197957611979612621565b03611982575050565b600182600381111561199657611996612621565b036119b45760405163f645eedf60e01b815260040160405180910390fd5b60028260038111156119c8576119c8612621565b036119e95760405163fce698f760e01b81526004810182905260240161077e565b60038260038111156119fd576119fd612621565b03610791576040516335e2f38360e21b81526004810182905260240161077e565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f611a49611cfc565b611a51611d66565b60408051602081019490945283019190915260608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b611a9a611daa565b611ab757604051631afcd79f60e31b815260040160405180910390fd5b565b611ac1611a92565b60008051602061275a8339815191527f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace03611afb848261267e565b50600481016111a9838261267e565b611b12611a92565b60008051602061277a8339815191527fa16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d102611b4c848261267e565b5060038101611b5b838261267e565b5060008082556001909101555050565b611b73611a92565b60008051602061279a833981519152600080611b8e84611dc4565b9150915081611b9e576012611ba0565b805b83546001600160a81b031916600160a01b60ff92909216919091026001600160a01b031916176001600160a01b0394909416939093179091555050565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115611c185750600091506003905082611ca2565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015611c6c573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611c9857506000925060019150829050611ca2565b9250600091508190505b9450945094915050565b6001600160a01b03831615801590611cc85750611cc883610ba5565b15611cf15760405163078be06d60e41b81526001600160a01b038416600482015260240161077e565b611120838383611ea0565b600060008051602061277a83398151915281611d16611550565b805190915015611d2e57805160209091012092915050565b81548015611d3d579392505050565b7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470935050505090565b600060008051602061277a83398151915281611d8061158f565b805190915015611d9857805160209091012092915050565b60018201548015611d3d579392505050565b6000611db4611399565b54600160401b900460ff16919050565b60408051600481526024810182526020810180516001600160e01b031663313ce56760e01b17905290516000918291829182916001600160a01b03871691611e0b9161273d565b600060405180830381855afa9150503d8060008114611e46576040519150601f19603f3d011682016040523d82523d6000602084013e611e4b565b606091505b5091509150818015611e5f57506020815110155b15611e9357600081806020019051810190611e7a9190612597565b905060ff8111611e91576001969095509350505050565b505b5060009485945092505050565b60008051602061275a8339815191526001600160a01b038416611edc5781816002016000828254611ed191906125c6565b90915550611f3b9050565b6001600160a01b03841660009081526020829052604090205482811015611f1c5784818460405163391434e360e21b815260040161077e93929190612576565b6001600160a01b03851660009081526020839052604090209083900390555b6001600160a01b038316611f59576002810180548390039055611f78565b6001600160a01b03831660009081526020829052604090208054830190555b826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516114e691815260200190565b600060208284031215611fcf57600080fd5b81356001600160e01b031981168114610cb757600080fd5b60005b83811015612002578181015183820152602001611fea565b50506000910152565b60008151808452612023816020860160208601611fe7565b601f01601f19169290920160200192915050565b602081526000610cb7602083018461200b565b60006020828403121561205c57600080fd5b5035919050565b80356001600160a01b038116811461207a57600080fd5b919050565b6000806040838503121561209257600080fd5b61209b83612063565b946020939093013593505050565b6000806000606084860312156120be57600080fd5b6120c784612063565b92506120d560208501612063565b929592945050506040919091013590565b803565ffffffffffff8116811461207a57600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561213b5761213b6120fc565b604052919050565b600067ffffffffffffffff82111561215d5761215d6120fc565b50601f01601f191660200190565b600082601f83011261217c57600080fd5b813561218f61218a82612143565b612112565b8181528460208386010111156121a457600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060008060c087890312156121da57600080fd5b6121e387612063565b95506121f160208801612063565b94506121ff604088016120e6565b935061220d606088016120e6565b9250608087013567ffffffffffffffff81111561222957600080fd5b61223589828a0161216b565b92505060a087013567ffffffffffffffff81111561225257600080fd5b61225e89828a0161216b565b9150509295509295509295565b6000806000806080858703121561228157600080fd5b61228a85612063565b9350602085013561ffff811681146122a157600080fd5b92506122af60408601612063565b91506122bd60608601612063565b905092959194509250565b6000602082840312156122da57600080fd5b610cb782612063565b600080604083850312156122f657600080fd5b8235915061230660208401612063565b90509250929050565b60ff60f81b8816815260e06020820152600061232e60e083018961200b565b8281036040840152612340818961200b565b606084018890526001600160a01b038716608085015260a0840186905283810360c08501528451808252602080870193509091019060005b81811015612396578351835260209384019390920191600101612378565b50909b9a5050505050505050505050565b6000806000606084860312156123bc57600080fd5b833592506123cc60208501612063565b91506123da60408501612063565b90509250925092565b600080604083850312156123f657600080fd5b6123ff836120e6565b9150602083013567ffffffffffffffff81111561241b57600080fd5b6124278582860161216b565b9150509250929050565b600080600080600080600060e0888a03121561244c57600080fd5b61245588612063565b965061246360208901612063565b95506040880135945060608801359350608088013560ff8116811461248757600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080604083850312156124b757600080fd5b6124c083612063565b915061230660208401612063565b600181811c908216806124e257607f821691505b60208210810361250257634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561251a57600080fd5b815167ffffffffffffffff81111561253157600080fd5b8201601f8101841361254257600080fd5b805161255061218a82612143565b81815285602083850101111561256557600080fd5b610ee7826020830160208601611fe7565b6001600160a01b039390931683526020830191909152604082015260600190565b6000602082840312156125a957600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610666576106666125b0565b60ff8181168382160190811115610666576106666125b0565b60008351612604818460208801611fe7565b835190830190612618818360208801611fe7565b01949350505050565b634e487b7160e01b600052602160045260246000fd5b601f82111561112057806000526020600020601f840160051c8101602085101561265e5750805b601f840160051c820191505b818110156117eb576000815560010161266a565b815167ffffffffffffffff811115612698576126986120fc565b6126ac816126a684546124ce565b84612637565b6020601f8211600181146126e057600083156126c85750848201515b600019600385901b1c1916600184901b1784556117eb565b600084815260208120601f198516915b8281101561271057878501518255602094850194600190920191016126f0565b508482101561272e5786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b6000825161274f818460208701611fe7565b919091019291505056fe52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace00a16a46d94261c7517cc8ff89f61c0ce93598e3c849801011dee649a6a557d1000773e532dfede91f04b12a73d3d2acd361424f41f76b4fb79f090161e36b4e00a26469706673582212202b39e3fce81645331490047367cd606c486b8d0cd0608b947131a18ba0e611ae64736f6c634300081e0033";
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
  const _bytecode$1 = "0x61016060405234801561001157600080fd5b506040518060400160405280600d81526020016c2bb930b83832b21022ba3432b960991b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600d81526020016c2bb930b83832b21022ba3432b960991b815250604051806040016040528060048152602001630ae8aa8960e31b81525081600390816100a59190610286565b5060046100b28282610286565b506100c29150839050600561016d565b610120526100d181600661016d565b61014052815160208084019190912060e052815190820120610100524660a05261015e60e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c052506103b6565b600060208351101561018957610182836101a0565b905061019a565b816101948482610286565b5060ff90505b92915050565b600080829050601f815111156101d4578260405163305a27a960e01b81526004016101cb9190610344565b60405180910390fd5b80516101df82610392565b179392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061021157607f821691505b60208210810361023157634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561028157806000526020600020601f840160051c8101602085101561025e5750805b601f840160051c820191505b8181101561027e576000815560010161026a565b50505b505050565b81516001600160401b0381111561029f5761029f6101e7565b6102b3816102ad84546101fd565b84610237565b6020601f8211600181146102e757600083156102cf5750848201515b600019600385901b1c1916600184901b17845561027e565b600084815260208120601f198516915b8281101561031757878501518255602094850194600190920191016102f7565b50848210156103355786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b602081526000825180602084015260005b818110156103725760208186018101516040868401015201610355565b506000604082850101526040601f19601f83011684010191505092915050565b805160208083015191908110156102315760001960209190910360031b1b16919050565b60805160a05160c05160e051610100516101205161014051611131610410600039600061091b015260006108ee015260006108960152600061086e015260006107c9015260006107f30152600061081d01526111316000f3fe6080604052600436106100ec5760003560e01c806370a082311161008a578063a9059cbb11610059578063a9059cbb1461027e578063d0e30db01461029e578063d505accf146102a6578063dd62ed3e146102c657600080fd5b806370a08231146101eb5780637ecebe001461022157806384b0196e1461024157806395d89b411461026957600080fd5b806323b872dd116100c657806323b872dd1461017a5780632e1a7d4d1461019a578063313ce567146101ba5780633644e515146101d657600080fd5b806306fdde0314610100578063095ea7b31461012b57806318160ddd1461015b57600080fd5b366100fb576100f961030c565b005b600080fd5b34801561010c57600080fd5b5061011561034d565b6040516101229190610e7b565b60405180910390f35b34801561013757600080fd5b5061014b610146366004610eb1565b6103df565b6040519015158152602001610122565b34801561016757600080fd5b506002545b604051908152602001610122565b34801561018657600080fd5b5061014b610195366004610edb565b6103f9565b3480156101a657600080fd5b506100f96101b5366004610f18565b61041d565b3480156101c657600080fd5b5060405160128152602001610122565b3480156101e257600080fd5b5061016c61048d565b3480156101f757600080fd5b5061016c610206366004610f31565b6001600160a01b031660009081526020819052604090205490565b34801561022d57600080fd5b5061016c61023c366004610f31565b61049c565b34801561024d57600080fd5b506102566104ba565b6040516101229796959493929190610f4c565b34801561027557600080fd5b50610115610500565b34801561028a57600080fd5b5061014b610299366004610eb1565b61050f565b6100f961030c565b3480156102b257600080fd5b506100f96102c1366004610fe4565b61051d565b3480156102d257600080fd5b5061016c6102e1366004611057565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610316333461065c565b60405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b60606003805461035c9061108a565b80601f01602080910402602001604051908101604052809291908181526020018280546103889061108a565b80156103d55780601f106103aa576101008083540402835291602001916103d5565b820191906000526020600020905b8154815290600101906020018083116103b857829003601f168201915b5050505050905090565b6000336103ed818585610696565b60019150505b92915050565b6000336104078582856106a8565b610412858585610727565b506001949350505050565b6104273382610786565b604051339082156108fc029083906000818181858888f19350505050158015610454573d6000803e3d6000fd5b5060405181815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a250565b60006104976107bc565b905090565b6001600160a01b0381166000908152600760205260408120546103f3565b6000606080600080600060606104ce6108e7565b6104d6610914565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b60606004805461035c9061108a565b6000336103ed818585610727565b834211156105465760405163313c898160e11b8152600481018590526024015b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886105938c6001600160a01b0316600090815260076020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006105ee82610941565b905060006105fe8287878761096e565b9050896001600160a01b0316816001600160a01b031614610645576040516325c0072360e11b81526001600160a01b0380831660048301528b16602482015260440161053d565b6106508a8a8a610696565b50505050505050505050565b6001600160a01b0382166106865760405163ec442f0560e01b81526000600482015260240161053d565b6106926000838361099c565b5050565b6106a38383836001610ac6565b505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811015610721578181101561071257604051637dc7a0d960e11b81526001600160a01b0384166004820152602481018290526044810183905260640161053d565b61072184848484036000610ac6565b50505050565b6001600160a01b03831661075157604051634b637e8f60e11b81526000600482015260240161053d565b6001600160a01b03821661077b5760405163ec442f0560e01b81526000600482015260240161053d565b6106a383838361099c565b6001600160a01b0382166107b057604051634b637e8f60e11b81526000600482015260240161053d565b6106928260008361099c565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561081557507f000000000000000000000000000000000000000000000000000000000000000046145b1561083f57507f000000000000000000000000000000000000000000000000000000000000000090565b610497604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60606104977f00000000000000000000000000000000000000000000000000000000000000006005610b9b565b60606104977f00000000000000000000000000000000000000000000000000000000000000006006610b9b565b60006103f361094e6107bc565b8360405161190160f01b8152600281019290925260228201526042902090565b60008060008061098088888888610c46565b9250925092506109908282610d15565b50909695505050505050565b6001600160a01b0383166109c75780600260008282546109bc91906110c4565b90915550610a399050565b6001600160a01b03831660009081526020819052604090205481811015610a1a5760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161053d565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610a5557600280548290039055610a74565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ab991815260200190565b60405180910390a3505050565b6001600160a01b038416610af05760405163e602df0560e01b81526000600482015260240161053d565b6001600160a01b038316610b1a57604051634a1406b160e11b81526000600482015260240161053d565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561072157826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610b8d91815260200190565b60405180910390a350505050565b606060ff8314610bb557610bae83610dce565b90506103f3565b818054610bc19061108a565b80601f0160208091040260200160405190810160405280929190818152602001828054610bed9061108a565b8015610c3a5780601f10610c0f57610100808354040283529160200191610c3a565b820191906000526020600020905b815481529060010190602001808311610c1d57829003601f168201915b505050505090506103f3565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115610c815750600091506003905082610d0b565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015610cd5573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610d0157506000925060019150829050610d0b565b9250600091508190505b9450945094915050565b6000826003811115610d2957610d296110e5565b03610d32575050565b6001826003811115610d4657610d466110e5565b03610d645760405163f645eedf60e01b815260040160405180910390fd5b6002826003811115610d7857610d786110e5565b03610d995760405163fce698f760e01b81526004810182905260240161053d565b6003826003811115610dad57610dad6110e5565b03610692576040516335e2f38360e21b81526004810182905260240161053d565b60606000610ddb83610e0d565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600060ff8216601f8111156103f357604051632cd44ac360e21b815260040160405180910390fd5b6000815180845260005b81811015610e5b57602081850181015186830182015201610e3f565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610e8e6020830184610e35565b9392505050565b80356001600160a01b0381168114610eac57600080fd5b919050565b60008060408385031215610ec457600080fd5b610ecd83610e95565b946020939093013593505050565b600080600060608486031215610ef057600080fd5b610ef984610e95565b9250610f0760208501610e95565b929592945050506040919091013590565b600060208284031215610f2a57600080fd5b5035919050565b600060208284031215610f4357600080fd5b610e8e82610e95565b60ff60f81b8816815260e060208201526000610f6b60e0830189610e35565b8281036040840152610f7d8189610e35565b606084018890526001600160a01b038716608085015260a0840186905283810360c08501528451808252602080870193509091019060005b81811015610fd3578351835260209384019390920191600101610fb5565b50909b9a5050505050505050505050565b600080600080600080600060e0888a031215610fff57600080fd5b61100888610e95565b965061101660208901610e95565b95506040880135945060608801359350608088013560ff8116811461103a57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561106a57600080fd5b61107383610e95565b915061108160208401610e95565b90509250929050565b600181811c9082168061109e57607f821691505b6020821081036110be57634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156103f357634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fdfea26469706673582212200f42a57cc75ffd94c87c740ae594e4f91d016db4798ab3ba8b5db0435529ae2264736f6c634300081e0033";
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
  const _bytecode = "0x61016060405234801561001157600080fd5b5060405161170438038061170483398101604081905261003091610370565b6040518060400160405280600d81526020016c2bb930b83832b21022ba3432b960991b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600d81526020016c2bb930b83832b21022ba3432b960991b815250604051806040016040528060048152602001630ae8aa8960e31b81525081600390816100c39190610428565b5060046100d08282610428565b506100e091508390506005610196565b610120526100ef816006610196565b61014052815160208084019190912060e052815190820120610100524660a05261017c60e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c0525061019033826101c9565b50610579565b60006020835110156101b2576101ab83610208565b90506101c3565b816101bd8482610428565b5060ff90505b92915050565b6001600160a01b0382166101f85760405163ec442f0560e01b8152600060048201526024015b60405180910390fd5b61020460008383610246565b5050565b600080829050601f81511115610233578260405163305a27a960e01b81526004016101ef91906104e6565b805161023e82610534565b179392505050565b6001600160a01b0383166102715780600260008282546102669190610558565b909155506102e39050565b6001600160a01b038316600090815260208190526040902054818110156102c45760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016101ef565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166102ff5760028054829003905561031e565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161036391815260200190565b60405180910390a3505050565b60006020828403121561038257600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806103b357607f821691505b6020821081036103d357634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561042357806000526020600020601f840160051c810160208510156104005750805b601f840160051c820191505b81811015610420576000815560010161040c565b50505b505050565b81516001600160401b0381111561044157610441610389565b6104558161044f845461039f565b846103d9565b6020601f82116001811461048957600083156104715750848201515b600019600385901b1c1916600184901b178455610420565b600084815260208120601f198516915b828110156104b95787850151825560209485019460019092019101610499565b50848210156104d75786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b602081526000825180602084015260005b8181101561051457602081860181015160408684010152016104f7565b506000604082850101526040601f19601f83011684010191505092915050565b805160208083015191908110156103d35760001960209190910360031b1b16919050565b808201808211156101c357634e487b7160e01b600052601160045260246000fd5b60805160a05160c05160e0516101005161012051610140516111316105d3600039600061091b015260006108ee015260006108960152600061086e015260006107c9015260006107f30152600061081d01526111316000f3fe6080604052600436106100ec5760003560e01c806370a082311161008a578063a9059cbb11610059578063a9059cbb1461027e578063d0e30db01461029e578063d505accf146102a6578063dd62ed3e146102c657600080fd5b806370a08231146101eb5780637ecebe001461022157806384b0196e1461024157806395d89b411461026957600080fd5b806323b872dd116100c657806323b872dd1461017a5780632e1a7d4d1461019a578063313ce567146101ba5780633644e515146101d657600080fd5b806306fdde0314610100578063095ea7b31461012b57806318160ddd1461015b57600080fd5b366100fb576100f961030c565b005b600080fd5b34801561010c57600080fd5b5061011561034d565b6040516101229190610e7b565b60405180910390f35b34801561013757600080fd5b5061014b610146366004610eb1565b6103df565b6040519015158152602001610122565b34801561016757600080fd5b506002545b604051908152602001610122565b34801561018657600080fd5b5061014b610195366004610edb565b6103f9565b3480156101a657600080fd5b506100f96101b5366004610f18565b61041d565b3480156101c657600080fd5b5060405160128152602001610122565b3480156101e257600080fd5b5061016c61048d565b3480156101f757600080fd5b5061016c610206366004610f31565b6001600160a01b031660009081526020819052604090205490565b34801561022d57600080fd5b5061016c61023c366004610f31565b61049c565b34801561024d57600080fd5b506102566104ba565b6040516101229796959493929190610f4c565b34801561027557600080fd5b50610115610500565b34801561028a57600080fd5b5061014b610299366004610eb1565b61050f565b6100f961030c565b3480156102b257600080fd5b506100f96102c1366004610fe4565b61051d565b3480156102d257600080fd5b5061016c6102e1366004611057565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610316333461065c565b60405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b60606003805461035c9061108a565b80601f01602080910402602001604051908101604052809291908181526020018280546103889061108a565b80156103d55780601f106103aa576101008083540402835291602001916103d5565b820191906000526020600020905b8154815290600101906020018083116103b857829003601f168201915b5050505050905090565b6000336103ed818585610696565b60019150505b92915050565b6000336104078582856106a8565b610412858585610727565b506001949350505050565b6104273382610786565b604051339082156108fc029083906000818181858888f19350505050158015610454573d6000803e3d6000fd5b5060405181815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a250565b60006104976107bc565b905090565b6001600160a01b0381166000908152600760205260408120546103f3565b6000606080600080600060606104ce6108e7565b6104d6610914565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b60606004805461035c9061108a565b6000336103ed818585610727565b834211156105465760405163313c898160e11b8152600481018590526024015b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886105938c6001600160a01b0316600090815260076020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006105ee82610941565b905060006105fe8287878761096e565b9050896001600160a01b0316816001600160a01b031614610645576040516325c0072360e11b81526001600160a01b0380831660048301528b16602482015260440161053d565b6106508a8a8a610696565b50505050505050505050565b6001600160a01b0382166106865760405163ec442f0560e01b81526000600482015260240161053d565b6106926000838361099c565b5050565b6106a38383836001610ac6565b505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811015610721578181101561071257604051637dc7a0d960e11b81526001600160a01b0384166004820152602481018290526044810183905260640161053d565b61072184848484036000610ac6565b50505050565b6001600160a01b03831661075157604051634b637e8f60e11b81526000600482015260240161053d565b6001600160a01b03821661077b5760405163ec442f0560e01b81526000600482015260240161053d565b6106a383838361099c565b6001600160a01b0382166107b057604051634b637e8f60e11b81526000600482015260240161053d565b6106928260008361099c565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561081557507f000000000000000000000000000000000000000000000000000000000000000046145b1561083f57507f000000000000000000000000000000000000000000000000000000000000000090565b610497604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60606104977f00000000000000000000000000000000000000000000000000000000000000006005610b9b565b60606104977f00000000000000000000000000000000000000000000000000000000000000006006610b9b565b60006103f361094e6107bc565b8360405161190160f01b8152600281019290925260228201526042902090565b60008060008061098088888888610c46565b9250925092506109908282610d15565b50909695505050505050565b6001600160a01b0383166109c75780600260008282546109bc91906110c4565b90915550610a399050565b6001600160a01b03831660009081526020819052604090205481811015610a1a5760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161053d565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610a5557600280548290039055610a74565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ab991815260200190565b60405180910390a3505050565b6001600160a01b038416610af05760405163e602df0560e01b81526000600482015260240161053d565b6001600160a01b038316610b1a57604051634a1406b160e11b81526000600482015260240161053d565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561072157826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610b8d91815260200190565b60405180910390a350505050565b606060ff8314610bb557610bae83610dce565b90506103f3565b818054610bc19061108a565b80601f0160208091040260200160405190810160405280929190818152602001828054610bed9061108a565b8015610c3a5780601f10610c0f57610100808354040283529160200191610c3a565b820191906000526020600020905b815481529060010190602001808311610c1d57829003601f168201915b505050505090506103f3565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115610c815750600091506003905082610d0b565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015610cd5573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610d0157506000925060019150829050610d0b565b9250600091508190505b9450945094915050565b6000826003811115610d2957610d296110e5565b03610d32575050565b6001826003811115610d4657610d466110e5565b03610d645760405163f645eedf60e01b815260040160405180910390fd5b6002826003811115610d7857610d786110e5565b03610d995760405163fce698f760e01b81526004810182905260240161053d565b6003826003811115610dad57610dad6110e5565b03610692576040516335e2f38360e21b81526004810182905260240161053d565b60606000610ddb83610e0d565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600060ff8216601f8111156103f357604051632cd44ac360e21b815260040160405180910390fd5b6000815180845260005b81811015610e5b57602081850181015186830182015201610e3f565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610e8e6020830184610e35565b9392505050565b80356001600160a01b0381168114610eac57600080fd5b919050565b60008060408385031215610ec457600080fd5b610ecd83610e95565b946020939093013593505050565b600080600060608486031215610ef057600080fd5b610ef984610e95565b9250610f0760208501610e95565b929592945050506040919091013590565b600060208284031215610f2a57600080fd5b5035919050565b600060208284031215610f4357600080fd5b610e8e82610e95565b60ff60f81b8816815260e060208201526000610f6b60e0830189610e35565b8281036040840152610f7d8189610e35565b606084018890526001600160a01b038716608085015260a0840186905283810360c08501528451808252602080870193509091019060005b81811015610fd3578351835260209384019390920191600101610fb5565b50909b9a5050505050505050505050565b600080600080600080600060e0888a031215610fff57600080fd5b61100888610e95565b965061101660208901610e95565b95506040880135945060608801359350608088013560ff8116811461103a57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561106a57600080fd5b61107383610e95565b915061108160208401610e95565b90509250929050565b600181811c9082168061109e57607f821691505b6020821081036110be57634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156103f357634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fdfea264697066735822122069711c4808d4d5b9c4561e81789e549b3b438034341a0aa76e470ae247647f0064736f6c634300081e0033";
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
    interfaces: index$o,
    libraries: index$j,
    lockSol: index$E,
    oracle: index$f,
    pools: index$b,
    proxy: index$9,
    tokens: index$3
  });

  var index$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    contracts: index$2,
    openzeppelin: index$F
  });

  var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AccessControlEnumerableUpgradeable__factory: AccessControlEnumerableUpgradeable__factory,
    AccessControlUpgradeable__factory: AccessControlUpgradeable__factory,
    Address__factory: Address__factory,
    Clones__factory: Clones__factory,
    ContextUpgradeable__factory: ContextUpgradeable__factory,
    Create2__factory: Create2__factory,
    DataFeed__factory: DataFeed__factory,
    ECDSA__factory: ECDSA__factory,
    EIP712Upgradeable__factory: EIP712Upgradeable__factory,
    EIP712__factory: EIP712__factory,
    ERC165Upgradeable__factory: ERC165Upgradeable__factory,
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
    IAccessControlEnumerable__factory: IAccessControlEnumerable__factory,
    IAccessControl__factory: IAccessControl__factory,
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
    ILockable__factory: ILockable__factory,
    IMasterChef__factory: IMasterChef__factory,
    IMasterPool__factory: IMasterPool__factory,
    IOwnableControl__factory: IOwnableControl__factory,
    IRewardVault__factory: IRewardVault__factory,
    IUniswapV2Factory__factory: IUniswapV2Factory__factory,
    IUniswapV2Pair__factory: IUniswapV2Pair__factory,
    IV2SwapFeed__factory: IV2SwapFeed__factory,
    IWETH__factory: IWETH__factory,
    InitializableProxy__factory: InitializableProxy__factory,
    Initializable__factory: Initializable__factory,
    Lock__factory: Lock__factory,
    Lockable__factory: Lockable__factory,
    MasterChef__factory: MasterChef__factory,
    MasterPool__factory: MasterPool__factory,
    NoncesUpgradeable__factory: NoncesUpgradeable__factory,
    Nonces__factory: Nonces__factory,
    OwnableControl__factory: OwnableControl__factory,
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
      rewardTokenUsd: Number(ethers.formatUnits(rewardTokenUsd, rewardOracleDecimals))
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
        const stakingTokenUsd = Number(ethers.formatUnits(oracleUsd, oracleDecimals));
        const totalStakedBalance = Number(ethers.formatUnits(poolBalance, tokenDecimals));
        const totalStakedUSD = totalStakedBalance * stakingTokenUsd;
        const userTokenBalance = Number(ethers.formatUnits(userBalance, tokenDecimals));
        const userTokenUSD = userTokenBalance * stakingTokenUsd;
        const userStakedBalance = Number(ethers.formatUnits(stakedBalance, tokenDecimals));
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
      const userPendingRewards = Number(ethers.formatUnits(p.pendingRewardsBN, rewardTokenDecimals));
      const userPendingRewardsUSD = userPendingRewards * rewardTokenUsd;
      const rewardsPerSec = Number(ethers.formatUnits(p.rewardsPerSecBN, rewardTokenDecimals));
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

  exports.Networks = Networks;
  exports.SECOND_PER_YEAR = SECOND_PER_YEAR;
  exports.contracts = index;
  exports.findFarmByToken = findFarmByToken;
  exports.getContractConfig = getContractConfig;
  exports.getFarmApr = getFarmApr;
  exports.getFarmStats = getFarmStats;
  exports.getFarms = getFarms;
  exports.getTotalRewards = getTotalRewards;

}));
