import React, { FC } from 'react';

interface ButtonProps {
  disabled: boolean;
  onButtonClick?: () => void;
  name: string;
}

export const Button: FC<ButtonProps> = ({ name, disabled, onButtonClick }) => {
  return (
    <button
      type="submit"
      className="button"
      disabled={disabled}
      onClick={onButtonClick}
      style={{ backgroundColor: 'red' }}
    >
      {name}
    </button>
  );
};
