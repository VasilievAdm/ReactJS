import React from 'react';
import './App.scss';
import { Form } from './components/FormFunc/Form';
import { FormChat } from './components/FormChat/FormChat';

export const App = () => {
  return (
    <div className="container">
      <div className="header">Message sender</div>
      <div className="content">
        <div className="chat-list">
          <FormChat />
        </div>
        <div className="form">
          <Form />
        </div>
      </div>
    </div>
  );
};
