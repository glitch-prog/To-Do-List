// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from 'firebase/auth';

// import { auth } from './firebase-config';

import Register from './components/Register.js';
import Login from './components/Login.js';
import Start from './components/Start';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Todo from './components/Todo';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login_page' element={<Login />} />
        <Route path='/start_page' element={<Start />} />
        <Route path='/register_page' element={<Register />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </div>
  );
}
