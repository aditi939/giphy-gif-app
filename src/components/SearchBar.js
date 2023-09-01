import React, { useState } from 'react';
// Functional component for the search bar
const SearchBar = ({ onSearch }) => {
  // State to store the search query
  const [query, setQuery] = useState('');
  // Function to handle the search button click
  const handleSearch = () => {
    // Call the provided onSearch callback function with the current query as an argument
    onSearch(query);
  };

  return (
    <div className="search-bar">
    {/* Input field for entering the search query */}
      <input
        type="text"
        placeholder="Search for GIFs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
       {/* Button to trigger the search */}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
