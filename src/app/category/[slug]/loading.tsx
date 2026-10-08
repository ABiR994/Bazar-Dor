import ProductSkeleton from "@/components/product/ProductSkeleton";

export default function Loading() {
  return (
    <div className="pt-6">
      <div className="flex items-center gap-4 rounded-2xl border border-green-100 bg-white p-5 sm:p-6">
        <div className="skeleton size-14 shrink-0 rounded-full" />
        <div className="space-y-2">
          <div className="skeleton h-6 w-32" />
          <div className="skeleton h-4 w-56" />
        </div>
      </div>
      <div className="mt-4 flex justify-end rounded-2xl border border-green-100 bg-white px-5 py-3">
        <div className="skeleton h-8 w-64" />
      </div>
      <div className="skeleton mt-4 mb-3 h-4 w-40" />
      <ProductSkeleton count={6} />
    </div>
  );
}
