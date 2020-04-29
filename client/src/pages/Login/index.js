import React, { useState } from 'react';
import FormInput from '../../components/FormInput';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// TODO: cleanup unused
import {
  // setToken,
  // clearToken,
  // setErrors,
  // clearErrors,
  // setUser,
  // clearUser,
  loginUser,
  selectErrors,
} from '../../redux/authSlice';
const initalState = {
  email: '',
  password: '',
};

export default function Login() {
  const [formData, setFormData] = useState(initalState);
  const history = useHistory();
  const dispatch = useDispatch();
  const errors = useSelector(selectErrors);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting Form', formData);
    dispatch(loginUser(formData, history));
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
          <p className='error'>{errors.email}</p>
          <FormInput
            comp='login'
            inputType='password'
            data={formData}
            title='password'
            handleChange={handleChange}
          />
          <p className='error'>{errors.password}</p>
          <p className='error'>{errors.message}</p>
          <button>Login</button>
        </fieldset>
      </form>
      <Link to='/signup'>Create Account</Link>
    </div>
  );
}
