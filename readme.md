# Boilerplate

### Description

Updated version of [Jon Schwartz's](https://github.com/Schwartz10) [blockchain-ReactRedux-boilerplate](https://github.com/Schwartz10/blockchain-ReactRedux-boilerplate) repo with Rimble UI loaded.

This boilerplate serves as a starting point for developers who wish to combine Rimble UI, Truffle, Web3.js, React, Redux, react-redux, and webpack.

## Requirements

* Python 2.7
* Truffle 4.1.15
* Ganache

## Setup

`npm install`
`cd rimble-web3-test`
`npm run start`

You will need metamask connected to your local ganache instance on your machine.

## Using MetaMask versus fallback procedure

The default behavior for this boilerplate uses MetaMask to inject the web3 object into your browser. If you'd prefer to use the fallback procedure, navigate to `src/utils/getWeb3.js` and make sure you set the provider to the correct localhost port where you're hosting your blockchain.

Testing
Run tests - `truffle test`

Running the application
Compile contracts - `truffle compile`
Migrate contracts - `truffle migrate`
Start http server - `npm run start`
