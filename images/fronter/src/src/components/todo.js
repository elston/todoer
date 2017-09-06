// ...
import React from 'react'
import PropTypes from 'prop-types'

// ..
import { MONDAY, THURSDAY, WEDNESDAY } from '../constants/todo'

// ...
import TodoButton from './todoButton'

// ..
class Todo extends React.Component {

    // .
    render() {
        // ..
        const { todo, setTodo } = this.props
        // ..
        return (
            <div>
                <TodoButton 
                    descr={ MONDAY }
                    action={ setTodo }
                />
                {' '}
                <TodoButton 
                    descr={ THURSDAY }
                    action={ setTodo }
                />
                {' '}                
                <TodoButton 
                    descr={ WEDNESDAY }
                    action={ setTodo }
                />                
                <p>
                    Тебе осталось { todo } ...
                </p>
            </div>
        )

    }
}

// ..
Todo.propTypes = {
    todo: PropTypes.string.isRequired,
    setTodo: PropTypes.func.isRequired
}

// ..
export default Todo