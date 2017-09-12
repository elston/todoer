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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/signin">Signin</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                </ul>
                <hr/>
                <div>{renderRoutes(this.props.route.routes)}</div>
            </div>
        )
    }
}