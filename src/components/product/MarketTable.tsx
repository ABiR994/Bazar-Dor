import { toBengaliPrice } from "@/lib/format";
import type { Market } from "@/types";

export default function MarketTable({ markets }: { markets: Market[] }) {
  return (
    <div>
      <h2 className="text-base font-bold text-gray-900">
        বাজারভিত্তিক আজকের দাম
      </h2>
      <div className="mt-3 overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full min-w-136 text-sm">
          <thead className="border-b border-gray-200 text-left text-xs text-gray-500">
            <tr>
              <th className="px-4 py-3 font-medium">বাজার</th>
              <th className="px-4 py-3 font-medium">বিভাগ</th>
              <th className="px-4 py-3 text-right font-medium">সর্বনিম্ন</th>
              <th className="px-4 py-3 text-right font-medium">সর্বোচ্চ</th>
              <th className="px-4 py-3 text-right font-medium">গড়</th>
            </tr>
          </thead>
          <tbody>
            {markets.map((m) => (
              <tr
                key={`${m.division}-${m.market}`}
                className="border-t border-gray-200 first:border-t-0 hover:bg-gray-50"
              >
                <td className="px-4 py-3 font-medium text-gray-900">
                  {m.market}
                </td>
                <td className="px-4 py-3 text-gray-600">{m.division}</td>
                <td className="px-4 py-3 text-right text-gray-700">
                  {toBengaliPrice(m.min)} টাকা
                </td>
                <td className="px-4 py-3 text-right text-gray-700">
                  {toBengaliPrice(m.max)} টাকা
                </td>
                <td className="px-4 py-3 text-right font-bold text-gray-900">
                  {toBengaliPrice((m.min + m.max) / 2)} টাকা
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
