import { ethers } from 'hardhat';

async function main() {
//   const DelarToken = await ethers.deployContract('DelarToken');

//   await DelarToken.waitForDeployment();

//   console.log('DelarToken Contract Deployed at ' + DelarToken);

    const DelarContractFactory = await ethers.getContractFactory('DelarContract');
    
    // Deploy the contract
    const DelarContract = await DelarContractFactory.deploy('0x49aC2AD1785d9577aF52a4Cd1511DcCC3AC42704');

    // Wait for the deployment to finish
    await DelarContract.waitForDeployment();

    const DelarContractAddress = await DelarContract.getAddress();

    // Log the address where the contract is deployed
    console.log('DelarContract Contract Deployed at:', DelarContractAddress);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});