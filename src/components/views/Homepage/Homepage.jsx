import React from 'react';
import { Link } from 'react-router-dom';
import { START_PAGE } from '../../../constants/constants';

export default function Homepage() {
  return (
    <div>
      <h3>Hello, this is a Clever To-Do-List</h3>
      <p>Let's start</p>
      <Link to={START_PAGE}>Start</Link>
    </div>
  );
}
