import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import mongoose from 'mongoose'
import cors from 'cors'
import compression from 'compression'

// ...
import * as config from './config'
import { authRoutes } from './auth/routes'

// ..
const app = express()

// ..db
mongoose.connect(config.dbConfig.db)
mongoose.set('debug', true)

// ..main
app.use(compression())
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json({ type: '*/*' }))

// ..routes
app.use('/auth', authRoutes)

// ..server
const port = config.SERVER_PORT
const server = http.createServer(app)
server.listen(port)
console.log('server listening on:', port)
