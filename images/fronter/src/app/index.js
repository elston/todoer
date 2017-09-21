// ..
import React from 'react';
import ReactDOM, { render } from 'react-dom'
import { Provider } from 'react-redux'
// import { BrowserRouter as Router } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

// ..
import App from './app'
import configureStore, { history } from './store'
import './styles/bundle.scss'

// ..
const store = configureStore()
// import { createStore } from 'redux'
// const store = createStore( () => {}, {})
// ..
const root = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>
)

// const root = (
//     <Provider store={store}>
//         <Router>
//             <App/>
//         </Router>
//     </Provider>
// )

// ..
render(root, document.getElementById('root'))
