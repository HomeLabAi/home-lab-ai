/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Material, MaterialInterface } from "../../contracts/Material";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "verifierAddress",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "data",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "updatedAt",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Material.Verifier",
        name: "verifier",
        type: "tuple",
      },
    ],
    name: "AddedVerifier",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "data",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "paymentToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "bounty",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "updatedAt",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "verifyBy",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "verifiedAt",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Material.Item",
        name: "item",
        type: "tuple",
      },
    ],
    name: "RequestedItem",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "verifierAddress",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "data",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "updatedAt",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Material.Verifier",
        name: "verifier",
        type: "tuple",
      },
    ],
    name: "SetActiveVerifier",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "isPermitted",
        type: "bool",
      },
    ],
    name: "SetPermittedToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "data",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "paymentToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "bounty",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "updatedAt",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "verifyBy",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "verifiedAt",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Material.Item",
        name: "item",
        type: "tuple",
      },
    ],
    name: "UpdatedItem",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "verifierAddress",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "data",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isActive",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "updatedAt",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Material.Verifier",
        name: "verifier",
        type: "tuple",
      },
    ],
    name: "UpdatedVerifier",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "data",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "paymentToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "bounty",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "createdAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "updatedAt",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "verifyBy",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "verifiedAt",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Material.Item",
        name: "item",
        type: "tuple",
      },
    ],
    name: "VerifiedItem",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_data",
        type: "string",
      },
    ],
    name: "addVerifier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "items",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "data",
        type: "string",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "paymentToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "bounty",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "createdAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyBy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "verifiedAt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "permittedTokens",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_data",
        type: "string",
      },
      {
        internalType: "address",
        name: "_paymentToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_bounty",
        type: "uint256",
      },
    ],
    name: "requestItem",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isActive",
        type: "bool",
      },
    ],
    name: "setActiveVerifier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isPermitted",
        type: "bool",
      },
    ],
    name: "setPermittedToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_data",
        type: "string",
      },
    ],
    name: "updateItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_data",
        type: "string",
      },
    ],
    name: "updateVerifier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "verifiers",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "data",
        type: "string",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "createdAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
    ],
    name: "verifyItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061222d806100206000396000f3fe6080604052600436106100dc5760003560e01c80636d155a4b1161007f5780639cda7efc116100595780639cda7efc1461022d578063bfb231d21461026d578063c4d66de8146102a2578063f2fde38b146102c257600080fd5b80636d155a4b146101d0578063715018a6146101f05780638da5cb5b1461020557600080fd5b8063461304ac116100bb578063461304ac146101365780634df09ac0146101565780636b9e21fa146101765780636c8244871461019657600080fd5b8062bd0474146100e1578063133b9e2214610103578063261e241714610123575b600080fd5b3480156100ed57600080fd5b506101016100fc366004611ae2565b6102e2565b005b34801561010f57600080fd5b5061010161011e366004611b25565b61079d565b610101610131366004611bff565b61084e565b34801561014257600080fd5b50610101610151366004611c7b565b610a0b565b34801561016257600080fd5b50610101610171366004611b25565b610d03565b34801561018257600080fd5b50610101610191366004611ce8565b610e1f565b3480156101a257600080fd5b506101b66101b1366004611d23565b610f59565b6040516101c7959493929190611d8e565b60405180910390f35b3480156101dc57600080fd5b506101016101eb366004611ce8565b61109d565b3480156101fc57600080fd5b5061010161120e565b34801561021157600080fd5b506033546040516001600160a01b0390911681526020016101c7565b34801561023957600080fd5b5061025d610248366004611d23565b60986020526000908152604090205460ff1681565b60405190151581526020016101c7565b34801561027957600080fd5b5061028d610288366004611ae2565b611222565b6040516101c799989796959493929190611dd1565b3480156102ae57600080fd5b506101016102bd366004611d23565b61138b565b3480156102ce57600080fd5b506101016102dd366004611d23565b6114e3565b6002606554036103395760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b60026065556000818152609a6020526040908190208151610120810190925280548290829061036790611e41565b80601f016020809104026020016040519081016040528092919081815260200182805461039390611e41565b80156103e05780601f106103b5576101008083540402835291602001916103e0565b820191906000526020600020905b8154815290600101906020018083116103c357829003601f168201915b505050505081526020016001820180546103f990611e41565b80601f016020809104026020016040519081016040528092919081815260200182805461042590611e41565b80156104725780601f1061044757610100808354040283529160200191610472565b820191906000526020600020905b81548152906001019060200180831161045557829003601f168201915b505050918352505060028201546001600160a01b0390811660208301526003830154811660408301526004830154606083015260058301546080830152600683015460a080840191909152600784015490911660c083015260089092015460e09091015281015161051c5760405162461bcd60e51b8152602060048201526014602482015273496e76616c6964204d6174657269616c4974656d60601b6044820152606401610330565b33600090815260996020526040808220815160a0810190925280548290829061054490611e41565b80601f016020809104026020016040519081016040528092919081815260200182805461057090611e41565b80156105bd5780601f10610592576101008083540402835291602001916105bd565b820191906000526020600020905b8154815290600101906020018083116105a057829003601f168201915b505050505081526020016001820180546105d690611e41565b80601f016020809104026020016040519081016040528092919081815260200182805461060290611e41565b801561064f5780601f106106245761010080835404028352916020019161064f565b820191906000526020600020905b81548152906001019060200180831161063257829003601f168201915b5050509183525050600282015460ff1615156020820152600382015460408201526004909101546060918201528101519091506106c15760405162461bcd60e51b815260206004820152601060248201526f24b73b30b634b2103b32b934b334b2b960811b6044820152606401610330565b80604001516107095760405162461bcd60e51b8152602060048201526014602482015273566572696669657220697320696e61637469766560601b6044820152606401610330565b6000838152609a60205260409020336007820180546001600160a01b0319166001600160a01b039283161790554260088301556003820154600283015461075a92918216911633846004015461155c565b837f17e7fd866e8cdc591a54b8f55f05b30f719097b888884a638fd2f4f65d78f95c8260405161078a9190611ef8565b60405180910390a2505060016065555050565b6107a56115ad565b6001600160a01b0382163b6107f45760405162461bcd60e51b8152602060048201526015602482015274496e76616c696420746f6b656e206164647265737360581b6044820152606401610330565b6001600160a01b038216600081815260986020526040808220805460ff1916851515908117909155905160ff909116151592917f8a70b1daa17a7f98be9e00f91b3df12fb608c0beb920cee696d360eafd00208191a35050565b8360008151116108705760405162461bcd60e51b815260040161033090611f9a565b8360008151116108925760405162461bcd60e51b815260040161033090611f9a565b6001600160a01b03841660009081526098602052604090205460ff166108ea5760405162461bcd60e51b815260206004820152600d60248201526c24b73b30b634b2103a37b5b2b760991b6044820152606401610330565b6001600160a01b038416610938578234146109385760405162461bcd60e51b815260206004820152600e60248201526d496e76616c696420626f756e747960901b6044820152606401610330565b60976000815461094790611fc2565b909155506097546000908152609a602052604090206002810180546001600160a01b031916331790558061097b8882612037565b506001810161098a8782612037565b506003810180546001600160a01b0319166001600160a01b03871617905560048101849055426005820181905560068201556109c88533308761155c565b6097547f9e3499af784f41425481379124933f0334131f2936e80a03f0364360d401cc29826040516109fa9190611ef8565b60405180910390a250505050505050565b6000838152609a60205260409081902081516101208101909252805482908290610a3490611e41565b80601f0160208091040260200160405190810160405280929190818152602001828054610a6090611e41565b8015610aad5780601f10610a8257610100808354040283529160200191610aad565b820191906000526020600020905b815481529060010190602001808311610a9057829003601f168201915b50505050508152602001600182018054610ac690611e41565b80601f0160208091040260200160405190810160405280929190818152602001828054610af290611e41565b8015610b3f5780601f10610b1457610100808354040283529160200191610b3f565b820191906000526020600020905b815481529060010190602001808311610b2257829003601f168201915b505050918352505060028201546001600160a01b0390811660208301526003830154811660408301526004830154606083015260058301546080830152600683015460a080840191909152600784015490911660c083015260089092015460e090910152810151610be95760405162461bcd60e51b8152602060048201526014602482015273496e76616c6964204d6174657269616c4974656d60601b6044820152606401610330565b826000815111610c0b5760405162461bcd60e51b815260040161033090611f9a565b826000815111610c2d5760405162461bcd60e51b815260040161033090611f9a565b6000868152609a6020526040902060028101546001600160a01b03163314610c975760405162461bcd60e51b815260206004820152601860248201527f496e76616c6964204d61726b65744974656d206f776e657200000000000000006044820152606401610330565b80610ca28782612037565b5060018101610cb18682612037565b504260068201556007810180546001600160a01b03191690556000600882015560405187907fd1b01907b45f7f5ece1e41c22a22ae54a74eb6667650fce40b4c091c6b640c83906109fa908490611ef8565b6033546001600160a01b0316331480610d2d57503360009081526099602052604090206003015415155b610d715760405162461bcd60e51b81526020600482015260156024820152742737ba1027bbb732b91037b9102b32b934b334b2b960591b6044820152606401610330565b6001600160a01b0382163314610dbc5760405162461bcd60e51b815260206004820152601060248201526f24b73b30b634b2102b32b934b334b2b960811b6044820152606401610330565b6001600160a01b0382166000818152609960205260409081902060028101805460ff191685151517905590517f87926638dd9eae3339981ecbc4bd9a30d4740bc0467d4d29ff2a9fe3e50fbe1391610e139161214d565b60405180910390a25050565b610e276115ad565b816000815111610e495760405162461bcd60e51b815260040161033090611f9a565b816000815111610e6b5760405162461bcd60e51b815260040161033090611f9a565b6001600160a01b0385163b158015610e8257503233145b610ebf5760405162461bcd60e51b815260206004820152600e60248201526d125b9d985b1a59081dd85b1b195d60921b6044820152606401610330565b6001600160a01b038516600090815260996020526040902080610ee28682612037565b5060018101610ef18582612037565b5060028101805460ff19166001179055426003820181905560048201556040516001600160a01b038716907f451a49a7b8215273cd1dbdf3e10c5315d8e4fc87208a069930feeaf1fcea19ad90610f4990849061214d565b60405180910390a2505050505050565b609960205260009081526040902080548190610f7490611e41565b80601f0160208091040260200160405190810160405280929190818152602001828054610fa090611e41565b8015610fed5780601f10610fc257610100808354040283529160200191610fed565b820191906000526020600020905b815481529060010190602001808311610fd057829003601f168201915b50505050509080600101805461100290611e41565b80601f016020809104026020016040519081016040528092919081815260200182805461102e90611e41565b801561107b5780601f106110505761010080835404028352916020019161107b565b820191906000526020600020905b81548152906001019060200180831161105e57829003601f168201915b5050505060028301546003840154600490940154929360ff9091169290915085565b8160008151116110bf5760405162461bcd60e51b815260040161033090611f9a565b8160008151116110e15760405162461bcd60e51b815260040161033090611f9a565b6033546001600160a01b031633148061110b57503360009081526099602052604090206003015415155b61114f5760405162461bcd60e51b81526020600482015260156024820152742737ba1027bbb732b91037b9102b32b934b334b2b960591b6044820152606401610330565b6001600160a01b038516331461119a5760405162461bcd60e51b815260206004820152601060248201526f24b73b30b634b2102b32b934b334b2b960811b6044820152606401610330565b6001600160a01b0385166000908152609960205260409020806111bd8682612037565b50600181016111cc8582612037565b504260048201556040516001600160a01b038716907f45e21256ed995f2dae81606db38b03b5721b80cb9f9c7c04e2694b8720e2437b90610f4990849061214d565b6112166115ad565b6112206000611607565b565b609a6020526000908152604090208054819061123d90611e41565b80601f016020809104026020016040519081016040528092919081815260200182805461126990611e41565b80156112b65780601f1061128b576101008083540402835291602001916112b6565b820191906000526020600020905b81548152906001019060200180831161129957829003601f168201915b5050505050908060010180546112cb90611e41565b80601f01602080910402602001604051908101604052809291908181526020018280546112f790611e41565b80156113445780601f1061131957610100808354040283529160200191611344565b820191906000526020600020905b81548152906001019060200180831161132757829003601f168201915b50505060028401546003850154600486015460058701546006880154600789015460089099015497986001600160a01b039586169894861697509295509093909291169089565b600054610100900460ff16158080156113ab5750600054600160ff909116105b806113c55750303b1580156113c5575060005460ff166001145b6114285760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610330565b6000805460ff19166001179055801561144b576000805461ff0019166101001790555b611453611659565b61145b611688565b611464826114e3565b6000805260986020527fddaeee8e61001dbcfaf4f92c6943552c392a86665d734d3c1905d7b3c23b1b1e805460ff1916600117905580156114df576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b6114eb6115ad565b6001600160a01b0381166115505760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610330565b61155981611607565b50565b6001600160a01b03841661159257306001600160a01b0384160361158d5761158d6001600160a01b038316826116b7565b6115a7565b6115a76001600160a01b0385168484846117d5565b50505050565b6033546001600160a01b031633146112205760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610330565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff166116805760405162461bcd60e51b815260040161033090612160565b61122061182f565b600054610100900460ff166116af5760405162461bcd60e51b815260040161033090612160565b61122061185f565b804710156117075760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401610330565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114611754576040519150601f19603f3d011682016040523d82523d6000602084013e611759565b606091505b50509050806117d05760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610330565b505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526115a790859061188d565b600054610100900460ff166118565760405162461bcd60e51b815260040161033090612160565b61122033611607565b600054610100900460ff166118865760405162461bcd60e51b815260040161033090612160565b6001606555565b60006118e2826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661195f9092919063ffffffff16565b8051909150156117d0578080602001905181019061190091906121ab565b6117d05760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610330565b606061196e8484600085611978565b90505b9392505050565b6060824710156119d95760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610330565b6001600160a01b0385163b611a305760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610330565b600080866001600160a01b03168587604051611a4c91906121c8565b60006040518083038185875af1925050503d8060008114611a89576040519150601f19603f3d011682016040523d82523d6000602084013e611a8e565b606091505b5091509150611a9e828286611aa9565b979650505050505050565b60608315611ab8575081611971565b825115611ac85782518084602001fd5b8160405162461bcd60e51b815260040161033091906121e4565b600060208284031215611af457600080fd5b5035919050565b80356001600160a01b0381168114611b1257600080fd5b919050565b801515811461155957600080fd5b60008060408385031215611b3857600080fd5b611b4183611afb565b91506020830135611b5181611b17565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112611b8357600080fd5b813567ffffffffffffffff80821115611b9e57611b9e611b5c565b604051601f8301601f19908116603f01168101908282118183101715611bc657611bc6611b5c565b81604052838152866020858801011115611bdf57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008060808587031215611c1557600080fd5b843567ffffffffffffffff80821115611c2d57600080fd5b611c3988838901611b72565b95506020870135915080821115611c4f57600080fd5b50611c5c87828801611b72565b935050611c6b60408601611afb565b9396929550929360600135925050565b600080600060608486031215611c9057600080fd5b83359250602084013567ffffffffffffffff80821115611caf57600080fd5b611cbb87838801611b72565b93506040860135915080821115611cd157600080fd5b50611cde86828701611b72565b9150509250925092565b600080600060608486031215611cfd57600080fd5b611d0684611afb565b9250602084013567ffffffffffffffff80821115611caf57600080fd5b600060208284031215611d3557600080fd5b61197182611afb565b60005b83811015611d59578181015183820152602001611d41565b50506000910152565b60008151808452611d7a816020860160208601611d3e565b601f01601f19169290920160200192915050565b60a081526000611da160a0830188611d62565b8281036020840152611db38188611d62565b95151560408401525050606081019290925260809091015292915050565b6000610120808352611de58184018d611d62565b90508281036020840152611df9818c611d62565b6001600160a01b039a8b166040850152988a1660608401525050608081019590955260a085019390935260c084019190915290931660e0820152610100019190915292915050565b600181811c90821680611e5557607f821691505b602082108103611e7557634e487b7160e01b600052602260045260246000fd5b50919050565b60008154611e8881611e41565b808552602060018381168015611ea55760018114611ebf57611eed565b60ff1985168884015283151560051b880183019550611eed565b866000528260002060005b85811015611ee55781548a8201860152908301908401611eca565b890184019650505b505050505092915050565b602081526000610120806020840152611f15610140840185611e7b565b838103601f19016040850152611f2e8160018701611e7b565b9050611f4460028601546001600160a01b031690565b6001600160a01b039081166060860152600386015481166080860152600486015460a0860152600586015460c0860152600686015460e08601526007860154166101008501526008909401549201919091525090565b6020808252600e908201526d496e76616c696420737472696e6760901b604082015260600190565b600060018201611fe257634e487b7160e01b600052601160045260246000fd5b5060010190565b601f8211156117d057600081815260208120601f850160051c810160208610156120105750805b601f850160051c820191505b8181101561202f5782815560010161201c565b505050505050565b815167ffffffffffffffff81111561205157612051611b5c565b6120658161205f8454611e41565b84611fe9565b602080601f83116001811461209a57600084156120825750858301515b600019600386901b1c1916600185901b17855561202f565b600085815260208120601f198616915b828110156120c9578886015182559484019460019091019084016120aa565b50858210156120e75787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60a08252600061210a60a0840183611e7b565b838103602085015261211f8160018501611e7b565b600284015460ff16151560408601526003840154606086015260049093015460809094019390935250919050565b60208152600061197160208301846120f7565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6000602082840312156121bd57600080fd5b815161197181611b17565b600082516121da818460208701611d3e565b9190910192915050565b6020815260006119716020830184611d6256fea2646970667358221220814a17304dde6bb6984b5a6d10bc4363fa5a8f4fe07491fe948c539cf4c00e3e64736f6c63430008110033";

type MaterialConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MaterialConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Material__factory extends ContractFactory {
  constructor(...args: MaterialConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Material> {
    return super.deploy(overrides || {}) as Promise<Material>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Material {
    return super.attach(address) as Material;
  }
  override connect(signer: Signer): Material__factory {
    return super.connect(signer) as Material__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MaterialInterface {
    return new utils.Interface(_abi) as MaterialInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Material {
    return new Contract(address, _abi, signerOrProvider) as Material;
  }
}
