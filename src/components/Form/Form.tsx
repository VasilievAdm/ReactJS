import React, { useState, FC, memo } from 'react';

import { Input } from './components/Input/Input';
import { Button } from './components/Button/Button';
import { Author } from './components/Author/Author';

interface FormProps {
  addMessage: (value: string, author: string) => void;
}

export const Form: FC<FormProps> = memo(({ addMessage }) => {
  const [value, setValue] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addMessage(value, author);
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
