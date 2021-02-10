const Web3 = require('web3')
const EthereumTransaction = require('ethereumjs-tx').Transaction

const ganache = 'HTTP://127.0.0.1:7545'
const web3 = new Web3(ganache)

const sendingAddress = '0xFCc729E0cf5BCB06081E9673Bfd38e59EF2A9Ce8'
const receivingAddress ='0x869654Ad7e441EC8466b32963A1Ff2Fc2eb24EDa'
const privateKeySender = '257e798f4ed683222a950dafa485a25b06a11ec5a1c6eb45acb49f0316a35504'

const privateKeySenderHex = new Buffer(privateKeySender, 'hex')

const rawTransaction = {
    nonce: 2,
    to: receivingAddress,
    gasPrice: 200000000,
    gasLimit:30000,
    value: 1,
    data: "0x0"
}


// const transaction = new EthereumTransaction(rawTransaction)
// transaction.sign(privateKeySenderHex)
//
// const serializedTransaction = transaction.serialize()
// web3.eth.sendSignedTransaction(serializedTransaction)

// web3.eth.getBalance(sendingAddress).then(console.log)
// web3.eth.getBalance(receivingAddress).then(console.log)

// web3.eth.getAccounts().then(accounts => console.log(accounts));

web3.eth.getGasPrice().then(console.log)
web3.eth.getHashrate().then(console.log)
web3.eth.getUncle(1).then(console.log)
web3.eth.getBlockTransactionCount(3).then(console.log)
