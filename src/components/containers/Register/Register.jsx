import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/firebase-config';
import React from 'react';
import {  TODO_PAGE } from '../../../constants/constants';
import RegisterView from '../../views/Register/Register';

export default function RegisterContainer() {
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      navigate(TODO_PAGE);
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };

  const handleOnChangeRegisterEmail = (event) =>
    setRegisterEmail(event.target.value);

  const handleOnChangeRegisterPassword = (event) =>
    setRegisterPassword(event.target.value);

  return (
    <RegisterView
      handleOnChangeRegisterEmail={handleOnChangeRegisterEmail}
      handleOnChangeRegisterPassword={handleOnChangeRegisterPassword}
      register={register}
    />
  );
}
