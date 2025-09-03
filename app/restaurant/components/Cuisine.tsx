import React from 'react';
import Image from 'next/image';

function Cuisine() {
  return (
    <div className="w-full h-[500px] md:h-screen relative z-40">
      <Image
        src="/HOTEL IMAGES - WEBP/image-8.webp"
        alt="Cuisine"
        fill
        priority
      />
      <h2 className="absolute bottom-0 left-[10%] text-white font-pangaia-medium-italic text-center text-[64px] sm:text-[100px] md:text-[120px] lg:text-[150px] tracking-wide">
        Cuisine
      </h2>
    </div>
  );
}

export default Cuisine;
