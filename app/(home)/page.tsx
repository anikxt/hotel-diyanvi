import React from 'react';
import Header from '../components/layout/Header';
import { HomeIntro, ServicesOverview, AboutSection } from './components';

export default function Page() {
  return (
    <div>
      <Header />
      <HomeIntro />
      <AboutSection />
      {/* <ServicesOverviewSection /> */}
    </div>
  );
}
