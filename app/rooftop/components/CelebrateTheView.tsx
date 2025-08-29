import React from 'react';
import Image from 'next/image';

function CelebrateTheView() {
  return (
    <div className="bg-primary h-[1500px] flex flex-col gap-48">
      {/* title */}
      <div className="flex flex-col gap-8 items-center justify-center mt-48">
        <h2 className="text-quaternary font-editorial-old-ultralight text-7xl text-center font-medium leading-snug tracking-wide uppercase">
          SAVOR THE SKY, <br /> TASTE THE HEIGHTS, <br /> CELEBRATE THE VIEW.
        </h2>
        <p className="text-quaternary font-roboto text-center text-lg leading-normal tracking-tight">
          Above the city, every meal feels like a moment. At our rooftop, it's
          not just dining—it's living closer to the stars.
        </p>
      </div>

      {/* view */}
      <div className="relative">
        <div className="absolute top-0 left-25 -rotate-2 border-1 border-quaternary p-2.5">
          <Image
            src="/images/rooftop/image-2.jpg"
            alt="Offerings 2"
            className="w-[400px] h-[500px] object-cover"
            width={400}
            height={500}
          />
        </div>

        <div className="absolute top-0 left-160 rotate-4 border-1 border-quaternary p-2.5">
          <Image
            src="/images/rooftop/image-3.jpg"
            alt="Offerings 3"
            className="w-[400px] h-[500px] object-cover"
            width={400}
            height={500}
          />
        </div>

        <div className="absolute top-0 right-40 border-1 border-quaternary p-2.5">
          <Image
            src="/images/rooftop/image-4.jpg"
            alt="Offerings 4"
            className="w-[400px] h-[500px] object-cover"
            width={400}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}

export default CelebrateTheView;
