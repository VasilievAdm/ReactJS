import React, { useState, FC, memo } from 'react';

import { Input } from './components/Input/Input';
import { Button } from './components/Button/Button';
import { Author } from './components/Author/Author';
import { useParams } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { useDispatch } from 'react-redux';
import { addMessageWithReply } from '../../store/chats/slice';
import { ChatsState } from '../../store/chats/reducer';
import { AddMessage } from '../../store/chats/types';

export const Form: FC = memo(() => {
  const [value, setValue] = useState('');
  const [author, setAuthor] = useState('');
  const { chatId } = useParams();
  const dispatch =
    useDispatch<ThunkDispatch<ChatsState, void, ReturnType<AddMessage>>>();

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatId) {
      dispatch(
        addMessageWithReply({
          chatId,
          message: { text: value, author: author },
        })
      );
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
