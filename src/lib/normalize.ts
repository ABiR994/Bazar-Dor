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
