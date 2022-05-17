import React, { FC } from 'react';
import { MessageList } from '../../components/MessageList/MessageList';
import { Form } from '../../components/Form/Form';
import { ChatList } from '../../components/ChatList';
import { Navigate, useParams } from 'react-router-dom';
import { WithClasses } from '../../HOC/WithClasses';

import style from './Chats.module.css';
import { shallowEqual, useSelector } from 'react-redux';
import { selectChatList, selectChats } from '../../store/chats/selector';

export const Chats: FC = () => {
  const { chatId } = useParams();
  const MessageListWithClass = WithClasses(MessageList);

  const chats = useSelector(selectChats, shallowEqual);
  const chatList = useSelector(selectChatList, shallowEqual);

  if (!chatList.find((chat) => chat.name === chatId)) {
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
            messages={chatId ? chats[chatId] : []}
            classes={style.color}
          />
          <Form />
        </div>
      </div>
    </div>
  );
};
