// ..
import * as enums from './enums'

// ...
export default function(state = {}, action) {

    // ...
    switch(action.type) {


        /**
         * auth
         */
        case enums.AUTH_USER_SUCCESS:
            return { 
                ...state, 
                authenticated: true, 
                error: {} 
            }

        case enums.AUTH_USER_FAILURE:
            return { 
                ...state, 
                error: { signin: action.payload } 
            }

        /**
         * sign up
         */ 
        case enums.SIGNUP_SUCCESS:
            return { 
                ...state, 
                signup: true, 
                error: {} 
            }

        case enums.SIGNUP_FAILURE:
            return { 
                ...state, 
                signup: false, 
                error: { signup: action.payload } 
            }

    }

    // ...
    return state
}