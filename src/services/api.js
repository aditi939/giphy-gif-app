// Define the Giphy API key
const API_KEY = 'Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY';

// Function to fetch trending GIFs from the Giphy API
export const fetchTrendingGifs = async (limit = 10, offset = 0) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}`
  );
   // Parse the response data as JSON
  const data = await response.json();
  // Return the JSON data containing the trending GIFs
  return data;
};

// Function to search for GIFs based on a query using the Giphy API
export const searchGifs = async (query, limit = 10, offset = 0) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=${offset}`
  );
  // Parse the response data as JSON
  const data = await response.json();
  // Return the JSON data containing the search results based on the query
  return data;
};
