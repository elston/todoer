// ..
import fetch from 'isomorphic-fetch';


// ..
// ..=====================================
// ..
export const sendTodo = () => {
    return {
        type: 'SEND_TODO'
    }
}


// ..
export const addTodo = (text) => {
    return dispatch => {
        dispatch(sendTodo()),
        fetch(`/api/todos/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: text
            })
        })
        .then(req => req.json())
        .then(json => dispatch(receiveTodo(json)));
    }
}




// ..
// ..=====================================
// ...
export const requestTodos = () => {
    return {
        type: 'REQUEST_TODOS'
    }
}
// ..
export const getTodos = () => {
    return dispatch => {
        dispatch(requestTodos()),
        fetch(`/api/todos/`)
        .then(req => req.json())
        .then(json => dispatch(receiveTodos(json)));
    }
}



