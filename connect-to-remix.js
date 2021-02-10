const Web3 = require('web3')
const EthereumTransaction = require('ethereumjs-tx').Transaction
const ganache = 'HTTP://127.0.0.1:7545'
const web3 = new Web3(ganache)

web3.eth.getTransactionCount('0xAEE07637ee0DBaDE5fBd24f9A5F1f743EcD8487D').then(console.log)