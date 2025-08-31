import React from 'react';
import Image from 'next/image';

function HotelInformation() {
  return (
    <div className="relative z-40 min-h-screen bg-primary flex flex-col gap-16 items-center justify-center pb-48">
      <div className="flex flex-col gap-6 md:gap-8 px-8 md:px-0 md:w-[60%] mt-24 md:mt-48">
        <div className="text-primary font-pangaia-medium text-left text-[42px] sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-tighter">
          <h2>Hotel & Room</h2>
          <h2 className="font-pangaia-medium-italic">Information</h2>
        </div>
        <p className="text-secondary font-roboto text-left text-base md:text-lg font-medium leading-normal tracking-tight max-w-[45ch]">
          All the Details you need for your stay at Diyanvi
        </p>

        <div className="mt-16 md:mt-24">
          <div className="flex justify-between border-b-2 border-rooms-2 pb-2">
            <div className="flex gap-4 md:gap-10 items-baseline justify-center">
              <span className="text-primary font-editorial-old-ultrabold text-lg md:text-xl tracking-wide">
                01
              </span>
              <span className="text-rooms-1 font-roboto text-left text-base md:text-xl font-medium tracking-normal md:tracking-wide uppercase">
                Cancellation Policy
              </span>
            </div>
            <div className="flex items-center justify-center mr-2 md:mr-5">
              <Image
                src="/images/rooms/icon-1.svg"
                alt="Hotel Information"
                width={20}
                height={20}
                className="w-4 md:w-[20px] h-4 md:h-[20px] object-cover"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between border-b-2 border-rooms-2 pb-2">
            <div className="flex gap-4 md:gap-10 items-baseline justify-center">
              <span className="text-primary font-editorial-old-ultrabold text-xl tracking-wide">
                02
              </span>
              <span className="text-rooms-1 font-roboto text-left text-base md:text-xl font-medium tracking-normal md:tracking-wide uppercase">
                Rooms Combinations
              </span>
            </div>
            <div className="flex items-center justify-center mr-2 md:mr-5">
              <Image
                src="/images/rooms/icon-1.svg"
                alt="Hotel Information"
                width={20}
                height={20}
                className="w-4 md:w-[20px] h-4 md:h-[20px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <div className="flex justify-between border-b-2 border-rooms-2 pb-2">
              <div className="flex gap-4 md:gap-10 items-baseline justify-center">
                <span className="text-primary font-editorial-old-ultrabold text-xl tracking-wide">
                  03
                </span>
                <span className="text-rooms-1 font-roboto text-left text-base md:text-xl font-medium tracking-normal md:tracking-wide uppercase">
                  Check-In & Check-Out
                </span>
              </div>
              <div className="flex items-center justify-center mr-2 md:mr-5">
                <Image
                  src="/images/rooms/icon-2.svg"
                  alt="Hotel Information"
                  width={16}
                  height={16}
                  className="w-[14px] md:w-[20px] h-[14px] md:h-[20px] object-cover"
                />
              </div>
            </div>
          </div>

          <span className="text-rooms-2 font-roboto text-left text-sm md:text-lg self-center font-medium max-w-[90ch]">
            Upon arrival, please visit our 24/7 front desk concierge to check
            in—we'll take care of everything from there. On the day of
            departure, we kindly ask that rooms be vacated by 12:00 noon.
          </span>
        </div>

        <div className="mt-6">
          <div className="flex justify-between border-b-2 border-rooms-2 pb-2">
            <div className="flex gap-10 items-baseline justify-center">
              <span className="text-primary font-editorial-old-ultrabold text-lg md:text-xl tracking-wide">
                04
              </span>
              <span className="text-rooms-1 font-roboto text-left text-base md:text-xl font-medium tracking-normal md:tracking-wide uppercase">
                Arrival Information
              </span>
            </div>
            <div className="flex items-center justify-center mr-2 md:mr-5">
              <Image
                src="/images/rooms/icon-1.svg"
                alt="Hotel Information"
                width={20}
                height={20}
                className="w-4 md:w-[20px] h-4 md:h-[20px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full gap-12 mt-10 md:mt-16 px-8 md:px-0">
        <div className="hidden md:block w-[30%] h-[600px] relative ml-16">
          <Image
            src="/images/rooms/image-4.jpg"
            alt="Hotel Information"
            fill
            sizes="30vw"
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-[70%] h-[300px] md:h-[600px] relative md:mr-16">
          <Image
            src="/images/rooms/image-5.jpg"
            alt="Hotel Information"
            fill
            sizes="70vw"
            className="object-cover object-right md:object-center"
          />
        </div>
      </div>
    </div>
  );
}

export default HotelInformation;
