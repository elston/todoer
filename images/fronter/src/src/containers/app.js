// ..
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// ...
import User from '../components/User'
import Todo from '../components/Todo'

class App extends React.Component {
    render() {

        // ..
        const { user, todo } = this.props        

        // ..
        return (
            <div>
                <User user={ user } />
                <Todo todo={ todo } />
            </div>
        )
    }
}

// ..
const mapStateToProps = (state) => {
    // ...
    return {
        user: state.user,
        todo: state.todo        
    }
}

// ..
App.propTypes = {
    user: PropTypes.string.isRequired,
    todo: PropTypes.string.isRequired    
}

// ..
export default connect(mapStateToProps)(App)