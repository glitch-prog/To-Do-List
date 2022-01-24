import React from 'react';
import { Link } from 'react-router-dom';
import { REGISTER_PAGE } from '../../../constants/constants';
import styles from './Login.module.css';

export function LoginView({ onChangePassword, onChangeEmail, onClickLogin }) {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <h3 className={styles.title}> Sign in </h3>
          <div>
            <p>Email</p>
            <input
              className={styles.signin__input}
              placeholder='Enter your email...'
              onChange={onChangeEmail}
            />
          </div>
          <div>
            <p>Password</p>
            <input
              className={styles.signin__input}
              placeholder='Enter your password...'
              type='password'
              onChange={onChangePassword}
            />
          </div>
          <button className={styles.signin__btn} onClick={onClickLogin}>
            {' '}
            Sign in
          </button>
        </div>
        <div>
          <Link to={REGISTER_PAGE} className={styles.link}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
