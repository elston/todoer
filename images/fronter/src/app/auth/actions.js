import axios from 'axios'
import fetch from 'isomorphic-fetch'

// ..
import * as enums from './enums'

/**
 * Sign in
 */
export const signinUser = (props) => {

    // ..
    const { email, password } = props
    // ..
    // return async (dispatch) => {
    //     // ...
    //     try {
    //         const res = await fetch('/api/auth/signin')
    //         const data = await res.json()
    //         console.log(data)
    //     } catch(err) {
    //         console.log(err)
    //         dispatch({
    //             type: enums.SIGNIN_FAIL,
    //             payload: "Email or password isn't right",
    //         })
    //     }
    // }  

    return async (dispatch) => {
        // ...
        try {
            const res = await axios.post('/api/auth/signin', { email, password })
            const data = res.data
            console.log(data)
        } catch(err) {
            console.log(err)
            dispatch({
                type: enums.SIGNIN_FAIL,
                payload: "Email or password isn't right",
            })
        }
    }           
}