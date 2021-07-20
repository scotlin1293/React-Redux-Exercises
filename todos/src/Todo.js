import React from 'react';
import './Todo.css';

const Todo = ({ deleteTodo, task, id }) => {
  const handleDelete = () => deleteTodo(id);

  return (
    <div className='Todo'>
      <li>{task.task}</li>
      <button onClick={handleDelete}>X</button>
    </div>
  );
};

export default Todo;
