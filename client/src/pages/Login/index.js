import React, { useState } from 'react';
import FormInput from '../../components/FormInput';
const initalState = {
  email: '',
  password: '',
};

export default function Login() {
  const [formData, setFormData] = useState(initalState);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting Form', formData);
  };

  return (
    <div>
      <h1 id='login__title'>Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <legend>Login</legend>
          <FormInput
            comp='login'
            inputType='email'
            data={formData}
            handleChange={handleChange}
          />
          <FormInput
            comp='login'
            inputType='password'
            data={formData}
            handleChange={handleChange}
          />
          <button>Login</button>
        </fieldset>
      </form>
    </div>
  );
}
