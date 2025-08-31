import React from 'react';
import Image from 'next/image';

function SpecialRequests() {
  return (
    <div className="relative z-40 min-h-screen">
      <div className="w-full h-screen relative">
        <Image
          src="/images/rooms/image-3.jpg"
          alt="Special Requests"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[320px] md:w-[700px] h-[600px] md:h-[440px] bg-primary flex flex-col gap-10 items-center justify-center">
          <span className="text-primary font-editorial-old-regular text-3xl md:text-5xl font-medium tracking-wide mt-4">
            Special Requests ?
          </span>
          <p className="text-secondary font-roboto text-center text-sm md:text-base max-w-[28ch] md:max-w-[60ch] font-medium">
            Whether you're looking for a room with a mountain view, extra space
            for the family, or special accommodations to make your stay more
            comfortable, we're here to help. Call us directly to book your stay
            or discuss any specific needs - our team is ready to ensure every
            detail is perfect.
          </p>
          <div className="h-[52px] md:h-[50px] w-[150px] md:w-[200px] border-1 border-quinary-light flex items-center justify-center">
            <div className="bg-quinary-light px-7.5 md:px-11.5 py-3 md:py-2.5 font-editorial-old-regular text-quinary-light normal-case leading-tight tracking-tight text-base md:text-xl">
              Enquire Now
            </div>
          </div>
          <div className="absolute top-5 left-5.5 border-2 border-rooms-1 w-[280px] md:w-[660px] h-[560px] md:h-[400px]"></div>
          <div className="absolute top-6.5 left-7 border-1 border-rooms-1 w-[267.5px] md:w-[648px] h-[548px] md:h-[388px]"></div>
        </div>
      </div>
    </div>
  );
}

export default SpecialRequests;
