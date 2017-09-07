// ..
'use strict';

// ...
import express from 'express'

// ...
export const TODO_LIST = {
    MONDAY:'teach english',
    THURSDAY:'teach german',
    WEDNESDAY:'teach spanish',    
}

// ..
const PORT = process.env.SERVER_PORT
const HOST = process.env.SERVER_HOST

// ...
const app = express()

// ...
app.get('/', (req, res)=>{
    console.log('OK')
    res.send('Hello World');
})

// ...
app.get('/api/todos', (req, res) => {
    console.log('OK OK ')
    res.json({
        name:'teach english'
    })
})

// ...
app.get('/api/todo/:day', (req, res) => {
    // ..
    console.log('OK - ',req.params.day)

    // ..
    const day = req.params.day
    res.json({
        name:TODO_LIST[day]
    })
})

// ...
app.use((req, res)=>{
    res.sendStatus(404)
})


// ...
const server = app.listen(PORT, HOST, (err)=>{
    // ...
    if (err) {
        console.log(err)
        return
    }
    // ...
    console.log('server listening on port: %s', PORT)
})