export default function Loading() {
  return (
    <div className="mx-auto max-w-4xl pt-10">
      <div className="flex items-center gap-4 rounded-2xl border border-green-100 bg-white p-6">
        <div className="skeleton size-14 shrink-0 rounded-full" />
        <div className="flex-1 space-y-2">
          <div className="skeleton h-7 w-56" />
          <div className="skeleton h-4 w-40" />
        </div>
        <div className="skeleton h-24 w-36" />
      </div>
      <div className="mt-4 space-y-4 rounded-2xl border border-green-100 bg-white p-6">
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="skeleton h-20" />
          <div className="skeleton h-20" />
          <div className="skeleton h-20" />
        </div>
        <div className="skeleton h-64 w-full" />
      </div>
    </div>
  );
}
