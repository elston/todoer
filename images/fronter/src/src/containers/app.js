// ..
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'

// ...
import User from '../components/user'
import Todo from '../components/todo'

// ...
import * as todoActions from '../actions/todo'

class App extends React.Component {
    // ..
    render() {

        // ..
        const { user, todo } = this.props        
        // const { setTodo } = this.props.todoActions                
        const { setTodo } = this.props.actions        

        // ..
        return (
            <div>
                <User user={ user } />
                <Todo todo={ todo } setTodo={setTodo} />
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         todoActions: bindActionCreators(todoActions, dispatch)
//     }
// }

const mapDispatchToProps = (dispatch) => {
    // ..
    const { setTodo } = todoActions
    // ..
    const actions = {
        setTodo: (todo) => {
            dispatch(setTodo(todo))
        }
    }

    // ..
    return {
        actions:actions
    }
}


// ..
App.propTypes = {
    user: PropTypes.string.isRequired,
    todo: PropTypes.string.isRequired    
}

// ..
export default connect(mapStateToProps, mapDispatchToProps)(App)