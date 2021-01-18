var app= require('express');
// const { isObject } = require('util');
var http=require('http').createServer(app);
//calling socket io
var io=require('socket.io')(http);
//setting up the server and setting the localhost port for the communication
const PORT= 4001;
//setting up a socket listener for the server
io.on('connection', ()=>{
    console.log("client connected");
})
//listen what is comming to the server 
http.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
})