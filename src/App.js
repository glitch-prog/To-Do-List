// import { useState } from 'react';

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
import Form from './components/Form.js';

export default function App() {
  return (
    <div className='App'>
      {/* <Link to='/register_page'>Start!</Link> */}
      {/* <Login />
      <Logout /> */}
      <Form />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login_page' element={<Login />} />
        <Route path='/start_page' element={<Start />} />
        <Route path='/register_page' element={<Register />} />
      </Routes>
    </div>
  );
}
