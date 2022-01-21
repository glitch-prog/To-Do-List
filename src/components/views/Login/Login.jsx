import React from 'react';
import { Link } from 'react-router-dom';
import { REGISTER_PAGE } from '../../../constants/constants';

export function LoginView({ onChangePassword, onChangeEmail, onClickLogin }) {
  return (
    <div>
      <div>
        <h3> Login </h3>
        <input placeholder='Email...' onChange={onChangeEmail} />
        <input
          placeholder='Password...'
          type='password'
          onChange={onChangePassword}
        />
        <button onClick={onClickLogin}> Login</button>
      </div>
      <div>
        <h3>Not registered?</h3>
        <Link to={REGISTER_PAGE}>Register!</Link>
      </div>
    </div>
  );
}
