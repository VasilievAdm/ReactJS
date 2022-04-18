import React, { Component } from 'react';

export class Input extends Component {
  render() {
    return (
      <input
        className="input"
        type="text"
        value={this.props.value}
        onChange={this.props.change}
        placeholder="Enter text"
      />
    );
  }
}
