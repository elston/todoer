// ..
import App from './app'
import { prepRoutes } from './plext/routes'

// ..
import lendingRoutes from './lending/routes'
import authRoutes from './auth/routes'

// ...
const routes = []
.concat(prepRoutes('',lendingRoutes))
.concat(prepRoutes('auth',authRoutes))

// ...
export default [{
    component: App,
    routes: routes,
}]

 