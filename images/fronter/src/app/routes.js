// ..
import App from './app'
import Lending from './lending/components'
import Signin from './auth/components/signin'
import Signup from './auth/components/signup'

// ...
const routes = [{
    path: '/',
    exact: true,
    component: Lending,
},{
    path: '/signin',
    component: Signin,
},{
    path: '/signup',
    component: Signup,    
}]
// ..

export default [{
    component: App,
    routes: routes,
}]

 