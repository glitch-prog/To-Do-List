import React from 'react';
import { LogoutContainer } from '../../containers/Logout/Logout';
import styles from './Todo.module.css';

export function TodoView({
  todos,
  refer,
  createTodo,
  handleChangeText,
  handleChangeUpdateText,
  handleClickUpdateText,
  handleClickDeleteTodo,
  handleChangeMarkAsDone,
}) {
  // //////

  return (
    <div className='App'>
      <input type='text' placeholder='name' onChange={handleChangeText}></input>
      <button onClick={createTodo}>add</button>
      {todos.map((todo) => {
        return (
          <div ref={refer} key={todo.id}>
            <p>{todo.test}</p>
            <input type='text' onChange={handleChangeUpdateText}></input>
            <button onClick={() => handleClickUpdateText(todo)}>Change</button>
            <button
              onClick={() => handleChangeMarkAsDone(todo)}
              className={` ${
                todo.checked ? styles.checked__btn : styles.unchecked__btn
              }`}
            >
              Check
            </button>
            <button onClick={() => handleClickDeleteTodo(todo)}>Delete</button>
          </div>
        );
      })}
      <LogoutContainer />
    </div>
  );
}
