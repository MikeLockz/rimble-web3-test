import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import Web3Manager from './web3/Web3Manager';
import SimpleStorageContract from '../build/contracts/SimpleStorage';
import assist from 'assist';

const assistConfig = {

  networkId: 5777, // The network id of the Ethereum network your Dapp is working with (REQUIRED)
  dappId: 'abcdefg', // The api key supplied to you by Blocknative (REQUIRED)
  web3: Web3Manager.web3, // The instantiated version of web3 that the Dapp is using
  mobileBlocked: false, // Defines if the Dapp works on mobile
  minimumBalance: 0, // Defines the minimum balance in Wei that a user needs to have to use the Dapp
  // messages: { // See custom transaction messages section below for more details
  //   txPending: Function, // Transaction is pending and awaiting confirmation
  //   txSent: Function, // Transaction has been sent to the network
  //   txSendFail: Function, // Transaction failed to be sent to the network
  //   txStall: Function, // Transaction was sent but not received in the mempool after 30 secs
  //   txFailed: Function, // Transaction failed
  //   nsfFail: Function, // User doesn't have enough funds to complete transaction
  //   txRepeat: Function, // Warning to user that they might be repeating a transaction
  //   txAwaitingApproval: Function, // Warning to user that they have a previous transaction awaiting approval
  //   txConfirmReminder: Function, // A warning to the user that their transaction is still awaiting approval
  //   txConfirmed: Function // Transaction is confirmed
  // },
  // images: {
  //   welcome: {
  //     src: String, // Image URL for welcome onboard modal
  //     srcset: String // Image URL(s) for welcome onboard modal
  //   },
  //   complete: {
  //     src: String, // Image URL for complete onboard modal
  //     srcset: String // Image URL(s) for complete onboard modal
  //   }
  // }
}

const da = assist.init(assistConfig)

da
  .onboard()
  .then(function () {
    /* Do stuff. e.g. Enable dapp controls or call your login function. */
    console.log('Onboarded');
  });

// const decoratedContract = da.Contract(myContract);

// da.Transaction(options);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Web3Manager
        contract={SimpleStorageContract}
        interval={100}
      />
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);
