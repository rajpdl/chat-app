const express = require('express');
const path = require('path');



var publicPath = path.join(__dirname + '/../public');
var port = process.env.PORT || 3000;

var app = express();
app.use(express.static(publicPath));
const http = require('http').createServer(app);
const socketIO = require('socket.io')(http);

socketIO.on('connection', function(socket) {
    console.log('Connection is established');
    socket.on('createMessage', function(data) {
        socketIO.emit('newMessage', data);
    });
});

http.listen(port, () => {
    console.log(`Starting server on ${port}`)
});