import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryProducts from "@/components/product/CategoryProducts";
import EmptyState from "@/components/ui/EmptyState";
import { getCategories, getProducts } from "@/lib/api";
import { toBengaliNumber } from "@/lib/format";
import type { Product } from "@/types";

type Props = { params: Promise<{ slug: string }> };

async function findCategory(slug: string) {
  const categories = await getCategories().catch(() => []);
  return categories.find((c) => c.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = await findCategory(slug);
  return { title: category ? `${category.nameBn} — বাজার দর` : "বাজার দর" };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = await findCategory(slug);

  if (!category) notFound();

  const products = await getProducts(slug).catch(() => [] as Product[]);

  return (
    <div className="pt-6">
      <header className="flex items-center gap-4 rounded-2xl border border-green-100 bg-white p-5 sm:p-6">
        <span
          aria-hidden
          className="grid size-14 shrink-0 place-items-center rounded-full bg-gray-100 text-3xl"
        >
          {category.icon}
        </span>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{category.nameBn}</h1>
          <p className="mt-1 text-sm text-gray-500">
            {toBengaliNumber(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </header>

      {products.length > 0 ? (
        <CategoryProducts products={products} />
      ) : (
        <div className="mt-6">
          <EmptyState
            title="এই বিভাগে কোনো পণ্য নেই"
            message="এই মুহূর্তে এই বিভাগে দেখানোর মতো কোনো পণ্য পাওয়া যায়নি।"
          />
        </div>
      )}
    </div>
  );
}
