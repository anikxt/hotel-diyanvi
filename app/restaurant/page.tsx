import React from 'react';
import {
  BarAndLivingRoom,
  Cuisine,
  CulinaryExperience,
  Header,
} from './components';
import Footer from '../components/layout/Footer';

function page() {
  return (
    <div className="overflow-hidden">
      <Header />
      <BarAndLivingRoom />
      <Cuisine />
      <CulinaryExperience />
      <Footer />
    </div>
  );
}

export default page;
