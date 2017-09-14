// // ..
// import React from 'react'
// // ..
// export default () => (
//     <div>
//         <div>
//             Раздел signin
//         </div>
//     </div>
// )

// ...
import React, { Component } from 'react'

// ...
export default class Signin extends Component {
    render(){
        return (
            <div className="form-box">
                <h1 className="form-title">Sign in</h1>            
                <div>
                    Раздел signin
                </div>
            </div>
        )
    }
}