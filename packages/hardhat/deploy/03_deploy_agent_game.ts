import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const AGENT_PROMPT = "You are a helpful assistant";
const TOKEN_ADDRESS = "0xE9d707B6FE20C943C6a131D0B30A42eD2adF65d5";

const deployAll: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log("Deploying contracts with the account:", deployer);

  // Deploy AgentGame
  console.log("Deploying AgentGame...");
  const agentGame = await deploy("AgentGame", {
    from: deployer,
    args: [AGENT_PROMPT, TOKEN_ADDRESS],
    log: true,
    gasLimit: 15000000,
  });

  console.log(`AgentGame deployed to ${agentGame.address}`);

  console.log(`Verify AgentGame:`);
  console.log(`npx hardhat verify --network baseSepolia "${agentGame.address}" "${AGENT_PROMPT}" "${TOKEN_ADDRESS}"`);
};

export default deployAll;

deployAll.tags = ["AgentGame"];
