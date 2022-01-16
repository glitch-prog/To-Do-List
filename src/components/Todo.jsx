import React from 'react';
import { useState, useEffect } from 'react';
import {
  addDoc,
  getDocs,
  setDoc,
  deleteDoc,
  collection,
  doc,
} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase-config';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { todayDay } from '../utils/variables';
import DateButtton from './Calendar/DateButtton';

export default function Todo() {
  const [newTest, setNewTest] = useState('');
  const [updatedTest, setUpdatedTest] = useState('');
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState({});

  const todosCollectionRef = collection(db, 'todos');
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

  let navigate = useNavigate();
  function handleClick() {
    navigate('/login_page');
  }

  const createTodo = async () => {
    const todo = { test: newTest, uuid: uid, day: todayDay };
    await addDoc(todosCollectionRef, todo);
    setTodos([...todos, todo]);
  };

  const updateTodo = async (id) => {
    const todoDoc = doc(db, 'todos', id);
    const newFields = { test: updatedTest, uuid: uid };
    await setDoc(todoDoc, newFields);
    setTodos([...todos, newFields]);
  };

  const deleteTodo = async (id) => {
    const todoDoc = doc(db, 'todos', id);
    await deleteDoc(todoDoc);
    setTodos(todos.filter((todo) => id !== todo.id));
  };

  const logout = async () => {
    await signOut(auth);
    handleClick();
  };

  useEffect(() => {
    const getTodos = async () => {
      const data = await getDocs(todosCollectionRef);
      setTodos(
        data.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .filter((el) => el.uuid === uid)
          .sort((a, b) => a.id > b.id)
      );
    };

    getTodos();
  }, [uid, todosCollectionRef]);

  // const filterByDay = async (day) => {
  //   // const todoDoc = doc(db, 'todos', day);
  //   setTodos(todos.filter((todo) => day === todo.day));
  // };
  // //////

  return (
    <div className='App'>
      <DateButtton />

      <input
        type='text'
        placeholder='name'
        onChange={(event) => {
          setNewTest(event.target.value);
        }}
      ></input>
      <button onClick={createTodo}>add</button>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <p key={todo.test}>{todo.test}</p>
            <input
              key={'input'}
              type='text'
              onChange={(event) => {
                setUpdatedTest(event.target.value);
              }}
            ></input>
            <button key={todo.id} onClick={() => updateTodo(todo.id)}>
              Change
            </button>

            <button key={'delete'} onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        );
      })}
      <h4> User Logged In: </h4>
      <p>{user?.email}</p>
      <button onClick={logout}>Log out</button>
    </div>
  );
}
