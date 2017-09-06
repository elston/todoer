// ...
import { SET_TODO, SET_TODO_SUCCESS } from '../constants/todo'
// ..
const initialState = {
    name:'teach english'
}

// ..
const todo = (state = initialState, action) => {

    // ...
    // console.log(state, action.type, action.payload)
    switch (action.type) {

        // ..
        case SET_TODO:
            console.log(state)
            return { 
                ...state, 
                week: action.payload,
                fetching: true
            }

        // ..
        case SET_TODO_SUCCESS:
            console.log(state)
            return { 
                ...state, 
                name: action.payload,
                fetching: false
            }

        // ..
        default:
            return state
    }
}

// ...
export default todo
