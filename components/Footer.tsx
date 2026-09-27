import Link from "next/link";
import { Heart } from "./Doodles";
import NewsletterForm from "./NewsletterForm";

const cols = [
  { heading: "Shop", links: [
    { label: "Ready-Made", href: "/shop" },
    { label: "Custom Orders", href: "/custom" },
    { label: "Business Partner", href: "/business" },
  ]},
  { heading: "Studio", links: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]},
];

const legal = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Shipping", href: "/shipping" },
  { label: "FAQ", href: "/faq" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
        <div>
          <p className="font-script text-5xl leading-none">
            <span className="text-teal">Dabble</span> <span className="text-coral">&amp;</span> Design
          </p>
          <p className="mt-4 max-w-xs text-paper/65">Custom apparel &amp; accessories, made to order in Moline, Illinois.</p>
          <div className="mt-6 flex gap-2 text-sm font-bold">
            {/* Replace # with her real links */}
            <a href="https://www.facebook.com/profile.php?id=61592778372998" className="rounded-full border border-paper/20 px-4 py-2 transition hover:bg-paper hover:text-navy">Facebook</a>
            <a href="#" className="rounded-full border border-paper/20 px-4 py-2 transition hover:bg-paper hover:text-navy">Etsy</a>
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.heading}>
            <p className="text-xs font-bold tracking-[0.25em] text-sun uppercase">{col.heading}</p>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-paper/75 transition hover:text-paper">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-xs font-bold tracking-[0.25em] text-sun uppercase">Join the Dabble Crew</p>
          <p className="mt-5 text-paper/65">New drops and Dabble news. No spam, ever.</p>
          <NewsletterForm compact />
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-xs text-paper/50 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Dabble &amp; Design Co.</p>
          <nav className="flex gap-5" aria-label="Legal">
            {legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-paper">{l.label}</Link>
            ))}
          </nav>
          <p className="flex items-center gap-1.5">
            Made with a little magic <Heart className="size-3.5 text-coral" />
          </p>
        </div>
      </div>
    </footer>
  );
}