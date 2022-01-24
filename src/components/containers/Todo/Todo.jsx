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
import { db } from '../../../config/firebase-config';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { TodoView } from '../../views/Todo/Todo';
import { CalendarContainer } from '../Calendar/Calendar';

export function TodoContainer() {
  const [newTest, setNewTest] = useState('');
  const [updatedTest, setUpdatedTest] = useState('');
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState({});
  const [date, setDate] = useState();

  const todosCollectionRef = useMemo(() => collection(db, 'todos'), []);
  // const todosCollectionRef = collection(db, 'todos');
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
    const todo = { test: newTest, uuid: uid, date: date, checked: false };
    await addDoc(todosCollectionRef, todo);
    setTodos([...todos, todo]);
  };

  const updateTodo = async (todo, id) => {
    const todoDoc = doc(db, 'todos', id);
    const newFields = {
      test: updatedTest,
      uuid: todo.uuid,
      date: todo.date,
      checked: todo.checked,
    };

    await setDoc(todoDoc, newFields);
    setTodos([...todos, newFields].filter((todo) => id !== todo.id));
  };

  const deleteTodo = async (id) => {
    const todoDoc = doc(db, 'todos', id);
    await deleteDoc(todoDoc);
    setTodos(todos.filter((todo) => id !== todo.id));
  };

  const markAsDoneTodo = async (todo, id) => {
    const todoDoc = doc(db, 'todos', id);

    const newFields = {
      test: todo.test,
      uuid: todo.uuid,
      date: todo.date,
      checked: !todo.checked,
    };
    await setDoc(todoDoc, newFields);
    setTodos([...todos, newFields].filter((todo) => id !== todo.id));
  };

  const filterByDate = () => {
    setTodos(todos.filter((todo) => date === todo.date));
  };

  const handleChangeText = (event) => {
    setNewTest(event.target.value);
  };

  const handleChangeUpdateText = (event) => {
    setUpdatedTest(event.target.value);
  };

  const handleClickUpdateText = (el) => updateTodo(el, el.id);

  const handleClickDeleteTodo = (el) => deleteTodo(el.id);

  const handleChangeMarkAsDone = (el) => markAsDoneTodo(el, el.id);

  useEffect(() => {
    console.log(useEffect);
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
    <div>
      <CalendarContainer
        date1={date}
        setDate1={setDate}
        filterByDate={filterByDate}
      />
      <TodoView
        user={user}
        todos={todos}
        setTodos={setTodos}
        createTodo={createTodo}
        handleChangeText={handleChangeText}
        handleChangeUpdateText={handleChangeUpdateText}
        handleClickUpdateText={handleClickUpdateText}
        handleClickDeleteTodo={handleClickDeleteTodo}
        handleChangeMarkAsDone={handleChangeMarkAsDone}
      />
    </div>
  );
}
