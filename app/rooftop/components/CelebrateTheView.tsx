import React from 'react';
import Image from 'next/image';

function CelebrateTheView() {
  return (
    <div className="bg-primary md:h-[1500px] flex flex-col gap-16 md:gap-32">
      {/* title */}
      <div className="flex flex-col gap-8 items-center justify-center mt-24 md:mt-32 lg:mt-48">
        <h2 className="text-quaternary font-editorial-old-ultralight text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-[15ch] sm:max-w-[30ch] text-center font-medium leading-snug tracking-wide uppercase">
          SAVOR THE SKY, <br /> TASTE THE HEIGHTS, <br /> CELEBRATE THE VIEW.
        </h2>
        <p className="text-rooftop-1 max-w-[35ch] md:max-w-prose font-roboto text-center text-base md:text-lg leading-normal tracking-tight">
          Above the city, every meal feels like a moment. At our rooftop, it's
          not just dining—it's living closer to the stars.
        </p>
      </div>

      {/* view */}
      <div className="flex relative justify-center items-center gap-4 md:gap-8 lg:gap-16 xl:gap-24">
        <div className="-rotate-2 border-1 border-quaternary p-2.5">
          <Image
            src="/images/rooftop/image-2.jpg"
            alt="Offerings 2"
            className="md:w-[400px] md:h-[500px] object-cover"
            width={400}
            height={500}
          />
        </div>

        <div className="rotate-4 border-1 border-quaternary p-2.5 mb-48">
          <Image
            src="/images/rooftop/image-3.jpg"
            alt="Offerings 3"
            className=" md:w-[400px] md:h-[500px] object-cover"
            width={400}
            height={500}
          />
        </div>

        <div className="hidden lg:blockborder-1 border-quaternary p-2.5">
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
