// ...
import React from 'react'
import PropTypes from 'prop-types'


class todoBotton extends React.Component {
}

todoBotton.propTypes = {
    todo: PropTypes.string.isRequired,
    setTodo: PropTypes.func.isRequired
}

// ..
export default todoBotton