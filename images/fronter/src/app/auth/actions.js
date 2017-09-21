import axios from 'axios'
import fetch from 'isomorphic-fetch'
import { push } from 'react-router-redux'

// ..
import * as enums from './enums'

/**
 * Sign in
 */
export const signinUser = (props) => {
    // ..
    const { email, password } = props
    // ...
    return async (dispatch) => {
        // ...
        try {
            const res = await axios.post('/api/auth/signin', { email, password })
            // localStorage.setItem('user', JSON.stringify(res.data))
            // dispatch({ type: SIGNIN_SUCCESS })
            // browserHistory.push('/dushboard
            console.log(res.data)
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
export function signupUser(props) {
    // ...
    return async function (dispatch) {
        // axios.post(`${API_URL}/signup`, props)
        // .then(() => {
        // dispatch({ type: SIGNUP_SUCCESS });

        // browserHistory.push(`/reduxauth/signup/verify-email?email=${props.email}`);
        // })
        // .catch(response => dispatch(authError(SIGNUP_FAILURE, response.data.error)));

        try {
            const res = await axios.post('/api/auth/signup', props)
            // const data = res.data
            console.log(res.data)
            dispatch(push('/'))            
        } catch(err) {
            console.log(err)
            dispatch({
                type: enums.SIGNUP_FAILURE,
                payload: res.data.error,
            })
        }

    }
}