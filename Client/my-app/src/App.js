import React from 'react';import logo from './logo.svg';import './App.css';import socketClient  from "socket.io-client";
const SERVER = "http://127.0.0.1:8080";
function App() {
  var connectionOptions = {
    "force new connection": true,
    "reconnectionAttempts": "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
    "timeout": 10000,                  //before connect_error and connect_timeout are emitted.
    "transports": ["websocket"]
};
  var socket = socketClient (SERVER,connectionOptions);
    socket.on('connection', () => {
        console.log(`I'm connected with the back-end`);
});
    return (
        <div classname="App">

            <header classname="App-header"></header>

                <img src="{logo}" classname="App-logo" alt="logo"></img>
                <p></p>        
                Edit <code>src/App.js</code> and save to reload.  
               <p></p>‍
               
               </div>

    );
                   }
                   
                   export default App;