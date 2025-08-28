import React from 'react';
import Header from '../components/layout/Header';
import {
  RoomsAndSuites,
  SpecialRequests,
  HotelInformation,
} from './components';
import Footer from '../components/layout/Footer';

function page() {
  return (
    <div>
      <Header />
      <RoomsAndSuites />
      <SpecialRequests />
      <HotelInformation />
      <Footer />
    </div>
  );
}

export default page;
