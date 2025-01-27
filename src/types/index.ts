export interface ParkingSpace {
  id: string;
  title: string;
  address: string;
  price: number;
  priceUnit: 'hour' | 'day' | 'month';
  imageUrl: string;
  features: string[];
  availability: {
    from: string;
    to: string;
  };
  owner: {
    name: string;
    rating: number;
    verificationStatus: 'verified' | 'pending' | 'unverified';
  };
  vehicleTypes: ('2-wheeler' | '4-wheeler' | 'commercial')[];
}