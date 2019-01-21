import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Box, Button, OutlineButton, Text, Flex } from 'rimble-ui'
import TransactionList from './TransactionList'
// import { watch } from 'fs';
// import Web3 from 'web3'

/*
You know you've correctly set up your environment if your simple storage contract is working - you should be able to set and get the value in your smart contract. If not, somethings not right
*/

class SimpleStorage extends Component {

  constructor(props){
    super(props)
    this.state = {
      value: 0,
      error: null,
      transactionList: [],
    }
  }

  addTransaction = ( transaction ) => {
    // let newTransaction = {
    //   'type': this.state.toastType,
    //   'tx': this.state.toastTx,
    // }
    this.setState({
      transactionList: [...this.state.transactionList, transaction]
    })
  }
  
  // gets the number stored in smart contract storage
  getNumber = () => {
    const { contract, account } = this.props;
    contract.get.call(account)
    .then(value => {
      // converts JS big number obj to string and back to number
      value = Number(value.toString());
      this.setState({ value })
    })
    .catch(error => this.setState({ error }));
  }

  // adds one to the storage in smart contract, refetches contract to update state
  addOne = async () => {
    const { contract, account } = this.props;
    const { value } = this.state;

    // sets the gas price manually to make sure the transaction goes through
    await contract.set(value + 1, {from: account, gasPrice: 5000000000})

    .then(data => {
      this.watchTransaction(data.tx)
    });

    this.getNumber();
  }

  watchTransaction = ( transaction ) => {
    console.log(transaction)
    window.web3.eth.getTransactionReceipt(transaction, (error, data) => {
      console.log('tx receipt: ', data)
      data.lastUpdated = Date.now()
      this.addTransaction(data)
    })

    window.web3.eth.getTransaction(transaction, function (error, data) {
      console.log('tx: ', data)
    })
  }

  render(){
    const { value, error, transactionList } = this.state;
    return(
      <div>
        {
        error ?
          <h1>Oh no! Something went wrong: {error}</h1> :
          <Box>
            <Box pb={4}>
              <Text mb={4} fontSize={3}>
                Smart contract value: 
              </Text>
              <Text fontSize={6} textAlign={'center'}>{value}</Text>
            </Box>

            <Flex px={0} pt={4} borderTop={1} borderColor={'#E8E8E8'} justifyContent='space-between'>
              <OutlineButton size={'medium'} onClick={this.addOne} mr={4}>Add One</OutlineButton>
              <Button size={'medium'} onClick={this.getNumber}>Get Number</Button>
            </Flex>

            <Box>
              <TransactionList transactionList={transactionList}></TransactionList>
            </Box>
          </Box>
        }
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    contract: state.contract,
    account: state.account
  }
}

export default connect(mapState)(SimpleStorage);
