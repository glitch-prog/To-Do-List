import React, { useMemo } from 'react';
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
import { LOGIN_PAGE, TODAY_DAY } from '../constants/constants';
import DateButtton from './DateButtton';
// import { logout } from '../utils/logout';
// import { TODAY_DAY } from '../constants/constants';

export default function Todo() {
  const navigate = useNavigate();
  const [newTest, setNewTest] = useState('');
  const [updatedTest, setUpdatedTest] = useState('');
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState({});
  const [selectedDay, setSelectedDay] = useState(TODAY_DAY);
  const todosCollectionRef = useMemo(() => collection(db, 'todos'),[] );

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
    const todo = { test: newTest, uuid: uid, day: selectedDay };
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
    handleClick(navigate);
  };

  function handleClick(navigate) {
    navigate({ LOGIN_PAGE });
  }

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
    <div className='App'>
      <DateButtton
        selectedDate={selectedDay}
        setSelectedDate={setSelectedDay}
        setTodos={setTodos}
        todos={todos}
        day={TODAY_DAY}
      />

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
