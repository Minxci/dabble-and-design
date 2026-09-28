"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import ProductImage from "./ProductImage";
import { Sparkle } from "./Doodles";
import { freshProducts } from "@/lib/data";

export default function FreshDrops() {
  const row = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => row.current?.scrollBy({ left: dir * row.current.clientWidth * 0.8, behavior: "smooth" });

  return (
    <section className="site-x py-14">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="flex items-center gap-2 font-script text-4xl sm:text-5xl">
          <Sparkle className="size-5 text-sun" />
          Fresh from the Dabble
          <Sparkle className="size-5 text-sun" />
        </h2>
        <Link href="/shop" className="inline-flex shrink-0 items-center gap-1 font-extrabold hover:text-coral">
          View All <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll(-1)}
          aria-label="Previous products"
          className="absolute top-[38%] -left-3 z-10 hidden size-10 place-items-center rounded-full bg-paper shadow-md ring-1 ring-navy/10 hover:bg-white sm:grid"
        >
          <ChevronLeft className="size-5" />
        </button>

        <div ref={row} className="no-scrollbar flex snap-x gap-4 overflow-x-auto scroll-smooth pb-2">
          {freshProducts.map((p) => (
            <Link
              key={p.id}
              href={`/shop/${p.id}`}
              className="group shrink-0 basis-[46%] snap-start sm:basis-[31%] lg:basis-[calc((100%-4rem)/5)]"
            >
              <div className="relative overflow-hidden rounded-xl">
                <ProductImage
                  src={p.image}
                  alt={p.name}
                  tone={p.tone}
                  className="aspect-square transition duration-300 group-hover:scale-[1.03]"
                />
                <span className="absolute top-2 right-2 grid size-8 place-items-center rounded-full bg-white text-coral shadow">
                  <Heart className="size-4" aria-hidden />
                </span>
              </div>
              <h3 className="mt-2 text-sm font-bold group-hover:text-coral">{p.name}</h3>
              <p className="text-sm font-extrabold">${p.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>

        <button
          onClick={() => scroll(1)}
          aria-label="Next products"
          className="absolute top-[38%] -right-3 z-10 hidden size-10 place-items-center rounded-full bg-paper shadow-md ring-1 ring-navy/10 hover:bg-white sm:grid"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </section>
  );
}