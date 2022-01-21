import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import {
  addDoc,
  getDocs,
  setDoc,
  deleteDoc,
  collection,
  doc,
} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../config/firebase-config';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { LOGIN_PAGE, TODAY_DAY } from '../../../constants/constants';

import { TodoView } from '../../views/Todo/Todo';
// import { logout } from '../utils/logout';
// import { TODAY_DAY } from '../constants/constants';

export function TodoContainer() {
  const navigate = useNavigate();
  const [newTest, setNewTest] = useState('');
  const [updatedTest, setUpdatedTest] = useState('');
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState({});

  const todosCollectionRef = useMemo(() => collection(db, 'todos'), []);
  let uid = null;
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      uid = user.uid;
    }
  });

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const createTodo = async () => {
    const todo = { test: newTest, uuid: uid, day: TODAY_DAY }; //day: selectedDate
    await addDoc(todosCollectionRef, todo);
    setTodos([...todos, todo]);
  };

  const updateTodo = async (id) => {
    const todoDoc = doc(db, 'todos', id);
    const newFields = { test: updatedTest, uuid: uid, day: TODAY_DAY }; //day: selectedDate
    await setDoc(todoDoc, newFields);
    setTodos([...todos, newFields].filter((todo) => id != todo.id));
  };

  const deleteTodo = async (id) => {
    const todoDoc = doc(db, 'todos', id);
    await deleteDoc(todoDoc);
    setTodos(todos.filter((todo) => id !== todo.id));
  };

  function handleClick(navigate) {
    navigate({ LOGIN_PAGE });
  }

  const handleChangeText = (event) => {
    setNewTest(event.target.value);
  };

  const handleChangeUpdateText = (event) => {
    setUpdatedTest(event.target.value);
  };

  const handleClickUpdateText = (el) => updateTodo(el.id);

  const handleClickDeleteTodo = (el) => deleteTodo(el.id);

  useEffect(() => {
    const getTodos = async () => {
      const data = await getDocs(todosCollectionRef);
      setTodos(
        data.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .filter((el) => el.uuid === uid)
      );
    };

    getTodos();
  }, [uid, todosCollectionRef]);

  // //////

  return (
    <TodoView
      user={user}
      todos={todos}
      setTodos={setTodos}
      createTodo={createTodo}
      handleChangeText={handleChangeText}
      handleChangeUpdateText={handleChangeUpdateText}
      handleClickUpdateText={handleClickUpdateText}
      handleClickDeleteTodo={handleClickDeleteTodo}
    />
  );
}
