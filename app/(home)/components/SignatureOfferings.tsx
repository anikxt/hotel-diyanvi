import React from 'react';
import Image from 'next/image';

function SignatureOfferings() {
  return (
    <div className="hidden md:flex flex-col bg-primary min-h-screen ">
      {/* first */}
      <div className="text-quaternary font-roboto text-center text-lg uppercase font-medium tracking-tight flex flex-wrap justify-center gap-4">
        <div className="animate-scroll flex gap-4">
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
            <p>OPEN MIC</p>
          </div>
        </div>
      </div>

      {/* second */}
      <div className="mt-4">
        <div className="flex gap-4 ml-2">
          {Array.from({ length: 55 }).map((_, i) => (
            <div key={i} className="h-2 w-4 bg-secondary" />
          ))}
        </div>
        <div className="flex gap-4">
          <div className="h-2 w-2 bg-secondary" />
          {Array.from({ length: 55 }).map((_, i) => (
            <div key={i} className="h-2 w-4 bg-secondary" />
          ))}
        </div>
      </div>

      {/* third */}
      <div className="relative my-16">
        <div className="w-auto h-[860px]">
          <Image
            src="/images/home/image-5.jpg"
            alt="Diyanvi Image 5"
            fill
            className="object-cover object-top scale-[0.95]"
            priority={false}
          />
        </div>

        <div className="absolute top-4 left-40 z-20 inset-0">
          <div className="absolute top-25 left-60 w-[550px] h-[650px] bg-quaternary -rotate-4"></div>
          <div className="absolute top-29 left-64 border-2 border-quaternary w-[522px] h-[618px] -rotate-4"></div>
          <div className="absolute top-31 left-66 border-1 border-quaternary w-[506px] h-[604px] -rotate-4"></div>
          <h3 className="absolute top-45 left-70 text-quaternary font-calistoga text-sm uppercase font-medium tracking-tight -rotate-4">
            Our Signature Offerings
          </h3>

          {/* 1st */}
          <div className="absolute top-55 left-70 bg-quinary w-[450px] h-[70px] flex items-center gap-38 text-quaternary font-calistoga text-sm uppercase font-medium tracking-tight -rotate-4">
            <p className="ml-4 font-roboto font-normal text-lg text-quinary-light italic uppercase tracking-wide">
              LUXURY ROOMS & SUITES
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="rgb(255, 250, 244)"
              className="size-6 rotate-45"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>

          {/* 2nd */}
          <div className="absolute top-72.5 left-71 w-[450px] h-[70px] border-b-1 flex items-center gap-34 text-quaternary font-calistoga text-sm uppercase font-medium tracking-tight -rotate-4">
            <p className="ml-4 font-roboto font-normal text-lg text-quinary-dark italic uppercase tracking-wide">
              FINE DINING DESTINATIONS
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="rgb(95, 109, 2)"
              className="size-6 rotate-45"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>

          {/* 3rd */}
          <div className="absolute top-90 left-72.5 w-[450px] h-[70px] border-b-1 flex items-center gap-15 text-quaternary font-calistoga text-sm uppercase font-medium tracking-tight -rotate-4">
            <div className="flex flex-col">
              <p className="ml-4 font-roboto font-normal text-lg text-quinary-dark italic uppercase tracking-wide">
                HANDCRAFTED GUEST EXPERIENCES
              </p>
              <div className="font-roboto font-medium text-sm text-quinary-dark-light italic normal-case tracking-normal ml-4">
                ( Sunset soirees, wine tastings, heritage tours )
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="rgb(95, 109, 2)"
              className="size-6 rotate-45"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>

          {/* 4th */}
          <div className="absolute top-107.5 left-73.5 w-[450px] h-[70px] border-b-1 flex items-center gap-33.5 text-quaternary font-calistoga text-sm uppercase font-medium tracking-tight -rotate-4">
            <p className="ml-4 font-roboto font-normal text-lg text-quinary-dark italic uppercase tracking-wide">
              24/7 PERSONAL CONCIERGE
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="rgb(95, 109, 2)"
              className="size-6 rotate-45"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>

          {/* 5th */}
          <div className="absolute top-125 left-74.5 w-[450px] h-[70px] border-b-1 flex items-center gap-34 text-quaternary font-calistoga text-sm uppercase font-medium tracking-tight -rotate-4">
            <div className="flex flex-col">
              <p className="ml-4 font-roboto font-normal text-lg text-quinary-dark italic uppercase tracking-wide">
                WELLNESS & SPA RETREATS
              </p>
              <div className="font-roboto font-medium text-sm text-quinary-dark-light italic normal-case tracking-normal ml-4">
                ( In-room therapy on request )
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="rgb(95, 109, 2)"
              className="size-6 rotate-45"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>

        <div className="absolute z-10 top-60 right-120 h-[450px] w-[350px] rotate-8">
          <Image
            src="/images/home/offerings-2.jpg"
            alt="Diyanvi Image 6"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute z-30 top-55 left-175 h-[90px] w-[90px]">
          <Image
            src="/images/home/vector-5.svg"
            alt="Diyanvi Image 7"
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute z-30 top-57 left-177 h-[75px] w-[75px]">
          <Image
            src="/images/home/vector-6.svg"
            alt="Diyanvi Image 8"
            fill
            className="object-contain"
          />
        </div>

        <h3 className="absolute z-30 top-62.5 left-181 text-quinary-dark-light-2 text-center font-calistoga text-sm leading-4 font-medium tracking-wider -rotate-5">
          Check <br /> Now
        </h3>
      </div>
    </div>
  );
}

export default SignatureOfferings;
