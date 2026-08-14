import React from 'react';

const CTA = () => {
  return (
    <div className="bg-gray-800 text-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to find your lost items?</h2>
        <p className="mb-6">Join our community and help reunite lost items with their owners.</p>
        <div className="flex justify-center space-x-4">
          <a href="/report" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Report Lost Item
          </a>
          <a href="/found" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
            Report Found Item
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;