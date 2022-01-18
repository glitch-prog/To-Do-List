import React from 'react';
import { Link } from 'react-router-dom';
import { register_page, login_page } from '../utils/variables';

export default function Start() {
  return (
    <div>
      <Link to={register_page}>Register</Link>
      <Link to={login_page}>Log In</Link>
    </div>
  );
}
