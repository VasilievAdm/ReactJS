import React, { Component } from 'react';

export class Message extends Component {
    render() {
        return <div className='message'>
            {this.props.send.map((message, idx) => <p key={idx}>{message}</p >)}
        </div>
    }
}