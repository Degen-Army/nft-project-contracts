// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // Deploy contracts




  //deploy contracts 
  const NftContract = await ethers.getContractFactory("NftContract");

  const nftcontract = await NftContract.deploy();
  await nftcontract.deployed()


  //set base uri in nft contract
  await nftcontract.setBaseURI("https://degen-army.herokuapp.com/api/creature/", { "gasLimit": "500000" });

  console.log("nftcontract deployed to", nftcontract.address);


  // Attempt to mint and verify success


  for (let index = 0; index < 4; index++) {

    await nftcontract.safeMint( '0xaCfC1540F8aF26fFaA13bc3a9618f2224140627B',  index, { "gasLimit": "500000" })
    console.log('claimed to ', '0xaCfC1540F8aF26fFaA13bc3a9618f2224140627B')
    
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
