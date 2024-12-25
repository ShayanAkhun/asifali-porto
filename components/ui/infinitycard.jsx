"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCard() {
  return (
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        pauseOnHover={true}
      />
  );
}

const testimonials = [
  {
    quote:
      "“The best editor! Has helped my channel go from 5k subs to over 50k subs and still growing! Will continue to work with Asif!“",
    name: "Yadster",
    title: "87.6K subscribers",
  },
  {
    quote:
      "“Asif is a very talented editor with awesome creative timing! He hadn't worked on my niche before we connected, but he knocked it out of the park! He understands how to elevate talking head videos to polished and refined pieces that feel like a documentary. Super grateful for his skill and creativity!“",
    name: "Tiffany Byrd Harrison",
    title: "18.8K subscribers",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "“Asif has tremendous editing skills. I always wanted to have an editor that sticks out and does different editing styles & Asif just did it all. Thanks for our cooperation“",
    name: "Dave Obiefuna",
    title: "5.83K subscribers",
  },
  {
    quote:
      "“Asif's editing has been really creative and unique to my brand. He does a great job getting my reels and YouTube videos to me in a reasonable time while maintain high quality and excellent communication.“",
    name: "Alex Robinson",
    title: "2.29K subscribers",
  },
  
];
