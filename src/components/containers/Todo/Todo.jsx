import React from 'react';
import { useState, useEffect, useMemo, useRef } from 'react';
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
  const [checked, setChecked] = useState(false);
  const ref = useRef(todos);

  // const todosCollectionRef = collection(db, 'todos');

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

  const getTodos = async (todosCollectionRef) => {
    const data = await getDocs(todosCollectionRef);
    setTodos(
      data.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter((el) => el.uuid === uid)
    );
  };

  const filterByDate = async () => {
    const todosCollectionRef = collection(db, 'todos');
    const data = await getDocs(todosCollectionRef);
    setTodos(
      data.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter((todo) => todo.date === date)
    );
  };

  const createTodo = async () => {
    const todosCollectionRef = collection(db, 'todos');
    const todo = { test: newTest, uuid: uid, date: date, checked: false };
    await addDoc(todosCollectionRef, todo);
    // setTodos([...todos, todo]);
    getTodos(todosCollectionRef);
  };

  const updateTodo = async (todo, id) => {
    const todosCollectionRef = collection(db, 'todos');
    const todoDoc = doc(db, 'todos', id);
    const newFields = {
      test: updatedTest,
      uuid: todo.uuid,
      date: todo.date,
      checked: todo.checked,
    };
    setChecked(newFields.checked);
    await setDoc(todoDoc, newFields);
    getTodos(todosCollectionRef);
  };

  const deleteTodo = async (id) => {
    const todosCollectionRef = collection(db, 'todos');
    const todoDoc = doc(db, 'todos', id);
    await deleteDoc(todoDoc);
    getTodos(todosCollectionRef);
  };

  const markAsDoneTodo = async (todo, id) => {
    const todoDoc = doc(db, 'todos', id);
    const todosCollectionRef = collection(db, 'todos');
    const markedTodo = {
      test: todo.test,
      uuid: todo.uuid,
      date: todo.date,
      id: todo.id,
      checked: !todo.checked,
    };
    await setDoc(todoDoc, markedTodo);
    getTodos(todosCollectionRef);
  };

  // const filterByDate = () => {
  //   const todosCollectionRef = collection(db, 'todos');
  //   getTodos(todosCollectionRef);
  //   const arr = [...todos];
  //   console.log(arr);
  //   setTodos(arr.filter((todo) => date === todo.date));
  // };

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
    const todosCollectionRef = collection(db, 'todos');
    console.log(useEffect);

    // ref.current = todos;
    getTodos(todosCollectionRef);
  }, [uid]);

  // //////
  const filteredTodos = todos.filter((todo) =>
    date ? date === todo.date : true
  );
  return (
    <div>
      <CalendarContainer
        date1={date}
        setDate1={setDate}
        filterByDate={filterByDate}
      />
      <TodoView
        user={user}
        todos={filteredTodos}
        refer={ref}
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
