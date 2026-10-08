import type { Category, Product } from "@/types";

const PRIMARY =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "https://api.api-store.workers.dev/api/bazardor";
const FALLBACK =
  process.env.NEXT_PUBLIC_API_BASE_URL_FALLBACK ??
  "https://api.abcz.workers.dev/api/bazardor";

async function request(path: string): Promise<unknown> {
  for (const base of [PRIMARY, FALLBACK]) {
    try {
      const res = await fetch(`${base}${path}`, { next: { revalidate: 300 } });
      if (res.ok) return await res.json();
    } catch {
      continue;
    }
  }
  throw new Error(`Failed to fetch ${path}`);
}

function toList<T>(json: unknown): T[] {
  if (Array.isArray(json)) return json as T[];
  if (json && typeof json === "object") {
    const list = Object.values(json).find(Array.isArray);
    if (list) return list as T[];
  }
  return [];
}

export const getProducts = async (category?: string) =>
  toList<Product>(
    await request(
      category ? `/products?category=${encodeURIComponent(category)}` : "/products",
    ),
  );

export const getProduct = async (id: string | number) =>
  (await request(`/products/${id}`)) as Product;

export const getProductBySlug = async (slug: string) => {
  const products = toList<Product>(
    await request(`/products?slug=${encodeURIComponent(slug)}`),
  );
  return products.find((p) => p.slug === slug) ?? null;
};

export const getCategories = async () =>
  toList<Category>(await request("/categories"));

export const getCategory = async (slug: string) =>
  (await request(`/categories/${slug}`)) as Category;
