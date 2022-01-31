import React from 'react';

export function TodoItemView({
  todo,
  styles,
  showChecked,
  setShowChecked,
  deleteBtn,
  handleChangeMarkAsDone,
  handleClickDeleteTodo,
  handleClickUpdateText,
  handleChangeUpdateText,
  handleClickChange,
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
        {showChecked ? (
          <div>
            <input type='text' onChange={handleChangeUpdateText}></input>
            <button onClick={() => handleClickUpdateText(todo)}>Change</button>
          </div>
        ) : (
          <button onClick={handleClickChange}>изменить</button>
        )}

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
