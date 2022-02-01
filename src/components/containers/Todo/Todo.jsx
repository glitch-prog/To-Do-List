import React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  addDoc,
  getDocs,
  setDoc,
  deleteDoc,
  collection,
  doc,
} from 'firebase/firestore';
import { db } from '../../../config/firebase-config';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { TodoView } from '../../views/Todo/Todo';

export function TodoContainer() {
  const [newTest, setNewTest] = useState('');
  const [updatedTest, setUpdatedTest] = useState('');
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState({});
  const [date, setDate] = useState();
  const ref = useRef(todos);

  let uid = null;
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      uid = user.uid;
    }
  });

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const getTodos = useCallback(
    async (todosCollectionRef) => {
      const data = await getDocs(todosCollectionRef);
      setTodos(
        data.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .filter((el) => el.uuid === uid)
      );
      console.log(setTodos);
      console.log(data.docs);
    },
    [uid]
  );

  const createTodo = async () => {
    const todosCollectionRef = collection(db, 'todos');
    const todo = { test: newTest, uuid: uid, date: date, checked: false };
    await addDoc(todosCollectionRef, todo);
    const test = getTodos(todosCollectionRef);
    console.log(test);
  };

  const updateTodo = async (todo, id) => {
    const todosCollectionRef = collection(db, 'todos');
    const todoDoc = doc(db, 'todos', id);

    if (updateTodo) {
      const newFields = {
        test: updatedTest,
        uuid: todo.uuid,
        date: todo.date,
        checked: todo.checked,
      };

      await setDoc(todoDoc, newFields);
      getTodos(todosCollectionRef);
    }
  };

  const deleteTodo = async (id) => {
    const todosCollectionRef = collection(db, 'todos');
    const todoDoc = doc(db, 'todos', id);
    await deleteDoc(todoDoc);
    getTodos(todosCollectionRef);
  };

  const markAsDoneTodo = async (todo, id) => {
    const todoDoc = doc(db, 'todos', id);
    const todosCollectionRef = collection(db, 'todos');
    const markedTodo = {
      test: todo.test,
      uuid: todo.uuid,
      date: todo.date,
      id: todo.id,
      checked: !todo.checked,
    };
    await setDoc(todoDoc, markedTodo);
    getTodos(todosCollectionRef);
  };

  const handleChangeText = (event) => {
    setNewTest(event.target.value);
  };

  const handleClickDeleteTodo = (el) => deleteTodo(el.id);

  const handleChangeMarkAsDone = (el) => markAsDoneTodo(el, el.id);

  useEffect(() => {
    const todosCollectionRef = collection(db, 'todos');
    getTodos(todosCollectionRef);
  }, [getTodos]);

  const filteredTodos = todos.filter((todo) =>
    date ? date === todo.date : true
  );

  const showAllTodos = () => setDate('');

  return (
    <div>
      <TodoView
        date1={date}
        setDate1={setDate}
        user={user}
        todos={filteredTodos}
        refer={ref}
        setTodos={setTodos}
        showAllTodos={showAllTodos}
        setUpdatedTest={setUpdatedTest}
        createTodo={createTodo}
        updateTodo={updateTodo}
        handleChangeText={handleChangeText}
        handleClickDeleteTodo={handleClickDeleteTodo}
        handleChangeMarkAsDone={handleChangeMarkAsDone}
      />
    </div>
  );
}
