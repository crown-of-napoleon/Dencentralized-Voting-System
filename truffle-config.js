const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "your mnemonic phrase here";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // The port number might differ depending on your local development blockchain (e.g., Ganache)
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/YOUR-PROJECT-ID"),
      network_id: 3,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0", // You can specify a specific Solidity version or use a version range (e.g., ">=0.4.22 <0.9.0")
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: "byzantium"
      }
    }
  },

  db: {
    enabled: false
  }
};
