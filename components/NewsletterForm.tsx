"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

// Front-end only for now. Later: save to a Supabase table or an email service.
export default function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [done, setDone] = useState(false);
  const id = compact ? "email-footer" : "email-main";

  if (done) {
    return <p className="mt-5 font-script text-2xl text-teal">You&apos;re on the list! 💕</p>;
  }

  if (compact) {
    return (
      <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="mt-3 flex overflow-hidden rounded-lg bg-white">
        <label htmlFor={id} className="sr-only">Email address</label>
        <input
          id={id}
          type="email"
          required
          placeholder="Your email address"
          className="min-h-11 w-full min-w-0 px-4 text-base text-navy outline-none placeholder:text-navy/40"
        />
        <button type="submit" aria-label="Join" className="grid w-12 shrink-0 place-items-center bg-navy text-white ring-1 ring-white/30 hover:bg-ink">
          <ArrowRight className="size-4" />
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="mt-5 flex flex-col gap-3">
      <label htmlFor={id} className="sr-only">Email address</label>
      <input
        id={id}
        type="email"
        required
        placeholder="Your email address"
        className="min-h-12 w-full rounded-lg border border-navy/10 bg-white px-4 text-base text-navy outline-none placeholder:text-navy/40 focus:border-teal focus:ring-2 focus:ring-teal/30"
      />
      <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal font-extrabold text-white shadow-sm transition hover:brightness-95">
        Sign Me Up <ArrowRight className="size-4" />
      </button>
    </form>
  );
}