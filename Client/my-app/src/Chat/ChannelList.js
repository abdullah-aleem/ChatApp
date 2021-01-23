import React from 'react';
import Channel from './Channel';



export default class ChannelList extends React.Component {
    render() {
        let list = 'there is no channels to show';
        if (this.props.channels) {
            list = this.props.channels.map(c => <Channel key={c.id} id={c.id} name={c.name} participants={c.participants}></Channel>);
        }
        return (
            <div className="channel-list">
                {list}
            </div>
        );
    }
}