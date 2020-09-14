const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = "pool blanket movie fitness danger grit sunny resist joke isolate deal decide";

module.exports = {
  compilers: {
    solc: {
      version: "0.4.24",
    },
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/fac6ad5adddd44e1973d022b1c13b7a8`),
      network_id: 4,       // rinkeby's id
      gas: 4500000,        // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000
    },
  }
};
