// ...
import React from 'react'
import PropTypes from 'prop-types'

// ..
import { MONDAY, THURSDAY, WEDNESDAY } from '../constants/todo'

// ..
class Todo extends React.Component {

    // ..
    onTodoBtnClick(e) {
        e.preventDefault()        
        // ..
        const { setTodo } = this.props        
        console.log(e.target)
        setTodo(e.target.innerText)
    }

    // .
    render() {
        // ..
        const { todo } = this.props
        // ..
        return (
            <div>
                <p>
                    <button 
                        onClick={ ::this.onTodoBtnClick }
                        todoTarget={ MONDAY }
                    >
                        Понедельник
                    </button>
                    {' '}
                    <button onClick={ ::this.onTodoBtnClick }>
                        Вторник
                    </button>
                    {' '}                    
                    <button onClick={ ::this.onTodoBtnClick }>
                        Среда
                    </button>
                </p>
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