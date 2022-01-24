import React from 'react';

import { CalendarView } from '../../views/Calendar/Calendar';

export function CalendarContainer({ date1, setDate1, filterByDate }) {
  const handleOnChangeSetDate = (event) => setDate1(event.target.value);
  const handleClickFilterTodos = () => filterByDate();
  return (
    <div>
      <CalendarView
        date={date1}
        setDate={setDate1}
        handleOnChangeSetDate={handleOnChangeSetDate}
        handleClickFilterTodos={handleClickFilterTodos}
      />
    </div>
  );
}
