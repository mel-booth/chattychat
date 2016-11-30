var express = require('express')
var app = express()
app.use(express.static('server/public'))


// var server = require('http').createServer();

var server = require('http').createServer(app);

var io = require('socket.io')(server)
io.on('connection', function(client){
  client.on('event', function(data){})
  client.on('disconnect', function(){})
})

server.listen(3000)
