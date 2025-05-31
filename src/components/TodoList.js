import React from 'react'
import TodoItem from './TodoItem';
function TodoList({ todos, deleteTodo }) {

  if (todos.length === 0) {
    return <p>No todos yet! Add some above.</p>;
  }

  return (
 <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList