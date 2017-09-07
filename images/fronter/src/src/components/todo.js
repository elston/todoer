// ...
import React from 'react'
import PropTypes from 'prop-types'

// ..
import { 
    MONDAY, 
    THURSDAY, 
    WEDNESDAY, 
    TODO_WEEK 
} from '../constants/todo'

// ...
import TodoButton from './todoButton'

// ..
class Todo extends React.Component {

    // .
    render() {
        // ..
        const { todo, setTodo } = this.props
        const { name, day, fetching } = todo
        // ....
        let day_text = TODO_WEEK[day]
        let name_text = '... секундочку загружаем данные на ' + day_text
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