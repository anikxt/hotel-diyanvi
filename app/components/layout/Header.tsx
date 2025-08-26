'use client';

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const ROUTE_BG: Record<string, string> = {
  '/': '/images/home/header-background.jpg',
  '/rooms': '/images/rooms/header-background.jpg',
};

function Header() {
  const pathname = usePathname();

  // pick the most specific matching route prefix
  const bgSrc =
    (Object.keys(ROUTE_BG)
      .sort((a, b) => b.length - a.length)
      .find((key) => pathname?.startsWith(key)) &&
      ROUTE_BG[
        Object.keys(ROUTE_BG)
          .sort((a, b) => b.length - a.length)
          .find((k) => pathname?.startsWith(k)) as string
      ]) ||
    ROUTE_BG['/'];

  return (
    <div className=" w-full h-screen">
      {/* Background Image */}
      <Image
        src={bgSrc}
        alt="Diyanvi Homepage Background"
        fill
        className="object-fill"
        priority
        quality={100}
      />

      {/* Hamburger Menu */}
      <div className="absolute left-8 top-10">
        <Image
          src="/images/common icon/hamburger-menu.png"
          alt="Hamburger Menu"
          width={100}
          height={100}
          className="w-[33px] h-[24px]"
        />
      </div>

      {/* Logo */}
      <div className="absolute top-0 left-[48.5%] w-full h-full">
        <Image
          src="/images/common icon/logo.png"
          alt="Diyanvi Logo"
          width={100}
          height={100}
          className="w-[69px] h-[70px]"
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/0"></div>

      {/* Title */}
      <div className="relative z-20 h-screen flex flex-col gap-12 items-center justify-center mt-8">
        <h1 className="text-white text-[200px] font-medium leading-[60%] tracking-[1%]">
          Diyanvi
        </h1>

        {/* stars row (uses SVG so it scales crisply) */}
        <div className="flex items-center gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              width="15"
              height="15"
              viewBox="0 0 24 24"
              className="text-white"
            >
              <path
                fill="currentColor"
                d="M12 2l2.9 6.1L22 9.3l-5 4.9L18.2 21 12 17.7 5.8 21 7 14.2 2 9.3l7.1-1.2z"
              />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
