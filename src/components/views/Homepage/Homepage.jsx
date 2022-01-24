import React from 'react';
import { Link } from 'react-router-dom';
import { START_PAGE } from '../../../constants/constants';
import styles from './Homepage.module.css';

export default function Homepage() {
  return (
    <div className={styles.main__block}>
      <div className={styles.homepage__card}>
        <h3 className={styles.homepage__card__title}>
          Hello, this is a Clever To-Do-List
        </h3>
        <p className={styles.homepage__card__description}>Let's start</p>
        <button className={styles.start__btn}>
          <Link to={START_PAGE} className={styles.link}>
            Start
          </Link>
        </button>
      </div>
    </div>
  );
}
