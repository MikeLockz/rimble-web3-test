import React from 'react'
import { Box, Flex, Text } from 'rimble-ui'
import Moment from 'react-moment';

const TransactionList = ({ transactionList }) => {
  return (
    <Box pb={4}>
      {Object.entries(transactionList).map(([key,transaction], index) => {
        console.log(transaction)
        
        return (
          <ul key={index}>
            <li>hash: {transaction.transactionHash}</li>
            <li>updated: <Moment interval={5} fromNow ago >{transaction.lastUpdated}</Moment></li>
            <li>from: <Moment interval={1} fromNow ago format="s">{transaction.lastUpdated}</Moment></li>
          </ul>
        )
      })}
    </Box>
  )
}

export default TransactionList
