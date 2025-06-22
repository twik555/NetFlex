import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaBell } from 'react-icons/fa';

const Header = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-gradient-to-b from-black/80 to-transparent'
    }`}>
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-8">
          <div className="text-red-600 text-2xl md:text-3xl font-bold">NETFLIX</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
            <a href="#" className="hover:text-gray-300 transition-colors">TV Shows</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Movies</a>
            <a href="#" className="hover:text-gray-300 transition-colors">New & Popular</a>
            <a href="#" className="hover:text-gray-300 transition-colors">My List</a>
          </nav>
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            {showSearchBar ? (
              <motion.input
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 240, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="bg-black/80 border border-white/20 px-4 py-2 text-white rounded"
                placeholder="Search..."
                autoFocus
                onBlur={() => setShowSearchBar(false)}
              />
            ) : (
              <FaSearch 
                className="w-5 h-5 cursor-pointer hover:text-gray-300"
                onClick={() => setShowSearchBar(true)}
              />
            )}
          </div>
          <FaBell className="w-5 h-5 cursor-pointer hover:text-gray-300" />
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=32&h=32&fit=crop&crop=face"
              alt="Profile"
              className="w-8 h-8 rounded cursor-pointer"
            />
            <div className="absolute right-0 top-full mt-2 w-48 bg-black/90 border border-gray-600 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="p-2">
                <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?w=24&h=24&fit=crop&crop=face"
                    alt="Profile 1"
                    className="w-6 h-6 rounded"
                  />
                  <span>Profile 1</span>
                </div>
                <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=24&h=24&fit=crop&crop=face"
                    alt="Profile 2"
                    className="w-6 h-6 rounded"
                  />
                  <span>Profile 2</span>
                </div>
                <hr className="border-gray-600 my-2" />
                <div className="p-2 hover:bg-gray-800 rounded cursor-pointer">Account</div>
                <div className="p-2 hover:bg-gray-800 rounded cursor-pointer">Help Center</div>
                <div className="p-2 hover:bg-gray-800 rounded cursor-pointer">Sign out</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;