import React from 'react';
import { LogoutContainer } from '../../containers/Logout/Logout';
import styles from './Todo.module.css';
import btnAdd from './Todo.images/btn__add.png';
import todoIcon from './Todo.images/todo__icon.png';
import deleteBtn from './Todo.images/delete__btn__icon.png';

import { TodoItemContainer } from '../../containers/TodoItem/TodoItem';

export function TodoView({
  todos,
  createTodo,
  handleChangeText,
  handleChangeUpdateText,
  handleClickUpdateText,
  handleClickDeleteTodo,
  handleChangeMarkAsDone,
}) {
  return (
    <div className={styles.main__block}>
      <div className='header'>
        <h1 className={styles.header__title}>Clever To Do list</h1>
      </div>
      <div className={styles.input__form}>
        <div className={styles.input__form__wrapper}>
          <img src={todoIcon} alt='todo' />
          <input
            type='text'
            placeholder='Add a new task'
            onChange={handleChangeText}
            className={styles.input__form__input}
          />
        </div>

        <button onClick={createTodo} className={styles.input__form__button}>
          <img src={btnAdd} alt='add' />
        </button>
      </div>

      {todos.map((todo) => {
        return (
          <TodoItemContainer
            key={todo.id}
            todo={todo}
            styles={styles}
            deleteBtn={deleteBtn}
            handleChangeMarkAsDone={handleChangeMarkAsDone}
            handleClickDeleteTodo={handleClickDeleteTodo}
            handleClickUpdateText={handleClickUpdateText}
            handleChangeUpdateText={handleChangeUpdateText}
          />
        );
      })}
      <LogoutContainer />
    </div>
  );
}
