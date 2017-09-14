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

// ..
// const renderField = ({ input, type, placeholder, meta: { touched, error } }) => (
//     <div className={`input-group ${touched && error ? 'has-error' : ''}`}>
//         <input type={type} placeholder={placeholder} {...input} />
//         { touched && error && <div className="form-error">{error}</div> }
//     </div>
// )

const renderField = (field) => (
    <div className="input-row">
        <input {...field.input} type="text"/>
        {field.meta.touched && field.meta.error && 
        <span className="error">{field.meta.error}</span>}
    </div>
)


// ...
class Signin extends Component {

    // ...
    render(){
        return (
            <div className="form-container">
                <h1>Sign in</h1>            
                <form>

                    {/* Email */}
                    <Field 
                        name="email" 
                        component={renderField} 
                        type="text" 
                        placeholder="Email" />

                    {/* Password */}
                    <Field 
                        name="password" 
                        component={renderField} 
                        type="password" 
                        placeholder="Password" />                    

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