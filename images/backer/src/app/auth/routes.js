// ..
import express from 'express'

// ..
// import { requireSignin } from './passport'
// import { signin as signinAuth } from './controllers'

// ..
const routes = express.Router()
// routes.post('/signin', requireSignin, signinAuth)
routes.get('/signin', (req, res) => {
    console.log('OK OK ')
    res.json({
        name:'teach english'
    })
})

// ..
export default routes