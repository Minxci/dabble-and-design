import Link from "next/link";
import { Gift, PartyPopper, PawPrint, Shirt, Store, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { shopFor } from "@/lib/data";

const icons = { Shirt, Users, PartyPopper, Store, Gift, PawPrint };

export default function MadeForPeople() {
  return (
    <section className="border-y border-navy/[0.07] bg-paper py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Shop by occasion" title="Made for your" accent="people" align="center" />
        <ul className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-navy/[0.07] bg-navy/[0.07] sm:grid-cols-3 lg:grid-cols-6">
          {shopFor.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.label} className="bg-paper">
                <Link
                  href={`/shop?for=${encodeURIComponent(item.label)}`}
                  className="group flex h-full flex-col items-center gap-4 px-4 py-9 transition hover:bg-cream"
                >
                  <span className={`grid size-16 place-items-center rounded-full ${item.tint} transition duration-300 group-hover:scale-110`}>
                    <Icon className="size-7 stroke-[1.5] text-navy" aria-hidden />
                  </span>
                  <span className="text-center text-sm font-bold">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}