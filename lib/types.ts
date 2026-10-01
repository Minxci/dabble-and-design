export type Product = {
  slug: string;
  title: string;
  description: string;
  price: number; // cents
  images: string[];
  tags: string[];
  category: "everyday" | "teams" | "events" | "business" | "gifts" | "pets";
  sizes: string[];
  colors: string[];
  featured: boolean;
};