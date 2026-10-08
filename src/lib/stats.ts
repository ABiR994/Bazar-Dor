import type { Market } from "@/types";

export function getPriceStats(markets: Market[]) {
  const lowest = markets.reduce((a, b) => (b.min < a.min ? b : a));
  const highest = markets.reduce((a, b) => (b.max > a.max ? b : a));
  const average =
    markets.reduce((sum, m) => sum + (m.min + m.max) / 2, 0) / markets.length;

  return { lowest, highest, average };
}
