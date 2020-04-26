import React, { useState } from 'react';

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
          <label htmlFor='login__email'>
            Login:
            <input
              id='login__email'
              type='email'
              name='email'
              value={formData.email}
              required
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label htmlFor='login__password'>
            Password:
            <input
              id='login__password'
              type='password'
              name='password'
              value={formData.password}
              required
              onChange={(e) => handleChange(e)}
            />
          </label>
          <button>Login</button>
        </fieldset>
      </form>
    </div>
  );
}
