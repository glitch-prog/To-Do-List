import React from 'react';
import { useState } from 'react';
import { TodoItemView } from '../../views/TodoItem/TodoItem';

export function TodoItemContainer({
  todo,
  styles,
  deleteBtn,
  changeBtn,
  updateTodo,
  setUpdatedTest,
  handleChangeMarkAsDone,
  handleClickDeleteTodo,
}) {
  const [showChecked, setShowChecked] = useState(false);

  const handleClickChange = () => setShowChecked(!showChecked);
  const handleClickUpdateText = (el) => {
    updateTodo(el, el.id);
    setShowChecked(!showChecked);
  };
  const handleChangeUpdateText = (event) => {
    setUpdatedTest(event.target.value);
  };

  return (
    <div>
      <TodoItemView
        key={todo.id}
        todo={todo}
        styles={styles}
        showChecked={showChecked}
        setShowChecked={setShowChecked}
        setUpdatedTest={setUpdatedTest}
        changeBtn={changeBtn}
        deleteBtn={deleteBtn}
        handleChangeMarkAsDone={handleChangeMarkAsDone}
        handleClickDeleteTodo={handleClickDeleteTodo}
        handleClickUpdateText={handleClickUpdateText}
        handleChangeUpdateText={handleChangeUpdateText}
        handleClickChange={handleClickChange}
      />
    </div>
  );
}
