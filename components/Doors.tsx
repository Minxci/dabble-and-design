import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProductImage from "./ProductImage";

const doors = [
  { no: "01", title: "Shop", text: "Ready-made designs and seasonal collections.", href: "/shop", tone: "teal" as const },
  { no: "02", title: "Custom", text: "Personalized shirts, team orders, events and gifts.", href: "/custom", tone: "sun" as const },
  { no: "03", title: "Business Partner", text: "Saved logos, employee sizes, easy reorders and bulk pricing.", href: "/business", tone: "navy" as const },
];

export default function Doors() {
  return (
    <section className="site-x">
      <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
        {doors.map((d) => (
          <Link key={d.title} href={d.href} className="group w-[80%] shrink-0 snap-start md:w-auto">
            <ProductImage alt={`${d.title} example`} tone={d.tone} className="aspect-[4/3] rounded-3xl" />
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold tracking-[0.25em] text-navy/40">{d.no}</p>
                <h2 className="mt-1 font-display text-3xl font-medium">{d.title}</h2>
                <p className="mt-2 max-w-xs text-ink">{d.text}</p>
              </div>
              <span className="mt-1 grid size-11 shrink-0 place-items-center rounded-full border border-navy/15 transition duration-300 group-hover:border-navy group-hover:bg-navy group-hover:text-paper">
                <ArrowUpRight className="size-5" aria-hidden />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}