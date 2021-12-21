import { useState } from 'react';
import {
 
  signInWithEmailAndPassword,
  onAuthStateChanged,

} from 'firebase/auth';

import { auth } from '../firebase-config';

import React from 'react';

export default function Login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div>
        <h3> Login </h3>
        <input
          placeholder='Email...'
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder='Password...'
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login}> Login</button>
      </div>
    </div>
  );
}
