import React from 'react';
const capitalizeStr = (str) => str.substr(0, 1).toUpperCase() + str.substr(1);

export default function FormInput({ comp, inputType, data, handleChange }) {
  let autocompleteVal;
  switch (inputType) {
    case 'password' && comp === 'login':
      autocompleteVal = 'current-password';
      break;
    case 'password' && comp === 'signup':
      autocompleteVal = 'new-password';
      break;
    default:
      break;
  }

  return (
    <label htmlFor={`${comp}__${inputType}`}>
      {capitalizeStr(inputType)}:
      <input
        id={`${comp}__${inputType}`}
        type={inputType}
        name={inputType}
        value={data[inputType]}
        autoComplete={autocompleteVal || inputType}
        required
        onChange={(e) => handleChange(e)}
      />
    </label>
  );
}
