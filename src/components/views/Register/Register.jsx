import { Link } from 'react-router-dom';
import React from 'react';
import { LOGIN_PAGE } from '../../../constants/constants';
import styles from './Register.module.css';
export default function RegisterView({
  handleOnChangeRegisterEmail,
  handleOnChangeRegisterPassword,
  register,
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        <h3 className={styles.title}> Sign up </h3>
        <div>
          <p>Email</p>
          <input
            className={styles.signup__input}
            placeholder='Enter your email address...'
            onChange={handleOnChangeRegisterEmail}
          />
        </div>
        <div>
          <p>Password</p>
          <input
            className={styles.signup__input}
            placeholder='Enter your password...'
            type='password'
            onChange={handleOnChangeRegisterPassword}
          />
        </div>

        <button className={styles.signup__btn} onClick={register}>
          {' '}
          Sign up{' '}
        </button>
      </div>

      <div>
        <Link to={LOGIN_PAGE} className={styles.link}>
          Sign in
        </Link>
      </div>
    </div>
  );
}
