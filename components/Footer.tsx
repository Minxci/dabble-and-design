import Image from "next/image";
import Link from "next/link";
import { Heart } from "./Doodles";
import NewsletterForm from "./NewsletterForm";
import SocialIcons from "./SocialIcons";

const cols = [
  [
    { label: "Shop", href: "/shop" },
    { label: "Custom", href: "/custom" },
    { label: "Business Partner", href: "/business" },
  ],
  [
    { label: "How It Works", href: "/how-it-works" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
];

const legal = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Shipping", href: "/shipping" },
  { label: "FAQ", href: "/faq" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="site-x grid items-center gap-8 py-10 md:grid-cols-2 lg:grid-cols-[auto_auto_1fr_1fr_1.3fr]">
        <Image src="/logo.png" alt="Dabble & Design Co." width={494} height={492} className="h-20 w-auto rounded-xl bg-white/95 p-1.5" />
        <p className="max-w-[14rem] text-sm text-white/80">
          <span className="font-bold text-teal">Custom</span> apparel &amp; accessories based in Moline, IL.
        </p>
        <SocialIcons />
        <div className="flex gap-12 text-sm">
          {cols.map((col, i) => (
            <ul key={i} className="space-y-1.5">
              {col.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/85 hover:text-sun">{l.label}</Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div>
          <p className="font-extrabold">Join the Dabble Crew</p>
          <NewsletterForm compact />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-x flex flex-col items-center justify-between gap-3 py-4 text-xs text-white/60 md:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <p>© {new Date().getFullYear()} Dabble &amp; Design Co.</p>
            {legal.map((l) => (
              <Link key={l.href} href={l.href} className="border-l border-white/20 pl-4 hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
          <p className="flex items-center gap-1.5">
            Made with a little Dabble &amp; Design magic <Heart className="size-3.5 fill-coral text-coral" />
          </p>
        </div>
      </div>
    </footer>
  );
}