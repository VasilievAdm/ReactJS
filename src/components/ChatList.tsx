import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { ListItem } from '@mui/material';
import { addChat, deleteChat } from '../store/chats/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectChatList } from '../store/chats/selector';

export const ChatList: FC = () => {
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const chatList = useSelector(
    selectChatList,
    (prev, next) => prev.length === next.length
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name) {
      dispatch(addChat(name));
      setName('');
    }
  };

  return (
    <>
      <ul>
        {chatList.map((chat) => (
          <ListItem className="chat-list" key={chat.id}>
            <Link to={`/chats/${chat.name}`}>{chat.name}</Link>
            <button onClick={() => dispatch(deleteChat(chat.name))}>x</button>
          </ListItem>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          className="chat-list_input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">add chat</button>
      </form>
    </>
  );
};
