import React from 'react';
import { useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../../config/firebase-config';
import { useNavigate } from 'react-router-dom';
import { LOGIN_PAGE } from '../../../constants/constants';
import { LogoutView } from '../../views/Logout/Logout';

export function LogoutContainer() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
    navigate(LOGIN_PAGE);
  };
  return <LogoutView logout={logout} user={user} />;
}
