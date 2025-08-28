import React from 'react';
import {
  Header,
  HomeIntro,
  AboutSection,
  ServicesOverview,
  WelcomeToHotel,
  SignatureOfferings,
} from './components';
import Footer from '../components/layout/Footer';

export default function Page() {
  return (
    <div>
      <Header />
      <HomeIntro />
      <AboutSection />
      <ServicesOverview />
      <WelcomeToHotel />
      <SignatureOfferings />
      <Footer />
    </div>
  );
}
