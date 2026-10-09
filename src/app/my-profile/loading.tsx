export default function Loading() {
  return (
    <div className="mx-auto max-w-2xl space-y-4 py-8">
      <div className="space-y-2">
        <div className="skeleton h-7 w-40" />
        <div className="skeleton h-4 w-64" />
      </div>
      <div className="flex items-center gap-4 rounded-2xl border border-green-100 bg-white p-5">
        <div className="skeleton size-14 shrink-0 rounded-full" />
        <div className="space-y-2">
          <div className="skeleton h-5 w-40" />
          <div className="skeleton h-4 w-52" />
        </div>
      </div>
      <div className="space-y-3 rounded-2xl border border-green-100 bg-white p-5">
        <div className="skeleton h-5 w-16" />
        <div className="skeleton h-11 w-full" />
        <div className="skeleton h-11 w-full" />
      </div>
    </div>
  );
}
