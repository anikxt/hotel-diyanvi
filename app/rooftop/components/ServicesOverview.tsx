import React from 'react';
import Image from 'next/image';

function ServicesOverviewSection() {
  return (
    <div className="relative z-40 bg-secondary flex flex-col md:gap-16 lg:gap-32 xl:gap-40 py-32 sm:py-48">
      {/* title */}
      <div className="flex flex-col gap-10 items-center justify-center">
        <h2 className="text-tertiary-light font-editorial-old-ultralight text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-medium leading-snug tracking-wide uppercase">
          Our Signature <br /> Offerings Include
        </h2>
        <p className="text-tertiary-light font-roboto text-center text-base sm:text-lg leading-normal tracking-tight max-w-[38ch] sm:max-w-[60ch]">
          Hotel Diyanvi embraces you with heartfelt hospitality and impeccable
          service. Whether you're here for a boardroom meeting, a romantic
          escape, or a soul-stirring getaway
        </p>

        {/* eclipse */}
        <svg
          viewBox="0 0 200 120"
          className="absolute md:top-[22%] sm:top-[24%] top-[20%] right-[-10%] sm:right-[0%] md:right-[0%] lg:right-[10%] xl:right-[15%] 2xl:right-[22%] w-50 h-25 sm:w-60 sm:h-30 md:w-72 md:h-40 text-tertiary-light -rotate-10"
        >
          <ellipse
            cx="100"
            cy="50"
            rx="64"
            ry="24"
            stroke="rgb(246, 239, 229)"
            strokeWidth="1"
            fill="rgb(81,87,38)"
          />
          <text
            x="50%"
            y="42%"
            fill="rgb(249, 237, 222)"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-tertiary-light text-[14px] font-calistoga text-base uppercase tracking-wide"
          >
            Experience
          </text>
        </svg>

        {/* eclipse */}
        <div className="absolute left-[5%] top-[20%] sm:top-[20%] lg:left-[10%] md:top-[32%] xl:left-[22%] w-1.5 h-1.5 rounded-full bg-tertiary border-2 border-tertiary"></div>
        <div className="absolute right-[5%] top-[20%] sm:top-[20%] lg:right-[10%] md:top-[32%] xl:right-[22%] w-1.5 h-1.5 rounded-full bg-tertiary border-2 border-tertiary"></div>
      </div>

      {/* offerings */}
      <div className="w-full flex items-center justify-center">
        <div className="relative flex items-center justify-center gap-8 sm:gap-16 md:gap-24 lg:gap-32">
          {/* First offering */}
          <div className="rotate-2 border-1 border-tertiary p-2.5 mt-20">
            <Image
              src="/images/home/offerings-1.jpg"
              alt="Offerings 1"
              className="w-[200px] sm:w-[280px] md:w-[300px] h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              width={300}
              height={400}
            />
            <div>
              <div className="absolute sm:bottom-[3%] sm:right-[-15%] bottom-[-2%] right-[-16%] rotate-4 p-2.5 z-20">
                <Image
                  src="/images/home/vector-1.svg"
                  alt="Vector 5"
                  className="w-[90px] sm:w-[110px] h-[90px] sm:h-[110px] object-contain"
                  width={500}
                  height={500}
                />
                <div className="absolute sm:top-[13%] sm:left-[13%] top-[17%] left-[15.5%]">
                  <Image
                    src="/images/home/vector-2.svg"
                    alt="Vector 2"
                    className="w-[75px] sm:w-[95px] h-[75px] sm:h-[95px] object-contain"
                    width={500}
                    height={500}
                  />
                </div>

                <h3 className="absolute sm:top-[35%] top-[36%] left-[30%] z-30 text-quaternary font-calistoga text-sm sm:text-base text-center leading-tight tracking-wide">
                  Luxury <br /> Suits
                </h3>

                <div className="absolute top-[20%] left-[48.5%] w-1 h-1 rounded-full bg-secondary border-2 border-quaternary"></div>
                <div className="absolute top-[77%] left-[48%] w-1 h-1 rounded-full bg-secondary border-2 border-quaternary"></div>
              </div>
            </div>
          </div>

          {/* Second offering */}
          <div className="hidden xl:block -rotate-2 border-1 border-tertiary p-2.5 mb-20">
            <Image
              src="/images/home/offerings-2.jpg"
              alt="Offerings 2"
              className="w-[320px] sm:w-[400px] h-[400px] sm:h-[500px] object-cover"
              width={400}
              height={500}
            />
          </div>

          {/* Third offering */}
          <div className="relative rotate-4 border-1 border-tertiary p-2.5 mt-20">
            <Image
              src="/images/home/offerings-3.jpg"
              alt="Offerings 3"
              className="w-[200px] sm:w-[280px] md:w-[300px] h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              width={400}
              height={500}
            />
            <div>
              <div className="absolute top-[5%] left-[-18%] rotate-4 p-2.5 z-20">
                <Image
                  src="/images/home/vector-3.svg"
                  alt="Vector 3"
                  className="w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] object-contain"
                  width={500}
                  height={500}
                />
                <div className="absolute sm:top-[14.5%] sm:left-[14.5%] top-[16%] left-[16%] z-30">
                  <Image
                    src="/images/home/vector-4.svg"
                    alt="Vector 4"
                    className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] object-contain"
                    width={500}
                    height={500}
                  />
                </div>

                <h3 className="absolute top-[30.5%] sm:right-[32%] right-[31%] z-30 text-quaternary font-calistoga text-base sm:text-lg text-center leading-tight tracking-wide -rotate-25">
                  Fine <br /> Dining
                </h3>
              </div>
            </div>
          </div>

          {/* Fourth offering - hidden on smaller screens */}
          <div className="hidden xl:block border-1 border-tertiary p-2.5 mb-20">
            <Image
              src="/images/home/offerings-4.jpg"
              alt="Offerings 4"
              className="w-[280px] sm:w-[300px] h-[400px] sm:h-[500px] object-cover"
              width={300}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesOverviewSection;
