const express = require('express')
const server = express()

const path = require('path')

server.use(express.json())

const pathToPublic = path.join(__dirname, '../public')

server.use(express.static(pathToPublic))

const kickRouter = require('./routes/kicks')

server.use('/api/kicks', kickRouter)


module.exports = server