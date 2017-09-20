// ...
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'

// ..
import { plextForm } from '../../plext/components'
import * as actions from '../actions'

// ...
class Signin extends plextForm {

    // ..
    constructor(props) {
        super(props)
    }

    // ...
    handleFormSubmit(props) {
        // ..
        const { signinUser } = this.props        
        // ..
        signinUser(props)
    }

    // ...
    render(){
        // ..
        const { handleSubmit, errorMessage } = this.props
        // ..
        return (
            <div className="container">
            <div className="form-container">
                <h1>Sign in</h1>            
                <form onSubmit={handleSubmit(::this.handleFormSubmit)}>

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

                    {/* Server error message */}
                    { errorMessage && errorMessage.signin &&
                        <div className="error-container signin-error">
                            Oops! { errorMessage.signin }
                        </div> 
                    }

                    {/* Signin button */}
                    <button type="submit" className="btn">
                        Sign in
                    </button>

                    {/* Signup button */}
                    <div className="form-bottom">
                        <p>Dont have an account?</p>
                        <Link to="/auth/signup">
                            Click here to sign up
                        </Link>
                    </div>

                </form>
            </div>
            </div>            
        )
    }
}


// ..
const validate = (formProps) => {

    // ..
    const errors = {}
    // .
    if(!formProps.email) {
        errors.email = 'Email is required'}
    // ..
    if(!formProps.password) {
        errors.password = 'Password is required'}
    // ..
    return errors
}


// ...
const mapStateToProps = (state) => {
    return { 
        errorMessage: state.auth.error 
    }
}

// ...
Signin = reduxForm({ form: 'signin', validate })(Signin)
export default connect(mapStateToProps, actions)(Signin)