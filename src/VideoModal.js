import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import YouTube from 'react-youtube';
import { FaPlay, FaPlus, FaTimes } from 'react-icons/fa';
import { TMDB_API_KEY, TMDB_BASE_URL } from './api';

const VideoModal = ({ movie, onClose }) => {
  const [videoKey, setVideoKey] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTrailer() {
      try {
        const response = await fetch(
          `${TMDB_BASE_URL}/movie/${movie.id}/videos?api_key=${TMDB_API_KEY}`
        );
        const data = await response.json();
        const trailer = data.results?.find(
          video => video.type === 'Trailer' && video.site === 'YouTube'
        );
        setVideoKey(trailer?.key || 'dQw4w9WgXcQ'); // Fallback video
      } catch (error) {
        console.error('Error fetching trailer:', error);
        setVideoKey('dQw4w9WgXcQ'); // Fallback video
      }
      setLoading(false);
    }
    fetchTrailer();
  }, [movie.id]);

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-gray-900 rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
          >
            <FaTimes className="text-white" />
          </button>

          {/* Video Player */}
          <div className="relative aspect-video">
            {loading ? (
              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                <div className="text-white">Loading trailer...</div>
              </div>
            ) : (
              <YouTube 
                videoId={videoKey}
                opts={{
                  ...opts,
                  width: '100%',
                  height: '100%'
                }}
                className="w-full h-full"
              />
            )}
          </div>

          {/* Movie Details */}
          <div className="p-6">
            <h2 className="text-white text-2xl font-bold mb-2">
              {movie.title || movie.name}
            </h2>
            
            <div className="flex items-center space-x-4 mb-4 text-gray-300">
              {movie.vote_average && (
                <span className="bg-green-600 px-2 py-1 rounded text-white text-sm">
                  {Math.round(movie.vote_average * 10)}% Match
                </span>
              )}
              {movie.release_date && (
                <span>{new Date(movie.release_date).getFullYear()}</span>
              )}
              {movie.adult !== undefined && (
                <span className="border border-gray-500 px-2 py-1 text-xs">
                  {movie.adult ? '18+' : 'PG'}
                </span>
              )}
            </div>

            <p className="text-gray-300 mb-4">{movie.overview}</p>

            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-colors">
                <FaPlay className="w-4 h-4" />
                <span>Play</span>
              </button>
              <button className="flex items-center space-x-2 border border-gray-500 text-white px-6 py-2 rounded hover:border-white transition-colors">
                <FaPlus className="w-4 h-4" />
                <span>My List</span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoModal;