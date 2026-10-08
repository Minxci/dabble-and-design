import Image from "next/image";
import { notFound } from "next/navigation";
import { getProduct, getProducts, formatPrice } from "@/lib/products";

export async function generateStaticParams() {
  return (await getProducts()).map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  return (
    <main className="site-x py-12 grid gap-10 md:grid-cols-2">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-paper">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div>
        <h1 className="font-script text-5xl text-navy">{product.title}</h1>
        <p className="mt-2 text-2xl font-bold">{formatPrice(product.price)}</p>

        <div className="mt-6">
          <p className="font-semibold">Size</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <span key={s} className="rounded-full border border-navy/20 bg-paper px-4 py-1.5 text-sm">
                {s}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-6 whitespace-pre-line text-ink">{product.description}</p>
      </div>
    </main>
  );
}