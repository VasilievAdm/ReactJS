import React, { Component } from 'react';

export class Message extends Component {
    render() {
        return <div className='message'>
            {this.props.send.map((message) => <p key={message.toString()}>{message}</p >)}
        </div>
    }
}