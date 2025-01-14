'use client';

import { useState } from 'react';
// Import Heroicons
import { SearchIcon, ShoppingCartIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-gray-100 via-white to-gray-100 bg-opacity-80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-gray-800">Linawear</h1>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-800 hover:text-gray-600 transition-transform focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-6 text-lg">
          <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
            Home
          </a>
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              className="text-gray-800 hover:text-gray-600 transition-colors duration-200 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              Our Products
            </button>
            <div
              className={`absolute top-10 left-0 bg-white/90 backdrop-blur-md shadow-lg rounded-lg py-3 w-56 opacity-0 transform scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ${
                isDropdownOpen ? 'opacity-100 scale-100' : ''
              }`}
            >
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-200"
              >
                Abaya
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-200"
              >
                Hijabs
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-200"
              >
                Khimars
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors duration-200"
              >
                Sets
              </a>
            </div>
          </div>
          <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
            Customer Service
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors duration-200">
            Blog
          </a>
        </nav>

        {/* Icons (Search, Language, Cart) */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-800 hover:text-gray-600 transition-transform focus:outline-none"
              aria-label="Search"
            >
              <SearchIcon className="h-6 w-6" />
            </button>
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search..."
                className="absolute top-10 right-0 bg-white/90 backdrop-blur-md border border-gray-300 rounded-lg px-4 py-2 w-64 shadow-lg focus:ring focus:ring-gray-300 focus:outline-none"
              />
            )}
          </div>

          {/* Language Selector */}
          <button
            className="text-gray-800 hover:text-gray-600 transition-transform focus:outline-none"
            aria-label="Select language"
          >
            🇺🇸
          </button>

          {/* Cart Icon */}
          <button
            className="relative text-gray-800 hover:text-gray-600 transition-transform focus:outline-none"
            aria-label="View cart"
          >
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </button>
        </div>

        {/* Mobile Menu (Overlay) */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
            <div className="fixed top-0 left-0 h-full w-64 bg-white/90 backdrop-blur-md shadow-lg p-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-800 hover:text-gray-600 transition-transform focus:outline-none"
                aria-label="Close mobile menu"
              >
                <XIcon className="h-6 w-6" />
              </button>
              <nav className="mt-6 space-y-4">
                <a
                  href="#"
                  className="block text-gray-800 hover:text-gray-600 transition-colors duration-200"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block text-gray-800 hover:text-gray-600 transition-colors duration-200"
                >
                  Our Products
                </a>
                <a
                  href="#"
                  className="block text-gray-800 hover:text-gray-600 transition-colors duration-200"
                >
                  Customer Service
                </a>
                <a
                  href="#"
                  className="block text-gray-800 hover:text-gray-600 transition-colors duration-200"
                >
                  Blog
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
