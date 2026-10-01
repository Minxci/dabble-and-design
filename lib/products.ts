import { products } from "@/lib/products-data";

export async function getProducts() {
  return products;
}

export async function getProduct(slug: string) {
  return products.find((p) => p.slug === slug) ?? null;
}

export const formatPrice = (cents: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);