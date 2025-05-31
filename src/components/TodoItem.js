import React from 'react'

function TodoItem({ todo, deleteTodo }) {
  return (
 <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      background: '#f0f0f0',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '6px',
    }}>
      <span>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)} style={{ color: 'red' }}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem