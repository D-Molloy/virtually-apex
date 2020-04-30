import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createUser, selectErrors, clearErrors } from '../../redux/authSlice';

import FormInput from '../../components/FormInput';
import styles from '../Login/Login.module.css';
// TODO: cleanup unused

const initalState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  phone: '',
};

export default function Signup() {
  const history = useHistory();
  const errors = useSelector(selectErrors);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initalState);

  useEffect(() => {
    dispatch(clearErrors());
  }, [dispatch]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(formData, history));
  };

  return (
    <div className='main'>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <fieldset className='card'>
          <p className={styles.title}>Create Account</p>
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
