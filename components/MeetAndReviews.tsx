import { Quote } from "lucide-react";
import Button from "./Button";
import ProductImage from "./ProductImage";
import { Heart } from "./Doodles";
import { reviews } from "@/lib/data";

export default function MeetAndReviews() {
  return (
    <section className="site-x pb-24">
      <div className="grid items-center gap-12 rounded-[2rem] bg-sand/60 p-8 sm:p-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14 lg:p-16">
        {/* Photo */}
        <div className="relative mx-auto w-full max-w-xs lg:max-w-none">
          {/* Swap for a photo of Melissa: src="/images/melissa.jpg" */}
          <ProductImage
            alt="Melissa, owner of Dabble & Design Co."
            tone="sun"
            className="aspect-[4/5] rounded-t-full rounded-b-[2rem] ring-8 ring-paper"
          />
          <Heart className="absolute -right-3 bottom-10 size-10 rotate-12 text-coral" />
        </div>

        {/* About */}
        <div className="text-center lg:text-left">
          <p className="text-xs font-bold tracking-[0.25em] text-teal uppercase">The maker</p>
          <h2 className="mt-3 font-display text-4xl font-medium sm:text-5xl">
            Hi, I&apos;m <span className="font-script text-[1.2em] text-coral">Melissa!</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-ink lg:mx-0">
            Dabble &amp; Design Co. started with a love for creating things that make people smile. From everyday
            shirts to team orders and custom gifts, I&apos;m so grateful to be a small part of your special moments.
          </p>
          <p className="mt-5 font-script text-3xl text-navy/70">xo, Melissa</p>
          <Button href="/about" variant="outline" className="mt-7">My story</Button>
        </div>

        {/* Reviews */}
        <div className="lg:border-l lg:border-navy/10 lg:pl-14">
          <p className="text-center text-xs font-bold tracking-[0.25em] text-teal uppercase lg:text-left">Kind words</p>
          <h3 className="mt-3 text-center font-display text-3xl font-medium lg:text-left">
            From our <span className="font-script text-[1.15em] text-coral">customers</span>
          </h3>

          {reviews.length > 0 ? (
            <ul className="mt-6 space-y-4">
              {reviews.slice(0, 3).map((r) => (
                <li key={r.name} className="rounded-2xl bg-paper p-6 shadow-sm ring-1 ring-navy/5">
                  <Quote className="size-5 text-coral" aria-hidden />
                  <p className="mt-3 leading-relaxed">&ldquo;{r.quote}&rdquo;</p>
                  <p className="mt-4 text-xs font-bold tracking-wider text-navy/60 uppercase">{r.name}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-6 rounded-2xl bg-paper p-8 text-center shadow-sm ring-1 ring-navy/5 lg:text-left">
              <Quote className="mx-auto size-6 text-coral lg:mx-0" aria-hidden />
              <p className="mt-4 font-display text-xl">Real reviews coming soon.</p>
              <p className="mt-2 text-ink">Loved your order? Leave a review on our Facebook or Etsy page.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}