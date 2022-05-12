import React, { FC } from 'react';

interface InputProps {
  change: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
}

export const Input: FC<InputProps> = (props) => {
  return (
    <input
      className="input"
      type="text"
      value={props.value}
      onChange={props.change}
      placeholder="Enter text"
    />
  );
};
