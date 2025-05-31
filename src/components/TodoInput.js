import React, { useState } from 'react';

function TodoInput({addTodo}) {
 const [input, setInput] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;  // prevent empty todos
    addTodo(input);
    setInput('');
  };

  return (
  <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Add new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '10px', width: '70%', fontSize: '1rem' }}
      />
      <button type="submit" style={{ padding: '10px 20px', marginLeft: '10px' }}>
        Add
      </button>
    </form>
  )
}

export default TodoInput