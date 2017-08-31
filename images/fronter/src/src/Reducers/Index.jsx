import { combineReducers } from 'redux'

// ..
import todos from './todos.jsx'

// ..
const todoApp = combineReducers({
  todos
})

// ...
export default todoApp
