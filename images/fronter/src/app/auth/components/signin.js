// // ..
// import React from 'react'
// // ..
// export default () => (
//     <div>
//         <div>
//             Раздел signin
//         </div>
//     </div>
// )

// ...
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'

// ..
import { plextForm } from '../../plext/components'


// ...
class Signin extends plextForm {

    // ..
    constructor(props) {
        super(props)
    }

    // ...
    render(){
        return (
            <div className="form-container">
                <h1>Sign in</h1>            
                <form>

                    {/* Email */}
                    <Field
                        name="email"
                        component={this.renderField}
                        type="text"
                        placeholder="Email"
                    />

                    {/* Password */}
                    <Field
                        name="password"
                        component={this.renderField}
                        type="password"
                        placeholder="Password"
                    />

                    {/* Forgot password */}
                    <div className="password-forgot">
                        <Link to="/auth/reset-password">
                            I forgot my password
                        </Link>
                    </div>

                </form>
            </div>
        )
    }
}


// ..
function validate(formProps) {

    // ..
    const errors = {};

    // .
    if(!formProps.email) {
        errors.email = 'Email is required'
    }

    // ..
    if(!formProps.password) {
        errors.password = 'Password is required'
    }

    // ..
    return errors;
}


// ...
export default reduxForm({ form: 'signin', validate })(Signin)