// ..
import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'


// ..
import configureStore from './store'
import routes from './routes'
import './bundle.scss'

// ..
const store = configureStore()
// import { createStore } from 'redux'
// const store = createStore( () => {}, {})
// ..
ReactDOM.render((
        <Provider store={store}>    
            <Router>
                {renderRoutes(routes)}
            </Router>
        </Provider>
    ),
    document.getElementById('root')
)
