import React from 'react';
import Header from '../components/layout/Header';
import { HomeIntro, AboutSection, ServicesOverview } from './components';

export default function Page() {
  return (
    <div>
      <Header />
      <HomeIntro />
      <AboutSection />
      <ServicesOverview />
    </div>
  );
}
