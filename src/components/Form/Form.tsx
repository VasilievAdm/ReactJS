import React, { useState, FC, memo } from 'react';

import { Input } from './components/Input/Input';
import { Button } from './components/Button/Button';
import { Author } from './components/Author/Author';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { push } from 'firebase/database';
import { getMessageListById } from 'src/services/firebase';

export const Form: FC = memo(() => {
  const [value, setValue] = useState('');
  const [author, setAuthor] = useState('');
  const { chatId } = useParams();

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatId && value) {
      const id = nanoid();
      push(getMessageListById(chatId), {
        author,
        id,
        text: value,
      });
    }
    setValue('');
  };
  const handleChangeM = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value);
  };

  const handleChangeA = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(ev.target.value);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <Author change={handleChangeA} value={author} />
      <Input change={handleChangeM} value={value} />
      <Button name={'Send'} disabled={!author} />
    </form>
  );
});
