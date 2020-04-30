import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';
import styles from './Nav.module.css';

export default function Nav() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <nav className={styles.nav}>
      <h1 className={styles.nav_header}>Virtually Apex</h1>
      <div className={styles.logout_container}>
        <button
          style={
            pathname === '/dashboard'
              ? { visibility: 'visible' }
              : { visibility: 'hidden' }
          }
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
