import express from 'express'
// ..
// import { requireSignin } from './passport'
import * as ctrl from './controllers'

// ..
const routes = express.Router()
routes.post('/signin', ctrl.requireSignin, ctrl.signin)
routes.post('/signup', ctrl.signup)
routes.post('/resend-verifycode', ctrl.resend_verifycode)
// routes.post('/signup', (req, res) => {
//     console.log(req.body)
//     res.json({
//         name:'teach english'
//     })
// })

// ..
export default routes
