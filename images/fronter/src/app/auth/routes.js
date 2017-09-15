import Signin from './components/signin'
import Signup from './components/signup'
import ResetPassword from './components/reset_password'


const routes = [{
    path: '/signin',
    component: Signin,
},{
    path: '/signup',
    component: Signup,
},{
    path: '/reset-password',
    component: ResetPassword,    
}]


export default routes