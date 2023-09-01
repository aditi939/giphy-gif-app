import React, { useState, useEffect } from 'react';
import './App.scss';
import { fetchTrendingGifs, searchGifs } from './services/api';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';

function App() {
  const [gifs, setGifs] = useState([]);// Stores the list of GIFs
  const [currentPage, setCurrentPage] = useState(1);// Current page number
  const [itemsPerPage] = useState(10); // Number of items per page
  const [searchQuery, setSearchQuery] = useState('');// Stores the search query
  const [totalPages, setTotalPages] = useState(0); // Total number of pages

  // useEffect to fetch trending GIFs or perform a search when currentPage or searchQuery changes
  useEffect(() => {
    if (searchQuery === '') {
      fetchTrending((currentPage - 1) * itemsPerPage);
    } else {
      performSearch(searchQuery, (currentPage - 1) * itemsPerPage);
    }
  }, [currentPage, searchQuery]);

  // Function to fetch trending GIFs
  const fetchTrending = async (offset) => {
    const data = await fetchTrendingGifs(itemsPerPage, offset);
    setGifs(data.data);
    console.log(data.pagination.total_count,'data');
    console.log('length');
    setTotalPages(Math.ceil(data.pagination.total_count / itemsPerPage));
  };

  // Function to perform a search for GIFs
  const performSearch = async (query, offset) => {
    const data = await searchGifs(query, itemsPerPage, offset);
    setGifs(data.data);
    setTotalPages(Math.ceil(data.pagination.total_count / itemsPerPage));
  };

  // Function to handle the search when a query is entered
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  // Function to handle page changes
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);

      const newOffset = (newPage - 1) * itemsPerPage;

      if (searchQuery === '') {
        fetchTrending(newOffset);
      } else {
        performSearch(searchQuery, newOffset);
      }
    }
  };

  return (
    <div className="App">
      <h1>Giphy GIF Viewer</h1>
      <SearchBar onSearch={handleSearch} />
      <GifList gifs={gifs} />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default App;

