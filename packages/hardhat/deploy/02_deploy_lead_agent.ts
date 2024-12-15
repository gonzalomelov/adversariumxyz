import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const AGENT_PROMPT = "You are a helpful assistant";

const deployAll: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log("Deploying contracts with the account:", deployer);

  // Deploy AgentGame
  console.log("Deploying AgentGame...");
  const agentGame = await deploy("AgentGame", {
    from: deployer,
    args: [AGENT_PROMPT],
    log: true,
    gasLimit: 15000000,
  });

  console.log(`AgentGame deployed to ${agentGame.address}`);

  console.log(`Verify AgentGame:`);
  console.log(`npx hardhat verify --network baseSepolia "${agentGame.address}" "You are a helpful assistant"`);
};

export default deployAll;

deployAll.tags = ["AgentGame"];
