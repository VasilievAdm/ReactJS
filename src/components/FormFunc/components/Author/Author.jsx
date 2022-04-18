import React from 'react';

export const Author = (props) => {
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
