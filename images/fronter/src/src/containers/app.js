// ..
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

// ...
import User from '../components/User'
import Todo from '../components/Todo'

// ...
import * as todoActions from '../actions/todoActions'

class App extends React.Component {
    // ..
    render() {

        // ..
        const { user, todo } = this.props        
        const { setTodo } = this.props.todoActions

        // ..
        return (
            <div>
                <User 
                    user={ 
                        user 
                    } 
                />
                <Todo 
                    todo={ 
                        todo 
                    }
                    setTodo={
                        setTodo
                    } 
                />
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

const mapDispatchToProps = (dispatch) => {
    return {
        todoActions: bindActionCreators(todoActions, dispatch)
    }
}


// ..
App.propTypes = {
    user: PropTypes.string.isRequired,
    todo: PropTypes.string.isRequired    
}

// ..
export default connect(mapStateToProps, mapDispatchToProps)(App)