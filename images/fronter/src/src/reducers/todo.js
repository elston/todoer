// // ..
// const initialState = 'teach english'

// // ..
// const todo = (state = initialState) => {
//     return state
// }

// // ..
// export default todo

// ..
const initialState = 'teach english'

// 
const todo = (state = initialState, action) => {

    // ...
    console.log(state, action.type, action.payload)
    switch (action.type) {

        // ..
        case 'SET_TODO':
            // return { ...state, todo: action.payload }
            return action.payload

        // ..
        default:
            return state;
    }
}

export default todo