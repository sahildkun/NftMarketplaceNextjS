require("@nomicfoundation/hardhat-toolbox");

require("@nomiclabs/hardhat-waffle");
const projectId = '61d3b0f633334b44a8f673781327c3bc'
const fs = require('fs')
const keyData = fs.readFileSync('./key.txt', {
  encoding:'utf8', flag:'r'
})

module.exports = {
  defaultNetwork: 'hardhat',
  networks:{
    hardhat:{
      chainId: 1337 // config standard 
    },
    goerli:{
      url:`https://goerli.infura.io/v3/${projectId}`,
      accounts:[keyData]
    },
    mainnet: {
      url:`https://mainnet.infura.io/v3/${projectId}`,
      accounts:[keyData]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
