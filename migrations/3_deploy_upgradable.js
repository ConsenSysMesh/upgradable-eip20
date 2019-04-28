const EIP20 = artifacts.require("UpgradableEIP20");

const initialAmount = 20000;
const tokenName = "Joe B token"
const tokenSymbol = "JOE"
const decimals = 0;


let params = [
  initialAmount,
  tokenName,
  decimals,
  tokenSymbol
]

module.exports = function(deployer) {
  deployer.deploy(EIP20, ...params);
};
