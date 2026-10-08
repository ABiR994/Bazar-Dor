import ProductGrid from "@/components/product/ProductGrid";
import { getProducts } from "@/lib/api";
import { toBengaliNumber } from "@/lib/format";
import type { Product } from "@/types";
import ProductSection from "./ProductSection";

const byBiggestChange = (a: Product, b: Product) =>
  b.change.pct - a.change.pct;

export default async function HomeProducts() {
  const products = await getProducts().catch(() => [] as Product[]);

  if (products.length === 0) {
    return (
      <p id="সব-পণ্য" className="py-12 text-center text-gray-500">
        পণ্যের তথ্য লোড করা যায়নি। কিছুক্ষণ পরে আবার চেষ্টা করুন।
      </p>
    );
  }

  const risers = products
    .filter((p) => p.change.dir === "up")
    .sort(byBiggestChange)
    .slice(0, 6);
  const fallers = products
    .filter((p) => p.change.dir === "down")
    .sort(byBiggestChange)
    .slice(0, 6);

  return (
    <>
      {risers.length > 0 && (
        <ProductSection
          title={
            <>
              <span className="text-sm text-red-600">▲</span> আজ দাম বেড়েছে
            </>
          }
        >
          <ProductGrid products={risers} />
        </ProductSection>
      )}
      {fallers.length > 0 && (
        <ProductSection
          title={
            <>
              <span className="text-sm text-green-600">▼</span> আজ দাম কমেছে
            </>
          }
        >
          <ProductGrid products={fallers} />
        </ProductSection>
      )}
      <ProductSection
        id="সব-পণ্য"
        title="সব পণ্য"
        subtitle={`মোট ${toBengaliNumber(products.length)}টি পণ্য দেখানো হচ্ছে`}
      >
        <ProductGrid products={products} />
      </ProductSection>
    </>
  );
}
