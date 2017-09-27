import React from 'react'
import { Switch, Route } from 'react-router-dom'
// ..
import lendingApp from './lending/components/app'
import authApp from './auth/app'

// ..
export default () => (
  <Switch>
    <Route exact path='/' component={lendingApp} />
    <Route path='/auth' component={authApp} />
  </Switch>
)