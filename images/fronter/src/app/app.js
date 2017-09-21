import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
// ..
import Routes from './routes'

// ...
export default class App extends Component {
  // ..
  render() {
    // ..
    return (
      <div>
        {/*...*/}
        <ul><li>
        <Link to="/">На главную</Link></li><li>
        <Link to="/auth/signin">Вход</Link></li><li>
        <Link to="/auth/signup">Регистрация</Link></li></ul>
        {/*...*/}                
        <Routes/>
      </div>
    )
  }
}