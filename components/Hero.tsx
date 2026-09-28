import Button from "./Button";
import ProductImage from "./ProductImage";
import { Heart, Sparkle } from "./Doodles";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="grid items-center lg:grid-cols-[1fr_1.15fr]">
        {/* Text */}
        <div className="site-x relative z-10 py-12 text-center lg:py-20 lg:pr-0 lg:text-left">
          <Heart className="absolute top-8 right-10 size-9 rotate-12 text-coral lg:right-4" />
          <Heart className="absolute bottom-24 left-4 hidden size-8 -rotate-12 text-teal lg:block" />
          <h1 className="font-script text-6xl leading-[0.95] sm:text-7xl xl:text-8xl">
            <span className="inline-block -rotate-2">Custom Made.</span>
            <br />
            <span className="inline-block -rotate-2">Personal to You.</span>
          </h1>
          <p className="mt-6 text-xl font-extrabold sm:text-2xl">Shirts • Gifts • Teams • Businesses</p>
          <p className="mt-1 text-ink">Made with a little Dabble &amp; Design magic.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button href="/shop" variant="coral">Shop Ready-Made</Button>
            <Button href="/custom" variant="teal">Make Something</Button>
          </div>
        </div>

        {/* Photo: bleeds to the right edge of the screen on desktop */}
        <div className="relative px-[var(--gutter)] pb-10 lg:px-0 lg:pb-0">
          <Sparkle className="absolute top-6 left-8 z-10 size-7 text-sun lg:left-2" />
          <Heart className="absolute top-10 right-8 z-10 size-9 -rotate-12 text-teal" />
          {/* Swap for her folded-shirt stack photo: src="/images/hero.jpg" */}
          <ProductImage
            alt="Stack of custom shirts and a hat"
            tone="pink"
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="aspect-[4/3] rounded-3xl lg:aspect-auto lg:h-full lg:min-h-[32rem] lg:rounded-none lg:rounded-bl-[3rem]"
          />
        </div>
      </div>
    </section>
  );
}