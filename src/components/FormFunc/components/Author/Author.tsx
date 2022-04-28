import React, { FC } from 'react';

interface AuthorProps {
  change: (e: unknown) => void;
  author: string;
}

export const Author: FC<AuthorProps> = (props) => {
  return (
    <input
      className="author"
      type="text"
      value={props.author}
      onChange={props.change}
      placeholder="Who are you?"
    />
  );
};
