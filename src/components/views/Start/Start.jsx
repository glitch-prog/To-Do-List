import React from 'react';
import { Link } from 'react-router-dom';
import { REGISTER_PAGE, LOGIN_PAGE } from '../../../constants/constants';
import styles from './Start.module.css';

export default function Start() {
  const date = new Date();
  console.log(date);
  return (
    <div className={styles.main__block}>
      <div className={`${styles.start__card} ${styles.start__card__sign__up}`}>
        <h3>Sign up</h3>
        <p>If you have an account, click here</p>
        <Link to={REGISTER_PAGE}>Sign up</Link>
      </div>

      <div className={`${styles.start__card} ${styles.start__card__sign__in}`}>
        <h3>Sign in</h3>
        <p>If you want to create a new account, click here</p>
        <Link to={LOGIN_PAGE}>Sign in</Link>
      </div>
    </div>
  );
}
