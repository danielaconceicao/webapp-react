const express = require('express')
const server = express()
const MoviesRouter = require('./router/movies')
const NotFound = require('./middleware/notFound')
const ServerError = require('./middleware/serverError')
const cors = require('cors')

const HOST = process.env.HOST
const PORT = process.env.PORT


server.use(cors())

server.listen(PORT, () => {
    console.log(`${HOST}:${PORT}`)
})

server.get('/' , (req, res) => {
    res.send('Vamos nessa')
})

server.use('/movies', MoviesRouter)

server.use(NotFound)

server.use(ServerError)