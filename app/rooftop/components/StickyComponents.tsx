import Image from 'next/image';
import React from 'react';

function StickyComponents() {
  return (
    <div>
      <div className="hidden 2xl:flex absolute z-50 top-2 right-12 h-[102px] w-[102px]">
        {/* 2nd vector */}
        <div>
          <div className="absolute z-30 top-10 right-30 h-[102px] w-[102px]">
            <Image
              src="/images/rooftop/vector-2.svg"
              alt="Diyanvi Image 1"
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute z-30 top-12 right-32 h-[86px] w-[86px] rotate-4">
            <Image
              src="/images/rooftop/vector-4.svg"
              alt="Diyanvi Image 2"
              fill
              className="object-contain"
            />
          </div>

          <h3 className="absolute z-30 top-19 right-35.5 text-quinary-dark-light-2 text-center font-calistoga text-base leading-4 font-medium tracking-wider -rotate-15">
            Pastry <br /> List
          </h3>
        </div>

        {/* 3rd vector */}
        <div>
          <div className="absolute z-40 top-25 right-12 h-[60px] w-[160px] -rotate-7">
            <Image
              src="/images/rooftop/vector-1.svg"
              alt="Diyanvi Image 3"
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute z-40 top-21.5 right-17.5 h-[90px] w-[116px] -rotate-7">
            <Image
              src="/images/rooftop/vector-5.svg"
              alt="Diyanvi Image 4"
              fill
              className="object-contain"
            />
          </div>

          <h3 className="absolute z-40 top-30 right-19.5 text-quinary-dark-light-2 text-center font-calistoga text-base font-medium tracking-wider -rotate-15">
            Reservation
          </h3>
        </div>
      </div>
    </div>
  );
}

export default StickyComponents;
