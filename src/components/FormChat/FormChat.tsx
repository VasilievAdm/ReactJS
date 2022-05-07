import React, { useCallback, useState, FC } from 'react';
import { nanoid } from 'nanoid';
import { Input } from './components/Input/Input';
import { Button } from './components/Button/Button';
import { ChatList } from './components/ChatList/ChatList';

interface Chats {
  idx: string;
  name: string;
}

export const FormChat: FC = () => {
  const [name, setName] = useState('');
  const [chatList, setChatList] = useState<Chats[]>([]);
  const handleClick = useCallback(() => {
    setChatList([...chatList, { idx: nanoid(), name }]);
    setName('');
  }, [chatList, name]);

  const handleChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setName(ev.target.value);
    },
    []
  );

  return (
    <>
      <ChatList chats={chatList} />
      <Input change={handleChange} value={name} />
      <Button name={'New chat'} click={handleClick} />
    </>
  );
};
