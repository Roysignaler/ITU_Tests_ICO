const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { ITU_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  // Address of the ITU Devs NFT contract that you deployed in the previous module
  const ituDevsNFTContract = ITU_DEVS_NFT_CONTRACT_ADDRESS;

  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so ituDevsTokenContract here is a factory for instances of our ITUoDevToken contract.
    */
  const ituDevsTokenContract = await ethers.getContractFactory(
    "ITUDevToken"
  );

  // deploy the contract
  const deployedItuDevsTokenContract = await ituDevsTokenContract.deploy(
    ituDevsNFTContract
  );

  // print the address of the deployed contract
  console.log(
    "ITU Devs Token Contract Address:",
    deployedItuDevsTokenContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });