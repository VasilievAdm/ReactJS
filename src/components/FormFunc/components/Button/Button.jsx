import React from 'react';

export const Button = (props) => {
  return (
    <button
      className="button"
      onClick={props.click}
      disabled={props.disabled}
      style={{ backgroundColor: 'red' }}
    >
      {props.name}
    </button>
  );
};
// import React from 'react';

// export const Button = ({ disabled, onButtonClick }) => {
//   return (
//     <button type="submit" disabled={disabled} onClick={onButtonClick}>
//       click
//     </button>
//   );
// };
