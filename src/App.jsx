import { LoginContainer } from './components/containers/Login/Login';
import Start from './components/views/Start/Start';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/views/Homepage/Homepage';
import {
  REGISTER_PAGE,
  START_PAGE,
  LOGIN_PAGE,
  TODO_PAGE,
} from './constants/constants';
import { TodoContainer } from './components/containers/Todo/Todo';
import RegisterContainer from './components/containers/Register/Register';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path={LOGIN_PAGE} element={<LoginContainer />} />
        <Route path={START_PAGE} element={<Start />} />
        <Route path={REGISTER_PAGE} element={<RegisterContainer />} />
        <Route path={TODO_PAGE} element={<TodoContainer />} />
      </Routes>
    </div>
  );
}
