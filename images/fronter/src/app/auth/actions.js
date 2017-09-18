import axios from 'axios'
// ..
import * as enums from './enums'


/**
 * Sign in
 */
export const signinUser = (props) => {

    // ..
    const { email, password } = props
    console.log(email, password)
    // ..
    return (dispatch) => {

        dispatch({ 
            type: enums.SIGNIN_SUCCESS 
        })


        // // ...
        // axios.post('/api/auth/signin', { email, password })
        // .then((res) => {
        //     // ..
        //     localStorage.setItem('user', JSON.stringify(res.data))
        //     // ..
        //     dispatch({ 
        //         type: enums.SIGNIN_SUCCESS 
        //     })
        //     // ...
        //     // browserHistory.push('/reduxauth/users')
        // })
        // .catch(() => {
        //     dispatch({
        //         type: enums.SIGNIN_FAIL,
        //         payload: "Email or password isn't right",
        //     })
        // })
    }
}