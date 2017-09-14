import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

// ...
export default class App extends Component {
    // ..
    render() {
        return (
            <div>
                <div>Hello from router!! </div>
                <hr/>
                <ul>
                    <li><Link to="/">Домой</Link></li>
                    <li><Link to="/signin">Вход</Link></li>
                    <li><Link to="/signup">Регистрация</Link></li>
                </ul>
                <hr/>
                <div>{renderRoutes(this.props.route.routes)}</div>
            </div>
        )
    }
}