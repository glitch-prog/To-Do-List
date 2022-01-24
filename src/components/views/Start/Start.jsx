import React from 'react';
import { Link } from 'react-router-dom';
import { REGISTER_PAGE, LOGIN_PAGE } from '../../../constants/constants';

export default function Start() {
  const date = new Date();
  console.log(date);
  return (
    <div>
      <Link to={REGISTER_PAGE}>Register</Link>
      <Link to={LOGIN_PAGE}>Log In</Link>
    </div>
  );
}
