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
    // const API_URL = PROCESS_ENV_API_URL
    // ..
    return async (dispatch) => {

        // console.log(`${API_URL}/auth/signin`)
        // dispatch({ 
        //     type: enums.SIGNIN_SUCCESS 
        // })


        // // ...
        // axios.post(`${API_URL}/auth/signin`, { email, password })
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

        // axios.get(`${API_URL}/auth/signin`)
        // .then((res) => {
        //     // ..
        //     console.log(res)
        //     // localStorage.setItem('user', JSON.stringify(res.data))
        //     // // ..
        //     // dispatch({ 
        //     //     type: enums.SIGNIN_SUCCESS 
        //     // })
        //     // // ...
        //     // // browserHistory.push('/reduxauth/users')
        // })
        // .catch(() => {
        //     dispatch({
        //         type: enums.SIGNIN_FAIL,
        //         payload: "Email or password isn't right",
        //     })
        // }) 

        // fetch('/api/auth/signin')
        // .then((req) => {
        //     console.log(req.json())
        // })        
        // .catch((err) => {
        //     console.log(err)
        //     dispatch({
        //         type: enums.SIGNIN_FAIL,
        //         payload: "Email or password isn't right",
        //     })
        // })         

        try {
            const res = await fetch('/api/auth/signin')
            const data = await res.json()
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