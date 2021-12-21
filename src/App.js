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

function App() {
  // const [registerEmail, setRegisterEmail] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  // const [loginEmail, setLoginEmail] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  // const register = async () => {
  //   try {
  //     const user = await createUserWithEmailAndPassword(
  //       auth,
  //       registerEmail,
  //       registerPassword
  //     );
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // const login = async () => {
  //   try {
  //     const user = await signInWithEmailAndPassword(
  //       auth,
  //       loginEmail,
  //       loginPassword
  //     );
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className='App'>
      <Register />
      <Login />

      <h4> User Logged In: </h4>
      {user?.email}
      <button onClick={logout}> Sign Out </button>
    </div>
  );
}

export default App;
