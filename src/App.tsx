import React from 'react';
import { Header } from './components/Header';
import { SearchFilters } from './components/SearchFilters';
import { ParkingSpaceCard } from './components/ParkingSpaceCard';
import type { ParkingSpace } from './types';

const SAMPLE_SPACES: ParkingSpace[] = [
  {
    id: '1',
    title: 'Secure Parking Near Cyber City',
    address: 'DLF Cyber City, Gurugram, Haryana',
    price: 50,
    priceUnit: 'hour',
    imageUrl: 'https://images.unsplash.com/photo-1470224114660-3f6686c562eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    features: ['CCTV', 'Security Guard', 'Covered'],
    vehicleTypes: ['2-wheeler', '4-wheeler'],
    availability: {
      from: '6:00 AM',
      to: '10:00 PM'
    },
    owner: {
      name: 'Rajesh Kumar',
      rating: 4.8,
      verificationStatus: 'verified'
    }
  },
  {
    id: '2',
    title: 'Monthly Parking - Powai Lake',
    address: 'Powai, Mumbai, Maharashtra',
    price: 3000,
    priceUnit: 'month',
    imageUrl: 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    features: ['24/7 Access', 'EV Charging'],
    vehicleTypes: ['4-wheeler'],
    availability: {
      from: '12:00 AM',
      to: '11:59 PM'
    },
    owner: {
      name: 'Priya Sharma',
      rating: 4.9,
      verificationStatus: 'verified'
    }
  },
  {
    id: '3',
    title: '2-Wheeler Parking - Koramangala',
    address: '6th Block, Koramangala, Bangalore',
    price: 20,
    priceUnit: 'hour',
    imageUrl: 'https://images.unsplash.com/photo-1621977717126-e29965156a27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    features: ['Bike Stand', 'Well-lit'],
    vehicleTypes: ['2-wheeler'],
    availability: {
      from: '8:00 AM',
      to: '8:00 PM'
    },
    owner: {
      name: 'Amit Patel',
      rating: 4.7,
      verificationStatus: 'pending'
    }
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <div className="py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Find Parking Space Near You
          </h1>
          <p className="text-gray-600 mb-6">
            Book trusted parking spaces in your city for 2-wheelers and 4-wheelers
          </p>
          <SearchFilters />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
          {SAMPLE_SPACES.map((space) => (
            <ParkingSpaceCard key={space.id} space={space} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;