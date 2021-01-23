import React from 'react';
import Messages  from './Messages';
export default class MessagesPanel extends React.Component {
    render() {

        let list = <div classname="no-content-message">There is no messages to show</div>;
        if (this.props.channel && this.props.channel.messages) {
            list = this.props.channel.messages.map(m => <Messages key={m.id} id={m.id} sendername={m.senderName} text={m.text}></Messages>);
        }
        return (
            <div classname="messages-panel">
                <div classname="meesages-list">{list}</div>
                <div classname="messages-input">
                    <input type="text"/>‍
                </div>
                    <button>Send</button>‍
            </div>
            );
        }
    }