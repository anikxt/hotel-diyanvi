import React from 'react';
import Image from 'next/image';

function SpecialRequests() {
  return (
    <div className="relative min-h-screen">
      <div className="w-full h-screen relative">
        <Image
          src="/images/rooms/image-3.jpg"
          alt="Special Requests"
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-50 left-125 w-[700px] h-[440px] bg-primary flex flex-col gap-10 items-center justify-center">
          <span className="text-primary font-editorial-old-regular text-5xl font-medium tracking-wide mt-4">
            Special Requests ?
          </span>
          <p className="text-secondary font-roboto text-center text-base max-w-[60ch] font-medium">
            Whether you're looking for a room with a mountain view, extra space
            for the family, or special accommodations to make your stay more
            comfortable, we're here to help. Call us directly to book your stay
            or discuss any specific needs - our team is ready to ensure every
            detail is perfect.
          </p>
          <div className="h-[50px] w-[200px] border-1 border-quinary-light flex items-center justify-center">
            <div className="bg-quinary-light px-11.5 py-2.5 font-editorial-old-regular text-quinary-light normal-case leading-tight tracking-tight text-xl">
              Enquire Now
            </div>
          </div>
        </div>
        <div className="absolute top-55 left-130 border-2 border-rooms-1 w-[660px] h-[400px]"></div>
        <div className="absolute top-56.5 left-131.5 border-1 border-rooms-1 w-[648px] h-[388px]"></div>
      </div>
    </div>
  );
}

export default SpecialRequests;
