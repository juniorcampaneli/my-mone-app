const port = 3005;
const bodyParser = require('body-parser');
const express = require('express');
const allowCors = require('./cors')
const queryParser = require('express-query-int') //Converte uma string na url em int.

const server = express();

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(allowCors)
server.use(queryParser)

server.listen(port, function (){
    console.log(`Backend on port: ${port}, is running.`)
})

module.exports = server