import React, { FC } from 'react';

interface ButtonProps {
  click: () => void;
  name: string;
}

export const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      className="button"
      onClick={props.click}
      style={{ backgroundColor: 'red' }}
    >
      {props.name}
    </button>
  );
};
