const express = require('express')

module.exports = function(server){
    
    //api routers
    const router = express.Router()
    server.use('/api', router)

    //todo routers
    const todoServer = require('../api/todo/todoService')
    todoServer.register(router, '/todos')
}