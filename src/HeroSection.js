import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPlus } from 'react-icons/fa';
import { IMAGE_BASE_URL } from './api';

const HeroSection = ({ movie, onPlayClick }) => {
  const [showDescription, setShowDescription] = useState(false);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    }
    return str;
  };

  if (!movie) return null;

  return (
    <div className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={movie.backdrop_path 
            ? `${IMAGE_BASE_URL}${movie.backdrop_path}`
            : "https://images.unsplash.com/photo-1522327646852-4e28586a40dd?w=1920&h=1080&fit=crop"
          }
          alt={movie.title || movie.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-12 max-w-2xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-6xl font-bold mb-4"
        >
          {movie.title || movie.name}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-6 text-gray-200"
        >
          {showDescription 
            ? movie.overview 
            : truncateString(movie.overview, 150)
          }
          {movie.overview?.length > 150 && (
            <button 
              onClick={() => setShowDescription(!showDescription)}
              className="ml-2 text-white underline hover:text-gray-300"
            >
              {showDescription ? 'Show less' : 'More'}
            </button>
          )}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex space-x-4"
        >
          <button 
            onClick={onPlayClick}
            className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition-colors font-semibold"
          >
            <FaPlay className="w-4 h-4" />
            <span>Play</span>
          </button>
          
          <button className="flex items-center space-x-2 bg-gray-600/70 text-white px-6 py-3 rounded hover:bg-gray-600/90 transition-colors font-semibold">
            <FaPlus className="w-4 h-4" />
            <span>More Info</span>
          </button>
        </motion.div>

        {movie.vote_average && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 flex items-center space-x-2 text-sm text-gray-300"
          >
            <span className="bg-red-600 px-2 py-1 rounded text-white font-semibold">
              {movie.vote_average.toFixed(1)}
            </span>
            <span>IMDb Rating</span>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;