const HDWalletProvider = require('truffle-hdwallet-provider')
const fs = require('fs')

// First read in the secrets.json to get our mnemonic
let secrets
let mnemonic
if (fs.existsSync('secrets.json')) {
  secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf8'))
  mnemonic = secrets.mnemonic
} else {
  console.log('No secrets.json found. If you are trying to publish EPM ' +
              'this will fail. Otherwise, you can ignore this message!')
  mnemonic = ''
}

module.exports = {
  networks: {
    live: {
      network_id: 1,
      gas: 6000000,
      gasPrice: 25000000000,
    },
    ganache: {
      provider: () => new HDWalletProvider(mnemonic, 'http://localhost:7545',0,10),
      network_id: '*',
      gas: 6000000,
      gasPrice: 25000000000,
    },
    rinkeby: {
      provider: new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io'),
      network_id: '4',
      gas: 6612388, // Gas limit used for deploys
      gasPrice: 20000000000, // 20 gwei
    },
    testrpc: {
      network_id: 'default'
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
