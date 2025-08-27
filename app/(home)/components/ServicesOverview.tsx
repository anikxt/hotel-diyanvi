import React from 'react';
import Image from 'next/image';

function ServicesOverviewSection() {
  return (
    <div className="relative bg-secondary h-[1500px] flex flex-col">
      {/* title */}
      <div className="flex flex-col gap-10 items-center justify-center mt-64">
        <h2 className="text-tertiary-light font-editorial-old-ultralight text-7xl text-center font-medium leading-snug tracking-wide uppercase">
          Our Signature <br /> Offerings Include
        </h2>
        <p className="text-tertiary-light font-roboto text-center text-lg leading-normal tracking-tight max-w-[60ch]">
          Hotel Diyanvi embraces you with heartfelt hospitality and impeccable
          service. Whether you're here for a boardroom meeting, a romantic
          escape, or a soul-stirring getaway
        </p>

        {/* eclipse */}
        <svg
          viewBox="0 0 200 120"
          className="absolute top-92 right-100 w-72 h-40 text-tertiary-light -rotate-10"
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
        <div className="absolute top-120 left-100 w-1.5 h-1.5 rounded-full bg-tertiary border-2 border-tertiary"></div>
        <div className="absolute top-120 right-100 w-1.5 h-1.5 rounded-full bg-tertiary border-2 border-tertiary"></div>
      </div>

      {/* offerings */}
      <div className="mt-16">
        <div>
          <div className="absolute top-200 -left-2 rotate-2 border-1 border-tertiary p-2.5">
            <Image
              src="/images/home/offerings-1.jpg"
              alt="Offerings 1"
              className="w-[300px] h-[500px] object-cover"
              width={300}
              height={400}
            />
          </div>

          <div className="absolute top-180 left-100 -rotate-2 border-1 border-tertiary p-2.5">
            <Image
              src="/images/home/offerings-2.jpg"
              alt="Offerings 2"
              className="w-[400px] h-[500px] object-cover"
              width={400}
              height={500}
            />
          </div>

          <div className="absolute top-200 right-110 rotate-4 border-1 border-tertiary p-2.5">
            <Image
              src="/images/home/offerings-3.jpg"
              alt="Offerings 3"
              className="w-[400px] h-[500px] object-cover"
              width={400}
              height={500}
            />
          </div>

          <div className="absolute top-180 right-0 border-1 border-tertiary p-2.5">
            <Image
              src="/images/home/offerings-4.jpg"
              alt="Offerings 4"
              className="w-[300px] h-[500px] object-cover"
              width={300}
              height={500}
            />
          </div>
        </div>

        <div>
          <div className="absolute top-205 right-197 z-20">
            <Image
              src="/images/home/vector-3.svg"
              alt="Vector 3"
              className="w-[120px] h-[120px] object-cover"
              width={500}
              height={500}
            />
          </div>

          <div className="absolute top-207.5 right-199.5 z-30">
            <Image
              src="/images/home/vector-4.svg"
              alt="Vector 4"
              className="w-[100px] h-[100px] object-cover"
              width={500}
              height={500}
            />
          </div>

          <h3 className="absolute top-214 right-205 z-30 text-quaternary font-calistoga text-lg text-center leading-tight tracking-wide -rotate-25">
            Fine <br /> Dining
          </h3>
        </div>

        <div>
          <div className="absolute top-299 left-59">
            <Image
              src="/images/home/vector-1.svg"
              alt="Vector 5"
              className="w-[110px] h-[110px] object-cover"
              width={500}
              height={500}
            />
          </div>

          <div className="absolute top-301 left-61">
            <Image
              src="/images/home/vector-2.svg"
              alt="Vector 2"
              className="w-[95px] h-[95px] object-cover"
              width={500}
              height={500}
            />
          </div>

          <h3 className="absolute top-308 left-66 z-30 text-quaternary font-calistoga text-base text-center leading-tight tracking-wide">
            Luxury <br /> Suits
          </h3>

          <div className="absolute top-303.5 left-72.5 w-1 h-1 rounded-full bg-secondary border-2 border-quaternary"></div>
          <div className="absolute top-321.5 left-72.5 w-1 h-1 rounded-full bg-secondary border-2 border-quaternary"></div>
        </div>
      </div>
    </div>
  );
}

export default ServicesOverviewSection;
