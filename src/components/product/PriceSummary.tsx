import { toBengaliNumber, toBengaliPrice } from "@/lib/format";
import { getPriceStats } from "@/lib/stats";
import type { Market } from "@/types";

export default function PriceSummary({ markets }: { markets: Market[] }) {
  const { lowest, highest, average } = getPriceStats(markets);

  const cards = [
    {
      label: "সর্বনিম্ন দাম",
      value: lowest.min,
      color: "text-green-600",
      note: lowest.market,
    },
    {
      label: "সর্বাধিক দাম",
      value: highest.max,
      color: "text-red-600",
      note: highest.market,
    },
    {
      label: "গড় দাম",
      value: average,
      color: "text-brand",
      note: `${toBengaliNumber(markets.length)}টি বাজারের গড়`,
    },
  ];

  return (
    <div>
      <h2 className="text-base font-bold text-gray-900">দামের সারসংক্ষেপ</h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-xl border border-gray-200 p-4"
          >
            <p className="text-xs text-gray-500">{card.label}</p>
            <p className={`mt-1 text-2xl font-bold ${card.color}`}>
              {toBengaliPrice(card.value)}{" "}
              <span className="text-sm font-semibold">টাকা</span>
            </p>
            <p className="mt-1 truncate text-xs text-gray-500">{card.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
