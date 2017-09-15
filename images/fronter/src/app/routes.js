// ..
import App from './app'
import Lending from './lending/components'
import Signin from './auth/components/signin'
import Signup from './auth/components/signup'

// ..
import { prepRoutes } from './plext/routes'
import authRoutes from './auth/routes'

// ...
const routes = [{
    path: '/',
    exact: true,
    component: Lending,
}].concat(
    prepRoutes('auth',authRoutes)
)

export default [{
    component: App,
    routes: routes,
}]

 