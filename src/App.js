import React, { useState, useEffect } from 'react';
import './App.scss';
import { fetchTrendingGifs, searchGifs } from './services/api';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';

function App() {
  const [gifs, setGifs] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery === '') {
      fetchTrending();
    } else {
      performSearch(searchQuery);
    }
  }, [currentPage, searchQuery]);

  const fetchTrending = async () => {
    const data = await fetchTrendingGifs(10, (currentPage - 1) * 10);
    setGifs(data);
    setTotalPages(Math.ceil(data.length / 10)); // Calculate total pages based on data length
  };

  const performSearch = async (query) => {
    const data = await searchGifs(query, 10, (currentPage - 1) * 10);
    setGifs(data);
    setTotalPages(Math.ceil(data.length / 10)); // Calculate total pages based on data length
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
