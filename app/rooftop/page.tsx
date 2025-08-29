import React from 'react';
import {
  Header,
  CelebrateTheView,
  ServicesOverview,
  HappyHour,
  Footer,
} from './components';

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
