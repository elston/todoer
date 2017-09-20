import express from 'express'
// ..
import { requireSignin } from './passport'
import { signin as signinAuth } from './controllers'

// ..
const routes = express.Router()
routes.post('/signin', requireSignin, signinAuth)

// ..
export default routes

// routes.post('/signin', (req, res) => {
//     res.json({
//         name:'teach english'
//     })
// })