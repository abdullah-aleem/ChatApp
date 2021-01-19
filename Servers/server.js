var app = require('express')();
var http = require('http').createServer(app);
const PORT = 8080;
var io = require('socket.io')(http);
//array of the current channels in the server
const STATIC_CHANNELS = ['global_notifications', 'global_chat'];

io.on('connection', (socket) => { /* socket object may be used to send specific messages to the new connected client */
    console.log('new client connected');
    socket.emit('connection', null);
});
//listen statement
http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});