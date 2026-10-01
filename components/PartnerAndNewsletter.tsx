import { Check } from "lucide-react";
import Button from "./Button";
import NewsletterForm from "./NewsletterForm";
import ProductImage from "./ProductImage";
import { Heart, Sparkle } from "./Doodles";
import Image from "next/image";

const perks = ["Save your logo", "Easy pricing", "Save employee sizes", "Bulk pricing", "Easy reorders", "No membership fees"];

export default function PartnerAndNewsletter() {
  return (
    <section className="site-x grid gap-6 py-10 lg:grid-cols-[1.7fr_1fr]">
      {/* Business partner */}
      <div className="relative grid overflow-hidden rounded-2xl bg-teal-soft sm:grid-cols-[1.1fr_1fr]">
        <Heart className="absolute top-5 left-4 size-6 -rotate-12 text-teal" />
        <Sparkle className="absolute top-12 left-9 size-4 text-sun" />
        <div className="p-7 sm:p-9">
          <h2 className="font-script text-4xl sm:text-5xl">For Local Businesses</h2>
          <p className="mt-2 font-extrabold">
            Your team changes.
            <br />
            Your apparel shouldn&apos;t be a hassle.
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-2">
                <Check className="size-4 shrink-0 stroke-[3] text-navy" aria-hidden />
                {perk}
              </li>
            ))}
          </ul>
          <Button href="/business" variant="navy" className="mt-6 w-full sm:w-auto">
            Become a Business Partner
          </Button>
        </div>
        {/* Swap for her "Support Local Business" hat photo: src="/images/business-hat.jpg" */}
        <div className="relative min-h-[18rem] overflow-hidden bg-navy">
          <Image
            src="/bizpartner-picture.png"
            alt="Dabble & Design Co. Business Partner Program: saved logos, employee sizes, easy reorders and bulk pricing"
            fill
            sizes="(min-width: 768px) 30vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Newsletter */}
      <div className="relative flex flex-col justify-center rounded-2xl bg-pink-soft p-7 text-center sm:p-9">
        <Heart className="absolute top-5 right-5 size-6 rotate-12 text-coral" />
        <h2 className="flex items-center justify-center gap-2 font-script text-4xl">
          <Heart className="size-5 text-coral" />
          Don&apos;t Miss the Next Drop
        </h2>
        <p className="mt-2 text-ink">New collections, seasonal designs, exclusive releases and Dabble news.</p>
        <NewsletterForm />
      </div>
    </section>
  );
}