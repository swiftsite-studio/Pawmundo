import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
            <div className="relative bg-gradient-to-r from-teal-500 to-blue-500 p-3 rounded-full">
              <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9C15 10.1 14.1 11 13 11S11 10.1 11 9V7.5L5 7V9C5 10.1 4.1 11 3 11S1 10.1 1 9V7C1 6.4 1.4 6 2 6L10 6.5C10.6 6.5 11 6.9 11 7.5V9C11 9.6 11.4 10 12 10S13 9.6 13 9V7.5C13 6.9 13.4 6.5 14 6.5L22 6C22.6 6 23 6.4 23 7V9C23 10.1 22.1 11 21 11S19 10.1 19 9ZM7.5 12C9.43 12 11 13.57 11 15.5C11 17.43 9.43 19 7.5 19C5.57 19 4 17.43 4 15.5C4 13.57 5.57 12 7.5 12ZM16.5 12C18.43 12 20 13.57 20 15.5C20 17.43 18.43 19 16.5 19C14.57 19 13 17.43 13 15.5C13 13.57 14.57 12 16.5 12Z"/>
              </svg>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-3xl font-bold text-gray-800">PawPals</span>
            <span className="text-3xl font-bold text-gray-800">PawMundo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-6 py-3 rounded-full text-base font-semibold transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg'
                    : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50 hover:scale-105'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 p-2 rounded-lg"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="px-4 py-6">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`mobile-nav-item px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-teal-500 text-white'
                      : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
                  } ${isOpen ? 'animate-in' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;