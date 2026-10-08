import ChangeBadge from "@/components/ui/ChangeBadge";
import { formatTaka, toBanglaUnit, bnDigits } from "@/lib/format";
import { signedChange } from "@/lib/normalize";
import type { Product } from "@/types";

export default function ProductSummary({ product }: { product: Product }) {
  const unit = toBanglaUnit(product.unit);
  const diff = Math.round((product.today - product.yesterday) * 100) / 100;

  return (
    <section className="rounded-3xl border border-green-100 bg-white p-5 sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
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
            <div className="mt-2 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-brand-soft px-3 py-1 font-medium text-brand-dark">
                {product.categoryIcon} {product.categoryNameBn}
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-1 font-medium text-gray-600">
                প্রতি {unit}
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-600">
              {diff === 0 ? (
                "গতকালের তুলনায় আজ দাম অপরিবর্তিত"
              ) : (
                <>
                  গতকালের তুলনায় আজ দাম{" "}
                  <strong
                    className={diff > 0 ? "text-red-600" : "text-green-600"}
                  >
                    {diff > 0 ? "বেড়েছে" : "কমেছে"}
                  </strong>{" "}
                  {bnDigits(Math.abs(diff).toString())} টাকা
                </>
              )}
            </p>
          </div>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-gray-50 px-8 py-4 text-center sm:min-w-44">
          <p className="text-xs text-gray-500">আজকের দাম</p>
          <p className="mt-1 text-4xl font-bold text-gray-900">
            {formatTaka(product.today).replace(" টাকা", "")}
          </p>
          <p className="text-xs text-gray-500">টাকা / {unit}</p>
          <ChangeBadge
            change={signedChange(product.change)}
            pill
            className="mt-2"
          />
        </div>
      </div>
    </section>
  );
}
