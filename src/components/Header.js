import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-white text-red-600 rounded-full p-2">
              <svg
                className="w-6 h-6 md:w-8 md:h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-bold">LifeLink</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="hover:text-red-200 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-red-200 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-red-200 transition-colors font-medium"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="hover:text-red-200 transition-colors font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-red-50 transition-all shadow-md"
            >
              Donate Blood
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-red-500">
            <Link
              to="/"
              onClick={toggleMenu}
              className="block hover:text-red-200 transition-colors font-medium py-2"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={toggleMenu}
              className="block hover:text-red-200 transition-colors font-medium py-2"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="block hover:text-red-200 transition-colors font-medium py-2"
            >
              Contact
            </Link>
            <Link
              to="/login"
              onClick={toggleMenu}
              className="block hover:text-red-200 transition-colors font-medium py-2"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={toggleMenu}
              className="block bg-white text-red-600 px-6 py-3 rounded-full font-semibold text-center hover:bg-red-50 transition-all"
            >
              Donate Blood
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
