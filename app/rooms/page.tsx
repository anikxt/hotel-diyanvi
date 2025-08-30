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
      <Header
        title="Stay At The Diyanvi"
        fontSize="text-center text-[60px] sm:text-[78px] md:text-[90px] lg:text-[112px] xl:text-[120px] 2xl:text-[128px]"
      />
      <RoomsAndSuites />
      <SpecialRequests />
      <HotelInformation />
      <Footer />
    </div>
  );
}

export default page;
