const hre = require("hardhat");

async function main() {
  const OrionToken = await hre.ethers.getContractFactory("OrionToken");
  const oriontoken = await OrionToken.deploy(700000000, 5);

  await oriontoken.waitForDeployment();

  console.log("Orion Token deployed:", await oriontoken.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
