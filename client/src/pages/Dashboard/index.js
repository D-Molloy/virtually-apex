import React, { useEffect } from 'react';
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
  selectToken,
  getUser,
  selectUser,
} from '../../redux/authSlice';

export default function Dashboard() {
  const history = useHistory();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      history.push('/');
    }
    dispatch(getUser(token, history));
  }, [token]);

  return (
    <div>
      <h1>Dashboard</h1>
      {user.name ? (
        <div>
          <div>
            <h1>Welcome, {user.name}</h1>
            <p>(e) {user.email}</p>
            <p>(p) {user.phone}</p>
          </div>
          <div>pulled data goes here</div>
        </div>
      ) : null}
    </div>
  );
}
