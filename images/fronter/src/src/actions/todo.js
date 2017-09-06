// ...
import { 
    SET_TODO, 
    SET_TODO_SUCCESS,
    TODO_LIST
} from '../constants/todo'
// ..
// export const setTodo = (name) => {
//     // ...
//     return {
//         type: SET_TODO,
//         payload: name
//     }
// }

export const setTodo = (week) => {
    // ...
    return (dispatch) => {
        // ..
        dispatch({
            type: SET_TODO,
            payload: week
        })

        // ..
        setTimeout(() => {
            // ..
            const name = TODO_LIST[week]
            // ..
            dispatch({
                type: SET_TODO_SUCCESS,
                payload: name
            })
        }, 1000)        
    }
}

