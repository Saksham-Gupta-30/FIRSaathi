const hre = require("hardhat");

async function main() {
  const Fir = await hre.ethers.getContractFactory("Fir");
  const fir = await Fir.deploy();

  await fir.deployed();

  console.log("Library deployed to:", fir.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});