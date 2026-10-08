"use client";

import { useState } from "react";
import { toBengaliNumber } from "@/lib/format";
import type { Product } from "@/types";
import ProductGrid from "./ProductGrid";
import SortDropdown, { type SortOption } from "./SortDropdown";

export default function CategoryProducts({
  products,
}: {
  products: Product[];
}) {
  const [sort, setSort] = useState<SortOption>("default");

  const sorted =
    sort === "default"
      ? products
      : [...products].sort((a, b) =>
          sort === "asc" ? a.today - b.today : b.today - a.today,
        );

  return (
    <>
      <div className="mt-4 flex justify-end rounded-2xl border border-green-100 bg-white px-5 py-3">
        <SortDropdown value={sort} onChange={setSort} />
      </div>
      <p className="mt-4 mb-3 text-xs text-gray-500">
        মোট {toBengaliNumber(products.length)}টি পণ্য দেখানো হচ্ছে
      </p>
      <ProductGrid products={sorted} />
    </>
  );
}
