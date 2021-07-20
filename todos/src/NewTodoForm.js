import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({ createTodo }) => {
  const INT_STATE = { task: '' };
  const [formData, setFormData] = useState(INT_STATE);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo({ ...formData, id: uuid() });
    setFormData(INT_STATE);
  };

  return (
    <div className='NewTodoForm'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='task'>Create a todo!</label>
        <input id='task' value={formData.task} name='task' type='text' placeholder='enter a task' onChange={handleChange} />
        <button>Done</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
