import React, { useCallback, useEffect, useState, FC } from 'react';
import { nanoid } from 'nanoid';
import { Input } from './components/Input/Input';
import { Button } from './components/Button/Button';
import { Author } from './components/Author/Author';
import { MessageList } from './components/MessageList/MessageList';

interface Message {
  idx: string;
  author: string;
  value: string;
}

export const Form: FC = () => {
  const [value, setValue] = useState('');
  const [author, setAuthor] = useState('');
  const [messageList, setMessageList] = useState<Message[]>([]);

  const handleClick = useCallback(() => {
    setMessageList([...messageList, { idx: nanoid(), value, author }]);
    setValue('');
    setAuthor(author);
  }, [messageList, value, author]);

  const handleChangeM = useCallback(
    (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(ev.target.value);
    },
    []
  );

  const handleChangeA = useCallback(
    (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
      setAuthor(ev.target.value);
    },
    []
  );

  useEffect(() => {
    if (
      messageList.length > 0 &&
      messageList[messageList.length - 1].author === ''
    ) {
      const timeout = setTimeout(() => {
        setMessageList([
          ...messageList,
          { idx: nanoid(), author: 'Bot', value: 'Enter your name.' },
        ]);
      }, 1500);
      return () => {
        clearTimeout(timeout);
      };
    } else if (
      messageList.length > 0 &&
      messageList[messageList.length - 1].value === '' &&
      messageList[messageList.length - 1].author !== ''
    ) {
      const timeout = setTimeout(() => {
        setMessageList([
          ...messageList,
          { idx: nanoid(), author: 'Bot', value: 'Your message is empty.' },
        ]);
      }, 1500);
      return () => {
        clearTimeout(timeout);
      };
    } else if (
      messageList.length > 0 &&
      messageList[messageList.length - 1].author !== 'Bot'
    ) {
      const timeout = setTimeout(() => {
        setMessageList([
          ...messageList,
          { idx: nanoid(), author: 'Bot', value: 'Thank you for your appeal.' },
        ]);
      }, 1500);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messageList]);

  return (
    <>
      <MessageList messages={messageList} />
      <Author change={handleChangeA} value={author} />
      <Input change={handleChangeM} value={value} />
      <Button name={'Send'} click={handleClick} disabled={!author} />
    </>
  );
};
