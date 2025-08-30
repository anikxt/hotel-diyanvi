import React from 'react';
import Image from 'next/image';

function WelcomeToHotel() {
  return (
    <div className="bg-primary min-h-screen flex flex-col">
      <div className="text-quinary font-calistoga w-fit self-center text-center text-lg font-medium leading-tight mt-12">
        About The Hotel
      </div>

      <div className="text-primary font-pangaia-medium text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-tighter mt-20 md:mt-24 lg:mt-32">
        <h2>Welcome To</h2>
        <h2 className="font-pangaia-medium-italic">Diyanvi</h2>
      </div>

      <div className="flex items-center gap-2 text-primary self-center mt-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="10" height="10" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 2l2.9 6.1L22 9.3l-5 4.9L18.2 21 12 17.7 5.8 21 7 14.2 2 9.3l7.1-1.2z"
            />
          </svg>
        ))}
      </div>

      <div className="flex flex-col gap-16 md:gap-0 md:flex-row h-[700px] md:mr-16 mt-20 md:mt-32 mb-24 md:my-32">
        {/* left */}
        <div className="md:hidden w-full md:w-[30%] flex flex-col gap-20 md:ml-8">
          <div className="flex flex-col items-center md:items-start gap-10">
            <p className="text-primary font-editorial-old-ultrabold text-center md:text-left text-base md:text-lg font-medium leading-relaxed tracking-tight max-w-[32ch]">
              Diyanvi Hotel is more than just a place to stay, it's a place
              where stories are created.
            </p>

            <p className="text-secondary font-roboto text-center md:text-left text-basemd:text-lg font-medium leading-normal tracking-tight max-w-[40ch] md:max-w-[48ch]">
              Nestled in the heart of the Mysore city, our spaces blend timeless
              elegance with modern luxury, offering guests a retreat that feels
              both warm and world-class. From personalized hospitality to
              thoughtfully curated experiences, every detail is designed to make
              your moments with us truly memorable.
            </p>
          </div>
        </div>

        {/* right */}
        <div className="flex-1 h-auto">
          <Image
            src="/images/home/image-4.jpg"
            alt="About The Diyanvi 4"
            width={1200}
            height={1200}
            className="w-full h-full object-cover"
          />
        </div>

        {/* left */}
        <div className="hidden w-[30%] md:flex flex-col gap-20 ml-8">
          <div className="flex flex-col gap-10">
            <p className="text-primary font-editorial-old-ultrabold text-left text-lg font-medium leading-relaxed tracking-tight max-w-[32ch]">
              Diyanvi Hotel is more than just a place to stay, it’s a place
              where stories are created.
            </p>

            <p className="text-secondary font-roboto text-left text-lg font-medium leading-normal tracking-tight max-w-[48ch]">
              Nestled in the heart of the Mysore city, our spaces blend timeless
              elegance with modern luxury, offering guests a retreat that feels
              both warm and world-class. From personalized hospitality to
              thoughtfully curated experiences, every detail is designed to make
              your moments with us truly memorable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeToHotel;
