// ..
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class App extends React.Component {
  render() {
    return (
        <div>
            Привет из App, { this.props.user }!
        </div>
    )
  }
}

// ..
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

// ..
App.propTypes = {
    user: PropTypes.string.isRequired  
}

// ..
export default connect(mapStateToProps)(App)