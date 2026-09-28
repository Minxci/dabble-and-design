// src/app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, MapPin, PawPrint, Shirt, Sparkles } from "lucide-react";
import { Heart as HeartDoodle } from "@/components/Doodles";

export const metadata: Metadata = {
  title: "Meet Melissa | Dabble & Design Co.",
  description:
    "The mom, creator and small business owner behind Dabble & Design Co. in Moline, IL.",
};

// Drop Melissa's photos in public/images/ and fill these in.
// Leave as undefined to show the placeholder box.
const photos = {
  portrait: undefined as string | undefined, // e.g. "/images/melissa-workspace.jpg" (the one with her dog)
  workspace: undefined as string | undefined, // e.g. "/images/workspace.jpg"
  heatPress: undefined as string | undefined, // e.g. "/images/heat-press.jpg"
};

function PhotoSlot({
  src,
  alt,
  tint,
  className = "",
}: {
  src?: string;
  alt: string;
  tint: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-3xl shadow-lg ${className}`}>
      {src ? (
        <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
      ) : (
        <div className={`grid size-full place-items-center bg-gradient-to-br ${tint}`}>
          <Shirt className="size-14 text-navy/25" aria-hidden />
        </div>
      )}
    </div>
  );
}

const values = [
  {
    icon: Heart,
    title: "Made With Heart",
    text: "Every design is made with care, a little creativity, and a whole lot of heart.",
    bubble: "bg-blush text-coral",
  },
  {
    icon: MapPin,
    title: "Local to Moline",
    text: "A real small business, run from my own little shop right here in Moline, IL.",
    bubble: "bg-teal/20 text-teal",
  },
  {
    icon: PawPrint,
    title: "For Your Whole Crew",
    text: "Something for you, your family, and your furry best friend too.",
    bubble: "bg-sun/30 text-navy",
  },
];

export default function AboutPage() {
  return (
    <>
      

      <main>
        {/* Intro */}
        <section className="relative overflow-hidden py-16 lg:py-24">
          <HeartDoodle className="absolute top-10 right-10 size-8 rotate-12 text-coral/60" />

          <div className="site-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <PhotoSlot
              src={photos.portrait}
              alt="Melissa's shop with her little shop helper"
              tint="from-sun/30 to-cream"
              className="aspect-[4/5] w-full max-w-md justify-self-center lg:justify-self-start"
            />

            <div>
              <p className="flex items-center gap-2 font-bold text-teal">
                <Sparkles className="size-4" aria-hidden /> Meet the Maker
              </p>
              <h1 className="mt-2 font-script text-5xl text-coral sm:text-6xl">Hi, I&apos;m Melissa!</h1>

              <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy/80">
                <p>
                  I&apos;m a mom of two beautiful daughters, and I started Dabble &amp; Design Co. as a way
                  to build something of my own while creating a little extra income for my family. What
                  started as a small idea has grown into a creative outlet I truly enjoy.
                </p>
                <p>
                  I love creating fun, comfortable, and unique designs that let people show off their
                  personality, whether it&apos;s a shirt for yourself, something special for your family,
                  or a matching design for you and your furry best friend.
                </p>
                <p>
                  My goal is to bring a little more fun, creativity, and happiness to everyday life through
                  the things I create.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Where the magic happens */}
        <section className="bg-paper py-16">
          <div className="site-x">
            <h2 className="text-center font-script text-4xl sm:text-5xl">Where the Magic Happens</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-navy/70">
              From my heat press to my little shop helper, this is where every order comes to life.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <PhotoSlot
                src={photos.workspace}
                alt="Melissa's design desk and printer"
                tint="from-teal/20 to-cream"
                className="aspect-[4/3]"
              />
              <PhotoSlot
                src={photos.heatPress}
                alt="Heat press and blank shirts ready to go"
                tint="from-blush to-cream"
                className="aspect-[4/3]"
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="site-x grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text, bubble }) => (
              <div key={title} className="rounded-3xl bg-white p-8 text-center shadow-md">
                <div className={`mx-auto grid size-20 place-items-center rounded-full ${bubble}`}>
                  <Icon className="size-8" aria-hidden />
                </div>
                <h3 className="mt-5 font-script text-3xl">{title}</h3>
                <p className="mt-2 text-navy/70">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Thank you + CTAs */}
        <section className="pb-20">
          <div className="site-x">
            <div className="relative overflow-hidden rounded-3xl bg-teal/15 px-6 py-14 text-center">
              <HeartDoodle className="absolute top-6 left-6 size-6 -rotate-12 text-teal/60" />
              <HeartDoodle className="absolute right-8 bottom-6 size-7 rotate-12 text-coral/60" />

              <h2 className="font-script text-4xl sm:text-5xl">Thank You for Stopping By</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-navy/80">
                Every order means more to me than you know, and I&apos;m so excited to have you here!
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 rounded-full bg-coral px-7 py-3.5 font-extrabold text-white shadow transition hover:-translate-y-0.5"
                >
                  Shop Now <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/custom"
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 font-extrabold text-white shadow transition hover:-translate-y-0.5"
                >
                  Start a Custom Order <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}