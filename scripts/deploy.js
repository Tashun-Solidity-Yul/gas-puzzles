// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require('hardhat');
const {expect} = require("chai");
const {ethers} = require("hardhat");

async function main() {
    // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
    // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;
    //
    // const lockedAmount = hre.ethers.utils.parseEther('1');
    //
    // const Lock = await hre.ethers.getContractFactory('Lock');
    // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });
    //
    // await lock.deployed();
    //
    // console.log(
    //     `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
    // );

    const contract = await ethers.getContractFactory('ArraySum')
    await contract.attach('0x5FbDB2315678afecb367f032d93F642f64180aa3')
    await instance1.setArray([2n ** 256n - 1n, 4n]);
    await expect(instance.getArraySum()).to.be.reverted;


    const ContractFactory1 = await ethers.getContractFactory('OptimizedArraySum');
    let instance1 = await ContractFactory1.deploy();

    await instance1.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
