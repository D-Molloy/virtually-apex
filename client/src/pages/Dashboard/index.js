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
    <div className='main'>
      {user.name ? (
        <div>
          <div className={styles.user_card}>
            <h2 className={styles.title}>Welcome</h2>
            <h1>{user.name}</h1>
            <p class={styles.user_detail}> {user.phone}</p>
            <p class={styles.user_detail}>{user.email}</p>
          </div>
          <h2 className={styles.title}>Staff Directory</h2>
          <div className={styles.staff_container}>{renderStaff()}</div>
        </div>
      ) : null}
    </div>
  );
}
