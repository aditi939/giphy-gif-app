import React from 'react';

const GifList = ({ gifs }) => {
  return (
    <div className="gif-list">
      {gifs.map((gif) => (
        <div key={gif.id} className="gif">
          <img src={gif.images.fixed_height.url} alt={gif.title} />
        </div>
      ))}
    </div>
  );
};

export default GifList;
