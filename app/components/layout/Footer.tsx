'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function Footer() {
  const [firstArrayLength, setFirstArrayLength] = useState(20);
  const [secondArrayLength, setSecondArrayLength] = useState(20);
  const [thirdArrayLength, setThirdArrayLength] = useState(20);
  useEffect(() => {
    const updateFirstArrayLength = () => {
      if (window.innerWidth >= 1024) setFirstArrayLength(28); // lg
      else if (window.innerWidth >= 768) setFirstArrayLength(28); // md
      else if (window.innerWidth >= 640) setFirstArrayLength(28); // sm
      else setFirstArrayLength(19); // xs
    };

    const updateSecondArrayLength = () => {
      if (window.innerWidth >= 1024) setSecondArrayLength(20); // lg
      else if (window.innerWidth >= 768) setSecondArrayLength(20); // md
      else if (window.innerWidth >= 640) setSecondArrayLength(20); // sm
      else setSecondArrayLength(10); // xs
    };

    const updateThirdArrayLength = () => {
      if (window.innerWidth >= 1280) setThirdArrayLength(38); // xl
      else if (window.innerWidth >= 1024) setThirdArrayLength(26); // lg
      else if (window.innerWidth >= 768) setThirdArrayLength(20); // md
      else if (window.innerWidth >= 640) setThirdArrayLength(8); // sm
      else setThirdArrayLength(8); // xs
    };

    updateFirstArrayLength();
    updateSecondArrayLength();
    updateThirdArrayLength();
    window.addEventListener('resize', updateFirstArrayLength);
    window.addEventListener('resize', updateSecondArrayLength);
    window.addEventListener('resize', updateThirdArrayLength);
    return () => {
      window.removeEventListener('resize', updateFirstArrayLength);
      window.removeEventListener('resize', updateSecondArrayLength);
      window.removeEventListener('resize', updateThirdArrayLength);
    };
  }, []);

  return (
    <div className="min-h-screen w-full relative z-40 flex flex-col gap-32 sm:gap-40 py-20 sm:py-40 items-center justify-center">
      <Image
        src="/images/home/image-6.jpg"
        alt="Footer 1"
        fill
        className="object-cover object-top"
      />

      <div className="flex flex-col items-center w-[300px] h-[420px] sm:w-[450px] sm:h-[620px] bg-quaternary -rotate-4">
        {/* top design */}
        <div>
          <div className="flex gap-2 ml-2">
            {Array.from({ length: firstArrayLength - 1 }).map((_, i) => (
              <div key={i} className="h-1 w-2 bg-secondary" />
            ))}
          </div>
          <div className="flex gap-2">
            {Array.from({ length: firstArrayLength }).map((_, i) => (
              <div key={i} className="h-1 w-2 bg-secondary" />
            ))}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-quinary-dark text-center font-editorial-old-regular text-2xl sm:text-5xl uppercase leading-tight tracking-wide mt-8 sm:mt-16">
          Delightful <br /> Privilige
        </h3>

        {/* bottom design */}
        <div className="mt-4 sm:mt-8">
          <div className="flex justify-center gap-2">
            {Array.from({ length: secondArrayLength }).map((_, i) => (
              <div key={i} className="h-1 w-2 bg-secondary" />
            ))}
          </div>
          <div className="flex justify-center pl-4 gap-2">
            {Array.from({ length: secondArrayLength }).map((_, i) => (
              <div key={i} className="h-1 w-2 bg-secondary" />
            ))}
          </div>
        </div>

        {/* subtitle */}
        <div className="mt-5 sm:mt-6 text-quinary-dark text-center font-roboto font-bold italic text-sm sm:text-lg normal-case leading-tight tracking-normal">
          Let The Journey Begin.
        </div>

        {/* content */}
        <div className="mt-5 sm:mt-6 flex flex-col text-quinary-dark font-roboto px-2 sm:px-0 text-xs sm:text-sm normal-case leading-tight tracking-tight">
          <div className="flex gap-2 sm:gap-0 items-center border-y border-quinary-dark">
            <div className="border-r py-3 sm:py-4 text-left font-medium w-20 sm:w-28">
              01 OFFER
            </div>
            <div className="sm:ml-2 text-xs italic font-medium max-w-47 sm:max-w-50">
              Book early and save 15% on your next stay
            </div>
          </div>

          <div className="flex gap-2 sm:gap-0 items-center border-b border-quinary-dark">
            <div className="border-r py-3 sm:py-4 text-left font-medium w-20 sm:w-28">
              02 PRIVILEGE
            </div>
            <div className="sm:ml-2 text-xs italic font-medium max-w-47 sm:max-w-50">
              Diyanvi Club: Your gateway to privileged luxury
            </div>
          </div>

          <div className="flex gap-2 sm:gap-0 items-center border-b border-quinary-dark">
            <div className="border-r py-3 sm:py-4 text-left font-medium w-20 sm:w-28">
              03 SEASONAL <br /> ESCAPE
            </div>
            <div className="sm:ml-2 text-xs italic font-medium text-left max-w-47 sm:max-w-50">
              Winter Elegance Packages & Summer <br /> Indulgence Stays
            </div>
          </div>
        </div>

        {/* contact us button */}
        <div className="mt-8 sm:mt-16 sm:h-[42px] sm:w-[202px] h-[38px] w-[180px] border-1 border-quinary-light flex items-center justify-center">
          <div className="bg-quinary-light sm:px-16 px-13 sm:py-2 py-1.5 font-editorial-old-regular text-quinary-light normal-case leading-tight tracking-tight text-base">
            Contact Us
          </div>
        </div>
      </div>

      <div className="z-10 flex w-[300px] md:w-[700px] lg:w-[900px] xl:w-[1280px] h-[425px] bg-tertiary">
        <div className="flex border-b-0 border-2 border-quaternary w-[275px] md:w-[655px] lg:w-[840px] xl:w-[1220px] h-[400px] mt-6.5 mx-auto">
          <div className="border-b-0 border-1 border-quaternary w-[260px] md:w-[640px] lg:w-[820px] xl:w-[1200px] h-[390px] mt-2 mx-auto">
            {/* Contact Us */}
            <div className="mt-35 border border-x-0 border-quinary-dark">
              {/* outer frame */}
              <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 lg:grid-cols-4 md:grid-rows-2">
                {/* first column (spans both rows) */}
                <div className="col-span-2 row-span-3 md:col-span-1 md:row-span-2 flex items-center justify-center px-8 py-4 md:py-10 md:border-r border-quinary-dark">
                  <h3 className="text-quinary-dark italic font-medium font-editorial-old-ultrabold tracking-wide text-lg md:text-xl">
                    CONTACT US
                  </h3>
                </div>

                {/* top row (columns 2..4) */}
                <div className="px-8 py-4 md:py-6 border-t md:border-t-0 border-b border-r border-quinary-dark flex items-center justify-center text-sm md:text-base font-roboto font-medium text-quinary-dark">
                  ABOUT
                </div>
                <div className="px-8 py-4 md:py-6 border-t md:border-t-0 border-b lg:border-r border-quinary-dark flex items-center justify-center text-sm md:text-base font-roboto font-medium text-quinary-dark">
                  INSTAGRAM
                </div>
                <div className="px-8 py-4 md:py-6 border-r lg:border-r-0 lg:border-b border-quinary-dark flex items-center justify-center text-sm md:text-base font-roboto font-medium text-quinary-dark">
                  CREDITS
                </div>

                {/* bottom row (columns 2..4) */}
                <div className="px-8 py-4 md:py-6 lg:border-r border-quinary-dark flex items-center justify-center text-sm md:text-base font-roboto font-medium text-quinary-dark">
                  RECRUITMENT
                </div>
                <div className="hidden lg:flex px-8 py-4 md:py-6 border-r border-quinary-dark items-center justify-center text-sm md:text-base font-roboto font-medium text-quinary-dark">
                  FACEBOOK
                </div>
                <div className="hidden lg:flex px-8 py-4 md:py-6 items-center justify-center text-sm md:text-base font-roboto font-medium text-quinary-dark">
                  LEGAL NOTICES
                </div>
              </div>
            </div>

            {/* Marquee */}
            <div className="hidden md:flex mt-6 text-quaternary font-roboto text-center text-lg uppercase font-medium tracking-tight items-center justify-center gap-5">
              <p>BISTRO MATCH</p>
              <p>BROADCAST</p>
              <p>AFTERWORK</p>
              <p>ROOFTOP</p>
              <p>LIVE DJ SET</p>
              <p className="hidden lg:inline">SHOW</p>
              <p className="hidden lg:inline">OPEN MIC</p>
              <p className="hidden xl:inline">BISTRO MATCH</p>
              <p className="hidden xl:inline">BROADCAST</p>
              <p className="hidden xl:inline">AFTERWORK</p>
            </div>

            {/* Marquee Design */}
            <div className="mt-14 md:mt-6">
              <div className="flex gap-4">
                {Array.from({ length: thirdArrayLength }).map((_, i) => (
                  <div key={i} className="h-3 w-4 bg-secondary" />
                ))}
              </div>
              <div className="ml-4 flex gap-4">
                {Array.from({ length: thirdArrayLength }).map((_, i) => (
                  <div key={i} className="h-3 w-4 bg-secondary" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
