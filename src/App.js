import React, { useState, useEffect } from 'react';
import './App.scss';
import { fetchTrendingGifs, searchGifs } from './services/api';
import GifList from './components/GifList';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
function App() {
  const [gifs, setGifs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Number of items per page
  const [searchQuery, setSearchQuery] = useState('');
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (searchQuery === '') {
      fetchTrending();
    } else {
      performSearch(searchQuery);
    }
  }, [currentPage, searchQuery]);
  const fetchTrending = async () => {
    const data = await fetchTrendingGifs(itemsPerPage, (currentPage - 1) * itemsPerPage);
    setGifs(data);
    setTotalPages(Math.ceil(data.length / itemsPerPage)); // Calculate total pages based on data length
  };
  const performSearch = async (query) => {
    const data = await searchGifs(query, itemsPerPage, (currentPage - 1) * itemsPerPage);
    setGifs(data);
    setTotalPages(Math.ceil(data.length / itemsPerPage)); // Calculate total pages based on data length
  };
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  return (
    <div className="App">
      <h1>Giphy GIF Viewer</h1>
      <SearchBar onSearch={handleSearch} />
      <GifList gifs={gifs} />
      page
      {/* {totalPages > 1 && ( */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      {/* )} */}
    </div>
  );
}
export default App;


