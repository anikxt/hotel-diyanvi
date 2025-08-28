import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <div className="relative h-[1400px]">
      <Image
        src="/images/home/image-6.jpg"
        alt="Footer 1"
        fill
        className="object-cover object-top"
      />

      <div className="absolute top-40 left-160 w-[450px] h-[620px] bg-quaternary -rotate-4">
        <div className="absolute flex gap-2 ml">
          {Array.from({ length: 28 }).map((_, i) => (
            <div key={i} className="h-1 w-2 bg-secondary" />
          ))}
        </div>
        <div className="absolute top-1 left-2 flex gap-2">
          {Array.from({ length: 28 }).map((_, i) => (
            <div key={i} className="h-1 w-2 bg-secondary" />
          ))}
        </div>

        <h3 className="absolute top-20 left-18 text-quinary-dark text-center font-editorial-old-regular text-5xl uppercase leading-tight tracking-wide">
          Delightful <br /> Privilige
        </h3>

        <div className="absolute top-63 left-16 flex justify-center gap-2">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="h-1 w-2 bg-secondary" />
          ))}
        </div>
        <div className="absolute top-64 left-18 flex gap-2">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="h-1 w-2 bg-secondary" />
          ))}
        </div>

        <div className="absolute top-72 left-32 text-quinary-dark text-center font-roboto font-bold italic text-lg normal-case leading-tight tracking-normal">
          Let The Journey Begin.
        </div>

        <div className="absolute top-84 left-12 flex flex-col text-quinary-dark font-roboto text-sm normal-case leading-tight tracking-tight">
          <div className="flex items-center border-y border-quinary-dark">
            <div className="border-r py-4 text-left font-medium w-28">
              01 OFFER
            </div>
            <div className="ml-2 text-xs italic font-medium">
              Book early and save 15% on your next stay
            </div>
          </div>

          <div className="flex items-center border-b border-quinary-dark">
            <div className="border-r py-4  text-left font-medium w-28">
              02 PRIVILEGE
            </div>
            <div className="ml-2 text-xs italic font-medium">
              Diyanvi Club: Your gateway to privileged luxury
            </div>
          </div>

          <div className="flex items-center border-b border-quinary-dark">
            <div className="border-r py-4  text-left font-medium w-28">
              03 SEASONAL <br /> ESCAPE
            </div>
            <div className="ml-2 text-xs italic font-medium text-left">
              Winter Elegance Packages & Summer <br /> Indulgence Stays
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-30 h-[41px] w-[202px] border-1 border-quinary-light flex items-center justify-center">
          <div className="bg-quinary-light px-16 py-2 font-editorial-old-regular text-quinary-light normal-case leading-tight tracking-tight text-base">
            Contact Us
          </div>
        </div>
      </div>

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
