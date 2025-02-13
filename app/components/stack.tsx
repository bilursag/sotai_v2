"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-card";

const Stack = () => {
  return (
    <section>
      <div className="flex flex-col items-center py-20">
        <h1 className="heading lg:max-w-[45vw]">
          Tecnologías
        </h1>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </section>
  )
}

export default Stack

const testimonials = [
  {
    image: "/ruby-logo.svg",
  },
  {
    image: "/tailwind-css-logo.svg",
  },
  {
    image: "/nextjs-1.svg",
  },
  {
    image: "/nodejs.svg",
  },
  {
    image: "/postgresql.svg",
  },
  {
    image: "/react-native.svg",
  },
  {
    image: "/express-js.svg",
  },
  {
    image: "/laravel.png",
  },
  {
    image: "/wordpress.svg",
  },
  {
    image: "/php.svg",
  },
  {
    image: "/cpanel.svg",
  },
  {
    image: "/codeigniter_2.png",
  },
  {
    image: "/rust.png",
  },
  {
    image: "/mysql.png",
  },
];
