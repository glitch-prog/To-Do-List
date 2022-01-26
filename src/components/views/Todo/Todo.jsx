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
    <div className={styles.main__block}>
      <div className={styles.input__form}>
        <input
          type='text'
          placeholder='name'
          onChange={handleChangeText}
          className={styles.input__form__input}
        ></input>
        <button onClick={createTodo} className={styles.input__form__button}>
          <img src='./Todo.images/btn__add.png' alt='' />
        </button>
      </div>

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
