import Image from "next/image";
import Link from "next/link";
import { getProducts, formatPrice } from "@/lib/products";

export const metadata = { title: "Shop | Dabble & Design Co." };

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <main className="site-x py-12">
      <h1 className="font-script text-5xl text-navy">Shop</h1>
      <p className="mt-2 text-ink">Ready-made designs, collections and more.</p>

      <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <Link key={p.slug} href={`/shop/${p.slug}`} className="group">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-paper">
              <Image
                src={p.images[0]}
                alt={p.title}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <p className="mt-3 font-semibold">{p.title}</p>
            <p className="font-bold">{formatPrice(p.price)}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}