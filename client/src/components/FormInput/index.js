import React from 'react';
import styles from './FormInput.module.css';
const capitalizeStr = (str) => str.substr(0, 1).toUpperCase() + str.substr(1);

export default function FormInput({
  comp,
  inputType,
  data,
  handleChange,
  title,
}) {
  // determine different autocomplete values
  let autocompleteVal = '';
  switch (inputType) {
    case 'password':
      switch (comp) {
        case 'login':
          autocompleteVal = 'current-password';
          break;
        case 'signup':
          autocompleteVal = 'new-password';
          break;
        default:
          break;
      }
      break;
    case 'text':
      autocompleteVal = 'name';
      break;
    default:
      break;
  }

  let altValue = '';
  switch (title) {
    case 'confirm password':
      altValue = 'confirmPassword';
      title = 'confirmPassword';
      break;
    default:
      break;
  }

  return (
    <div className={styles.container}>
      <label htmlFor={`${comp}__${inputType}`}>{capitalizeStr(title)}:</label>
      <input
        id={`${comp}__${altValue || inputType}`}
        className='formInput__input'
        type={inputType}
        name={altValue || title}
        value={data[title]}
        autoComplete={autocompleteVal || inputType}
        required
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
