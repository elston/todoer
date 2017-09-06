// ..
import React from 'react'
import PropTypes from 'prop-types'

// ..
class User extends React.Component {

    // ...
    render() {
        // ..
        const { user } = this.props
        // ..
        return(
            <div>
                <p>Привет, { user }!</p>
            </div>
        )
    }
}

// ..
User.propTypes = {
    user: PropTypes.string.isRequired
}


export default User