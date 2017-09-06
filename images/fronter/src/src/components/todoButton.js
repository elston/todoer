// ...
import React from 'react'
import PropTypes from 'prop-types'


// ..
import { TODO_WEEK, TODO_LIST } from '../constants/todo'

// ..
class TodoButton extends React.Component {
    // ..
    // constructor(props) {
    //     super(props);
    // }

    // ..
    onButtonClick(e){
        e.preventDefault()

        // ..
        const { descr, action } = this.props
        const todo_text = TODO_LIST[descr]
        action(todo_text)
    }

    // ..
    render() { 

        // ..
        const { descr } = this.props
        const descr_text = TODO_WEEK[descr]

        // ...
        return (
            <button onClick={ ::this.onButtonClick }>
                { descr_text }
            </button>
        )
    }
}

// ..
TodoButton.propTypes = {
    descr: PropTypes.string.isRequired,
    action:PropTypes.func.isRequired,
}

// ..
export default TodoButton