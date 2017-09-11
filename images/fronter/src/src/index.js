// // import "./stylesheets/main.less"

// import React from 'react'
// import ReactDOM from 'react-dom'
// // import { Provider } from 'react-redux'
// import { Router, browserHistory } from 'react-router'
// import { Route, IndexRoute } from 'react-router'
// import App from './components/app'
// import Default from './components/default'

// // ..
// // import configureStore from './store'
// // import routes from './routes'

// // ...
// // const store = configureStore()

// // ...
// // ReactDOM.render(
// //     <Provider store={store}>
// //         <Router history={browserHistory} routes={routes} />
// //     </Provider>
// //     , document.getElementById('root')
// // )


// // ...
// // ReactDOM.render(
// //     <Provider store={store}>
// //         <Router history={browserHistory}>
// //             <Route path="/" component={App}>
// //                 <IndexRoute component={Default} />
// //             </Route>        
// //         </Router>
// //     </Provider>
// //     , document.getElementById('root')
// // )


// import React from 'react'
// import { render } from 'react-dom'
// import App from './components/app'
// import Default from './components/default'

// import { Router, Route, IndexRoute, browserHistory } from 'react-router'

// render(
//   <Router history={browserHistory}>
//     <Route path='/' component={App}>
//       <IndexRoute component={Default} />

//     </Route>
//   </Router>,
//   document.getElementById('root')
// )

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import App from './components/app'

ReactDOM.render((
     <Router>
        <Route path="/" component={App}/>
     </Router>
     ),
     document.getElementById('root')
);
