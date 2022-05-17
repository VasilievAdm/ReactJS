import React, { FC } from 'react';

interface Message {
  id: string;
  author: string;
  text: string;
}

interface MessageListProps {
  messages: Message[];
}

export const MessageList: FC<MessageListProps> = (props) => {
  return (
    <div className="message">
      {props.messages.map((message) => (
        <p key={message.id}>
          {message.author} : {message.text}
        </p>
      ))}
    </div>
  );
};
