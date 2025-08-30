import React from 'react';
import Image from 'next/image';

function InclusiveExperience() {
  return (
    <div className="bg-primary flex flex-col items-center pb-32 sm:pt-24 md:pt-0 xl:pt-32">
      <h2 className="mt-0 sm:mt-16 md:mt-32 xl:mt-0 text-left sm:text-center text-quaternary font-pangaia-medium text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium w-[90%] border-b-2 border-b-gray-400 border-opacity-80">
        Enjoy An All-Inclusive Experience
      </h2>

      <div className="flex flex-col items-center md:items-start md:flex-row justify-center gap-12 mt-16 sm:mt-24 md:mt-32 w-[90%] border-b-2 border-b-gray-400 border-opacity-80 pb-20">
        <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-[30%]">
          <p className="text-primary font-editorial-old-ultrabold text-2xl max-w-[60ch]">
            Ground Floor - Vegetarian Restaurant
          </p>
          <span className="font-roboto text-base flex flex-col gap-2">
            <p>
              <span className="text-xl">&#x1F449;</span>{' '}
              <span className="text-primary font-bold">Perfect For:</span>{' '}
              Family dining, festive vegetarian feasts, casual meals
            </p>
            <p>
              <span className="text-xl">&#x1F449;</span>{' '}
              <span className="text-primary font-bold">Must-Try:</span> Chef's
              Special Thali & Fusion Sizzlers
            </p>
          </span>
        </div>

        <Image
          src="/images/home/image-7.jpg"
          alt="Inclusive Experience"
          width={380}
          height={450}
          className="object-cover w-[280px] sm:w-[320px] md:w-[380px]"
        />

        <div className="flex flex-col gap-10">
          <p className="text-menu-1 font-roboto font-medium text-sm sm:text-base leading-snug max-w-[52ch]">
            At Hotel Diyanvi, we celebrate the art of vegetarian dining with
            wholesome, innovative, and memorable meals. Our ground-floor
            restaurant, with a capacity of 200 guests, offers the perfect blend
            of spacious comfort and traditional elegance - ideal for families,
            festive gatherings, business luncheons, or casual outings.
          </p>

          <span className="hidden md:flex flex-col gap-4">
            <h3 className="text-quaternary font-calistoga text-xl">
              Tradition With A Global Touch.
            </h3>
            <div className="flex flex-col gap-4 font-roboto font-medium text-base leading-snug text-menu-1 max-w-[55ch]">
              <p>
                <span className="text-xl">&#x1F331;</span>{' '}
                <span className="text-primary font-bold">
                  South Indian Staples
                </span>{' '}
                - Dosas, idlis, sambars
              </p>
              <p>
                <span className="text-xl">&#x1F35B;</span>{' '}
                <span className="text-primary font-bold">
                  North Indian Classics
                </span>{' '}
                - Curries, parathas, royal thalis
              </p>
              <p>
                <span className="text-xl">&#x1F957;</span>{' '}
                <span className="text-primary font-bold">
                  Continental Favorites
                </span>{' '}
                - Pastas, sizzlers, salads, North Indian Classics - Curries,
                parathas, royal thalis
              </p>
              <p>
                <span className="text-xl">&#x1F30D;</span>{' '}
                <span className="text-primary font-bold">Fusion Delights</span>{' '}
                - Modern twists on timeless dishes Continental Favorites -
                Pastas, sizzlers, salads North Indian Classics - Curries,
                parathas, royal thalis
              </p>
            </div>
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start md:flex-row justify-center gap-12 mt-16 sm:mt-24 md:mt-32 w-[90%] border-b-2 border-b-gray-400 border-opacity-80 pb-20">
        <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-[30%]">
          <p className="text-primary font-editorial-old-ultrabold text-2xl max-w-[60ch]">
            First Floor - Non-Veg Restaurant
          </p>
          <span className="font-roboto text-sm sm:text-base flex flex-col gap-2 max-w-[52ch]">
            <p>
              <span className="text-xl">&#x1F449;</span>{' '}
              <span className="text-primary font-bold">Perfect For:</span>{' '}
              Corporate dining, family celebrations, couples, festive occasions
            </p>
            <p>
              <span className="text-xl">&#x1F449;</span>{' '}
              <span className="text-primary font-bold">
                Signature Highlight:
              </span>{' '}
              Chef's Signature Kebabs & Dum Biryani Specials
            </p>
          </span>
        </div>

        <Image
          src="/images/home/image-8.jpg"
          alt="Inclusive Experience"
          width={380}
          height={450}
          className="object-cover w-[280px] sm:w-[320px] md:w-[380px]"
        />

        <div className="flex flex-col gap-10">
          <p className="text-menu-1 font-roboto font-medium text-sm sm:text-base leading-snug max-w-[51ch]">
            With warm interiors and a refined ambiance, it's the perfect setting
            for family gatherings, corporate dinners, or celebratory evenings.
            Every dish is crafted with handpicked spices, premium cuts of meat,
            and time-honored recipes, blending authenticity with unforgettable
            taste.
          </p>

          <span className="hidden md:flex flex-col gap-4">
            <h3 className="text-quaternary font-calistoga text-xl">
              Flavors From Across India & Beyond
            </h3>
            <div className="flex flex-col gap-4 font-roboto font-medium text-base leading-snug text-menu-1 max-w-[55ch]">
              <p>
                <span className="text-xl">&#x1F362;</span>{' '}
                <span className="text-primary font-bold">Succulent Kebabs</span>{' '}
                - From melt-in-the-sizzling Tandoori platters
              </p>
              <p>
                <span className="text-xl">&#x1F35B;</span>{' '}
                <span className="text-primary font-bold">
                  Signature Curries
                </span>{' '}
                - Mutton Rogan Josh, spicy prawn masala, butter chicken classics
              </p>
              <p>
                <span className="text-xl">&#x1F35A;</span>{' '}
                <span className="text-primary font-bold">
                  Biryani Perfection
                </span>{' '}
                - Aromatic spices, basmati rice, and tender meat layered to
                perfection
              </p>
              <p>
                <span className="text-xl">&#x1F374;</span>{' '}
                <span className="text-primary font-bold">
                  International Specials
                </span>{' '}
                - Grilled chicken, oriental stir-fries, continental roasts
              </p>
            </div>
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start md:flex-row justify-center gap-12 mt-16 sm:mt-24 md:mt-32 w-[90%] border-b-2 border-b-gray-400 border-opacity-80 pb-20">
        <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-[30%]">
          <p className="text-primary font-editorial-old-ultrabold text-2xl max-w-[25ch]">
            Second & Third Floors - Rooms & Lodging
          </p>
          <span className="font-roboto text-sm sm:text-base flex flex-col gap-2 max-w-[51ch]">
            <p>
              <span className="text-xl">&#x1F449;</span>{' '}
              <span className="text-primary font-bold">Perfect For:</span>{' '}
              Business stays, weekend getaways, family vacations, couples
            </p>
            <p>
              <span className="text-xl">&#x1F449;</span>{' '}
              <span className="text-primary font-bold">
                Signature Highlight:
              </span>{' '}
              Complimentary breakfast, modern amenities, and personalized care
            </p>
          </span>
        </div>

        <Image
          src="/images/home/image-9.jpg"
          alt="Inclusive Experience"
          width={380}
          height={450}
          className="object-cover w-[280px] sm:w-[320px] md:w-[380px]"
        />

        <div className="flex flex-col gap-10">
          <p className="text-menu-1 font-roboto font-medium text-sm sm:text-base leading-snug max-w-[51ch]">
            Your stay at Hotel Diyanvi is designed to be more than just an
            overnight halt - it's a blend of elegance, warmth, and thoughtful
            hospitality. Spread across our second and third floors, the hotel
            offers 16 premium rooms, available in Deluxe and Suite categories.
          </p>

          <span className="hidden md:flex flex-col gap-4">
            <h3 className="text-quaternary font-calistoga text-xl">
              Stay In Comfort, Wake Up In Luxury
            </h3>
            <div className="flex flex-col gap-4 font-roboto font-medium text-base leading-snug text-menu-1 max-w-[55ch]">
              <p>
                <span className="text-2xl">✔</span> Each room is equipped with
                modern amenities that elevate your stay
              </p>
              <p>
                <span className="text-2xl">✔</span> High-speed Wi-Fi and smart
                TVs with entertainment access
              </p>
              <p>
                <span className="text-2xl">✔</span> Mini-fridge, electric
                kettle, and in-room dining services
              </p>
              <p>
                <span className="text-2xl">✔</span> Work-friendly desk and
                seating arrangements for business travelers
              </p>
              <p>
                <span className="text-2xl">✔</span> 24/7 housekeeping and
                laundry support
              </p>
            </div>
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start md:flex-row justify-center gap-12 mt-16 sm:mt-24 md:mt-32 w-[90%] mb-32">
        <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-[30%]">
          <p className="text-primary font-editorial-old-ultrabold text-2xl max-w-[25ch]">
            Fourth Floor - Rooftop Resto Cafe
          </p>
          <span className="font-roboto text-sm sm:text-base flex flex-col gap-2 max-w-[46ch]">
            <p>
              <span className="text-xl">&#x1F449;</span>{' '}
              <span className="text-primary font-bold">Perfect For:</span>{' '}
              Romantic dates, weekend parties, corporate mixers, sunset dining
            </p>
            <p>
              <span className="text-xl">&#x1F449;</span>{' '}
              <span className="text-primary font-bold">
                Signature Highlight:
              </span>{' '}
              Mocktails, grills & panoramic city views
            </p>
          </span>
        </div>

        <Image
          src="/images/home/image-10.jpg"
          alt="Inclusive Experience"
          width={380}
          height={450}
          className="object-cover w-[280px] sm:w-[320px] md:w-[380px]"
        />

        <div className="flex flex-col gap-10">
          <p className="text-menu-1 font-roboto font-medium text-sm sm:text-base leading-snug max-w-[51ch]">
            The rooftop resto bar at Hotel Diyanvi is not just a dining space –
            it's an experience above the city lights. Perched on the fourth
            floor, this space blends culinary excellence, mixology artistry, and
            breathtaking Mysuru skyline views.
          </p>

          <span className="hidden md:flex flex-col gap-4">
            <h3 className="text-quaternary font-calistoga text-xl">
              Sip, Savor & Soak In The Skyline
            </h3>
            <div className="flex flex-col gap-4 font-roboto font-medium text-base leading-snug text-menu-1 max-w-[55ch]">
              <p>
                <span className="text-2xl">✔</span> Romantic candlelight dinners
                under the stars
              </p>
              <p>
                <span className="text-2xl">✔</span> Friends' night outs and
                group celebrations
              </p>
              <p>
                <span className="text-2xl">✔</span> Corporate mixers and
                after-work parties
              </p>
            </div>
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-start md:flex-row gap-16 h-[600px] w-full my-8 md:my-32">
        {/* left */}
        <div className="flex-1 h-auto">
          <Image
            src="/images/home/image-4.jpg"
            alt="About The Diyanvi 4"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        {/* right */}
        <div className="w-full md:w-[30%] flex flex-col gap-20 md:mr-16">
          <div className="flex flex-col items-start justify-center gap-10 h-full">
            <h3 className="text-quaternary font-pangaia-medium text-center md:text-left text-3xl md:text-4xl font-medium leading-snug md:leading-relaxed tracking-tight max-w-[14ch] md:max-w-[40ch] mx-auto md:mx-0">
              Where Comfort Meets Flavor, And Hospitality Feels Like Home.
            </h3>

            <p className="text-secondary font-roboto text-center md:text-left text-sm md:text-lg font-medium leading-snug tracking-tight max-w-[38ch] md:max-w-[50ch] mx-auto md:mx-0">
              At Hotel Diyanvi, we go beyond food and lodging - we deliver
              experiences that celebrate Mysuru's culture, hospitality, and
              warmth. Whether you're here for a quick meal, a weekend getaway,
              or a night under the stars, our team is committed to making every
              moment unforgettable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InclusiveExperience;
