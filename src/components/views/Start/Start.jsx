import React from 'react';
import { Link } from 'react-router-dom';
import { REGISTER_PAGE, LOGIN_PAGE } from '../../../constants/constants';


export default function Start() {
  return (
    <div>
      <Link to={REGISTER_PAGE}>Register</Link>
      <Link to={LOGIN_PAGE}>Log In</Link>
    </div>
  );
}