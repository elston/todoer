import React from 'react'
import { connect } from 'react-redux'


// ..
import AddTodo from '../Containers/AddTodo.jsx'

// ..
import { getTodos } from '../Actions/Index.jsx'

// ..
class App extends React.Component {
    // ...
    constructor(props) {
        super(props)
    }

    // ..
    componentDidMount() {
        this.props.dispatch(getTodos())
    }

    // ...
    render() {
        return (
            <div>
                <AddTodo />
            </div>
        );
    }
}

export default connect()(App);
