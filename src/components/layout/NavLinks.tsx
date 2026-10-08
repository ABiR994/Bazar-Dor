"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavCategory } from "@/types";

export default function NavLinks({ items }: { items: NavCategory[] }) {
  const pathname = usePathname();

  if (items.length === 0) return null;

  return (
    <nav aria-label="পণ্যের বিভাগ" className="mx-auto max-w-6xl px-4 pb-3">
      <ul className="no-scrollbar flex gap-1 overflow-x-auto lg:justify-center">
        {items.map(({ slug, label, icon }) => {
          const href = `/category/${slug}`;
          const active = pathname === href;
          return (
            <li key={slug} className="shrink-0">
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm whitespace-nowrap transition-colors ${
                  active
                    ? "bg-brand font-semibold text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {icon && <span aria-hidden>{icon}</span>}
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
