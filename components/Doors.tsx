import Button from "./Button";
import ProductImage from "./ProductImage";
import type { Tone } from "@/lib/data";
import ImageSlideshow from "@/components/ImageSlideshow";
import { getProducts } from "@/lib/products";
import Image from "next/image";

const doors: { title: string; text: string; cta: string; href: string; variant: "coral" | "teal" | "sun"; tone: Tone; image?: string }[] = [
  { title: "Shop", text: "Ready-made designs, collections and more.", cta: "Shop Now", href: "/shop", variant: "coral", tone: "teal" },
  { title: "Custom", text: "Personalized shirts, team orders, events, gifts & more.", cta: "Start Here", href: "/custom", variant: "teal", tone: "cream" },
  { title: "Business Partner", text: "Save your logo, employee sizes, easy reorders and bulk pricing.", cta: "Learn More", href: "/business", variant: "sun", tone: "navy", image: "/bizpartner-picture.png", },
];

export default async function Doors() {
  const shopImages = (await getProducts()).map((p) => p.images[0]);

  return (
    <section className="site-x relative z-10 -mt-4 lg:-mt-10">
      {/* Swipe row on phones, 3 columns on tablets and up */}
      <div className="no-scrollbar bleed-x flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
        {doors.map((d) => (
          <article
            key={d.title}
            className="flex w-[82%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-navy/10 bg-paper shadow-md md:w-auto"
          >
            {d.title === "Shop" ? (
              <div className="relative aspect-[16/9] overflow-hidden">
                <ImageSlideshow images={shopImages} alt="Dabble & Design Co. shirts" sizes="(min-width: 768px) 33vw, 82vw" />
              </div>
            ) : d.image ? (
              <div className="relative aspect-[16/9] overflow-hidden bg-navy">
                <Image
                  src={d.image}
                  alt="Dabble & Design Co. Business Partner Program"
                  fill
                  sizes="(min-width: 768px) 33vw, 82vw"
                  className="object-cover object-[center_35%]"
                />
              </div>
            ) : (
              <ProductImage alt={`${d.title} example`} tone={d.tone} className="aspect-[16/9]" />
            )}

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