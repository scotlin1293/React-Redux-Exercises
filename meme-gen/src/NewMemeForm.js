import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewMemeForm = ({ addMeme }) => {
  const INT_STATE = { topText: '', botText: '', imgURL: '' };
  const [formData, setFormData] = useState(INT_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMeme({ ...formData, id: uuid() });
    setFormData(INT_STATE);
  };

  return (
    <div className='NewMemeForm'>
      <h2>Add a Meme</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor='topText'>Top</label>
        <input type='text' id='topText' name='topText' value={formData.topText} onChange={handleChange} />

        <label htmlFor='botText'>Bot</label>
        <input type='text' id='botText' name='botText' value={formData.botText} onChange={handleChange} />

        <label htmlFor='imgURL'>URL</label>
        <input type='text' id='imgURL ' name='imgURL' value={formData.imgURL} onChange={handleChange} />

        <button>Create</button>
      </form>
    </div>
  );
};

export default NewMemeForm;
