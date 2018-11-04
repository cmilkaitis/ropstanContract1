const Web3 = require('web3');
const web3 = new Web3(
  'https://ropsten.infura.io/v3/7cc91636171c4e62b967e99d155f6d07'
);
const Tx = require('ethereumjs-tx');

const key = require('./keys/keys').secrect;

const account1 = '0x70385670f693f0C5fb1784B7cDc8B7618DF43782';
const privatekey = Buffer.from(key, 'hex');

web3.eth.getTransactionCount(account1, (er, txCount) => {
  // Get smart contract data
  const data = '';

  // Create transaction obj
  const txObj = {
    nonce: web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(1000000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
    data: data
  };

  // Sign transaction
  const tx = new Tx(txObj);
  tx.sign(privatekey);

  const serializedTx = tx.serialize();
  const raw = '0x' + serializedTx.toString('hex');

  // Broadcast transaction
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('err:', err, 'txHash:', txHash);
  });
});
