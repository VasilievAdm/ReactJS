import React, { Component } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { Message } from './Message';

export class Form extends Component {
  state = {
    name: 'Send',
    value: '',
    messages: [],
  };

  handleClick = () => {
    this.setState({ messages: [...this.state.messages, this.state.value] });
    this.setState({ value: '' });
  };

  handleChange = (ev) => {
    this.setState({ value: ev.target.value });
  };

  render() {
    return (
      <>
        <Input change={this.handleChange} value={this.state.value} />
        <Button name={this.state.name} click={this.handleClick} />
        <Message send={this.messages} />
      </>
    );
  }
}
