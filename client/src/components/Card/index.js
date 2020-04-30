import React from 'react';
import styles from './Card.module.css';

export default function Card({ user }) {
  const { image, name, phone, email } = user;
  return (
    <div className={styles.card}>
      <img className={styles.card_img} src={image} alt={name} />
      <div className={styles.info}>
        <h2 className={styles.staff_name}>{name}</h2>
        <p className={styles.staff_detail}> {phone}</p>
        <p className={styles.staff_detail}>{email}</p>
      </div>
    </div>
  );
}
