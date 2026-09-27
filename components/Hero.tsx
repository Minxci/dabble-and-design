import Button from "./Button";
import ProductImage from "./ProductImage";
import { Heart, Sparkle } from "./Doodles";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft background blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 size-[34rem] rounded-full bg-coral-soft/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 size-[30rem] rounded-full bg-teal-soft/70 blur-3xl" />

      <div className="site-x relative grid items-center gap-14 py-16 md:py-24 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <p className="text-xs font-bold tracking-[0.3em] text-teal uppercase">Custom apparel &amp; gifts</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.02] font-medium tracking-tight sm:text-6xl lg:text-7xl">
            Custom made.
            <br />
            <span className="relative inline-block font-script text-[1.15em] font-normal text-coral">
              Personal
              <Heart className="absolute -top-2 -right-6 size-6 rotate-12 text-coral/70" />
            </span>{" "}
            to you.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-ink lg:mx-0">
            Shirts, gifts, teams and businesses, each piece made to order with a little Dabble &amp; Design magic.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button href="/shop">Shop Ready-Made</Button>
            <Button href="/custom" variant="outline">Make Something</Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <Sparkle className="absolute -top-5 right-6 z-10 size-7 text-sun" />
          {/* Swap for her folded-shirt stack photo: src="/images/hero.jpg" */}
          <ProductImage
            alt="Stack of custom shirts"
            tone="coral"
            className="aspect-[4/5] rounded-[2.5rem] shadow-[0_30px_60px_-20px_rgba(28,37,64,0.35)] lg:aspect-[5/4]"
          />
          <div className="absolute -bottom-6 -left-4 rounded-2xl bg-paper px-5 py-4 shadow-xl ring-1 ring-navy/5 sm:-left-8">
            <p className="font-script text-2xl leading-none text-teal">Made to order</p>
            <p className="mt-1 text-xs font-bold tracking-widest text-navy/60 uppercase">Moline, Illinois</p>
          </div>
        </div>
      </div>
    </section>
  );
}