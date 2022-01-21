import React from 'react';

export default function DateButtton({
  selectedDate,
  setSelectedDate,
  setTodos,
  todos,
  day,
}) {
  const filterByDay = async (setTodos, todos, day) => {
    setTodos(todos.filter((todo) => day === todo.day));
    console.log('done');
  };

  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  const calendar = new Array(daysInMonth(1, 2022))
    .fill(0)
    .map((item, index) => {
      index = index + 1;
      return (
        <button
          onClick={(event) => {
            setSelectedDate(event.target.textContent);
            filterByDay(setTodos, todos, day);
          }}
          key={index.toString()}
        >
          {index}
        </button>
      );
    });

  return <div>{calendar}</div>;
}
