import React from 'react';
import Image from 'next/image';

function HomeIntroSection() {
  return (
    <div className="bg-primary">
      <div className="flex flex-col justify-center items-center pt-40 pb-20">
        <h2 className="text-primary text-center text-[66px] font-medium leading-[116%] tracking-[2%]">
          Where Luxury <br /> Finds Its True Expression
        </h2>

        <p className="text-secondary font-roboto text-center text-[15px] font-medium leading-[24px] tracking-[0px] mt-12">
          Diyanvi invites you into a world where every moment is curated for
          delight.
        </p>
        <p className="text-secondary font-roboto text-center text-[15px] font-medium leading-[24px] tracking-[0px] mt-6 max-w-[82ch]">
          Tucked away in the regal city of Mysuru, Hotel Diyanvi redefines the
          art of indulgence. A 5-star luxury hotel crafted for those who
          appreciate the rare blend of classic charm and contemporary
          sophistication, From the moment you arrive, our private concierge team
          ensures your stay is seamless and unforgettable.Whether you're here
          for a boardroom meeting, a romantic escape, or a soul-stirring
          getaway, Hotel Diyanvi embraces you with heartfelt hospitality and
          impeccable service.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h3 className="text-tertiary text-center text-[20px] font-medium leading-[116%] tracking-[2%] uppercase border-b-2 border-primary mb-64 font-calistoga">
          ABOUT THE DIYANVI
        </h3>

        <div className="w-full pr-48 h-[585px] mb-48">
          <Image
            src="/images/home/image-1.jpg"
            alt="about-the-diyanvi-1"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-primary text-left text-[110px] font-medium leading-[115%] tracking-[2%] ml-16 mr-auto mb-48">
          <h2>Diyanvi Timeless</h2>
          <h2 className="font-pangaia-medium-italic">Retreat In India</h2>
        </div>
      </div>

      <div className="flex mb-4">
        {/* left */}
        <div className="ml-16 w-[40%]">
          <p className="text-primary text-left text-[17px] font-medium leading-[24px] tracking-[0px] max-w-[32ch] mb-8 font-editorial-old-ultrabold">
            Experience the perfect blend of comfort and elegance in our
            thoughtfully designed rooms and suites
          </p>

          <p className="text-secondary text-left text-[15px] font-medium leading-[24px] tracking-[0px] max-w-[48ch] mb-32 font-roboto">
            Discover the seamless harmony of comfort and elegance in our
            exquisitely designed rooms and suites. Each detail is curated to
            evoke peace, sophistication, and warmth. Enter a sanctuary where
            modern luxury embraces timeless charm.
          </p>

          <h3 className="w-fit inline-block text-tertiary text-left text-[20px] font-medium leading-[116%] tracking-[2%] uppercase border-b-2 border-primary mb-28 font-calistoga">
            Our Rooms
          </h3>

          <div className="flex justify-end">
            <Image
              src="/images/home/image-2.jpg"
              alt="about-the-diyanvi-2"
              width={213}
              height={271}
              className="object-cover"
            />
          </div>
        </div>

        {/* right */}
        <div className="w-full mr-16 ml-4">
          <Image
            src="/images/home/image-3.jpg"
            alt="about-the-diyanvi-3"
            width={636}
            height={907}
            className="h-[90.5%] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeIntroSection;
