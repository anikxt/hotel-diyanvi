import React from 'react';
import { BarAndLivingRoom, Cuisine, CulinaryExperience } from './components';
import { Footer, Header } from '../components/layout';

function page() {
  return (
    <div className="overflow-hidden">
      <Header title="A Dining Experience" fontSize="text-9xl" />
      <BarAndLivingRoom />
      <Cuisine />
      <CulinaryExperience />
      <Footer />
    </div>
  );
}

export default page;
