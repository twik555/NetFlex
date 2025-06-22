// TMDB API Configuration
export const TMDB_API_KEY = 'c8dea14dc917687ac631a52620e4f7ad';
export const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

// API Endpoints
export const requests = {
  fetchTrending: `/trending/all/week?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${TMDB_API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=99`,
};

// Utility function to fetch data from TMDB
export const fetchFromTMDB = async (endpoint) => {
  try {
    const response = await fetch(`${TMDB_BASE_URL}${endpoint}`);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Error fetching from TMDB:', error);
    return [];
  }
};