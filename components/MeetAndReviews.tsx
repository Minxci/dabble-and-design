import { Quote } from "lucide-react";
import Button from "./Button";
import ProductImage from "./ProductImage";
import SectionHeading from "./SectionHeading";
import { Heart } from "./Doodles";
import { reviews } from "@/lib/data";

export default function MeetAndReviews() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-24 sm:px-8 md:grid-cols-2">
        <div className="relative mx-auto w-full max-w-sm">
          {/* Swap for a photo of Melissa: src="/images/melissa.jpg" */}
          <ProductImage alt="Melissa, owner of Dabble & Design Co." tone="sun" className="aspect-[4/5] rounded-t-full rounded-b-[2rem]" />
          <Heart className="absolute -right-4 bottom-10 size-10 rotate-12 text-coral" />
        </div>
        <div className="text-center md:text-left">
          <p className="text-xs font-bold tracking-[0.25em] text-teal uppercase">The maker</p>
          <h2 className="mt-3 font-display text-4xl font-medium sm:text-5xl">
            Hi, I&apos;m <span className="font-script text-[1.2em] text-coral">Melissa!</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ink md:mx-0">
            Dabble &amp; Design Co. started with a love for creating things that make people smile. From everyday
            shirts to team orders and custom gifts, I&apos;m so grateful to be a small part of your special moments.
          </p>
          <p className="mt-6 font-script text-3xl text-navy/70">xo, Melissa</p>
          <Button href="/about" variant="outline" className="mt-8">My story</Button>
        </div>
      </section>

      <section className="bg-sand/60 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Kind words" title="From our" accent="customers" align="center" />
          {reviews.length > 0 ? (
            <ul className="mt-12 grid gap-5 md:grid-cols-3">
              {reviews.map((r) => (
                <li key={r.name} className="rounded-3xl bg-paper p-8 shadow-sm ring-1 ring-navy/5">
                  <Quote className="size-6 text-coral" aria-hidden />
                  <p className="mt-4 font-display text-lg leading-relaxed">&ldquo;{r.quote}&rdquo;</p>
                  <p className="mt-6 text-sm font-bold tracking-wider uppercase text-navy/60">{r.name}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mx-auto mt-12 max-w-xl rounded-3xl bg-paper p-10 text-center shadow-sm ring-1 ring-navy/5">
              <Quote className="mx-auto size-6 text-coral" aria-hidden />
              <p className="mt-4 font-display text-xl">Real reviews coming soon.</p>
              <p className="mt-2 text-ink">Loved your order? Leave a review on our Facebook or Etsy page.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}