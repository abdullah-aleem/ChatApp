import React from "react";
export default class Channel extends React.Component {
    render() {
        return (
            <div>
                <div>{this.props.name}</div>
                <span>{this.props.participants}</span>
            </div>
        );
    }
}