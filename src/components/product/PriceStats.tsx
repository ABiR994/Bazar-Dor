import { formatTaka, toBanglaUnit } from "@/lib/format";
import { getPriceStats } from "@/lib/normalize";
import type { Product } from "@/types";

function Tile({
  label,
  value,
  caption,
  tone,
}: {
  label: string;
  value: string;
  caption: string;
  tone: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 p-4">
      <p className="text-xs text-gray-500">{label}</p>
      <p className={`mt-1 text-xl font-bold ${tone}`}>{value}</p>
      <p className="mt-1 text-xs text-gray-500">{caption}</p>
    </div>
  );
}

export default function PriceStats({ product }: { product: Product }) {
  const { min, max, avg } = getPriceStats(product);

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      <Tile
        label="সর্বনিম্ন দাম"
        value={formatTaka(min)}
        caption="সবচেয়ে কম দামের বাজার"
        tone="text-green-600"
      />
      <Tile
        label="সর্বোচ্চ দাম"
        value={formatTaka(max)}
        caption="সবচেয়ে বেশি দামের বাজার"
        tone="text-red-600"
      />
      <Tile
        label="গড় দাম"
        value={formatTaka(avg)}
        caption={`প্রতি ${toBanglaUnit(product.unit)} · সব বাজারের গড়`}
        tone="text-gray-900"
      />
    </div>
  );
}
