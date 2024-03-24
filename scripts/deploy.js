const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

//  console.log(Deploying contracts with the account:, ${deployer.address});

  const Token = await hre.ethers.deployContract("FreelanceContract", ["0xD7cEdc05519e666BA62986B3407724f7c4856626", "0xD80bf414FA4d5564B4FeF2390CF4C155878A7190", 1000, "projeto"]);
  const token = await Token.waitForDeployment()

  console.log(token);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });