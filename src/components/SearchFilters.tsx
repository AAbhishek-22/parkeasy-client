import React from 'react';
import { Calendar, IndianRupee, MapPin, Car, Bike } from 'lucide-react';

export const SearchFilters = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Enter area or landmark"
              className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
          <div className="relative">
            <Car className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <select className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
              <option value="">Select vehicle type</option>
              <option value="2-wheeler">2 Wheeler</option>
              <option value="4-wheeler">4 Wheeler</option>
              <option value="commercial">Commercial Vehicle</option>
            </select>
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <select className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
              <option value="hourly">Hourly</option>
              <option value="daily">Daily</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Budget</label>
          <div className="relative">
            <IndianRupee className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <select className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
              <option>Any budget</option>
              <option>Under ₹50/hour</option>
              <option>₹50 - ₹100/hour</option>
              <option>Above ₹100/hour</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};