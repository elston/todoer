import { SET_TODO } from '../constants/todo'
// ..
export const setTodo = (todo) => {
    // ...
    return {
        type: SET_TODO,
        payload: todo
    }
}

