import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav() {
  const history = useHistory();
  const { pathname } = useLocation();
  console.log('pathname', pathname);
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
          onClick={() => console.log('LOGGING OFF')}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
