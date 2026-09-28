import Button from "./Button";
import ProductImage from "./ProductImage";
import { Heart, Sparkle } from "./Doodles";
import { reviews } from "@/lib/data";

export default function MeetAndReviews() {
  return (
    <section className="site-x grid items-center gap-10 pt-6 pb-14 lg:grid-cols-[1.1fr_1.4fr]">
      {/* Meet Melissa */}
      <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:text-left">
        {/* Swap for a photo of Melissa: src="/images/melissa.jpg" */}
        <ProductImage
          alt="Melissa, owner of Dabble & Design Co."
          tone="sun"
          className="aspect-[4/5] w-44 shrink-0 rounded-2xl shadow-md sm:w-52"
        />
        <div>
          <h2 className="flex items-center justify-center gap-2 font-script text-5xl text-coral sm:justify-start">
            Hi, I&apos;m Melissa!
          </h2>
          <p className="mt-3 max-w-md text-ink">
            Dabble &amp; Design Co. started with a love for creating things that make people smile. From everyday
            shirts to team orders, custom gifts and more, I&apos;m so grateful to be a small part of your special
            moments.
          </p>
          <div className="mt-5 flex items-center justify-center gap-4 sm:justify-start">
            <Button href="/about" variant="navy">Meet Melissa</Button>
            <Heart className="size-7 text-coral" />
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div>
        <h2 className="flex items-center justify-center gap-2 font-script text-4xl sm:text-5xl">
          <Sparkle className="size-5 text-sun" />
          From Our Customers
          <Heart className="size-5 text-coral" />
        </h2>
        {reviews.length > 0 ? (
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {reviews.slice(0, 3).map((r) => (
              <li key={r.name} className="rounded-xl border border-navy/10 bg-paper p-5 text-center text-sm shadow-sm">
                <p>&ldquo;{r.quote}&rdquo;</p>
                <p className="mt-3 text-ink">&ndash; {r.name}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-6 rounded-xl border border-dashed border-navy/20 bg-paper p-6 text-center">
            <p className="font-extrabold">Real reviews coming soon.</p>
            <p className="mt-1 text-sm text-ink">Loved your order? Leave a review on our Facebook or Etsy page!</p>
          </div>
        )}
      </div>
    </section>
  );
}