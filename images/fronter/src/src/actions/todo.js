// ...
import fetch from 'isomorphic-fetch'

// ..
import { 
    SET_TODO, 
    SET_TODO_SUCCESS,
    TODO_LIST
} from '../constants/todo'
// ..

// ...
export const setTodo = (day) => {
    // ...
    return (dispatch) => {
        // ..
        dispatch({
            type: SET_TODO,
            payload: day
        })

        // ..
        // setTimeout(() => {
        //     // ..
        //     const name = TODO_LIST[day]
        //     // ..
        //     dispatch({
        //         type: SET_TODO_SUCCESS,
        //         payload: name
        //     })
        // }, 1000)    

        // ...
        fetch('/api/todo/'+day)
        .then(req => {
            return req.json()
        })
        .then(json => {
            dispatch({
                type: SET_TODO_SUCCESS,
                payload: json.name
            })
        })        

    }
}

