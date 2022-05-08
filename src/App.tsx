import React, { FC, useMemo, useState } from 'react';
import './App.scss';
import { nanoid } from 'nanoid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Chats } from './pages/Chats';
import { ChatList } from './components/ChatList';

export interface Chat {
  id: string;
  name: string;
}

export interface Message {
  id: string;
  author: string;
  value: string;
}
export interface Messages {
  [key: string]: Message[];
}

const initialMessage: Messages = {
  default: [
    {
      id: '1',
      author: 'USER',
      value: 'Hello geekbrains',
    },
  ],
};

export const App: FC = () => {
  const [messages, setMessages] = useState<Messages>({});

  const chatList = useMemo(
    () =>
      Object.entries(messages).map((chat) => ({
        id: nanoid(),
        name: chat[0],
      })),
    [Object.entries(messages).length]
  );

  const onAddChat = (chat: Chat) => {
    if (!messages[chat.name]) {
      setMessages({
        ...messages,
        [chat.name]: [],
      });
    } else {
      alert('Такой чат уже существует');
    }
  };

  const onDeleteChat = (chatName: string) => {
    const newMessages: Messages = { ...messages };
    delete newMessages[chatName];

    setMessages({
      ...newMessages,
    });
  };

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />

            <Route path="chats">
              <Route
                index
                element={
                  <ChatList
                    chatList={chatList}
                    onAddChat={onAddChat}
                    onDeleteChat={onDeleteChat}
                  />
                }
              />
              <Route
                path=":chatId"
                element={
                  <Chats
                    messages={messages}
                    setMessages={setMessages}
                    chatList={chatList}
                    onAddChat={onAddChat}
                    onDeleteChat={onDeleteChat}
                  />
                }
              />
            </Route>
          </Route>

          <Route path="*" element={<h2>404</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
