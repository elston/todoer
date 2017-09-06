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
        const { name, fetching } = todo
        let name_text = '... секундочку загружаем'
        if (!fetching){
            name_text = name
        }
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
                    Тебе осталось { name_text } ...
                </p> 
            </div>
        )

    }
}

// ..
Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    setTodo: PropTypes.func.isRequired
}

// ..
export default Todo