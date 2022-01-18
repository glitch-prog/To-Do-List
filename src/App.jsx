
import Register from './components/Register';
import Login from './components/Login';
import Start from './components/Start';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Todo from './components/Todo';
import {register_page,start_page,login_page,todo_page} from './utils/variables'

export default function App() {
  return (
    <div>
    
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path={login_page} element={<Login />} />
        <Route path={start_page} element={<Start />} />
        <Route path= {register_page}  element={<Register />}/>
        <Route path={todo_page} element={<Todo />} />
      </Routes>
    </div>
  );
}
