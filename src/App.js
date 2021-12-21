import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import { auth } from './firebase-config';

import Register from './components/Register.js';
import Login from './components/Login.js';
import Logout from './components/Logout';

export default function App() {
  

  return (
    <div className='App'>
      <Register />
      <Login />
      <Logout />
    </div>
  );
}
