'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MenuDrawer from '../drawer/MenuDrawer';

const ROUTE_BG: Record<string, string> = {
  '/': '/images/home/header-background.jpg',
  '/rooms': '/images/rooms/header-background.jpg',
  '/restaurant': '/images/restaurant/header-background.jpg',
};

function Header({ title, fontSize }: { title: string; fontSize: string }) {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const routeKey =
    Object.keys(ROUTE_BG)
      .sort((a, b) => b.length - a.length)
      .find((key) => pathname?.startsWith(key)) ?? '/';

  const bgSrc = ROUTE_BG[routeKey];

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
        className={`absolute left-8 top-15 md:left-10 md:top-10 z-20 p-0 md:p-4 cursor-pointer hover:bg-white/10 pointer-events-auto rounded-full transition-colors ${
          isDrawerOpen ? 'hidden' : ''
        }`}
      >
        <Image
          src="/images/common icon/hamburger-menu.png"
          alt="Hamburger Menu"
          width={36}
          height={36}
          className="w-[30px] h-[30px] md:w-[36px] md:h-[36px]"
        />
      </button>

      {/* Background */}
      <div className="sticky top-0 z-10 pointer-events-none">
        <div className="relative w-full h-screen">
          <Image
            src={bgSrc}
            alt="Diyanvi Background"
            fill
            className="object-cover"
            priority
          />

          {/* Logo Image */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
            <Image
              src="/images/common icon/logo.png"
              alt="Diyanvi Logo"
              width={64}
              height={64}
              className="w-13 h-13 sm:w-14 sm:h-14 md:w-15 md:h-15 2xl:w-16 2xl:h-16"
            />
          </div>

          {/* Title + Stars Image */}
          <div className="pt-8 sm:pt-0 relative z-20 top-1 h-full flex flex-col gap-3 sm:gap-5 items-center justify-center">
            <h1
              className={`text-white font-pangaia-medium ${fontSize} font-medium leading-none tracking-tight`}
            >
              {title}
            </h1>

            <div className="flex items-center gap-2 sm:gap-4 text-white">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="15" height="15" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2l2.9 6.1L22 9.3l-5 4.9L18.2 21 12 17.7 5.8 21 7 14.2 2 9.3l7.1-1.2z"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
