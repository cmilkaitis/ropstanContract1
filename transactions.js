const Web3 = require('web3');
const web3 = new Web3(
  'https://ropsten.infura.io/v3/7cc91636171c4e62b967e99d155f6d07'
);
const Tx = require('ethereumjs-tx');

const key = require('./keys/keys').secrect;

console.log(key);
const account1 = '0x70385670f693f0C5fb1784B7cDc8B7618DF43782';
const privatekey = Buffer.from(key, 'hex');
