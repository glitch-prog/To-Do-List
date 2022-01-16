import React from 'react';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div>
      <h3>Hello, this is a Clever To-Do-List</h3>
      <p>Let's start</p>
      <Link to='/start_page'>Start</Link>
    </div>
  );
}
