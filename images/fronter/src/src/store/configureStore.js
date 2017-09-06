import { createStore } from 'redux'
import rootReducer from '../reducers'

const configureStore = (initialState) => {
    // ..
    const store = createStore(rootReducer, initialState)

    // ..herota
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    // ...
    return store
}

export default configureStore