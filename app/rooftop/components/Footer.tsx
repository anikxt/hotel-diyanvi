import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/images/home/image-6.jpg"
        alt="Footer 1"
        fill
        className="object-cover"
      />

      <div className="absolute bottom-10 left-32 w-[1500px] h-[425px] bg-tertiary">
        <div className="absolute border-b-0 bottom-0 left-6 border-2 border-quaternary w-[1450px] h-[405px]"></div>
        <div className="absolute border-b-0 bottom-0 left-9 border-1 border-quaternary w-[1424px] h-[395px]"></div>

        {/* grid */}
        <div className="mt-44 ml-9 mr-10 border border-x-0 border-quinary-dark">
          {/* outer frame */}
          <div className="grid grid-cols-4 grid-rows-2">
            {/* first column (spans both rows) */}
            <div className="row-span-2 flex items-center justify-center px-8 py-10 border-r border-quinary-dark">
              <h3 className="text-quinary-dark italic font-medium font-editorial-old-ultrabold tracking-wide text-xl">
                CONTACT US
              </h3>
            </div>

            {/* top row (columns 2..4) */}
            <div className="px-8 py-6 border-b border-r border-quinary-dark flex items-center justify-center font-roboto font-medium text-quinary-dark">
              ABOUT
            </div>
            <div className="px-8 py-6 border-b border-r border-quinary-dark flex items-center justify-center font-roboto font-medium text-quinary-dark">
              INSTAGRAM
            </div>
            <div className="px-8 py-6 border-b border-quinary-dark flex items-center justify-center font-roboto font-medium text-quinary-dark">
              CREDITS
            </div>

            {/* bottom row (columns 2..4) */}
            <div className="px-8 py-6 border-r border-quinary-dark flex items-center justify-center font-roboto font-medium text-quinary-dark">
              RECRUITMENT
            </div>
            <div className="px-8 py-6 border-r border-quinary-dark flex items-center justify-center font-roboto font-medium text-quinary-dark">
              FACEBOOK
            </div>
            <div className="px-8 py-6 flex items-center justify-center font-roboto font-medium text-quinary-dark">
              LEGAL NOTICES
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-12 text-quaternary font-roboto text-center text-lg uppercase font-medium tracking-tight flex flex-wrap justify-center gap-4">
          <div className="flex gap-4">
            <div className="flex gap-4">
              <p>BISTRO MATCH</p>
              <p>BROADCAST</p>
              <p>AFTERWORK</p>
              <p>ROOFTOP</p>
              <p>LIVE DJ SET</p>
              <p>SHOW</p>
              <p>OPEN MIC</p>
            </div>

            <div className="flex gap-4">
              <p>BISTRO MATCH</p>
              <p>BROADCAST</p>
              <p>AFTERWORK</p>
              <p>ROOFTOP</p>
              <p>LIVE DJ SET</p>
              <p>SHOW</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-3 left-9 flex gap-4">
          {Array.from({ length: 45 }).map((_, i) => (
            <div key={i} className="h-3 w-4 bg-secondary" />
          ))}
        </div>
        <div className="absolute bottom-0 left-13 flex gap-4">
          {Array.from({ length: 44 }).map((_, i) => (
            <div key={i} className="h-3 w-4 bg-secondary" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
