import React, { useState, useEffect } from 'react';
import FormInput from '../../components/FormInput';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginUser, selectErrors, clearErrors } from '../../redux/authSlice';
import styles from './Login.module.css';

const initalState = {
  email: '',
  password: '',
};

export default function Login() {
  const [formData, setFormData] = useState(initalState);
  const history = useHistory();
  const dispatch = useDispatch();
  const errors = useSelector(selectErrors);

  useEffect(() => {
    dispatch(clearErrors());
  }, [dispatch]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData, history));
  };

  return (
    <div className='main'>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <fieldset className='card'>
          <p className={styles.title}>Login</p>
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
          <button align='center'>Login</button>
        </fieldset>
      </form>
      <Link to='/signup'>Create Account</Link>
    </div>
  );
}
