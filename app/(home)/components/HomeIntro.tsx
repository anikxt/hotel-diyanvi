import React from 'react';

function HomeIntroSection() {
  return (
    <div className="bg-primary h-[calc(100vh-100px)] flex flex-col justify-center items-center">
      <div className="flex flex-col gap-8 mt-16">
        <h2 className="text-primary font-pangaia-medium text-center text-7xl font-medium leading-tight">
          Where Luxury <br /> Finds Its True Expression
        </h2>

        <div className="text-secondary font-roboto text-center text-lg font-medium leading-normal tracking-tight flex flex-col justify-center items-center gap-4">
          <p>
            Diyanvi invites you into a world where every moment is curated for
            delight.
          </p>

          <p className="max-w-[64ch]">
            Tucked away in the regal city of Mysuru, Hotel Diyanvi redefines the
            art of indulgence. A 5-star luxury hotel crafted for those who
            appreciate the rare blend of classic charm and contemporary
            sophistication, From the moment you arrive, our private concierge
            team ensures your stay is seamless and unforgettable.Whether you're
            here for a boardroom meeting, a romantic escape, or a soul-stirring
            getaway, Hotel Diyanvi embraces you with heartfelt hospitality and
            impeccable service.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeIntroSection;
