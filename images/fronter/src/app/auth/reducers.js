// ..
import * as enums from './enums'

// ...
export default (state = {}, action) => {

    // ...
    switch(action.type) {


        /**
         * auth
         */
        case enums.SIGNIN_SUCCESS:
            return { 
                ...state, 
                authenticated: true, 
                error: {} 
            }

        case enums.SIGNIN_FAIL:
            return { 
                ...state, 
                error: { 
                    signin: action.payload 
                } 
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

        case enums.SIGNUP_FAIL:
            return { 
                ...state, 
                signup: false, 
                error: { 
                    signup: action.payload 
                } 
            }

    }

    // ...
    return state
}