import React from 'react';
import './App.css';
import NewMemeForm from './NewMemeForm';
import { useSelector, useDispatch } from 'react-redux';
import Meme from './Meme';

function App() {
  const memes = useSelector((store) => store.memes);
  const dispatch = useDispatch();

  const addMeme = (newMeme) => {
    dispatch({ type: 'ADD_MEME', meme: newMeme });
  };

  const deleteMeme = (id) => {
    dispatch({ type: 'REMOVE_MEME', id });
  };

  const allMemes = memes.map((m) => <Meme key={m.id} topText={m.topText} botText={m.botText} imgURL={m.imgURL} deleteMeme={() => deleteMeme(m.id)} />);

  return (
    <div className='App'>
      <h1>Meme Generator</h1>
      <NewMemeForm addMeme={addMeme} />
      <hr />
      {allMemes}
    </div>
  );
}

export default App;
