const hre = require("hardhat");

async function main() {
  const FlyToken = await hre.ethers.getContractFactory("FlyToken");
  const flyToken = await FlyToken.deploy();

  await flyToken.deployed();

  console.log(
    `FlyToken with 1 ETH and unFlyToken timestamp ${unFlyTokenTime} deployed to ${flyToken.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
