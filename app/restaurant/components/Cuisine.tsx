import React from 'react';
import Image from 'next/image';

function Cuisine() {
  return (
    <div className="w-full h-screen relative">
      <Image src="/images/restaurant/image-4.jpg" alt="Cuisine" fill priority />
      <h2 className="absolute bottom-0 left-16 text-white font-pangaia-medium-italic text-center text-[150px] tracking-wide">
        Cuisine
      </h2>
    </div>
  );
}

export default Cuisine;
