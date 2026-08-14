import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
              <div className="inline-block px-3 py-1 rounded-full bg-teal-100 border border-teal-300 text-xs font-medium text-teal-700 mb-4">
                Step 4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Recover Item</h3>
              <p className="text-gray-600 text-sm">Meet safely and mark the report as resolved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Column 1: Logo & Tagline */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a.75.75 0 00-1.788 0l-7 140a.75.75 0 001.721.078l7-140zm-7 140a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-1.5 0z" />
                    <path d="M6 10a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </div>
                <span className="font-bold text-lg text-gray-900">FindWise</span>
              </div>
              <p className="text-gray-600 text-sm">Helping students recover their belongings on campus since 2024.</p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" onClick={handleReportLost} className="text-gray-600 hover:text-purple-600 text-sm transition">Report Lost Item</a></li>
                <li><a href="#" onClick={handleReportFound} className="text-gray-600 hover:text-purple-600 text-sm transition">Report Found Item</a></li>
                <li><a href="#" onClick={() => navigate('/my-reports')} className="text-gray-600 hover:text-purple-600 text-sm transition">My Reports</a></li>
              </ul>
            </div>

            {/* Column 3: Help & Support */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Help & Support</h4>
              <ul className="space-y-2">
                <li><a href="#" onClick={scrollToHowItWorks} className="text-gray-600 hover:text-purple-600 text-sm transition">How It Works</a></li>
                <li><a href="#" onClick={() => navigate('/faq')} className="text-gray-600 hover:text-purple-600 text-sm transition">FAQs</a></li>
                {user?.role === 'admin' && (
                  <li><a href="#" onClick={() => navigate('/admin')} className="text-gray-600 hover:text-purple-600 text-sm transition">Admin Panel</a></li>
                )}
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-600 text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0116 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  info@findwise.edu
                </li>
                <li className="flex items-center gap-2 text-gray-600 text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 011 .894l.851 4.687a1 1 0 01-.96 1.159H5.5a1 1 0 00-.96 1.159l.851 4.687a1 1 0 001 .894h2.153a1 1 0 011-1h2.153a1 1 0 011 .894l.851 4.687a1 1 0 01-.96 1.159H5.5a1 1 0 00-.96 1.159l.851 4.687a1 1 0 001 .894h2.153a1 1 0 011-1h2.153a1 1 0 011 .894l.851 4.687a1 1 0 01-.96 1.159H5.5a1 1 0 00-.96 1.159l.851 4.687a1 1 0 001 .894h2.153a1 1 0 011-1v2a1 1 0 11-2 0v-.5H5a1 1 0 100 2h10a1 1 0 100-2h-2.5v.5a1 1 0 11-2 0" />
                  </svg>
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-2 text-gray-600 text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  University Campus
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© 2026 FindWise. University Campus.</p>
            <p className="text-gray-600 text-sm">Made with ❤️ for students</p>
          </div>
        </div>
      </footer>

      {/* Floating Support Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition z-40">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
        </svg>
      </button>
    </div>
  )
}
      {/* Grid overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, rgba(139, 92, 246, 0.1) 25%, rgba(139, 92, 246, 0.1) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, 0.1) 75%, rgba(139, 92, 246, 0.1) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(139, 92, 246, 0.1) 25%, rgba(139, 92, 246, 0.1) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, 0.1) 75%, rgba(139, 92, 246, 0.1) 76%, transparent 77%, transparent)
        `,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Navbar */}
      <nav className="relative z-50 bg-opacity-80 backdrop-blur-md bg-[#0a0a0f] border-b border-[#2a2a3e] px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a.75.75 0 00-1.788 0l-7 140a.75.75 0 001.721.078l7-140zm-7 140a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-1.5 0z" />
                <path d="M6 10a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </div>
            <div className="flex gap-1">
              <span className="font-bold text-lg">Lost</span>
              <span className="font-bold text-lg bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                &Found
              </span>
            </div>
          </div>

          {/* Center nav links */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm font-medium hover:text-purple-400 transition">Home</a>
            <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition">Browse Items</a>
            <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition">Report Lost</a>
            <a href="#" className="text-sm font-medium text-gray-400 hover:text-white transition">Report Found</a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden md:flex items-center bg-[#1a1a2e] rounded-lg px-3 py-2 border border-[#2a2a3e]">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-sm outline-none text-gray-200 placeholder-gray-600 w-32"
              />
            </div>

            {/* Theme toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 hover:bg-[#1a1a2e] rounded-lg transition"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.78a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 2.828a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* Sign In button */}
            <button
              onClick={handleSignIn}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transition"
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10">
          <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-xs font-medium text-gray-300">Campus Lost & Found Portal</span>
          <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          <span className="block text-white">Lost Something?</span>
          <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">
            We'll Help You Find It
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          A centralized platform for students to report and recover lost items <br />
          within the university campus. Fast, secure, and verified.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={handleReportLost}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white font-medium hover:shadow-lg hover:shadow-red-500/50 transition inline-flex items-center justify-center gap-2"
          >
            Report Lost Item
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button
            onClick={handleReportFound}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium hover:shadow-lg hover:shadow-teal-500/50 transition inline-flex items-center justify-center gap-2"
          >
            Report Found Item
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
          <div className="flex items-center bg-[#1a1a2e] rounded-full border border-[#2a2a3e] p-2 shadow-xl hover:border-purple-500/50 transition">
            <svg className="w-5 h-5 text-gray-500 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search for lost or found items..."
              className="flex-1 bg-transparent px-4 py-3 outline-none text-gray-200 placeholder-gray-600"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-medium hover:shadow-lg transition m-1"
            >
              Search
            </button>
          </div>
        </form>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our simple 4-step process helps you report and recover lost items quickly and securely
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connection line (desktop only) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-transparent"></div>

          {/* Step 1 */}
          <div className="relative">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-purple-500/30 bg-purple-500/10 mb-6 mx-auto">
                <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                </svg>
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs font-medium text-purple-300 mb-4">
                Step 1
              </div>
              <h3 className="text-lg font-bold mb-2">Report Item</h3>
              <p className="text-gray-400 text-sm">Fill out a detailed report form with photos and item details</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-blue-500/30 bg-blue-500/10 mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs font-medium text-blue-300 mb-4">
                Step 2
              </div>
              <h3 className="text-lg font-bold mb-2">Search & Match</h3>
              <p className="text-gray-400 text-sm">Browse existing reports or get auto-matched with found items</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-indigo-500/30 bg-indigo-500/10 mb-6 mx-auto">
                <svg className="w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
                  <path d="M6.5 7a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                  <path d="M2 13l4-4m0 0l4 4m-4-4l4-4m0 0l4 4" />
                </svg>
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-xs font-medium text-indigo-300 mb-4">
                Step 3
              </div>
              <h3 className="text-lg font-bold mb-2">Connect Safely</h3>
              <p className="text-gray-400 text-sm">Secure messaging between finder and owner for coordination</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-teal-500/30 bg-teal-500/10 mb-6 mx-auto">
                <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/30 text-xs font-medium text-teal-300 mb-4">
                Step 4
              </div>
              <h3 className="text-lg font-bold mb-2">Recover Item</h3>
              <p className="text-gray-400 text-sm">Meet safely and mark the report as resolved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#2a2a3e] bg-[#0a0a0f] mt-20">
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Column 1: Logo & Tagline */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a.75.75 0 00-1.788 0l-7 140a.75.75 0 001.721.078l7-140zm-7 140a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v4.5a.75.75 0 01-1.5 0z" />
                    <path d="M6 10a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </div>
                <span className="font-bold text-lg">Lost&Found</span>
              </div>
              <p className="text-gray-500 text-sm">Helping students recover their belongings on campus since 2024.</p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition">Browse Items</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition">Report Lost Item</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition">Report Found Item</a></li>
              </ul>
            </div>

            {/* Column 3: Help & Support */}
            <div>
              <h4 className="font-bold mb-4">Help & Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition">Admin Panel</a></li>
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-400 text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  info@lostandfound.edu
                </li>
                <li className="flex items-center gap-2 text-gray-400 text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 011 .894l.851 4.687a1 1 0 01-.96 1.159H5.5a1 1 0 00-.96 1.159l.851 4.687a1 1 0 001 .894h2.153a1 1 0 011-1h2.153a1 1 0 011 .894l.851 4.687a1 1 0 01-.96 1.159H5.5a1 1 0 00-.96 1.159l.851 4.687a1 1 0 001 .894h2.153a1 1 0 011-1h2.153a1 1 0 011 .894l.851 4.687a1 1 0 01-.96 1.159H5.5a1 1 0 00-.96 1.159l.851 4.687a1 1 0 001 .894h2.153a1 1 0 011-1v2a1 1 0 11-2 0v-.5H5a1 1 0 100 2h10a1 1 0 100-2h-2.5v.5a1 1 0 11-2 0" />
                  </svg>
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-2 text-gray-400 text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  University Campus
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#2a2a3e] pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2026 Lost & Found Portal. University Campus.</p>
            <p className="text-gray-500 text-sm">Made with ❤️ for students</p>
          </div>
        </div>
      </footer>

      {/* Floating Support Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition z-40">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
          <path d="M6.5 7a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
          <path d="M2 13l4-4m0 0l4 4m-4-4l4-4m0 0l4 4" />
        </svg>
      </button>
    </div>
  )
}
