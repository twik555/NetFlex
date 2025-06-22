import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import { fetchFromTMDB } from './api';

const MovieRow = ({ title, fetchUrl, onMovieClick, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      const data = await fetchFromTMDB(fetchUrl);
      setMovies(data);
      setLoading(false);
    }
    loadMovies();
  }, [fetchUrl]);

  if (loading) {
    return (
      <div className="px-4 md:px-12 mb-8">
        <h2 className="text-white text-xl md:text-2xl font-semibold mb-4">{title}</h2>
        <div className="flex space-x-4 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="min-w-0 flex-shrink-0">
              <div className={`bg-gray-800 animate-pulse rounded ${
                isLargeRow ? 'w-40 h-60 md:w-48 md:h-72' : 'w-32 h-48 md:w-40 md:h-60'
              }`} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-12 mb-8">
      <h2 className="text-white text-xl md:text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
        {movies.map((movie) => (
          <motion.div
            key={movie.id}
            className="min-w-0 flex-shrink-0 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => onMovieClick(movie)}
          >
            <div className="relative overflow-hidden rounded">
              <img
                src={movie.poster_path 
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/300x450/1f1f1f/ffffff?text=No+Image"
                }
                alt={movie.title || movie.name}
                className={`object-cover transition-transform duration-300 group-hover:scale-110 ${
                  isLargeRow ? 'w-40 h-60 md:w-48 md:h-72' : 'w-32 h-48 md:w-40 md:h-60'
                }`}
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <FaPlay className="text-white text-2xl" />
              </div>
            </div>
            
            <div className="mt-2 max-w-32 md:max-w-40">
              <h3 className="text-white text-sm font-medium truncate">
                {movie.title || movie.name}
              </h3>
              {movie.vote_average && (
                <div className="flex items-center mt-1">
                  <span className="text-yellow-400 text-xs">★</span>
                  <span className="text-gray-400 text-xs ml-1">
                    {movie.vote_average.toFixed(1)}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MovieRow;