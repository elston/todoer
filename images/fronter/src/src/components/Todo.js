// ...
import React from 'react'
import PropTypes from 'prop-types'

// ..
class Todo extends React.Component {

    // ..
    onTodoBtnClick(e) {
        // console.log(e.target.innerText)
        this.props.setTodo(e.target.innerText)
    }

    // .
    render() {
        // ..
        const { todo } = this.props
        // ..
        return (
            <div>
                <p>
                    <button onClick={::this.onTodoBtnClick}>teach english</button>
                    <button onClick={::this.onTodoBtnClick}>teach doiche</button>
                    <button onClick={::this.onTodoBtnClick}>teach spanish</button>
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