import React from 'react';
import { BarAndLivingRoom, Cuisine, CulinaryExperience } from './components';
import { Footer, Header } from '../components/layout';

function page() {
  return (
    <div>
      <Header
        title="A Dining Experience"
        fontSize="text-center text-[64px] sm:text-[78px] md:text-[90px] lg:text-[112px] xl:text-[120px] 2xl:text-[128px]"
      />
      <BarAndLivingRoom />
      <Cuisine />
      <CulinaryExperience />
      <Footer />
    </div>
  );
}

export default page;
