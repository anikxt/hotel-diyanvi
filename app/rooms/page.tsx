import React from 'react';

import {
  RoomsAndSuites,
  SpecialRequests,
  HotelInformation,
} from './components';
import { Footer, Header } from '../components/layout';

function page() {
  return (
    <div>
      <Header title="Stay At The Diyanvi" fontSize="text-9xl" />
      <RoomsAndSuites />
      <SpecialRequests />
      <HotelInformation />
      <Footer />
    </div>
  );
}

export default page;
