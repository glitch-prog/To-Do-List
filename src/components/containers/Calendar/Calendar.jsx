import React from 'react';

import { CalendarView } from '../../views/Calendar/Calendar';

export function CalendarContainer({
  date1,
  setDate1,
  showAllTodos,
}) {
  const handleOnChangeSetDate = (event) => setDate1(event.target.value);
  const handleClickShowAllTodos = () => showAllTodos();

  return (
    <div>
      <CalendarView
        date={date1}
        setDate={setDate1}
        handleOnChangeSetDate={handleOnChangeSetDate}
        handleClickShowAllTodos={handleClickShowAllTodos}
      />
    </div>
  );
}
