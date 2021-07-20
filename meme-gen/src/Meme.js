import React from 'react';
import PropTypes from 'prop-types';
import './Meme.css';

// have to use 'id' instead of 'key', since 'key' is not a prop!
const Meme = ({ topText, botText, imgURL, deleteMeme, id }) => {
  const handleDelete = () => {
    deleteMeme(id);
  };

  return (
    <div className='Meme'>
      <span className='Meme-top-text'>{topText}</span>
      <img src={imgURL} alt='meme' />
      <span className='Meme-bot-text'>{botText}</span>
      <button className='Meme-delete' onClick={handleDelete}>
        X
      </button>
    </div>
  );
};

// only used for documentation
Meme.propTypes = {
  topText: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  botText: PropTypes.string.isRequired,
};

export default Meme;
