import React, { useState } from 'react';
import FormInput from '../../components/FormInput';
import { Link } from 'react-router-dom';

// useHistory
const initalState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  phone: '',
};

export default function Signup() {
  const [formData, setFormData] = useState(initalState);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting Form', formData);
  };

  return (
    <div>
      <h1 id='login__title'>Signup</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <legend>Create Account</legend>
          <FormInput
            comp='signup'
            inputType='text'
            data={formData}
            title='name'
            handleChange={handleChange}
          />
          <FormInput
            comp='signup'
            inputType='email'
            data={formData}
            title='email'
            handleChange={handleChange}
          />
          <FormInput
            comp='signup'
            inputType='phone'
            data={formData}
            title='phone'
            handleChange={handleChange}
          />
          <FormInput
            comp='signup'
            inputType='password'
            data={formData}
            confirm
            title='password'
            handleChange={handleChange}
          />
          <FormInput
            comp='signup'
            inputType='password'
            title='confirm password'
            data={formData}
            handleChange={handleChange}
          />
          <button>Create Account</button>
        </fieldset>
      </form>
      <Link to='/'>Login</Link>
    </div>
  );
}
