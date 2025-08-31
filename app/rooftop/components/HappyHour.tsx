import React from 'react';
import Image from 'next/image';

function HappyHour() {
  return (
    <div className="relative z-40 bg-primary h-[1200px] sm:h-[1300px] flex flex-col">
      {/* title */}
      <div className="flex flex-col gap-10 sm:gap-20 md:gap-10 items-center justify-center mt-48">
        <h2 className="text-quaternary font-editorial-old-ultralight text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-[15ch] sm:max-w-[30ch] text-center font-medium leading-snug tracking-wide uppercase">
          THE NIGHT <br /> BELONGS HERE
        </h2>
        <p className="text-quaternary font-roboto text-center text-base md:text-lg leading-normal tracking-tight max-w-[38ch] md:max-w-[55ch]">
          Cocktail hours, live DJs, game nights, karaoke, and endless
          laughter—at our bar, every evening comes alive with energy and flavor.
        </p>
      </div>

      {/* eclipse */}
      <svg
        viewBox="0 0 200 120"
        className="absolute top-[21%] right-[-15%] md:top-[22%] md:right-[15%] lg:top-[24%] lg:right-[20%] w-60 h-25 sm:w-72 sm:h-40 -rotate-10"
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
      <div className="absolute top-[45%] sm:top-[45%] left-[50%] xl:top-[50%] xl:left-[20%] translate-x-[-50%] sm:rotate-2 border-2 border-quaternary bg-white p-2 sm:p-4 flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-start pt-2 gap-12 border-1 border-quaternary w-[315px] sm:w-[420px] h-[460px] sm:h-[524px] sm:mt-0">
          <div>
            <Image
              src="/images/rooftop/image-5.jpg"
              alt="Offerings 3"
              className="w-[280px] sm:w-[400px] h-[200px] sm:h-[250px] object-cover"
              width={300}
              height={200}
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-rooftop-1 font-roboto text-base sm:text-lg leading-normal tracking-normal">
              MONDAY TO THURSDAY
            </p>
            <div className="flex items-center gap-3 pb-2">
              <p className="text-rooftop-1 font-roboto font-medium text-base sm:text-lg tracking-normal">
                6 P.M
              </p>
              <h4 className="text-rooftop-3 font-pangaia-medium text-3xl sm:text-4xl  tracking-normal">
                HAPPY HOUR
              </h4>
              <p className="text-rooftop-1 font-roboto font-medium text-base sm:text-lg  tracking-normal">
                7 P.M
              </p>
            </div>
            <p className="text-rooftop-2 font-roboto text-base sm:text-lg text-center leading-snug tracking-normal max-w-[35ch]">
              Join us for Happy Hour and enjoy special offers on a selection of
              varied drinks and cocktails.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HappyHour;
