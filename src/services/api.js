const API_KEY = 'Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY';

export const fetchTrendingGifs = async (limit = 10, offset = 0) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}`
  );
  const data = await response.json();
  return data.data;
};

export const searchGifs = async (query, limit = 10, offset = 0) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=${offset}`
  );
  const data = await response.json();
  return data.data;
};
