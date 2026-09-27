import { Check } from "lucide-react";
import Button from "./Button";
import NewsletterForm from "./NewsletterForm";
import { Heart, Sparkle } from "./Doodles";

const perks = ["Your logo saved on file", "Employee sizes on file", "Easy reorders", "Bulk pricing", "No membership fees"];

export default function PartnerAndNewsletter() {
  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-5 py-24 sm:px-8 lg:grid-cols-5">
      <div className="relative overflow-hidden rounded-[2rem] bg-navy p-8 text-paper sm:p-12 lg:col-span-3">
        <div className="pointer-events-none absolute -right-24 -bottom-24 size-80 rounded-full bg-teal/25 blur-3xl" />
        <p className="text-xs font-bold tracking-[0.25em] text-sun uppercase">Business Partner Program</p>
        <h2 className="mt-4 font-display text-4xl leading-tight font-medium sm:text-5xl">
          Your team changes.
          <br />
          Your apparel <span className="font-script text-teal">shouldn&apos;t</span> be a hassle.
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {perks.map((perk) => (
            <li key={perk} className="flex items-center gap-3 text-paper/85">
              <span className="grid size-6 shrink-0 place-items-center rounded-full bg-teal/20 text-teal">
                <Check className="size-3.5" aria-hidden />
              </span>
              {perk}
            </li>
          ))}
        </ul>
        <Button href="/business" variant="light" className="mt-10">Become a Partner</Button>
      </div>

      <div className="relative flex flex-col justify-center overflow-hidden rounded-[2rem] bg-coral-soft p-8 text-center sm:p-12 lg:col-span-2">
        <Heart className="absolute top-6 left-6 size-7 -rotate-12 text-coral/50" />
        <Sparkle className="absolute top-8 right-8 size-6 text-sun" />
        <p className="text-xs font-bold tracking-[0.25em] text-coral uppercase">The Dabble List</p>
        <h2 className="mt-4 font-display text-4xl leading-tight font-medium">
          Don&apos;t miss the <span className="font-script text-coral">next drop</span>
        </h2>
        <p className="mt-3 text-ink">New collections, seasonal designs and Dabble news, straight to your inbox.</p>
        <NewsletterForm />
      </div>
    </section>
  );
}