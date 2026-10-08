import type { Category, Product } from "@/types";

const PRIMARY =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "https://api.api-store.workers.dev/api/bazardor";
const FALLBACK =
  process.env.NEXT_PUBLIC_API_BASE_URL_FALLBACK ??
  "https://api.abcz.workers.dev/api/bazardor";

async function request<T>(path: string): Promise<T> {
  for (const base of [PRIMARY, FALLBACK]) {
    try {
      const res = await fetch(`${base}${path}`, { cache: "no-store" });
      if (res.ok) return (await res.json()) as T;
    } catch {
      continue;
    }
  }
  throw new Error(`Failed to fetch ${path}`);
}

export const getProducts = (category?: string) =>
  request<Product[]>(
    category ? `/products?category=${encodeURIComponent(category)}` : "/products",
  );
export const getProduct = (id: string | number) =>
  request<Product>(`/products/${id}`);
export const getCategories = () => request<Category[]>("/categories");
export const getCategory = (slug: string) =>
  request<Category>(`/categories/${slug}`);
