import React from 'react';
import { useState } from 'react';
import caldendarIcon from './Calendar.images/calendar__icon.png';
import { CalendarView } from '../../views/Calendar/Calendar';
import styles from './Calendar.module.css';

export function CalendarContainer({ date1, setDate1, showAllTodos }) {
  const [showCalendar, setShowCalendar] = useState(false);
  const handleOnChangeSetDate = (event) => setDate1(event.target.value);
  const handleClickShowAllTodos = () => showAllTodos();
  const handleClickShowCalendar = () => setShowCalendar(!showCalendar);

  return (
    <div className={styles.main__block}>
      {showCalendar ? (
        <CalendarView
          date={date1}
          setDate={setDate1}
          handleOnChangeSetDate={handleOnChangeSetDate}
          handleClickShowAllTodos={handleClickShowAllTodos}
          handleClickShowCalendar={handleClickShowCalendar}
        />
      ) : (
        <button
          className={styles.calendar__btn}
          onClick={handleClickShowCalendar}
        >
          <img src={caldendarIcon} alt='calendar' />
        </button>
      )}
    </div>
  );
}
