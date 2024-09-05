/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    DataAgentFactory: {
      address: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "oracleAddress",
              type: "address",
            },
          ],
          name: "createDataAgent",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    LeadAgent: {
      address: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "initialOracleAddress",
              type: "address",
            },
            {
              internalType: "string",
              name: "systemPrompt",
              type: "string",
            },
            {
              internalType: "address",
              name: "techAgentFactoryAddress",
              type: "address",
            },
            {
              internalType: "address",
              name: "socialAgentFactoryAddress",
              type: "address",
            },
            {
              internalType: "address",
              name: "dataAgentFactoryAddress",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
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
              internalType: "uint256",
              name: "runId",
              type: "uint256",
            },
          ],
          name: "AgentRunCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "newOracleAddress",
              type: "address",
            },
          ],
          name: "OracleAddressUpdated",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "message",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "runId",
              type: "uint256",
            },
          ],
          name: "addMessage",
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
          name: "agentRuns",
          outputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "responsesCount",
              type: "uint256",
            },
            {
              internalType: "uint8",
              name: "max_iterations",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "is_finished",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "dataAgent",
          outputs: [
            {
              internalType: "contract IOpenAiChatGpt",
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
              internalType: "uint256",
              name: "agentId",
              type: "uint256",
            },
          ],
          name: "getMessageHistoryContents",
          outputs: [
            {
              internalType: "string[]",
              name: "",
              type: "string[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "agentId",
              type: "uint256",
            },
          ],
          name: "getMessageHistoryRoles",
          outputs: [
            {
              internalType: "string[]",
              name: "",
              type: "string[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "runId",
              type: "uint256",
            },
          ],
          name: "isRunFinished",
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
          inputs: [
            {
              internalType: "uint256",
              name: "runId",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "response",
              type: "string",
            },
            {
              internalType: "string",
              name: "errorMessage",
              type: "string",
            },
          ],
          name: "onOracleFunctionResponse",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "runId",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "id",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "content",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "functionName",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "functionArguments",
                  type: "string",
                },
                {
                  internalType: "uint64",
                  name: "created",
                  type: "uint64",
                },
                {
                  internalType: "string",
                  name: "model",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "systemFingerprint",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "object",
                  type: "string",
                },
                {
                  internalType: "uint32",
                  name: "completionTokens",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "promptTokens",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "totalTokens",
                  type: "uint32",
                },
              ],
              internalType: "struct IOracle.OpenAiResponse",
              name: "response",
              type: "tuple",
            },
            {
              internalType: "string",
              name: "errorMessage",
              type: "string",
            },
          ],
          name: "onOracleOpenAiLlmResponse",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "oracleAddress",
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
          inputs: [],
          name: "prompt",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "query",
              type: "string",
            },
            {
              internalType: "uint8",
              name: "max_iterations",
              type: "uint8",
            },
            {
              internalType: "string",
              name: "techAgentPrompt",
              type: "string",
            },
            {
              internalType: "string",
              name: "socialAgentPrompt",
              type: "string",
            },
            {
              internalType: "string",
              name: "dataAgentPrompt",
              type: "string",
            },
          ],
          name: "runAgent",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOracleAddress",
              type: "address",
            },
          ],
          name: "setOracleAddress",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "socialAgent",
          outputs: [
            {
              internalType: "contract IOpenAiChatGpt",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "techAgent",
          outputs: [
            {
              internalType: "contract IOpenAiChatGpt",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    SocialAgentFactory: {
      address: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "oracleAddress",
              type: "address",
            },
          ],
          name: "createSocialAgent",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    TechAgentFactory: {
      address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "oracleAddress",
              type: "address",
            },
          ],
          name: "createTechAgent",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    TodoList: {
      address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
          ],
          name: "TodoCompleted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "content",
              type: "string",
            },
          ],
          name: "TodoCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
          ],
          name: "TodoDeleted",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_id",
              type: "uint256",
            },
          ],
          name: "completeTodo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_content",
              type: "string",
            },
          ],
          name: "createTodo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_id",
              type: "uint256",
            },
          ],
          name: "deleteTodo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getTodos",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "content",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "isCompleted",
                  type: "bool",
                },
                {
                  internalType: "uint256",
                  name: "createdAt",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
              ],
              internalType: "struct TodoList.Todo[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    YourContract: {
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_owner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "greetingSetter",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "newGreeting",
              type: "string",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "premium",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "GreetingChange",
          type: "event",
        },
        {
          inputs: [],
          name: "greeting",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
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
          inputs: [],
          name: "premium",
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
          inputs: [
            {
              internalType: "string",
              name: "_newGreeting",
              type: "string",
            },
          ],
          name: "setGreeting",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "totalCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
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
          name: "userGreetingCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
      inheritedFunctions: {},
    },
  },
  696969: {
    DataAgentFactory: {
      address: "0x34C228B9d634576d5D6d7C1F8B951f421362380c",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "oracleAddress",
              type: "address",
            },
          ],
          name: "createDataAgent",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    LeadAgent: {
      address: "0x2B944d38e179a6574269f34A8749695db3762Cb0",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "initialOracleAddress",
              type: "address",
            },
            {
              internalType: "string",
              name: "systemPrompt",
              type: "string",
            },
            {
              internalType: "address",
              name: "techAgentFactoryAddress",
              type: "address",
            },
            {
              internalType: "address",
              name: "socialAgentFactoryAddress",
              type: "address",
            },
            {
              internalType: "address",
              name: "dataAgentFactoryAddress",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
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
              internalType: "uint256",
              name: "runId",
              type: "uint256",
            },
          ],
          name: "AgentRunCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "newOracleAddress",
              type: "address",
            },
          ],
          name: "OracleAddressUpdated",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "message",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "runId",
              type: "uint256",
            },
          ],
          name: "addMessage",
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
          name: "agentRuns",
          outputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "responsesCount",
              type: "uint256",
            },
            {
              internalType: "uint8",
              name: "max_iterations",
              type: "uint8",
            },
            {
              internalType: "bool",
              name: "is_finished",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "dataAgent",
          outputs: [
            {
              internalType: "contract IOpenAiChatGpt",
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
              internalType: "uint256",
              name: "agentId",
              type: "uint256",
            },
          ],
          name: "getMessageHistoryContents",
          outputs: [
            {
              internalType: "string[]",
              name: "",
              type: "string[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "agentId",
              type: "uint256",
            },
          ],
          name: "getMessageHistoryRoles",
          outputs: [
            {
              internalType: "string[]",
              name: "",
              type: "string[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "runId",
              type: "uint256",
            },
          ],
          name: "isRunFinished",
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
          inputs: [
            {
              internalType: "uint256",
              name: "runId",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "response",
              type: "string",
            },
            {
              internalType: "string",
              name: "errorMessage",
              type: "string",
            },
          ],
          name: "onOracleFunctionResponse",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "runId",
              type: "uint256",
            },
            {
              components: [
                {
                  internalType: "string",
                  name: "id",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "content",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "functionName",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "functionArguments",
                  type: "string",
                },
                {
                  internalType: "uint64",
                  name: "created",
                  type: "uint64",
                },
                {
                  internalType: "string",
                  name: "model",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "systemFingerprint",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "object",
                  type: "string",
                },
                {
                  internalType: "uint32",
                  name: "completionTokens",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "promptTokens",
                  type: "uint32",
                },
                {
                  internalType: "uint32",
                  name: "totalTokens",
                  type: "uint32",
                },
              ],
              internalType: "struct IOracle.OpenAiResponse",
              name: "response",
              type: "tuple",
            },
            {
              internalType: "string",
              name: "errorMessage",
              type: "string",
            },
          ],
          name: "onOracleOpenAiLlmResponse",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "oracleAddress",
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
          inputs: [],
          name: "prompt",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "query",
              type: "string",
            },
            {
              internalType: "uint8",
              name: "max_iterations",
              type: "uint8",
            },
            {
              internalType: "string",
              name: "techAgentPrompt",
              type: "string",
            },
            {
              internalType: "string",
              name: "socialAgentPrompt",
              type: "string",
            },
            {
              internalType: "string",
              name: "dataAgentPrompt",
              type: "string",
            },
          ],
          name: "runAgent",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOracleAddress",
              type: "address",
            },
          ],
          name: "setOracleAddress",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "socialAgent",
          outputs: [
            {
              internalType: "contract IOpenAiChatGpt",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "techAgent",
          outputs: [
            {
              internalType: "contract IOpenAiChatGpt",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    SocialAgentFactory: {
      address: "0x0e899C9E298F10dEBAC0d52E6833E44231D0c4F3",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "oracleAddress",
              type: "address",
            },
          ],
          name: "createSocialAgent",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    TechAgentFactory: {
      address: "0xAF7D38DE3F45018F2D2E134Db71B6ac344136Fc0",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "oracleAddress",
              type: "address",
            },
          ],
          name: "createTechAgent",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    TodoList: {
      address: "0x8f8cbc5eCCd5dd5FEB2f33AC41FaC4D7D601aFbA",
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
          ],
          name: "TodoCompleted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "content",
              type: "string",
            },
          ],
          name: "TodoCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
          ],
          name: "TodoDeleted",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_id",
              type: "uint256",
            },
          ],
          name: "completeTodo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "_content",
              type: "string",
            },
          ],
          name: "createTodo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_id",
              type: "uint256",
            },
          ],
          name: "deleteTodo",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getTodos",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "string",
                  name: "content",
                  type: "string",
                },
                {
                  internalType: "bool",
                  name: "isCompleted",
                  type: "bool",
                },
                {
                  internalType: "uint256",
                  name: "createdAt",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
              ],
              internalType: "struct TodoList.Todo[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      inheritedFunctions: {},
    },
    YourContract: {
      address: "0x26e1b049a9a6384Dfe8247E7915f4e0f2e2f0bE4",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_owner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "greetingSetter",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "newGreeting",
              type: "string",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "premium",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "GreetingChange",
          type: "event",
        },
        {
          inputs: [],
          name: "greeting",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
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
          inputs: [],
          name: "premium",
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
          inputs: [
            {
              internalType: "string",
              name: "_newGreeting",
              type: "string",
            },
          ],
          name: "setGreeting",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "totalCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
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
          name: "userGreetingCounter",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
      inheritedFunctions: {},
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
