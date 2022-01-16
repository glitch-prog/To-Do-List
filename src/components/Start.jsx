import React from 'react';
import { Link } from 'react-router-dom';

export default function Start() {
  return (
    <div>
      <Link to='/register_page'>Register</Link>
      <Link to='/login_page'>Log In</Link>
    </div>
  );
}
