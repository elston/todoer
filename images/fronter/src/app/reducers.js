// ..
import { combineReducers } from 'redux'

// ..
import auth from './auth/reducers'

// ..
const reducers = { auth }
// ..
export default combineReducers(reducers)

// export default combineReducers({ auth })
