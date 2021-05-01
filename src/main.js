const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('25cd8f6fef9bf4d71ae7062034c831b10cc8afb7fc88cabe76726cf25cbd3569');
const myWalletAddress = myKey.getPublic('hex');



let dumiCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, '04066052a07e0c0610534903e2f58567bcd397f3211649e9287513d04fa6f85a1b78a2c6f2c68982d9931eb0766e6b7cd8a601e3bf1d49fb38151ea5c1d21d69eb', 10);
tx1.signTransaction(myKey);
dumiCoin.addTransaction(tx1);

console.log('\n Starting Miner...');
dumiCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of Dumi is: ' + dumiCoin.getBalanceAddress(myWalletAddress));

console.log('Is chain valid: ', dumiCoin.isChainValid());

console.log('\nBalance of Alex is: ' + dumiCoin.getBalanceAddress('04e8f3db366e081ab297f09654c3aae8d5a1c36c5e13a100cb9b60f63ecaa42eabb60b7309d603e9a43e89a642867932cbc802b2921a1c541483e34389673f7479'));

console.log('\nBalance of Mahad is: ' + dumiCoin.getBalanceAddress('04066052a07e0c0610534903e2f58567bcd397f3211649e9287513d04fa6f85a1b78a2c6f2c68982d9931eb0766e6b7cd8a601e3bf1d49fb38151ea5c1d21d69eb'));
