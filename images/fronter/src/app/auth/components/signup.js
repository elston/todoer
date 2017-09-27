import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { Link } from 'react-router-dom'

// ..
import { plextForm } from '../../plext/components'
import * as actions from '../actions'

// ..
class SignupForm extends plextForm {

    //...
    handleFormSubmit(props) {
        // ..
        const { signupUser } = this.props
        signupUser(props)
    }

    // ..
    render(){
        // ..
        const { handleSubmit, errorMessage } = this.props

        // ..
        return (
            <div className="form-container">

            {/* title */}
            <h1>Sign up</h1>

            {/* title */}
            <form onSubmit={handleSubmit(::this.handleFormSubmit)}>

            {/* Firstname */}
            <Field 
                name="firstname" 
                component={this.renderField} 
                type="text" 
                placeholder="First name" 
            />

            {/* Lastname */}
            <Field 
                name="lastname" 
                component={this.renderField} 
                type="text" 
                placeholder="Last name" 
            />

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

            {/* Repassword */}
            <Field 
                name="repassword" 
                component={this.renderField} 
                type="password" 
                placeholder="Repeat Password" 
            />

            {/* Server error message */}
            { errorMessage && errorMessage.signup &&
                <div className="error-container">
                    Oops! { errorMessage.signup }
                </div> 
            }

            {/* Submit button */}
            <button type="submit" className="btn">
                Sign up
            </button>

            {/* Sign in button */}
            <div className="form-bottom">
                <p>Already signed up?</p>
                <Link to="/auth/signin">
                    Click here to sign in
                </Link>
            </div>
            
            </form>
            </div>
        )
    }

}


// ..
const validate = props => {

    // ..
    const errors = {

    }
    // ..
    const fields = [
        'firstname', 
        'lastname', 
        'email', 
        'password', 
        'repassword'
    ]
    // ..
    fields.forEach((f) => {
        if(!(f in props)) {
            errors[f] = `${f} is required`}
    })
    // ..
    if(props.firstname && props.firstname.length < 3) {
        errors.firstname = "minimum of 4 characters"}

    if(props.firstname && props.firstname.length > 20) {
        errors.firstname = "maximum of 20 characters"}

    if(props.lastname && props.lastname.length < 3) {
        errors.lastname = "minimum of 4 characters"}

    if(props.lastname && props.lastname.length > 20) {
        errors.lastname = "maximum of 20 characters"}

    if(props.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(props.email)) {
        errors.email = "please provide valid email"}

    if(props.password && props.password.length < 6) {
        errors.password = "minimum 6 characters"}

    if(props.password !== props.repassword) {
        errors.repassword = "passwords doesn't match"}

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
const ReduxSignupForm = reduxForm({ form: 'signup', validate })(SignupForm)
export const ConnectedSignupForm = connect(mapStateToProps, actions)(ReduxSignupForm)

// ...
class Signup extends Component {

    // ..
    componentWillUnmount(){
        const { clearErrors } = this.props
        clearErrors()
    }

    // ...
    render(){
        // ..
        const ret = (
            <div className="container">
                <ConnectedSignupForm/>
            </div>
        )
        // ..
        return ret
    }

}

export default connect(null,actions)(Signup)