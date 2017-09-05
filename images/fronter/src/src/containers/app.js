// ..
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class App extends React.Component {
  render() {
    return (
        <div>
            Привет из App, { this.props.user }!
            <br/>
            Lets go, { this.props.todo } ...
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