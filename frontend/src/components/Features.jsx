import React from 'react';

const Features = () => {
  return (
    <section className="bg-gray-800 text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gray-700 p-5 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Step 1: Report</h3>
            <p>Submit a report for your lost item or found item through our easy-to-use form.</p>
          </div>
          <div className="bg-gray-700 p-5 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Step 2: Match</h3>
            <p>Our system will match your report with others to help you find your lost item.</p>
          </div>
          <div className="bg-gray-700 p-5 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Step 3: Recover</h3>
            <p>Connect with the finder or the owner to recover your item safely and securely.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;