import React from 'react';
import Image from 'next/image';

function AboutSection() {
  return (
    <div className="bg-primary min-h-screen flex flex-col gap-32">
      <div className="w-auto h-auto self-start mt-16">
        <Image
          src="/images/home/image-1.jpg"
          alt="About The Diyanvi 1"
          width={1440}
          height={600}
          className="object-cover"
        />
      </div>

      <div className="text-primary font-pangaia-medium text-left text-8xl font-medium leading-tight ml-16">
        <h2>Diyanvi Timeless</h2>
        <h2 className="font-pangaia-medium-italic">Retreat In India</h2>
      </div>

      <div className="flex mx-16 mb-16 h-[700px]">
        {/* left */}
        <div className="w-[30%] flex flex-col gap-20 mr-6">
          <div className="flex flex-col gap-10">
            <p className="text-primary font-editorial-old-ultrabold text-left text-lg font-medium leading-relaxed tracking-tight max-w-[32ch]">
              Experience the perfect blend of comfort and elegance in our
              thoughtfully designed rooms and suites
            </p>

            <p className="text-secondary font-roboto text-left text-lg font-medium leading-normal tracking-tight max-w-[45ch]">
              Discover the seamless harmony of comfort and elegance in our
              exquisitely designed rooms and suites. Each detail is curated to
              evoke peace, sophistication, and warmth. Enter a sanctuary where
              modern luxury embraces timeless charm.
            </p>
          </div>

          <div className="flex flex-col gap-24 flex-1">
            <h3 className="w-fit text-tertiary font-calistoga text-2xl font-medium leading-tight uppercase border-b-2 border-primary">
              Our Rooms
            </h3>

            <div className="flex justify-end flex-1 h-auto ">
              <Image
                src="/images/home/image-2.jpg"
                alt="about-the-diyanvi-2"
                width={1200}
                height={1200}
                className="h-full w-[40%] object-cover"
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
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
