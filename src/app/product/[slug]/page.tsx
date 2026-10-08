import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MarketTable from "@/components/product/MarketTable";
import PriceSummary from "@/components/product/PriceSummary";
import ProductHeader from "@/components/product/ProductHeader";
import { getProductBySlug } from "@/lib/api";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug).catch(() => null);
  return { title: product ? `${product.nameBn} — বাজার দর` : "বাজার দর" };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug).catch(() => null);

  if (!product) notFound();

  return (
    <div className="mx-auto max-w-4xl">
      <nav aria-label="breadcrumb" className="py-4 text-xs text-gray-500">
        <Link href="/" className="hover:text-brand">
          হোম
        </Link>
        <span className="mx-2">›</span>
        <Link href={`/category/${product.category}`} className="hover:text-brand">
          {product.categoryNameBn}
        </Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700">{product.nameBn}</span>
      </nav>

      <ProductHeader product={product} />

      {product.markets.length > 0 && (
        <section className="mt-4 space-y-6 rounded-2xl border border-green-100 bg-white p-5 sm:p-6">
          <PriceSummary markets={product.markets} />
          <MarketTable markets={product.markets} />
        </section>
      )}
    </div>
  );
}
