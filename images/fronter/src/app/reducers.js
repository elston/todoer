// ..
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import auth from './auth/reducers'

// ..
const reducers = { 
    form,
    auth 
}

// ..
export default combineReducers(reducers)


