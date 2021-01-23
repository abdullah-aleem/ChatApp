import React,{Component} from 'react';
export default class Messages
 {
     render(){
         return(
<div>
    <div>{this.props.senderName}</div>
    <span>{this.props.text}</span> 
</div>
         );
     }
 }