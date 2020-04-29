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
  createUser,
  selectErrors,
} from '../../redux/authSlice';

const initalState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  phone: '',
};

export default function Signup() {
  let history = useHistory();
  const errors = useSelector(selectErrors);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initalState);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(formData, history));
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
          <p className='error'>{errors.name}</p>
          <FormInput
            comp='signup'
            inputType='email'
            data={formData}
            title='email'
            handleChange={handleChange}
          />
          <p className='error'>{errors.email}</p>
          <FormInput
            comp='signup'
            inputType='phone'
            data={formData}
            title='phone'
            handleChange={handleChange}
          />
          <p className='error'> {errors.phone}</p>
          <FormInput
            comp='signup'
            inputType='password'
            data={formData}
            confirm
            title='password'
            handleChange={handleChange}
          />
          <p className='error'>{errors.password}</p>
          <FormInput
            comp='signup'
            inputType='password'
            title='confirm password'
            data={formData}
            handleChange={handleChange}
          />
          <p className='error'> {errors.confirmPassword}</p>
          <p className='error'>{errors.message}</p>
          <button>Create Account</button>
        </fieldset>
      </form>
      <Link to='/'>Login</Link>
    </div>
  );
}
