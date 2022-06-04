import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { ListItem } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectChatList } from 'store/chats/selector';
import { nanoid } from 'nanoid';
import { push, remove } from 'firebase/database';
import { chatsRef, getChatsById } from 'src/services/firebase';

export const ChatList: FC = () => {
  const [name, setName] = useState('');

  const chatList = useSelector(
    selectChatList,
    (prev, next) => prev.length === next.length
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name) {
      const id = nanoid();

      push(chatsRef, {
        id,
        messageList: {
          empty: true,
        },
        name,
      });
      setName('');
    }
  };

  const handleDeleteChat = (id: string) => {
    remove(getChatsById(id));
  };

  return (
    <>
      <ul>
        {chatList.map((chat) => (
          <ListItem className="chat-list" key={chat.id}>
            <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
            <button onClick={() => handleDeleteChat(chat.id)}>x</button>
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
