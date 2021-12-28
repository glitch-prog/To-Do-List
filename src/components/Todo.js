import React from 'react';
import { useState, useEffect } from 'react';
import { addDoc, getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase-config';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function Todo() {
  const [newTest, setNewTest] = useState('');
  const [todos, setTodos] = useState([]);

  const todosCollectionRef = collection(db, 'todos');

  let uid = null;

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      uid = user.uid;
    }
  });

  const createTodo = async () => {
    await addDoc(todosCollectionRef, { test: newTest, uuid: uid });
  };

  useEffect(() => {
    const getTodos = async () => {
      const data = await getDocs(todosCollectionRef);

      console.log(data.docs);
      setTodos(
        data.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .filter((el) => el.uuid === uid)
      );
    };

    getTodos();
  }, []);

  return (
    <div className='App'>
      <input
        placeholder='name'
        onChange={(event) => {
          setNewTest(event.target.value);
        }}
      ></input>
      <button onClick={createTodo}>add</button>
      {todos.map((todo) => {
        return (
          <div>
            {''}
            <p>{todo.test}</p>
          </div>
        );
      })}
    </div>
  );
}
