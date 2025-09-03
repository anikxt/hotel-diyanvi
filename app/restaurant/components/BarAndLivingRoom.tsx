import React from 'react';
import Image from 'next/image';

function BarAndLivingRoom() {
  return (
    <div className="relative z-40 bg-primary min-h-screen flex flex-col pb-48 md:pb-0">
      <div className="text-quinary font-calistoga w-fit self-center text-center text-lg font-medium leading-tight mt-12">
        Elevated Evenings, Unforgettable Moments
      </div>

      <div className="text-primary font-pangaia-medium text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-tighter mt-20 md:mt-24 lg:mt-32">
        <h2>The Bar &</h2>
        <h2>Living Room</h2>
      </div>

      <div className="text-primary font-editorial-old-regular text-center text-lg md:text-2xl font-medium leading-normal tracking-wide self-center mt-8">
        <p>A Delightful Space For</p>
        <p> Savoring Flavors & Sharing Moments.</p>
      </div>

      <div className="flex flex-col items-center md:items-start md:flex-row h-[700px] my-20 md:my-32 gap-8">
        {/* left */}
        <div className="flex-1 h-auto">
          <Image
            src="/HOTEL IMAGES - WEBP/image-1.webp"
            alt="Bar & Living Room"
            width={1200}
            height={1200}
            className="w-full h-full object-cover"
          />
        </div>

        {/* right */}
        <div className="w-full md:w-[30%] md:ml-8 flex flex-col items-center md:items-start gap-10 px-8 md:px-0 mt-16 md:mt-0">
          <Image
            src="/images/restaurant/image-3.jpg"
            alt="Bar & Living Room"
            width={420}
            height={300}
            className="hidden md:block object-cover"
          />

          <p className="text-primary font-editorial-old-regular text-center md:text-left text-lg md:text-xl font-medium leading-normal tracking-wide max-w-[35ch]">
            Indulge In Our Signature Dine Inn Experience, Where Culinary
            Storytelling Meets World-Class Service.
          </p>

          <p className="text-secondary font-roboto text-center md:text-left text-base md:text-lg font-medium leading-normal tracking-tight max-w-[34ch] md:max-w-[44ch]">
            At our restaurant, we believe dining is more than just a meal — it's
            an experience. With a warm and welcoming ambiance, we bring together
            flavours that celebrate both tradition and creativity. Every dish is
            crafted with fresh, high-quality ingredients, ensuring authenticity
            and taste in every bite. Whether you're here for a casual outing, a
            family gathering, or a special celebration, our team is dedicated to
            providing exceptional service and a memorable culinary journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BarAndLivingRoom;
