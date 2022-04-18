import React from 'react';
import './App.css';
import { Form } from './components/FormFunc/Form';

export const App = () => {
  return (
    <>
      <div className="container">
        <div className="header">Message sender</div>
        <Form />
      </div>
    </>
  );
};
