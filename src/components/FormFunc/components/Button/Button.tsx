import React, { FC } from 'react';

interface ButtonProps {
  disabled: boolean;
  onButtonClick?: () => void;
  name: string;
}

export const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      type="submit"
      className="button"
      disabled={props.disabled}
      style={{ backgroundColor: 'red' }}
    >
      {props.name}
    </button>
  );
};
