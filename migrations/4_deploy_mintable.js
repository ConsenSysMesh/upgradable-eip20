const MINT = artifacts.require("MintEIP20");
const UPGRADABLE = artifacts.require("UpgradableEIP20");


const tokenName = "Joe B token #2"
const tokenSymbol = "JOE2"
const decimals = 0;


let params = [
  tokenName,
  decimals,
  tokenSymbol
]


module.exports = async function(deployer) {
  const oldAddress = await (await UPGRADABLE.deployed()).eipStorage()

  console.log(oldAddress)
  let x = await deployer.deploy(MINT, ...params, oldAddress);
  //const newAddress = (await MINT.deployed()).address
  //console.log(newAddress)
};
