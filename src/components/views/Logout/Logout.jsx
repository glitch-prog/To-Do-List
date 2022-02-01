import React from 'react';
import userIcon from './Logout.images/user__icon.png';
import styles from './logout.module.css';

export function LogoutView({ logout, user, showUser, handleClickShowUser }) {
  return (
    <div>
      {showUser ? (
        <div className={styles.main__block}>
          <h4> User Logged In: </h4>
          <p>{user?.email}</p>
          <button onClick={logout}> Sign Out </button>
          <button onClick={handleClickShowUser}>Close</button>
        </div>
      ) : (
        <button className={styles.user__btn} onClick={handleClickShowUser}>
          <img src={userIcon} alt='user' />
        </button>
      )}
    </div>
  );
}
