import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Lost & Found Portal</h1>
        <p className="text-lg mb-8">Easily report and recover lost items in your community.</p>
        <div className="flex justify-center">
          <a href="/report" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mr-4">
            Report Lost Item
          </a>
          <a href="/found" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg">
            Found an Item?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;