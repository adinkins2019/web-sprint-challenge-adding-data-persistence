const PORT = 9000
const express = require('express')
const projectsRouter = require('./projects/projectsRouter')
const server = express()

server.use(express.json())
server.use('/projects', projectsRouter)

server.use( (err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "It's not you. It's me. Try again at a later time. "
    })
})

server.listen(PORT, ()=> {
    console.log(`The server is listening on PORT ${PORT}`)
})