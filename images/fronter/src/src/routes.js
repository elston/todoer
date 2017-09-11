// import React from 'react'
// import { Route, IndexRoute } from 'react-router'

// // ..
// import App from './components/app'
// import Default from './components/default'

// // ...
// import Signin from './components/auth/signin'
// import Signup from './components/auth/signup'

// // ..
// export default (
//     <Route path="/" component={App}>
//         <IndexRoute component={Default} />
//         <Route path='admin' component={Signin} />
//         <Route path='genre' component={Signup} />
//     </Route>
// )

// import AppRoot from './app-root';
import Default from './components/default'
// import Home from './home';
// import List from './list';
// import NotFound from './notfound';
// import ListToUsers from './listtousers';

const routes = [{ 
    component: Default,
    routes: [{ 
        path: '/',
        exact: true,
        component: Home
    // },{ 
    //     path: '/home',
    //     component: Home
    // },{ 
    //     path: '/list',
    //     component: ListToUsers
    // },{ 
    //     path: '/users',
    //     component: List
    // },{
    //     path: '*',
    //     component: NotFound
    }]
}]

export default routes