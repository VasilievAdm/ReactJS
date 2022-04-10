import React, { Component } from 'react';

export class Message extends Component {
    render() {
        return <div className="message">
            {this.props.send.map((message) => <p>{message}</p >)}
        </div>
    }
}


