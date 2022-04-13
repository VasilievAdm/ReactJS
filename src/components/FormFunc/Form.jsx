import React, { useCallback, useEffect, useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { Author } from './Author';
import { MessageList } from './MessageList';

export const Form = () => {
  const [value, setValue] = useState('')
  const [author, setAuthor] = useState('')
  // const [message, setMessage] = useState('')
  const [messageList, setMessageList] = useState([])



  const handleClick = () => {
    setMessageList([...messageList, { value, author }])
    setValue('')
    setAuthor(author)
  }

  const handleChangeM = useCallback((ev) => {
    setValue(ev.target.value)
  }, [])

  const handleChangeA = useCallback((ev) => {
    setAuthor(ev.target.value)
  }, [])

  useEffect(() => {
    if (messageList.length > 0 && messageList[messageList.length - 1].author === '') {
      setTimeout(() => {
        setMessageList([...messageList, { author: 'Bot', value: 'Enter your name.' }]);
      }, 1500);
      return () => {
        clearTimeout(setTimeout);
      }
    }
    else if (messageList.length > 0 && messageList[messageList.length - 1].value === '' && messageList[messageList.length - 1].author !== '') {
      setTimeout(() => {
        setMessageList([...messageList, { author: 'Bot', value: 'Your message is empty.' }]);
      }, 1500);
      return () => {
        clearTimeout(setTimeout);
      }
    }
    else if ((messageList.length > 0 && messageList[messageList.length - 1].author !== 'Bot')) {
      setTimeout(() => {
        setMessageList([...messageList, { author: 'Bot', value: 'Thank you for your appeal.' }]);
      }, 1500);
      return () => {
        clearTimeout(setTimeout);
      }
    }
  }, [messageList])

  return <>

    <Input change={handleChangeM} value={value} />
    <Author change={handleChangeA} value={value} />
    <Button name={'Send'} click={handleClick} />
    <MessageList messages={messageList} />
  </>

}