import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

import { auth } from '../firebase-config';

import React from 'react';

export default function Register() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div>
        <h3> Register User </h3>
        <input
          placeholder='Email...'
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder='Password...'
          type='password'
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />

        <button onClick={register}> Create User</button>
      </div>

      <h4> User Logged In: </h4>
      {user?.email}
      <div>
        <h3>Already registered?</h3>
        <Link to='/login_page'>Log in!</Link>
      </div>
    </div>
  );
}
