import React from 'react';
import styles from './Card.module.css';

export default function Card({ user }) {
  const { image, name, phone, email } = user;
  return (
    <div class={styles.card}>
      <img class={styles.card_img} src={image} alt={name} />
      <div class={styles.info}>
        <h2>{name}</h2>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}
