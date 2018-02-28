var RetailCrowdsale = artifacts.require("./RetailCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
  return liveDeploy(deployer, accounts);
};

async function liveDeploy(deployer, accounts) {
  const BigNumber = web3.BigNumber;
  const RATE = 0,0033;
  const startTime = 1525168800;
  const endTime =  1527674400;
  console.log([startTime, endTime, RATE, accounts[0]]);
  // uint256 _startTime, uint256 _endTime, uint256 _rate, address _wallet) 
  
  return deployer.deploy(RetailCrowdsale, startTime, endTime, RATE, accounts[0]).then( async () => {
    const instance = await RetailCrowdsale.deployed();
    const token = await instance.token.call();
    console.log('Token Address', token);
  })
}