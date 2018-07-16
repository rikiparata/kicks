const express = require('express')
const server = express()

const kickRouter = require('./routes/kicks')

server.use('/api/kicks', kickRouter)


module.exports = server