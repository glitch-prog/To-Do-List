import { useState } from 'react';

// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from 'firebase/auth';

// import { auth } from './firebase-config';

import Register from './components/Register.js';
import Login from './components/Login.js';
// import Logout from './components/Logout';
import Start from './components/Start';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
// import Form from './components/Form.js';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase-config';

export default function App() {
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

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login_page' element={<Login />} />
        <Route path='/start_page' element={<Start />} />
        <Route path='/register_page' element={<Register />} />
      </Routes>
    </div>
  );
}
