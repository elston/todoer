// require("./stylesheets/main.less");

import React from 'react'
import { render } from 'react-dom'
// ..
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
// ..
import todoApp from './Reducers/Index.jsx'
import App from './Components/Index.jsx'

// ...
let store = compose(
    applyMiddleware(
        thunk
    )
)(createStore)(todoApp)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-app')
)
