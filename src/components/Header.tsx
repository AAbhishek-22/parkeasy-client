import React from 'react';
import { Search, MapPin, Menu, Phone } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="bg-orange-600 text-white py-1 text-center text-sm">
        <div className="flex items-center justify-center">
          <Phone className="h-4 w-4 mr-2" />
          <span>24/7 Support: +91 1800-123-4567</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <MapPin className="h-8 w-8 text-orange-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">ParkEasy</span>
            <span className="ml-2 text-sm text-orange-600">.in</span>
          </div>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search in your city (e.g., Mumbai, Delhi, Bangalore)"
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <nav className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">List Your Space</button>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
              Sign In
            </button>
            <Menu className="h-6 w-6 text-gray-600 cursor-pointer md:hidden" />
          </nav>
        </div>
      </div>
    </header>
  );
};