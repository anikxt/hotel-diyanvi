import React from 'react';
import Image from 'next/image';

function AboutSection() {
  return (
    <div className="bg-primary min-h-[calc(100vh+200px)] flex flex-col gap-12 sm:gap-32">
      <div className="w-auto h-auto self-start mt-16 sm:mt-0 lg:mt-16">
        <Image
          src="/images/home/image-1.jpg"
          alt="About The Diyanvi 1"
          width={1440}
          height={600}
          className="w-[90vw] object-cover"
        />
      </div>

      <div className="pt-8 sm:pt-0 text-primary font-pangaia-medium text-5xl sm:text-6xl md:text-7xl xl:text-[80px] 2xl:text-8xl font-medium leading-tight sm:ml-16">
        <h2 className="text-center sm:text-left max-w-[10ch] sm:max-w-prose mx-auto sm:mx-0">
          Diyanvi Timeless
        </h2>
        <h2 className="font-pangaia-medium-italic text-center sm:text-left max-w-[10ch] sm:max-w-prose mx-auto sm:mx-0">
          Retreat In India
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row gap-16 sm:gap-0 justify-center sm:mx-16 sm:mb-16 sm:h-[700px]">
        {/* left */}
        <div className="sm:w-[30%] flex flex-col sm:items-start gap-12 sm:gap-16 sm:mr-6">
          <div className="flex flex-col gap-10">
            <p className="block sm:hidden w-full mx-auto sm:mx-0 text-primary font-editorial-old-regular sm:font-editorial-old-ultrabold text-center sm:text-left text-lg sm:text-lg font-medium leading-normal lg:leading-relaxed sm:tracking-tight max-w-[32ch]">
              Experience the perfect blend of comfort and elegance in our
              thoughtfully designed rooms and suites
            </p>

            <p className="hidden sm:block w-full mx-auto sm:mx-0 text-primary font-editorial-old-ultrabold text-center sm:text-left text-lg sm:text-lg font-medium leading-normal lg:leading-relaxed sm:tracking-tight max-w-[32ch]">
              Experience the perfect blend of comfort and elegance in our
              thoughtfully designed rooms and suites
            </p>

            <p className="text-secondary font-roboto text-center sm:text-left text-base lg:text-lg font-medium leading-normal lg:leading-relaxed tracking-tight max-w-[38ch] sm:max-w-[45ch]">
              Discover the seamless harmony of comfort and elegance in our
              exquisitely designed rooms and suites. Each detail is curated to
              evoke peace, sophistication, and warmth. Enter a sanctuary where
              modern luxury embraces timeless charm.
            </p>
          </div>

          <div className="flex flex-col gap-12 flex-1 w-full">
            <h3 className="w-fit mx-auto text-tertiary font-calistoga text-xl sm:text-2xl font-medium leading-tight uppercase border-b-2 border-primary">
              Our Rooms
            </h3>

            <div className="hidden 2xl:flex justify-end flex-1 h-auto ">
              <Image
                src="/images/home/image-2.jpg"
                alt="about-the-diyanvi-2"
                width={1200}
                height={1200}
                className="h-auto w-[12vw] object-cover"
              />
            </div>
          </div>
        </div>

        {/* right */}
        <div className="flex-1 h-auto">
          <Image
            src="/images/home/image-3.jpg"
            alt="About The Diyanvi 3"
            width={1200}
            height={1200}
            className="sm:w-[60vw] h-[100vh] sm:h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
