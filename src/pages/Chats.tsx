import React, { FC, useCallback, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Chat, Messages } from '../App';
import { MessageList } from '../components/MessageList/MessageList';
import { Form } from './../components/Form/Form';
import { ChatList } from '../components/ChatList';
import { useParams } from 'react-router-dom';

interface ChatsProps {
  messages: Messages;
  setMessages: React.Dispatch<React.SetStateAction<Messages>>;
  chatList: Chat[];
  onAddChat: (chats: Chat) => void;
  onDeleteChat: (chatName: string) => void;
}

export interface Message {
  id: string;
  author: string;
  value: string;
}

export const Chats: FC<ChatsProps> = ({
  chatList,
  onAddChat,
  messages,
  setMessages,
  onDeleteChat,
}) => {
  const { chatId } = useParams();

  const addMessage = useCallback(
    (value: string, author: string) => {
      if (chatId) {
        setMessages((prevMessage) => ({
          ...prevMessage,
          [chatId]: [
            ...prevMessage[chatId],
            {
              id: nanoid(),
              author,
              value,
            },
          ],
        }));
      }
    },
    [chatId, setMessages]
  );

  useEffect(() => {
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].author === ''
    ) {
      const timeout = setTimeout(() => {
        setMessages({
          ...messages,
          [chatId]: [
            ...messages[chatId],
            { id: nanoid(), author: 'Bot', value: 'Enter your name.' },
          ],
        });
      }, 1500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [chatId, messages, setMessages]);

  useEffect(() => {
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].value === '' &&
      messages[chatId][messages[chatId].length - 1].author !== ''
    ) {
      const timeout = setTimeout(() => {
        setMessages({
          ...messages,
          [chatId]: [
            ...messages[chatId],
            { id: nanoid(), author: 'Bot', value: 'Your message is empty.' },
          ],
        });
      }, 1500);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [chatId, messages, setMessages]);

  useEffect(() => {
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].author !== 'Bot'
    ) {
      const timeout = setTimeout(() => {
        setMessages({
          ...messages,
          [chatId]: [
            ...messages[chatId],
            {
              id: nanoid(),
              author: 'Bot',
              value: 'Thank you for your appeal.',
            },
          ],
        });
      }, 1500);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [chatId, messages, setMessages]);

  return (
    <div className="container">
      <div className="content">
        <div className="chat-list">
          <ChatList
            chatList={chatList}
            onAddChat={onAddChat}
            onDeleteChat={onDeleteChat}
          />
        </div>
        <div className="form">
          <div className="header"> Chat {chatId}</div>
          <MessageList messages={chatId ? messages[chatId] : []} />
          <Form addMessage={addMessage} />
        </div>
      </div>
    </div>
  );
};
