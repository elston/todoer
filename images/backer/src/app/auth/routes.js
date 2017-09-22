import express from 'express'
// ..
// import { requireSignin } from './passport'
import { 
    requireSignin,
    signin, 
    signup,
} from './controllers'

// ..
const routes = express.Router()
routes.post('/signin', requireSignin, signin)
routes.post('/signup', signup)
// routes.post('/signup', (req, res) => {
//     console.log(req.body)
//     res.json({
//         name:'teach english'
//     })
// })

// ..
export default routes
