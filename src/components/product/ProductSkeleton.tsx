export default function ProductSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className="rounded-2xl border border-green-100 bg-white/80 p-4"
        >
          <div className="flex items-center gap-3">
            <div className="skeleton size-10 shrink-0 rounded-xl" />
            <div className="flex-1 space-y-2">
              <div className="skeleton h-4 w-3/4" />
              <div className="skeleton h-3 w-1/3" />
            </div>
          </div>
          <div className="skeleton mt-4 h-3 w-1/4" />
          <div className="mt-2 flex items-center justify-between">
            <div className="skeleton h-6 w-1/3" />
            <div className="skeleton h-5 w-1/5" />
          </div>
        </div>
      ))}
    </div>
  );
}
