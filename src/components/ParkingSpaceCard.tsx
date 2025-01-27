import React from 'react';
import { Star, Clock, Shield, Car, Bike } from 'lucide-react';
import type { ParkingSpace } from '../types';

interface Props {
  space: ParkingSpace;
}

export const ParkingSpaceCard: React.FC<Props> = ({ space }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="relative h-48">
        <img
          src={space.imageUrl}
          alt={space.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg text-sm font-semibold">
          ₹{space.price}/{space.priceUnit}
        </div>
        {space.owner.verificationStatus === 'verified' && (
          <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-semibold flex items-center">
            <Shield className="h-3 w-3 mr-1" />
            Verified
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{space.title}</h3>
        <p className="text-gray-600 text-sm mt-1">{space.address}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="ml-1 text-sm text-gray-600">{space.owner.rating}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-1" />
            <span>{space.availability.from} - {space.availability.to}</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {space.vehicleTypes.map((type, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded-full flex items-center"
            >
              {type === '2-wheeler' ? <Bike className="h-3 w-3 mr-1" /> : <Car className="h-3 w-3 mr-1" />}
              {type}
            </span>
          ))}
          {space.features.map((feature, index) => (
            <span
              key={`feature-${index}`}
              className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button className="bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors">
            Book Now
          </button>
          <button className="border border-orange-600 text-orange-600 py-2 rounded-lg hover:bg-orange-50 transition-colors">
            Contact Owner
          </button>
        </div>
      </div>
    </div>
  );
};