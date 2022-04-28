import React, { FC } from 'react';
import { Button as ButtonUI } from '@mui/material';

interface ButtonProps {
  disabled: boolean;
  click: () => void;
  name: string;
}

export const Button: FC<ButtonProps> = (props) => {
  return (
    //   <button
    //     className="button"
    //     onClick={props.click}
    //     disabled={props.disabled}
    //     style={{ backgroundColor: 'red' }}
    //   >
    //     {props.name}
    //   </button>
    // );
    <ButtonUI onClick={props.click} disabled={props.disabled}>
      {props.name}
    </ButtonUI>
  );
};
