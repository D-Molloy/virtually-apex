import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import API from '../../utils/API';
import { selectToken, getUser, selectUser } from '../../redux/authSlice';
import styles from './Dashboard.module.css';
import Card from '../../components/Card';

export default function Dashboard() {
  const history = useHistory();
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    if (!token) {
      history.push('/');
    }
    dispatch(getUser(token, history));
  }, [token, dispatch, history]);

  useEffect(() => {
    API.getStaff(token)
      .then(({ data }) => setStaff(data))
      .catch(() => history.push('/'));
  }, [token, history]);

  const renderStaff = () => {
    return staff.map((emp) => <Card user={emp} key={emp.id} />);
  };
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
          <div className={styles.staff_container}>{renderStaff()}</div>
        </div>
      ) : null}
    </div>
  );
}
