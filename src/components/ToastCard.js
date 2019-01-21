import React from 'react'
import TransactionList from './TransactionList'
import { Box, Card, Heading, Flex, Button, OutlineButton, Text, ToastMessage, Select, Field, Input } from 'rimble-ui'


class ToastCard extends React.Component {
  state = {
    transactionList: [],
    toastType: 'error',
    toastTx: '0x0',
  }

  changeToastType = (event) => {
    this.setState({toastType: event.target.value});
  }
  changeToastTx = (e) => {
    this.setState({toastTx: event.target.value});
  }

  addTransactionUpdate = (e) => {
    e.preventDefault()

    let newTransaction = {
      'type': this.state.toastType,
      'tx': this.state.toastTx,
    }
    this.setState({
      transactionList: [...this.state.transactionList, newTransaction]
    })
  }

  render() {
    const transactionList = this.state.transactionList

    return(
      <div>
        <Card width={'420px'} mx={'auto'} px={4}>
          <Heading.h5>Incoming Toast Messages:</Heading.h5>
          <Box>
            <TransactionList transactionList={transactionList}></TransactionList>

            <Flex px={0} pt={4} borderTop={1} borderColor={'#E8E8E8'} justifyContent='space-between' flexDirection={'column'}>
              {/* <OutlineButton size={'medium'} mr={4}>Close Toast</OutlineButton> */}
              <Field label='Type' width={'100%'}></Field>
              <Select items={['error', 'success', 'warning', 'failure',]} value={this.state.toastType} onChange={this.changeToastType} style={{ width: '100%', boxSizing: 'border-box' }} />

              <Field mt={2} label='tx' width={'100%'}>
                <Input type='text' placeholder='0xabcd3456...' value={this.state.toastTx} onChange={this.changeToastTx} width={'100%'} style={{ display:'block', width: '100%', boxSizing: 'border-box' }} />
              </Field>
              
              <Button mt={4} size={'medium'} onClick={this.addTransactionUpdate}>Show Toast</Button>
            </Flex>
          </Box>
        </Card>

        <ToastMessage.Container
          maxWidth={'auto'}
          style={{ maxWidth: 'auto', display: 'none', width: 'auto' }}
        >
          <ToastMessage.Success
            my={3}
            message={'Payment Confirmed'}
            secondaryMessage={'6efd...5909'}
            actionText={'View Details'}
            maxWidth={'auto'}
            style={{ maxWidth: 'auto', display: 'none', width: 'auto' }}
          />
        </ToastMessage.Container>
      </div>    
    )
  }
}

export default ToastCard;
