import Link from "next/link";

export default function AuthShell({
  title,
  subtitle,
  footer,
  children,
}: {
  title: string;
  subtitle: string;
  footer: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-md py-10">
      <h1 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
        {title}
      </h1>
      <p className="mt-2 text-center text-sm text-gray-500">{subtitle}</p>
      <div className="mt-6 rounded-2xl border border-green-100 bg-white p-5 shadow-sm sm:p-6">
        {children}
        <p className="mt-5 text-center text-sm text-gray-600">{footer}</p>
      </div>
      <p className="mt-6 text-center text-sm">
        <Link href="/" className="text-gray-500 hover:text-brand">
          ← হোম পেজে ফিরে যান
        </Link>
      </p>
    </div>
  );
}
