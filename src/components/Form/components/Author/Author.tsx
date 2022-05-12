import React, { FC } from 'react';

interface AuthorProps {
  change: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
}

export const Author: FC<AuthorProps> = (props) => {
  return (
    <input
      className="author"
      type="text"
      value={props.value}
      onChange={props.change}
      placeholder="Who are you?"
    />
  );
};
