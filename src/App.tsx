import React, { useCallback, useEffect, useState } from 'react';
import './App.scss';
import { Form } from './components/FormFunc/Form';

import { FormChat } from './components/FormChat/FormChat';
import { MessageList } from './components/MessageList/MessageList';
import { nanoid } from 'nanoid';

interface Message {
  id: string;
  author: string;
  value: string;
}

export const App = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = useCallback((value: string, author: string) => {
    setMessages((prevMessage) => [
      ...prevMessage,
      {
        id: nanoid(),
        author,
        value,
      },
    ]);
  }, []);

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].author === '') {
      const timeout = setTimeout(() => {
        setMessages([
          ...messages,
          { id: nanoid(), author: 'Bot', value: 'Enter your name.' },
        ]);
      }, 1500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);

  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].value === '' &&
      messages[messages.length - 1].author !== ''
    ) {
      const timeout = setTimeout(() => {
        setMessages([
          ...messages,
          { id: nanoid(), author: 'Bot', value: 'Your message is empty.' },
        ]);
      }, 1500);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].author !== 'Bot') {
      const timeout = setTimeout(() => {
        setMessages([
          ...messages,
          { id: nanoid(), author: 'Bot', value: 'Thank you for your appeal.' },
        ]);
      }, 1500);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);

  return (
    <div className="container">
      <div className="header">Message sender</div>
      <div className="content">
        <div className="chat-list">
          <FormChat />
        </div>
        <div className="form">
          <MessageList messages={messages} />
          <Form addMessage={addMessage} />
        </div>
      </div>
    </div>
  );
};
