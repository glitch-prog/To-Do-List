import { handleClick } from './handleClick';

export const logout = async (signOut, auth, navigate) => {
  await signOut(auth);
  handleClick(navigate);
};
