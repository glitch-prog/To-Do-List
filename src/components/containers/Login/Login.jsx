import React from 'react';
import { LoginView } from '../../views/Login/Login';
import { auth } from '../../../config/firebase-config';
import { TODO_PAGE } from '../../../constants/constants';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

export function LoginContainer() {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleOnChangeEmail = (event) => {
    setLoginEmail(event.target.value);
    console.log(loginEmail);
  };

  const handleOnChangePassword = (event) => {
    setLoginPassword(event.target.value);
    console.log(loginPassword);
  };

  const handleLoginClick = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      navigate(TODO_PAGE);
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };

  return (
    <LoginView
      onChangeEmail={handleOnChangeEmail}
      onChangePassword={handleOnChangePassword}
      onClickLogin={handleLoginClick}
    />
  );
}
