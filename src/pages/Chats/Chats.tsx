import React, { FC, useEffect } from 'react';
import { MessageList } from 'src/components/MessageList/MessageList';
import { Form } from 'src/components/Form/Form';
import { ChatList } from 'src/components/ChatList';
import { Navigate, useParams } from 'react-router-dom';
import { WithClasses } from 'src/HOC/WithClasses';

import style from './Chats.module.css';
import { shallowEqual, useSelector } from 'react-redux';
import { selectChat, selectChatList, selectChats } from 'store/chats/selector';
import { StoreState } from 'src/store';
import { onValue, push } from 'firebase/database';
import { getChatsById, getMessageListById } from 'src/services/firebase';
import { nanoid } from 'nanoid';

export const Chats: FC = () => {
  const { chatId } = useParams();
  const MessageListWithClass = WithClasses(MessageList);

  const messages = useSelector((state: StoreState) =>
    selectChat(state, chatId || '')
  );
  const chats = useSelector(selectChats, shallowEqual);
  // const chatList = useSelector(selectChatList, shallowEqual);

  useEffect(() => {
    if (chatId) {
      onValue(getChatsById(chatId), (snapshot) => {
        const chat = snapshot.val();
        const lastMessage: any = Object.entries(chat.messageList)[
          Object.entries(chat.messageList).length - 2
        ][1];

        if (lastMessage.author !== 'Bot') {
          push(getMessageListById(chatId), {
            author: 'Bot',
            id: nanoid(),
            text: 'Im BOT',
          });
        }
      });
    }
  }, []);

  if (chatId && !chats[chatId]) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <div className="container">
      <div className="content">
        <div className="chat-list">
          <ChatList />
        </div>
        <div className="form">
          <div className="header"> Chat {chatId}</div>
          <MessageListWithClass
            messages={chatId ? messages : []}
            classes={style.color}
          />
          <Form />
        </div>
      </div>
    </div>
  );
};
