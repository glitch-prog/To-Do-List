import React from 'react';
import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

import { auth } from '../firebase-config';

// const [user, setUser] = useState({});

// onAuthStateChanged(auth, (currentUser) => {
//   setUser(currentUser);
// });
const logout = async () => {
  await signOut(auth);
};

export default logout;
