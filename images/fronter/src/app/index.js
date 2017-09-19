// ..
import React from 'react';
import ReactDOM, { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'


// ..
import configureStore from './store'
import routes from './routes'
import './styles/bundle.scss'

// ..
const store = configureStore()
// import { createStore } from 'redux'
// const store = createStore( () => {}, {})
// ..
const root = (
    <Provider store={store}>
        <Router>
            {renderRoutes(routes)}
        </Router>
    </Provider>
)

// ..
render(root, document.getElementById('root'))
