import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const AGENT_PROMPT = "You are a helpful assistant";

const deployAll: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log("Deploying contracts with the account:", deployer);

  // Deploy LeadAgent
  console.log("Deploying LeadAgent...");
  const leadAgent = await deploy("LeadAgent", {
    from: deployer,
    args: [AGENT_PROMPT],
    log: true,
    gasLimit: 15000000,
  });

  console.log(`LeadAgent deployed to ${leadAgent.address}`);

  console.log(`Verify LeadAgent:`);
  console.log(`npx hardhat verify --network baseSepolia "${leadAgent.address}" "You are a helpful assistant"`);
};

export default deployAll;

deployAll.tags = ["LeadAgent"];
