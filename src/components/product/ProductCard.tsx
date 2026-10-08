import Link from "next/link";
import ChangeBadge from "@/components/ui/ChangeBadge";
import { toBanglaUnit, toBengaliNumber } from "@/lib/format";
import { signedChange } from "@/lib/normalize";
import type { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="block rounded-2xl border border-green-100 bg-white/80 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden
          className="grid size-10 shrink-0 place-items-center rounded-xl bg-gray-100 text-xl"
        >
          {product.image || product.categoryIcon}
        </span>
        <div className="min-w-0">
          <h3 className="truncate font-semibold text-gray-900">
            {product.nameBn}
          </h3>
          <p className="text-xs text-gray-500">
            প্রতি {toBanglaUnit(product.unit)}
          </p>
        </div>
      </div>
      <p className="mt-4 text-xs text-gray-500">আজকের দাম</p>
      <div className="mt-1 flex items-center justify-between gap-2">
        <span className="text-lg font-bold text-gray-900">
          {toBengaliNumber(product.today)} টাকা
        </span>
        <ChangeBadge change={signedChange(product.change)} pill />
      </div>
    </Link>
  );
}
