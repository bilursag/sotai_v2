"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-card";

const Stack = () => {
  return (
    <section>
      <div className="flex flex-col items-center pt-20">
        <h1 className="heading lg:max-w-[45vw]">
          Tecnologías
        </h1>
      </div>
      <div className="h-[20rem] pt-20 rounded-md flex flex-col antialiased bg-black items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
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
];
