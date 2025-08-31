'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import MenuDrawer from '../../components/drawer/MenuDrawer';

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [arrayLength, setArrayLength] = useState(20);

  useEffect(() => {
    const updateArrayLength = () => {
      if (window.innerWidth >= 1024) setArrayLength(26); // lg
      else if (window.innerWidth >= 768) setArrayLength(20); // md
      else if (window.innerWidth >= 640) setArrayLength(17); // sm
      else setArrayLength(9); // xs
    };

    updateArrayLength();
    window.addEventListener('resize', updateArrayLength);
    return () => window.removeEventListener('resize', updateArrayLength);
  }, []);

  return (
    <>
      {/* Menu Drawer */}
      <MenuDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />

      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className={`absolute left-10 top-10 z-100 p-3 cursor-pointer hover:bg-white/10 rounded-full transition-colors ${
          isDrawerOpen ? 'hidden' : ''
        }`}
      >
        <Image
          src="/images/common icon/hamburger-menu.png"
          alt="Hamburger Menu"
          width={40}
          height={40}
        />
      </button>

      <div className="sticky top-0 z-[-10]">
        <div className="relative w-full h-screen flex flex-col justify-end items-center sm:pb-10">
          {/* Background */}
          <Image
            src="/images/rooftop/header-background.jpg"
            alt="Diyanvi Background"
            fill
            className="object-cover"
            priority
          />

          {/* Logo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
            <Image
              src="/images/common icon/logo.png"
              alt="Diyanvi Logo"
              width={64}
              height={64}
            />
          </div>

          <div className="relative flex flex-col justify-end pt-9 md:pt-4 lg:pt-0 gap-8 sm:gap-10 md:gap-8 lg:gap-10 w-[350px] sm:w-[600px] md:w-[700px] lg:w-[900px] lg:h-[320px] bg-tertiary">
            <div className="absolute border-b-0 bottom-0 left-6 border-3 border-quaternary w-[300px] sm:w-[556px] md:w-[650px] lg:w-[850px] h-[350px] sm:h-[280px] md:h-[250px] lg:h-[300px]"></div>
            <div className="absolute border-b-0 bottom-0 left-8 border-1 border-quaternary w-[284px] sm:w-[539px] md:w-[635px] lg:w-[832px] h-[342px] sm:h-[272px] md:h-[243px] lg:h-[292px]"></div>

            {/* 1st vector */}
            <div className="absolute z-40 bottom-[5%] right-[-155%] sm:bottom-[-20%] sm:right-[-90%] md:bottom-[-30%] md:right-[-75%] lg:bottom-[-15%] lg:right-[-24%] xl:bottom-[-12%] xl:right-[-42%] 2xl:bottom-[-8%] 2xl:right-[-54%]">
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

            <h3 className="text-quaternary font-pangaia-medium text-center text-6xl sm:text-7xl lg:text-8xl pt-8 lg:pt-0 font-medium tracking-wide">
              Rooftop Cafe
            </h3>

            <div className="text-quaternary font-roboto text-center text-base lg:text-lg uppercase font-medium tracking-normal flex justify-center pb-16">
              <div className="flex flex-wrap px-10 sm:px-32 lg:px-0 lg:flex-nowrap gap-2 lg:gap-4 justify-center items-center">
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

            <div className="absolute bottom-2 left-8 flex gap-4">
              {Array.from({ length: arrayLength }).map((_, i) => (
                <div key={i} className="h-2 w-4 bg-secondary" />
              ))}
            </div>
            <div className="absolute bottom-0 left-12 flex gap-4">
              {Array.from({ length: arrayLength }).map((_, i) => (
                <div key={i} className="h-2 w-4 bg-secondary" />
              ))}
            </div>
          </div>

          <div className="hidden lg:flex absolute z-20 lg:bottom-[35%] lg:right-[1%] 2xl:bottom-[15%] 2xl:right-[8%] w-[380px] h-[460px] bg-tertiary rotate-2 flex-col gap-6 justify-center items-center text-center">
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

          <div className="hidden 2xl:flex absolute z-30 top-2 right-12 h-[102px] w-[102px]">
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
      </div>
    </>
  );
}

export default Header;
