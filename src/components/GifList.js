import React from 'react';
// Functional component for displaying a list of GIFs
const GifList = ({ gifs }) => {
  return (
    <div className="gif-list">
    {/* Map through the 'gifs' array and render each GIF */}
      {gifs.map((gif) => (
        <div key={gif.id} className="gif">
        {/* Display the GIF image with its title */}
          <img src={gif.images.fixed_height.url} alt={gif.title} />
        </div>
      ))}
    </div>
  );
};

export default GifList;
