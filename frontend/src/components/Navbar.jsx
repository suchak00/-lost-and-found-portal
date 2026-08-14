import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">Lost & Found Portal</Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/login" className="text-gray-300 hover:text-white">
            Login
          </Link>
          <Link to="/report" className="text-gray-300 hover:text-white">
            Report Lost Item
          </Link>
          <Link to="/found" className="text-gray-300 hover:text-white">
            Found Items
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;