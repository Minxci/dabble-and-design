// Placeholder data. Later this comes from Supabase, managed in Melissa's admin.

export type Tone = "cream" | "teal" | "pink" | "sun" | "navy";

export type Product = {
  id: string;
  name: string;
  price: number;
  image?: string; // e.g. "/images/not-judging.jpg" once she sends photos
  tone: Tone; // placeholder tint until real photos exist
};

export const freshProducts: Product[] = [
  { id: "not-judging", name: "I'm Not Judging You", price: 24, tone: "navy" },
  { id: "my-standards", name: "My Standards", price: 24, tone: "pink" },
  { id: "bookish-spooky", name: "Bookish & Spooky", price: 24, tone: "navy" },
  { id: "salty-sarcastic", name: "Salty & Sarcastic", price: 24, tone: "navy" },
  { id: "one-more-chapter", name: "Just One More Chapter", price: 24, tone: "cream" },
  { id: "good-vibes", name: "Good Vibes Only", price: 24, tone: "pink" },
];

export const shopFor = [
  { label: "Everyday Shirts", icon: "Shirt", blob: "bg-teal-soft", color: "text-teal" },
  { label: "Teams & Groups", icon: "Users", blob: "bg-pink-soft", color: "text-navy" },
  { label: "Events & Parties", icon: "PartyPopper", blob: "bg-sun-soft", color: "text-navy" },
  { label: "Businesses", icon: "Store", blob: "bg-teal-soft", color: "text-teal" },
  { label: "Gifts & Memories", icon: "Gift", blob: "bg-pink-soft", color: "text-coral" },
  { label: "Pets", icon: "PawPrint", blob: "bg-sun-soft", color: "text-navy" },
] as const;

// IMPORTANT: only real customer reviews go here (from her Facebook/Etsy, with permission).
// Leave empty and the section shows a friendly placeholder instead.
export type Review = { quote: string; name: string };
export const reviews: Review[] = [];

// Replace "#" with her real links
export const socials = {
  facebook: "https://www.facebook.com/profile.php?id=61592778372998",
  etsy: "https://www.etsy.com/shop/DabbleandDesignCo1?etsrc=sdt",
};