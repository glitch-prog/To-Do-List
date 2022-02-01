import React from 'react';
import styles from './Calendar.module.css';

export function CalendarView({
  date,
  handleOnChangeSetDate,
  handleClickShowAllTodos,
  handleClickShowCalendar,
}) {
  return (
    <div className={styles.main__block}>
      <h3 className={styles.main__block__text}>
        Choose the date for your todos
      </h3>
      <input type='date' onChange={handleOnChangeSetDate} />
      <p className={styles.main__block__text}>You have choosed:{date}</p>

      <div className={styles.main__block__btns}>
        <button
          className={styles.main__block__btns__btn}
          onClick={handleClickShowAllTodos}
        >
          Show All
        </button>
        <button
          className={styles.main__block__btns__btn}
          onClick={handleClickShowCalendar}
        >
          Close
        </button>
      </div>
    </div>
  );
}
