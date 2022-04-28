import React, { FC } from 'react';

interface Message {
  idx: string;
  author: string;
  value: string;
}

interface MessageListProps {
  messages: Message[];
}

export const MessageList: FC<MessageListProps> = (props) => {
  return (
    <div className="message">
      {props.messages.map((message) => (
        <p key={message.idx}>
          {message.author} : {message.value}
        </p>
      ))}
    </div>
  );
};
