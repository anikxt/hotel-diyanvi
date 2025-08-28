import React from 'react';

function CulinaryExperience() {
  return (
    <div className="bg-primary min-h-screen flex flex-col items-start gap-10 pl-32 pb-32">
      <div className="text-primary font-pangaia-medium text-left text-6xl font-medium leading-tight tracking-wide max-w-[28ch] mt-32">
        <h3>Culinary Excellence Meets The Highest In Alpine Tradition</h3>

        <h3>
          &<span className="font-pangaia-medium-italic"> Service</span>
        </h3>
      </div>

      <div className="flex gap-32 mt-16 w-full">
        <div className="flex flex-col gap-12">
          <p className="text-primary font-editorial-old-regular text-left text-xl font-medium leading-normal tracking-wide max-w-[38ch]">
            The Diyanvi Is More Than A Restaurant—It’s A Place Where Flavors,
            Stories, And People Come Together. From A Hearty Breakfast To A
            Crafted Three-Course Dinner, Every Meal Is Thoughtfully Prepared And
            Served With Care.
          </p>

          <p className="text-secondary font-roboto text-left text-lg font-medium leading-normal tracking-tight max-w-[48ch]">
            It's not just about food, but about creating moments. At The Haven,
            we believe dining should feel warm, comforting, and memorable. Our
            menus bring together the richness of seasonal ingredients, timeless
            recipes, and a modern touch—balancing familiarity with creativity.
            Whether it's a wholesome soup on a rainy day, a classic pasta
            prepared with hand-picked herbs, or an indulgent dessert, each dish
            is designed to feel both homely and special.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          <p className="text-secondary font-roboto text-left text-lg font-medium leading-normal tracking-tight max-w-[48ch]">
            At The Haven, dining is about slowing down, savoring every bite, and
            enjoying life at your own pace.
          </p>
          <p className="text-secondary font-roboto text-left text-lg font-medium leading-normal tracking-tight max-w-[48ch]">
            And for those who linger after their meal, the café bar offers a
            curated selection of fine wines, freshly brewed coffee, and
            artisanal desserts. Every plate is crafted with simplicity and
            heart—never rushed, never showy—just honest food made with passion.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CulinaryExperience;
