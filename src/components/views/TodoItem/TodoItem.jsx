import React from 'react';

export function TodoItemView({
  todo,
  styles,
  deleteBtn,
  handleChangeMarkAsDone,
  handleClickDeleteTodo,
  handleClickUpdateText,
  handleChangeUpdateText,
}) {
  return (
    <div
      className={todo.checked ? styles.checked__todo__item : styles.todo__item}
    >
      <button
        onClick={() => handleChangeMarkAsDone(todo)}
        className={` ${
          todo.checked ? styles.checked__btn : styles.unchecked__btn
        }`}
      >
        ✓
      </button>
      <p className={styles.todo__item__text}>{todo.test}</p>

      <div className={styles.todo__item__btns}>
        <input type='text' onChange={handleChangeUpdateText}></input>
        <button onClick={() => handleClickUpdateText(todo)}>Change</button>

        <button
          className={styles.delete__btn}
          onClick={() => handleClickDeleteTodo(todo)}
        >
          <img src={deleteBtn} alt='Delete' />
        </button>
      </div>
    </div>
  );
}
