import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductImage from "./ProductImage";
import SectionHeading from "./SectionHeading";
import { freshProducts } from "@/lib/data";

export default function FreshDrops() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow="New this week" title="Fresh from the" accent="Dabble" />
        <Link href="/shop" className="group inline-flex items-center gap-2 border-b border-navy/30 pb-1 text-sm font-bold tracking-wider uppercase hover:border-navy">
          Shop all <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="no-scrollbar -mx-5 flex snap-x gap-5 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-4 lg:px-0">
        {freshProducts.slice(0, 4).map((p) => (
          <Link key={p.id} href={`/shop/${p.id}`} className="group w-60 shrink-0 snap-start lg:w-auto">
            <div className="relative overflow-hidden rounded-2xl">
              <ProductImage src={p.image} alt={p.name} tone={p.tone} className="aspect-[4/5]" />
              {p.tag && (
                <span className="absolute top-3 left-3 rounded-full bg-paper/95 px-3 py-1 text-[11px] font-bold tracking-widest uppercase">
                  {p.tag}
                </span>
              )}
              <span className="absolute inset-x-3 bottom-3 translate-y-2 rounded-full bg-navy py-2.5 text-center text-sm font-bold text-paper opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                View design
              </span>
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-3">
              <h3 className="font-display text-lg leading-snug font-medium">{p.name}</h3>
              <p className="shrink-0 text-sm font-bold text-ink">${p.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}