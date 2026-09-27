// Placeholder data. Later this comes from Supabase, managed in Melissa's admin.

export type Product = {
  id: string;
  name: string;
  price: number;
  image?: string; // e.g. "/images/not-judging.jpg" once she sends photos
  tone: "sand" | "teal" | "coral" | "sun" | "navy"; // placeholder tint until real photos exist
  tag?: string;
};

export const freshProducts: Product[] = [
  { id: "not-judging", name: "I'm Not Judging You", price: 24, tone: "navy", tag: "New" },
  { id: "my-standards", name: "My Standards", price: 24, tone: "coral" },
  { id: "bookish-spooky", name: "Bookish & Spooky", price: 24, tone: "sand", tag: "New" },
  { id: "salty-sarcastic", name: "Salty & Sarcastic", price: 24, tone: "navy" },
  { id: "one-more-chapter", name: "Just One More Chapter", price: 24, tone: "sun" },
  { id: "good-vibes", name: "Good Vibes Only", price: 24, tone: "coral" },
];

export const shopFor = [
  { label: "Everyday Shirts", icon: "Shirt", tint: "bg-teal-soft" },
  { label: "Teams & Groups", icon: "Users", tint: "bg-coral-soft" },
  { label: "Events & Parties", icon: "PartyPopper", tint: "bg-sun-soft" },
  { label: "Businesses", icon: "Store", tint: "bg-teal-soft" },
  { label: "Gifts & Memories", icon: "Gift", tint: "bg-coral-soft" },
  { label: "Pets", icon: "PawPrint", tint: "bg-sun-soft" },
] as const;

// IMPORTANT: only real customer reviews go here (from her Facebook/Etsy, with permission).
// Leave empty and the section shows a friendly placeholder instead.
export type Review = { quote: string; name: string };
export const reviews: Review[] = [];