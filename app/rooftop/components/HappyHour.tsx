import React from 'react';
import Image from 'next/image';

function HappyHour() {
  return (
    <div className="relative bg-primary h-[1300px] flex flex-col gap-48">
      {/* title */}
      <div className="flex flex-col gap-10 items-center justify-center mt-48">
        <h2 className="text-quaternary font-editorial-old-ultralight text-7xl text-center font-medium leading-snug tracking-wide uppercase">
          THE NIGHT <br /> BELONGS HERE
        </h2>
        <p className="text-quaternary font-roboto text-center text-lg leading-normal tracking-tight max-w-[55ch]">
          Cocktail hours, live DJs, game nights, karaoke, and endless
          laughter—at our bar, every evening comes alive with energy and flavor.
        </p>
      </div>

      {/* eclipse */}
      <svg
        viewBox="0 0 200 120"
        className="absolute top-76 right-122 w-72 h-40 -rotate-10"
      >
        <ellipse
          cx="100"
          cy="50"
          rx="64"
          ry="24"
          stroke="rgb(81, 87, 38)"
          strokeWidth="1"
          fill="rgb(246, 239, 229)"
        />
        <text
          x="50%"
          y="42%"
          fill="rgb(81, 87, 38)"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-quaternary text-[14px] font-calistoga text-base uppercase tracking-wide"
        >
          Here you go
        </text>
      </svg>

      {/* view */}
      <div className="absolute top-160 left-50 rotate-2 border-2 border-quaternary bg-white p-4 pb-16 flex flex-col items-center justify-center gap-8">
        <div className="absolute top-1.5 left-1.5 border-1 border-quaternary w-[420px] h-[524px]"></div>

        <div>
          <Image
            src="/images/rooftop/image-5.jpg"
            alt="Offerings 3"
            className="w-[400px] h-[250px] object-cover"
            width={300}
            height={200}
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-3">
          <p className="text-rooftop-1 font-roboto text-lg leading-normal tracking-normal">
            MONDAY TO THURSDAY
          </p>
          <div className="flex items-center gap-3 pb-2">
            <p className="text-rooftop-1 font-roboto font-medium text-lg tracking-normal">
              6 P.M
            </p>
            <h4 className="text-rooftop-3 font-pangaia-medium text-4xl  tracking-normal">
              HAPPY HOUR
            </h4>
            <p className="text-rooftop-1 font-roboto font-medium text-lg  tracking-normal">
              7 P.M
            </p>
          </div>
          <p className="text-rooftop-2 font-roboto text-lg text-center leading-snug tracking-normal max-w-[35ch]">
            Join us for Happy Hour and enjoy special offers on a selection of
            varied drinks and cocktails.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HappyHour;
