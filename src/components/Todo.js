import React from 'react';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '.firebase-config';

export default function Todo() {
  const [newTest, setNewTest] = useState('');
  const todosCollectionRef = collection(db, 'todos');

  const createUser = async () => {
    await addDoc(todosCollectionRef, { test: newTest });
  };
  return (
    <div className='App'>
      <input
        placeholder='name'
        onChange={(event) => {
          setNewTest(event.target.value);
        }}
      ></input>
      <button onClick={createUser}>add</button>
    </div>
  );
}
