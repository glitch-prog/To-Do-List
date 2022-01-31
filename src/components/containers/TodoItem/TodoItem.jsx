import React from 'react';
import { TodoItemView } from '../../views/TodoItem/TodoItem';

export function TodoItemContainer({
  todo,
  styles,
  deleteBtn,
  handleChangeMarkAsDone,
  handleClickDeleteTodo,
  handleClickUpdateText,
  handleChangeUpdateText,
}) {
  return (
    <div>
      <TodoItemView
        key={todo.id}
        todo={todo}
        styles={styles}
        deleteBtn={deleteBtn}
        handleChangeMarkAsDone={handleChangeMarkAsDone}
        handleClickDeleteTodo={handleClickDeleteTodo}
        handleClickUpdateText={handleClickUpdateText}
        handleChangeUpdateText={handleChangeUpdateText}
      />
    </div>
  );
}
