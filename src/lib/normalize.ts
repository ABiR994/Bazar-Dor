import type { Category, NavCategory, Product, TickerItem } from "@/types";
import { toBanglaUnit } from "./format";

export function signedChange({ dir, pct }: Product["change"]): number {
  if (dir === "up") return pct;
  if (dir === "down") return -pct;
  return 0;
}

export function toTickerItem(p: Product): TickerItem {
  return {
    id: p.id,
    emoji: p.image || p.categoryIcon,
    name: p.nameBn,
    price: p.today,
    unit: toBanglaUnit(p.unit),
    change: signedChange(p.change),
  };
}

export function toNavCategory(c: Category): NavCategory {
  return { slug: c.slug, label: c.nameBn, icon: c.icon };
}

export function marketAverage({ min, max }: Product["markets"][number]) {
  return (min + max) / 2;
}

export function getPriceStats(product: Product) {
  const { markets } = product;
  if (markets.length === 0) {
    return { min: product.today, max: product.today, avg: product.today };
  }
  const avg =
    markets.reduce((sum, m) => sum + marketAverage(m), 0) / markets.length;
  return {
    min: Math.min(...markets.map((m) => m.min)),
    max: Math.max(...markets.map((m) => m.max)),
    avg: Math.round(avg * 100) / 100,
  };
}
