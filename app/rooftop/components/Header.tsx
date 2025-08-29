'use client';

import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <div className="relative w-full h-screen">
      {/* Background */}
      <Image
        src="/images/rooftop/header-background.jpg"
        alt="Diyanvi Background"
        fill
        className="object-cover"
        priority
      />

      {/* Hamburger Menu */}
      <div className="absolute left-10 top-10 z-20">
        <Image
          src="/images/common icon/hamburger-menu.png"
          alt="Hamburger Menu"
          width={32}
          height={32}
        />
      </div>

      {/* Logo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
        <Image
          src="/images/common icon/logo.png"
          alt="Diyanvi Logo"
          width={64}
          height={64}
        />
      </div>

      <div className="absolute bottom-10 left-80 flex flex-col justify-end gap-10 w-[900px] h-[320px] bg-tertiary">
        <div className="absolute border-b-0 bottom-0 left-6 border-3 border-quaternary w-[850px] h-[300px]"></div>
        <div className="absolute border-b-0 bottom-0 left-8 border-1 border-quaternary w-[832px] h-[292px]"></div>

        <h3 className="text-quaternary font-pangaia-medium text-center text-8xl font-medium tracking-wide">
          Rooftop Cafe
        </h3>

        <div className="text-quaternary font-roboto text-center text-lg uppercase font-medium tracking-normal flex justify-center pb-16">
          <div className="flex gap-4 items-center">
            <p>bistro</p>
            <p className="w-2 h-2 rounded-full bg-secondary border-2 border-tertiary"></p>
            <p>terrace</p>
            <p className="w-2 h-2 rounded-full bg-secondary border-2 border-tertiary"></p>
            <p>mocktails</p>
            <p className="w-2 h-2 rounded-full bg-secondary border-2 border-tertiary"></p>
            <p>date</p>
            <p className="w-2 h-2 rounded-full bg-secondary border-2 border-tertiary"></p>
            <p>afterwork</p>
            <p className="w-2 h-2 rounded-full bg-secondary border-2 border-tertiary"></p>
            <p>live match</p>
          </div>
        </div>

        <div className="absolute bottom-2 left-8.5 flex gap-4">
          {Array.from({ length: 26 }).map((_, i) => (
            <div key={i} className="h-2 w-4 bg-secondary" />
          ))}
        </div>
        <div className="absolute bottom-0 left-13 flex gap-4">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="h-2 w-4 bg-secondary" />
          ))}
        </div>
        <div className="absolute bottom-0 right-9">
          <div className="h-2 w-4 bg-secondary" />
        </div>
      </div>

      <div className="absolute z-20 bottom-25 right-50 w-[380px] h-[460px] bg-tertiary rotate-2 flex flex-col gap-6 justify-center items-center text-center">
        <div className="absolute top-5 left-5 border-2 border-quaternary w-[342px] h-[420px]"></div>
        <div className="absolute top-7 left-7 border-1 border-quaternary w-[326px] h-[404px]"></div>
        <div className="flex flex-col gap-1">
          <span className="font-pangaia-medium text-2xl text-quaternary tracking-wide">
            Opening On
          </span>
          <p className="font-roboto text-xl text-quinary-dark tracking-normal">
            FROM SEPTEMBER 4TH
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-pangaia-medium text-2xl text-quaternary tracking-wide">
            MON - SUN
          </span>
          <p className="font-roboto text-xl text-quinary-dark tracking-normal">
            12:00 - 22:00
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-pangaia-medium text-2xl text-quaternary tracking-wide">
            Special Hours
          </span>
          <p className="font-roboto text-xl text-quinary-dark tracking-normal">
            Holidays: 10:00 - 20:00
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-pangaia-medium text-2xl text-quaternary tracking-wide">
            Contact Us
          </span>
          <p className="font-roboto text-xl text-quinary-dark tracking-normal">
            +91 78292 50250
          </p>
        </div>
      </div>

      {/* 1st vector */}
      <div>
        <div className="absolute z-10 bottom-75 right-138 h-[102px] w-[102px]">
          <Image
            src="/images/home/vector-5.svg"
            alt="Diyanvi Image 7"
            fill
            className="object-contain"
          />
        </div>

        <div className="absolute z-10 bottom-77.5 right-140.5 h-[83px] w-[83px]">
          <Image
            src="/images/home/vector-6.svg"
            alt="Diyanvi Image 8"
            fill
            className="object-contain"
          />
        </div>

        <h3 className="absolute z-30 bottom-83.5 right-145 text-quinary-dark-light-2 text-center font-calistoga text-base leading-4 font-medium tracking-wider uppercase -rotate-25">
          Since <br /> 2025
        </h3>
      </div>

      <div className="absolute z-30 top-2 right-12 h-[102px] w-[102px]">
        {/* 2nd vector */}
        <div>
          <div className="absolute z-30 top-10 right-30 h-[102px] w-[102px]">
            <Image
              src="/images/rooftop/vector-2.svg"
              alt="Diyanvi Image 1"
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute z-30 top-12 right-32 h-[86px] w-[86px] rotate-4">
            <Image
              src="/images/rooftop/vector-4.svg"
              alt="Diyanvi Image 2"
              fill
              className="object-contain"
            />
          </div>

          <h3 className="absolute z-30 top-19 right-35.5 text-quinary-dark-light-2 text-center font-calistoga text-base leading-4 font-medium tracking-wider -rotate-15">
            Pastry <br /> List
          </h3>
        </div>

        {/* 3rd vector */}
        <div>
          <div className="absolute z-40 top-25 right-12 h-[60px] w-[160px] -rotate-7">
            <Image
              src="/images/rooftop/vector-1.svg"
              alt="Diyanvi Image 3"
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute z-40 top-21.5 right-17.5 h-[90px] w-[116px] -rotate-7">
            <Image
              src="/images/rooftop/vector-5.svg"
              alt="Diyanvi Image 4"
              fill
              className="object-contain"
            />
          </div>

          <h3 className="absolute z-40 top-30 right-19.5 text-quinary-dark-light-2 text-center font-calistoga text-base font-medium tracking-wider -rotate-15">
            Reservation
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
