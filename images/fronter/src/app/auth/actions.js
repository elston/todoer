import axios from 'axios'
import fetch from 'isomorphic-fetch'
import { push } from 'react-router-redux'

// ..
import * as enums from './enums'

/**
 * server errors massage
 */

export const clearErrorsAction = () => {
    return async (dispatch) => {
        await dispatch({ type: enums.CLEAR_SERVER_ERRORS })
    }
}


/**
 * Sign in
 */
export const signinAction = (props) => {
    const { email, password } = props
    return async (dispatch) => {
        try {
            const res = await axios.post('/api/auth/signin', { email, password })
            // localStorage.setItem('user', JSON.stringify(res.data))
            // dispatch({ type: SIGNIN_SUCCESS })
            // browserHistory.push('/dushboard
            console.log(res.data)
            dispatch(push('/'))            
        } catch(err) {
            console.log(err)
            dispatch({
                type: enums.SIGNIN_FAIL,
                payload: "Email or password isn't right",
            })
        }
    }           
}



/**
 * Sign up
 */
export const signupAction = (props) => {
    return async (dispatch) => {
        try {
            await axios.post('/api/auth/signup', props)
            await dispatch({ type: enums.SIGNUP_SUCCESS })
            await dispatch(push(`/auth/signup/waitconfirm?email=${props.email}`))
        } catch(err) {
            await dispatch({
                type: enums.SIGNUP_FAIL,
                payload: err.response.data.error,
            })
        }
    }
}

/**
 * Resend verification code
 */
export const actionResendVerifycode = (props) => {
  return async (dispatch) => {
    try {
        await axios.post('/api/auth/resendcode', props)
        await dispatch({ type: enums.RESENDCODE_SUCCESS })
    }catch(err){
        await dispatch({
            type: enums.RESENDCODE_FAIL,
            payload: err.response.data,
        })
    }
  }
}