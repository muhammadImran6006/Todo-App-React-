import React, { useState } from 'react';
import './style/App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import dummyTodos from './data/TodoData';
import Footer from './components/Footer';


function App() {
const [todos, setTodos] = useState(dummyTodos); 

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
    };
    setTodos(prevTodos => [newTodo, ...prevTodos]);
  };

  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };


  return (
     <div style={{ maxWidth: '600px', margin: '40px auto', padding: '0 20px' }}>
      <h1>My Todo App</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <Footer />
    </div>
  );
}

export default App;
