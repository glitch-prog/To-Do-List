import React, { useState } from 'react';
import { database } from '../firebase-config';

export default function Form() {
  const [taskName, setTaskName] = useState('');
  const createTodo = (event) => {
    event.preventDefault();
    const todoRef = database().ref('Todo');
    const todo = { taskName, completed: false };
    todoRef.push(todo);
  };
  const handleChange = (event) => {
    setTaskName(event.target.value);
  };

  return (
    <div>
      <form onSubmit={createTodo}>
        <input
          type='text'
          placeholder='Enter a Todo...'
          className='task-input'
          value={taskName}
          required
          onChange={handleChange}
        />
        <button className='button-add' type='submit'>
          Add
        </button>
      </form>
    </div>
  );
}
