// ...
import React from 'react'
import PropTypes from 'prop-types'

// ..
class Todo extends React.Component {
    render() {
        // ..
        const { todo } = this.props
        // ..
        return (
            <div>
                <p>Тебе осталось { todo } ...</p>
            </div>
        )
    }
}

// ..
Todo.propTypes = {
    todo: PropTypes.string.isRequired
}

// ..
export default Todo