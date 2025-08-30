import React from 'react';
import {
  Header,
  CelebrateTheView,
  ServicesOverview,
  HappyHour,
} from './components';
import { Footer } from '../components/layout';

function page() {
  return (
    <div>
      <Header />
      <CelebrateTheView />
      <ServicesOverview />
      <HappyHour />
      <Footer />
    </div>
  );
}

export default page;
