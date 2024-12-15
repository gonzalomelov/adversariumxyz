import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployAdversariumToken: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("AdversariumToken", {
    from: deployer,
    // Contract constructor arguments (if any)
    args: [],
    log: true,
    autoMine: true,
  });

  const adversariumToken = await hre.ethers.getContract("AdversariumToken", deployer);
  console.log("🗒️ AdversariumToken deployed:", await adversariumToken.getAddress());
};

export default deployAdversariumToken;

deployAdversariumToken.tags = ["AdversariumToken"];
