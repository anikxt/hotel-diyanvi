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

export default function Page() {
  return (
    <div>
      <Header title="Diyanvi" fontSize="text-[200px]" />
      <HomeIntro />
      <AboutSection />
      <ServicesOverview />
      <WelcomeToHotel />
      <SignatureOfferings />
      <InclusiveExperience />
      <Footer />
    </div>
  );
}
