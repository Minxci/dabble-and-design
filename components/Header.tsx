"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";

const nav = [
  { label: "Shop", href: "/shop" },
  { label: "Custom", href: "/custom" },
  { label: "Business Partner", href: "/business" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-baseline gap-1 leading-none sm:gap-1.5" aria-label="Dabble & Design Co. home">
      <span className="font-script text-[1.6rem] text-teal sm:text-[1.9rem]">Dabble</span>
      <span className="font-script text-xl text-coral sm:text-2xl">&amp;</span>
      <span className="font-script text-[1.6rem] text-navy sm:text-[1.9rem]">Design</span>
      <span className="hidden font-display text-xs font-semibold tracking-[0.2em] text-navy/60 min-[400px]:inline">CO.</span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const cartCount = 0; // wired to the real cart later

  return (
    <header className="sticky top-0 z-40 border-b border-navy/[0.07] bg-cream/85 backdrop-blur-md">
      <div className="site-x flex items-center justify-between gap-2 py-4 sm:gap-4">
        <Logo />

        <nav className="hidden items-center gap-8 text-[13px] font-bold tracking-wider uppercase lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-navy/75 transition hover:text-navy">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-0 sm:gap-1">
          <button className="rounded-full p-2 hover:bg-navy/5 sm:p-2.5" aria-label="Search">
            <Search className="size-5" />
          </button>
          <Link href="/account" className="hidden rounded-full p-2 hover:bg-navy/5 sm:block sm:p-2.5" aria-label="Account">
            <User className="size-5" />
          </Link>
          <Link href="/cart" className="relative rounded-full p-2 hover:bg-navy/5 sm:p-2.5" aria-label={`Cart, ${cartCount} items`}>
            <ShoppingBag className="size-5" />
            <span className="absolute top-1 right-1 grid size-4 place-items-center rounded-full bg-coral text-[10px] font-bold text-white ring-2 ring-cream">
              {cartCount}
            </span>
          </Link>
          <button
            className="rounded-full p-2 hover:bg-navy/5 sm:p-2.5 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="site-x border-t border-navy/[0.07] bg-cream pb-6 lg:hidden" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-navy/[0.07] py-4 font-display text-2xl"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}