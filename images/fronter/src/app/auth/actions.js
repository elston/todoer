import axios from 'axios'
// ..
import * as enums from './enums'


/**
 * Sign in
 */
export function signinUser(props) {
    // ..
    const { email, password } = props

    // ..
    return function (dispatch) {
        axios.post('/api/auth/signin', { email, password })
        .then((res) => {
            localStorage.setItem('user', JSON.stringify(res.data))
            dispatch({ 
                type: enums.AUTH_USER_SUCCESS 
            })
            // browserHistory.push('/reduxauth/users')
        })
        .catch(() => {
            dispatch({
                type: enums.AUTH_USER_FAILURE,
                payload: "Email or password isn't right",
            })
        })
    }
}