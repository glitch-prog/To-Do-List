import React from 'react';

export function LogoutView({ logout, user }) {
  return (
    <div>
      <h4> User Logged In: </h4>
      {user?.email}
      <button onClick={logout}> Sign Out </button>
    </div>
  );
}
