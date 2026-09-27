"use client";

import { useState } from "react";

// Front-end only for now. Later: POST to a Supabase table or email service.
export default function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [done, setDone] = useState(false);
  const id = compact ? "email-footer" : "email-main";

  if (done) {
    return <p className="mt-6 font-script text-2xl text-teal">You&apos;re on the list! 💕</p>;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className={`mt-6 flex gap-2 rounded-full p-1.5 ${compact ? "bg-white/10" : "bg-paper shadow-sm ring-1 ring-navy/5"}`}
    >
      <label htmlFor={id} className="sr-only">Email address</label>
      <input
        id={id}
        type="email"
        required
        placeholder="Your email"
        className={`min-h-11 w-full min-w-0 bg-transparent px-4 text-base outline-none ${compact ? "text-paper placeholder:text-paper/50" : "text-navy placeholder:text-navy/40"}`}
      />
      <button
        type="submit"
        className={`min-h-11 shrink-0 rounded-full px-6 text-sm font-bold transition ${compact ? "bg-paper text-navy hover:bg-white" : "bg-navy text-paper hover:bg-ink"}`}
      >
        {compact ? "Join" : "Sign me up"}
      </button>
    </form>
  );
}