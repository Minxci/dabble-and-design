import Link from "next/link";
import { Gift, PartyPopper, PawPrint, Shirt, Store, Users } from "lucide-react";
import { Heart, Sparkle, Swoosh } from "./Doodles";
import { shopFor } from "@/lib/data";

const icons = { Shirt, Users, PartyPopper, Store, Gift, PawPrint };

export default function MadeForPeople() {
  return (
    <section className="site-x relative py-10">
      <Heart className="absolute top-6 left-[8%] hidden size-8 -rotate-12 text-teal sm:block" />
      <Swoosh className="absolute top-14 left-[4%] hidden w-12 text-teal sm:block" />
      <Heart className="absolute top-4 right-[9%] hidden size-8 rotate-12 text-coral sm:block" />
      <Swoosh className="absolute top-16 right-[4%] hidden w-12 -scale-x-100 text-teal sm:block" />

      <h2 className="flex items-center justify-center gap-3 text-center font-script text-5xl sm:text-6xl">
        <Sparkle className="size-6 text-sun" />
        Made for People
        <Sparkle className="size-6 text-sun" />
      </h2>

      <ul className="mx-auto mt-10 grid max-w-6xl grid-cols-3 gap-y-8 sm:grid-cols-6">
        {shopFor.map((item) => {
          const Icon = icons[item.icon];
          return (
            <li key={item.label}>
              <Link
                href={`/shop?for=${encodeURIComponent(item.label)}`}
                className="group flex flex-col items-center gap-3"
              >
                <span className={`watercolor grid size-24 place-items-center ${item.blob} transition group-hover:scale-105`}>
                  <Icon className={`size-10 stroke-[2.2] ${item.color}`} aria-hidden />
                </span>
                <span className="text-center text-sm leading-tight font-extrabold">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}