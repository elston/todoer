// ..
import * as enums from './enums'

// ...
export default (state = {}, action) => {

    // ...
    switch(action.type) {

        /**
         * server errors massage
         */
        case enums.CLEAR_SERVER_ERRORS:
            return { ...state, error: {} }

        /**
         * auth
         */
        case enums.SIGNIN_SUCCESS:
            return { ...state, authenticated: true, error: {} }

        case enums.SIGNIN_FAIL:
            return { ...state, authenticated: false, error: { 
                    signin: action.payload 
            } }

        /**
         * sign up
         */ 
        case enums.SIGNUP_SUCCESS:
            return { ...state, signup: true, error: {} }

        case enums.SIGNUP_FAIL:
            return { ...state, signup: false, error: { 
                    signup: action.payload 
            }}

        /**
         * resend verify code
         */ 
        case enums.RESEND_VERIFYCODE_SUCCESS:
            return { ...state, resendVerifycode:true, error: {}}

        case enums.RESEND_VERIFYCODE_FAIL:
            return { ...state, resendVerifycode:false, error: { 
                    resendVerifycode: action.payload 
            }}            

    }

    // ...
    return state
}