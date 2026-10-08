import ChangeBadge from "@/components/ui/ChangeBadge";
import { getProducts } from "@/lib/api";
import { toBengaliNumber } from "@/lib/format";
import { toTickerItem } from "@/lib/normalize";

export default async function PriceTicker() {
  const products = await getProducts().catch(() => []);
  const items = products.map(toTickerItem);

  if (items.length === 0) return null;

  return (
    <div
      aria-label="আজকের বাজার দর"
      className="marquee overflow-hidden border-b border-base-300 bg-white"
    >
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center"
          >
            {items.map((item) => (
              <li
                key={`${copy}-${item.id}`}
                className="flex items-center gap-2 px-5 py-2 text-sm whitespace-nowrap"
              >
                <span aria-hidden>{item.emoji}</span>
                <span className="font-medium">{item.name}</span>
                <span className="text-gray-600">
                  {toBengaliNumber(item.price)} টাকা/{item.unit}
                </span>
                <ChangeBadge change={item.change} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
