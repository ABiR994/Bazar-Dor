import Link from "next/link";
import ChangeBadge from "@/components/ui/ChangeBadge";
import { toBanglaUnit, toBengaliPrice } from "@/lib/format";
import { signedChange } from "@/lib/normalize";
import type { Product } from "@/types";

function ChangeSentence({ product }: { product: Product }) {
  const diff = product.today - product.yesterday;

  if (diff === 0) {
    return <>গতকালের তুলনায় আজ দাম অপরিবর্তিত আছে</>;
  }
  const up = diff > 0;
  return (
    <>
      গতকালের তুলনায় আজ দাম{" "}
      <strong className={up ? "text-red-600" : "text-green-600"}>
        {up ? "বেড়েছে" : "কমেছে"}
      </strong>{" "}
      {toBengaliPrice(Math.abs(diff))} টাকা
    </>
  );
}

export default function ProductHeader({ product }: { product: Product }) {
  const unit = toBanglaUnit(product.unit);

  return (
    <section className="flex flex-col gap-5 rounded-2xl border border-green-100 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
      <div className="flex min-w-0 items-start gap-4">
        <span
          aria-hidden
          className="grid size-14 shrink-0 place-items-center rounded-full bg-gray-100 text-3xl"
        >
          {product.image || product.categoryIcon}
        </span>
        <div className="min-w-0">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {product.nameBn}
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            প্রতি {unit} ·{" "}
            <Link
              href={`/category/${product.category}`}
              className="font-medium text-brand hover:underline"
            >
              {product.categoryNameBn}
            </Link>
          </p>
          <p className="mt-2 text-sm text-gray-600">
            <ChangeSentence product={product} />
          </p>
        </div>
      </div>

      <div className="shrink-0 rounded-xl border border-gray-200 bg-gray-50 px-8 py-4 text-center">
        <p className="text-xs text-gray-500">আজকের দাম</p>
        <p className="mt-1 text-4xl font-bold text-gray-900">
          {toBengaliPrice(product.today)}
        </p>
        <p className="text-xs text-gray-500">টাকা / {unit}</p>
        <ChangeBadge
          change={signedChange(product.change)}
          pill
          className="mt-2"
        />
      </div>
    </section>
  );
}
