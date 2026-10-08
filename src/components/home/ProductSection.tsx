export default function ProductSection({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: React.ReactNode;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-4 pt-6 pb-2">
      <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 sm:text-xl">
        {title}
      </h2>
      {subtitle && <p className="mt-1 text-xs text-gray-500">{subtitle}</p>}
      <div className="mt-4">{children}</div>
    </section>
  );
}
