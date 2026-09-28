import Button from "./Button";
import ProductImage from "./ProductImage";
import type { Tone } from "@/lib/data";

const doors: { title: string; text: string; cta: string; href: string; variant: "coral" | "teal" | "sun"; tone: Tone }[] = [
  { title: "Shop", text: "Ready-made designs, collections and more.", cta: "Shop Now", href: "/shop", variant: "coral", tone: "teal" },
  { title: "Custom", text: "Personalized shirts, team orders, events, gifts & more.", cta: "Start Here", href: "/custom", variant: "teal", tone: "cream" },
  { title: "Business Partner", text: "Save your logo, employee sizes, easy reorders and bulk pricing.", cta: "Learn More", href: "/business", variant: "sun", tone: "navy" },
];

export default function Doors() {
  return (
    <section className="site-x relative z-10 -mt-4 lg:-mt-10">
      {/* Swipe row on phones, 3 columns on tablets and up */}
      <div className="no-scrollbar bleed-x flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
        {doors.map((d) => (
          <article
            key={d.title}
            className="flex w-[82%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-navy/10 bg-paper shadow-md md:w-auto"
          >
            {/* Swap for her photos: e.g. src="/images/door-shop.jpg" */}
            <ProductImage alt={`${d.title} example`} tone={d.tone} className="aspect-[16/9]" />
            <div className="flex flex-1 flex-col p-5">
              <h2 className="font-script text-4xl">{d.title}</h2>
              <p className="mt-1 flex-1 text-ink">{d.text}</p>
              <Button href={d.href} variant={d.variant} className="mt-4 w-full">
                {d.cta}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}