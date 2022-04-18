import React from 'react';

export const Button = (props) => {
  return (
    <button className="button" onClick={props.click} disabled={props.disabled}>
      {props.name}
    </button>
  );
};
