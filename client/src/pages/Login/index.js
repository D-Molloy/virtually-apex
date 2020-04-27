import React, { useState } from 'react';
import FormInput from '../../components/FormInput';
import { Link } from 'react-router-dom';
// useHistory
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
            title='email'
            handleChange={handleChange}
          />

          <FormInput
            comp='login'
            inputType='password'
            data={formData}
            title='password'
            handleChange={handleChange}
          />

          <button disabled={!formData.email || !formData.password}>
            Login
          </button>
        </fieldset>
      </form>
      <Link to='/signup'>Create Account</Link>
    </div>
  );
}
