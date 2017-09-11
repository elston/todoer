// import React, { Component } from 'react'
// import { Link } from 'react-router'

// // ...
// export default class App extends Component {
//     render() {
//         return (
//             <div className='container'>
//                 <h1>App</h1>
//                 <ul>
//                     <li><Link to='/admin'>Admin</Link></li>
//                     <li><Link to='/genre'>Genre</Link></li>
//                 </ul>
//                 {this.props.children}
//             </div>
//         )
//     }
// }


import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import Home from './home'
import Signin from './auth/signin'
import Signup from './auth/signup'

// ...
// export default class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>App</h1>
//             </div>
//         )
//     }
// }


// export default () =>  (
//     <div>
//         <h1>App</h1>
//     </div>
// )

export default () => (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signin">Signin</Link></li>
            <li><Link to="/signup">Signup</Link></li>            
        </ul>
        <hr/>
        <Route exact path="/" component={Home}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/signup" component={Signup}/>        
    </div>
)