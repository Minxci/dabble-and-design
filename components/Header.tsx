"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, Search, ShoppingCart, User, X } from "lucide-react";

const nav = [
  { label: "Shop", href: "/shop", dropdown: true },
  { label: "Custom", href: "/custom", dropdown: true },
  { label: "Business Partner", href: "/business", dropdown: true },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const cartCount = 0; // wired to the real cart later

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-paper/95 backdrop-blur">
      <div className="site-x flex items-center justify-between gap-3 py-2.5">
        <Link href="/" aria-label="Dabble & Design Co. home" className="shrink-0">
          <Image src="/dabble-logo-transparent.png" alt="Dabble & Design Co." width={494} height={492} priority className="h-16 w-auto sm:h-20 lg:h-24" />
        </Link>

        <nav className="hidden items-center gap-7 font-bold lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="inline-flex items-center gap-1 transition hover:text-coral">
              {item.label}
              {item.dropdown && <ChevronDown className="size-4" aria-hidden />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <button className="rounded-full p-2.5 hover:bg-navy/5" aria-label="Search">
            <Search className="size-5" />
          </button>
          <Link href="/account" className="hidden rounded-full p-2.5 hover:bg-navy/5 sm:block" aria-label="Account">
            <User className="size-5" />
          </Link>
          <Link href="/cart" className="relative rounded-full p-2.5 hover:bg-navy/5" aria-label={`Cart, ${cartCount} items`}>
            <ShoppingCart className="size-5" />
            <span className="absolute top-1 right-0.5 grid size-4 place-items-center rounded-full bg-coral text-[10px] font-bold text-white">
              {cartCount}
            </span>
          </Link>
          <button
            className="rounded-full p-2.5 hover:bg-navy/5 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="site-x border-t border-navy/10 bg-paper pb-4 lg:hidden" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-navy/5 py-3.5 text-lg font-bold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}