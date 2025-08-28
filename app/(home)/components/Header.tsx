'use client';

import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <div className="relative w-full h-screen">
      {/* Background */}
      <Image
        src="/images/home/header-background.jpg"
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

      {/* Title + Stars */}
      <div className="relative z-20 top-1 h-full flex flex-col gap-5 items-center justify-center">
        <h1 className="text-white font-pangaia-medium text-[200px] font-medium leading-none tracking-tight">
          Diyanvi
        </h1>

        <div className="flex items-center gap-4 text-white">
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
  );
}

export default Header;
