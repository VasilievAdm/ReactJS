import React, { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { Message } from './Message';

export const Form = () => {
  const [name] = useState('Send')
  const [value, setValue] = useState('')
  const [messages, setMessages] = useState([])

  const handleClick = () => {
    setMessages([...messages, value])
    setValue('')
  }

  const handleChange = (ev) => {
    setValue(ev.target.value)
  }

  return <>
    <Input change={handleChange} value={value} />
    <Button name={name} click={handleClick} />
    <Message send={messages} />
  </>

}