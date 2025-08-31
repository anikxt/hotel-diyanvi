import React from 'react';
import {
  HomeIntro,
  AboutSection,
  ServicesOverview,
  WelcomeToHotel,
  SignatureOfferings,
  InclusiveExperience,
} from './components';
import { Footer, Header } from '../components/layout';
import DummyComponent from '../components/utils/DummyComponent';

export default function Page() {
  return (
    <div>
      <Header
        title="Diyanvi"
        fontSize="text-[80px] sm:text-[90px] md:text-[120px] lg:text-[150px] xl:text-[180px] 2xl:text-[200px]"
      />
      <HomeIntro />
      <AboutSection />
      <ServicesOverview />
      <WelcomeToHotel />
      <SignatureOfferings />
      <InclusiveExperience />
      <DummyComponent />
      <Footer />
    </div>
  );
}
