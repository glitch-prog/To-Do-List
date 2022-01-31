import React from 'react';

export function CalendarView({
  date,
  handleOnChangeSetDate,
  handleClickShowAllTodos,
}) {
  return (
    <div>
      <h3>Choose the date for your todos</h3>
      <input type='date' onChange={handleOnChangeSetDate} />
      <p>You have choosed:{date}</p>
      <button onClick={handleClickShowAllTodos}>Show All</button>
    </div>
  );
}
