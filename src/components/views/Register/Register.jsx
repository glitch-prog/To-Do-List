import { Link } from 'react-router-dom';
import React from 'react';
import { LOGIN_PAGE } from '../../../constants/constants';

export default function RegisterView({
  handleOnChangeRegisterEmail,
  handleOnChangeRegisterPassword,
  register,
}) {
  return (
    <div>
      <div>
        <h3> Register User </h3>
        <input placeholder='Email...' onChange={handleOnChangeRegisterEmail} />
        <input
          placeholder='Password...'
          type='password'
          onChange={handleOnChangeRegisterPassword}
        />

        <button onClick={register}> Create User</button>
      </div>

      <div>
        <h3>Already registered?</h3>
        <Link to={LOGIN_PAGE}>Log in!</Link>
      </div>
    </div>
  );
}
