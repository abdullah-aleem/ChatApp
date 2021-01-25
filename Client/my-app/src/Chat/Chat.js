import React from 'react';
import ChannelList from "./ChannelList";
import './chat.scss'
import MessagesPannel from './Messagespannel';
var connectionOptions = {
    "force new connection": true,
    "reconnectionAttempts": "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
    "timeout": 10000,                  //before connect_error and connect_timeout are emitted.
    "transports": ["websocket"]
};
export default class Chat extends React.Component {
    constructor(props){
        super(props);
        this.state={
            channels: [{ id: 1, name: 'f', participants: 10 }]
        }
        this.loadChannels=this.loadChannels.bind(this);
    }
   
    
    
    
    //component did mount is fucntion that loads after the render method
    componentDidMount() {
        //calling the function that gets the channedls
        this.loadChannels();
    }
    
    
    
    //the funtion calls the fetch to fetch the all channels at the server whenever your page load
    loadChannels = async () => {    fetch('http://localhost:8080/getChannels').then(async response => {
        let data = await response.json();
            this.setState({ channels: data.channels });
    })}
    
    
    
    render() {
        return (

            <div>
                <div className="chat-app"></div>
                <ChannelList channels={this.state.channels}></ChannelList>
                <MessagesPannel />
            </div>
        );


    }
}