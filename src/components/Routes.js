import React from 'react'
import {Route, Switch, Router} from 'react-router-dom'
import history from '../history';
import SimpleStorage from './SimpleStorage';
import ToastCard from './ToastCard'
import { Box, Card, Heading } from 'rimble-ui'

const Routes = () =>
  <Router history={history}>
    <div>
      <Box my={'auto'}>
        <Card width={'420px'} mx={'auto'} px={4}>
          <Heading.h1>Smart Contract Flow</Heading.h1>
          <Switch>
            <Route exact path='/' component={SimpleStorage} />
          </Switch>
        </Card>
      </Box>

      <ToastCard transaction={{ 'type': 'success' }} />
    </div>
  </Router>

export default Routes;
