const express = require('express')
const server = express()

server.use(express.json())

const kickRouter = require('./routes/kicks')

server.use('/api/kicks', kickRouter)


module.exports = server