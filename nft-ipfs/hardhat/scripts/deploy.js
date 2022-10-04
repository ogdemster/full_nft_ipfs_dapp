// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const {ethers} = require("hardhat");
require("dotenv").config({path: ".env"});

async function main() {
  const metadataUrl = "ipfs://QmY8f8jDbHXPv1ynQ57trFQJw4kptqixgwQzdnTDi4mhhJ/";
  const lw3PunkContract = await ethers.getContractFactory("LW3Punks");
  const deployedLW3PunksContract = await lw3PunkContract.deploy(metadataUrl);
  await deployedLW3PunksContract.deployed();
  console.log("LW3Punks COntract address: ", deployedLW3PunksContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
