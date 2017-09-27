import React from 'react'
import { Switch, Route } from 'react-router-dom'
// ..
import Signin from './components/signin'
import Signup from './components/signup'
import ResetPassword from './components/reset_password'

export default () => (
  <Switch>
    <Route exact path='/auth' component={Signin} />
    <Route path='/auth/signin' component={Signin} />
    <Route path='/auth/signup' component={Signup} />
    <Route path='/auth/reset-password' component={ResetPassword} />
  </Switch>
)