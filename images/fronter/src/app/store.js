import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
// ..
import rootReducer from './reducers'


// ..
export const history = createHistory()
// ...
export default ({initialState={}}={}) => {
  // ..middleware
  const rouware = routerMiddleware(history)
  const middleware = applyMiddleware(thunk, rouware)
  // ...store
  const store = createStore(rootReducer, initialState, middleware)
  // ...
  return store
}