"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  images: string[];
  alt: string;
  interval?: number; // ms between slides
  sizes?: string;
};

export default function ImageSlideshow({
  images,
  alt,
  interval = 3500,
  sizes = "(min-width: 768px) 33vw, 100vw",
}: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (images.length < 2 || paused) return;
    // Respect reduced-motion settings: just show the first image
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [images.length, interval, paused]);

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={i === index ? alt : ""}
          aria-hidden={i !== index}
          fill
          sizes={sizes}
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}