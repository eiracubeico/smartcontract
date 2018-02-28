const Web3 = require("web3");
const web3 = new Web3();
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = process.env.MNEMONIC; // 12 word mnemonic
var provider = new HDWalletProvider(mnemonic, process.env.RINKEBY_PROVIDER);
var mainnetProvider = new HDWalletProvider(mnemonic, process.env.MAINNET_PROVIDER, 1);


module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: provider,
      // You can get the current gasLimit by running
      // truffle deploy --network rinkeby
      // truffle(rinkeby)> web3.eth.getBlock("pending", (error, result) =>
      //   console.log(result.gasLimit))
      gas: 4600000,
      gasPrice: web3.toWei("20", "gwei"),
      network_id: "3",
    },
    rinkeby: {
      provider: provider,
      // You can get the current gasLimit by running
      // truffle deploy --network rinkeby
      // truffle(rinkeby)> web3.eth.getBlock("pending", (error, result) =>
      //   console.log(result.gasLimit))
      gas: 4600000,
      gasPrice: web3.toWei("20", "gwei"),
      network_id: "*",
    },
    mainnet: {
      provider: mainnetProvider,
      gas: 4600000,
      gasPrice: web3.toWei("2", "gwei"),
      network_id: "1",
    }
  }
};