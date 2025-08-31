import React from 'react';
import {
  Header,
  CelebrateTheView,
  ServicesOverview,
  HappyHour,
} from './components';
import { Footer } from '../components/layout';
import DummyComponent from '../components/utils/DummyComponent';

function page() {
  return (
    <div>
      <Header />
      <CelebrateTheView />
      <ServicesOverview />
      <HappyHour />
      <DummyComponent />
      <Footer />
    </div>
  );
}

export default page;
