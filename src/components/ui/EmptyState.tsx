import Link from "next/link";

export default function EmptyState({
  title,
  message,
  code,
}: {
  title: string;
  message: string;
  code?: string;
}) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center rounded-2xl border border-green-100 bg-white px-6 py-12 text-center">
      {code && <p className="text-6xl font-bold text-brand/30">{code}</p>}
      <h2 className="mt-3 text-xl font-bold text-gray-900">{title}</h2>
      <p className="mt-2 text-sm text-gray-600">{message}</p>
      <Link
        href="/"
        className="btn mt-6 border-0 bg-brand text-white shadow-md hover:bg-brand-dark"
      >
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}
