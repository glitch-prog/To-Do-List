import React from 'react';
import { useState } from 'react/cjs/react.development';
// import { db } from '../../config/firebase-config';
import { todayDay, arr } from '../../utils/variables';

export default function DateButtton({
  selectedDate,
  setSelectedDate,
  setTodos,
  todos,
  day,
}) {
  const filterByDay = async (setTodos, todos, day) => {
    // const todoDoc = doc(db, 'todos', day);
    setTodos(todos.filter((todo) => day === todo.day));
  };

  return (
    <div>
      {arr.map((num) => {
        return (
          <button
            onClick={(event) => {
              setSelectedDate(event.target.textContent);
              filterByDay(setTodos, todos, day);
            }}
            key={num.toString()}
          >
            {num}
          </button>
        );
      })}
    </div>
  );
}
