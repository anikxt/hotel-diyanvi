'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function MenuDrawer({ isOpen, onClose }: MenuDrawerProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 z-40 transition-opacity duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden={isOpen ? 'false' : 'true'}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 -left-1 h-screen sm:w-[450px] md:w-[520px] bg-quaternary z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center h-16 2xl:h-17 px-8 pt-2 bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.075)]">
          <div className="flex items-center gap-3">
            <Image
              src="/images/common icon/logo.png"
              alt="Diyanvi"
              width={100}
              height={100}
              className="sm:hidden w-[36px] h-[36px]"
            />
            <h3 className="text-2xl sm:text-3xl font-pangaia-medium text-quaternary">
              Diyanvi Menu
            </h3>
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-colors mb-0.5"
          >
            <Image
              src="/images/menu/vector-1.svg"
              alt="Diyanvi"
              width={17}
              height={17}
            />
          </button>
        </div>

        <div className="px-8 mt-6 2xl:mt-7">
          <div className="flex flex-col gap-2 2xl:gap-2 px-2">
            <h4 className="text-menu-1 font-roboto text-lg sm:text-xl font-medium tracking-normal">
              Hotel
            </h4>
            <div className="flex flex-col gap-2 2xl:gap-0">
              <Link
                href="/rooms"
                onClick={onClose}
                className="flex items-center gap-6 hover:bg-[#f4ede4] 2xl:py-2 2xl:px-4 rounded-md transition-all duration-150 ease-in-out"
              >
                <Image
                  src="/images/menu/image-1.png"
                  alt="Diyanvi"
                  width={28}
                  height={28}
                />
                <p className="text-primary pt-2 font-editorial-old-regular text-lg sm:text-xl font-medium">
                  Rooms & Suites
                </p>
              </Link>
              <Link
                href="/restaurant"
                onClick={onClose}
                className="flex items-center gap-6 hover:bg-[#f4ede4] 2xl:py-2 2xl:px-4 rounded-md transition-all duration-150 ease-in-out"
              >
                <Image
                  src="/images/menu/image-2.png"
                  alt="Diyanvi"
                  width={28}
                  height={28}
                />
                <p className="text-primary pt-2 font-editorial-old-regular text-lg sm:text-xl font-medium">
                  Restaurant
                </p>
              </Link>
              <Link
                href="/rooftop"
                onClick={onClose}
                className="flex items-center gap-6 hover:bg-[#f4ede4] 2xl:py-2 2xl:px-4 rounded-md transition-all duration-150 ease-in-out"
              >
                <Image
                  src="/images/menu/image-3.png"
                  alt="Diyanvi"
                  width={28}
                  height={28}
                />
                <p className="text-primary pt-2 font-editorial-old-regular text-lg sm:text-xl font-medium">
                  Rooftop Restro
                </p>
              </Link>
            </div>
          </div>

          <div className="border-b-2 border-menu-1 mt-4 2xl:mt-8"></div>
        </div>

        <div className="px-8 mt-6 flex flex-col items-start gap-1 2xl:gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-menu-1 font-roboto text-base sm:text-lg 2xl:text-xl font-medium tracking-normal">
              Call us For Reservation
            </p>
            <div className="flex items-center gap-1 bg-menu-1 px-2 py-3 pr-5 rounded-lg justify-start sm:justify-center">
              <Image
                src="/images/menu/image-4.png"
                alt="Diyanvi"
                width={40}
                height={40}
                className="w-[30px] h-[30px] 2xl:w-[40px] 2xl:h-[40px]"
              />
              <p className="text-menu-1 font-roboto text-sm sm:text-base 2xl:text-lg font-medium tracking-normal">
                +91 8378 83982
              </p>
            </div>
          </div>

          <div className="border-b-2 border-menu-1 mt-4 w-full"></div>
        </div>

        {/* Location */}
        <div className="px-8 mt-5 2xl:mt-8 flex flex-col items-start justify-center gap-2 sm:gap-3">
          <p className="text-menu-1 font-roboto text-lg sm:text-xl font-medium tracking-normal">
            Location
          </p>
          <Image
            src="/images/menu/image-5.jpg"
            alt="Diyanvi"
            width={420}
            height={180}
            className="pl-2 rounded h-[180px] w-[360px] 2xl:h-[200px] 2xl:w-[440px] object-cover"
          />
          <p className="text-menu-1 font-roboto text-lg sm:text-xl font-medium tracking-normal mt-4 2xl:mt-4">
            Address
          </p>
          <p className="text-primary font-roboto text-sm sm:text-base font-medium leading-snug tracking-wide max-w-[48ch]">
            225 - P, Post, Hebbal Industrial Estate, Hebbal Industrial Area,
            Belawadi, Mysuru, Karnataka 570018
          </p>
        </div>
      </div>
    </>
  );
}

export default MenuDrawer;
