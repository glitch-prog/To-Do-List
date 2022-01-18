import { useState } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

import { auth } from '../config/firebase-config';
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register_page } from '../utils/variables';

export default function Login() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/todo');
  }
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
      handleClick();
    } catch (error) {
      alert(error.message);
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
          type='password'
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <button onClick={login}> Login</button>
      </div>
      <div>
        <h3>Not registered?</h3>
        <Link to={register_page}>Register!</Link>
      </div>
    </div>
  );
}
