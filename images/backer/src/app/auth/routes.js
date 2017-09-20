import express from 'express'
// ..
import { requireSignin } from './passport'
import { signin as signinAuth } from './controllers'

// ..
const routes = express.Router()
routes.post('/signin', requireSignin, signinAuth)
// routes.post('/signup', (req, res) => {
//     console.log(req.body)
//     res.json({
//         name:'teach english'
//     })
// })

// ..
export default routes
