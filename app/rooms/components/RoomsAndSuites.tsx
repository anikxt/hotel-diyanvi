import React from 'react';
import Image from 'next/image';

function RoomsAndSuites() {
  return (
    <div className="bg-primary min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-8 mt-40">
        <h2 className="text-primary font-pangaia-medium text-center text-7xl font-medium leading-tight">
          Our Rooms & Suites
        </h2>

        <p className="text-secondary font-roboto text-center text-lg font-medium leading-normal tracking-tight max-w-[64ch]">
          Each room at Hotel Diyanvi is a chapter in a timeless story — designed
          to indulge, comfort, and inspire. Whether you're traveling for
          business or leisure, every suite offers a refined blend of privacy,
          style, and personalized care.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-40 mb-64">
        <div className="flex flex-col gap-6">
          <Image
            src="/images/rooms/image-1.jpg"
            alt="Room 1"
            width={700}
            height={450}
            className="object-cover"
          />
          <span className="text-primary font-editorial-old-regular text-6xl font-medium tracking-wide mt-4">
            Single Room
          </span>
          <p className="text-secondary font-roboto text-left text-base max-w-[69ch] font-medium">
            Perfect for solo travelers or short stays, our single rooms provide
            comfort, warmth, and a peaceful night's rest after exploring
            Mysore's palaces and gardens.
          </p>
          <h4 className="w-fit text-tertiary font-calistoga text-lg font-medium leading-tight uppercase border-b-2 border-primary">
            Learn More
          </h4>
        </div>

        <div className="flex flex-col gap-6">
          <Image
            src="/images/rooms/image-2.jpg"
            alt="Room 2"
            width={700}
            height={450}
            className="object-cover"
          />
          <span className="text-primary font-editorial-old-regular text-6xl font-medium tracking-wide mt-4">
            Double Room
          </span>
          <p className="text-secondary font-roboto text-left text-base max-w-[72ch] font-medium">
            Designed with style and comfort, our double rooms are ideal for
            couples or friends, offering the perfect retreat after a day
            visiting Mysore's vibrant markets and historic temples.
          </p>
          <h4 className="w-fit text-tertiary font-calistoga text-lg font-medium leading-tight uppercase border-b-2 border-primary">
            Learn More
          </h4>
        </div>

        <div className="flex flex-col gap-6 mt-24">
          <Image
            src="/images/rooms/image-1.jpg"
            alt="Room 3"
            width={700}
            height={450}
            className="object-cover"
          />
          <span className="text-primary font-editorial-old-regular text-6xl font-medium tracking-wide mt-4">
            Junior Suite
          </span>
          <p className="text-secondary font-roboto text-left text-base max-w-[76ch] font-medium">
            Our Junior Suites blend modern comfort with classic charm, offering
            extra space and thoughtful details for travelers who seek a refined
            stay while enjoying Mysore's rich heritage.
          </p>
          <h4 className="w-fit text-tertiary font-calistoga text-lg font-medium leading-tight uppercase border-b-2 border-primary">
            Learn More
          </h4>
        </div>

        <div className="flex flex-col gap-6 mt-24">
          <Image
            src="/images/rooms/image-2.jpg"
            alt="Room 4"
            width={700}
            height={450}
            className="object-cover"
          />
          <span className="text-primary font-editorial-old-regular text-6xl font-medium tracking-wide mt-4">
            Suite Room
          </span>
          <p className="text-secondary font-roboto text-left text-base max-w-[78ch] font-medium">
            Experience indulgence in our Suites, featuring generous space,
            elegant interiors, and premium amenities — the perfect choice for
            families or guests seeking a luxurious stay in the city of palaces.
          </p>
          <h4 className="w-fit text-tertiary font-calistoga text-lg font-medium leading-tight uppercase border-b-2 border-primary">
            Learn More
          </h4>
        </div>
      </div>
    </div>
  );
}

export default RoomsAndSuites;
