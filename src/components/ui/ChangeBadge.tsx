import { bnDigits } from "@/lib/format";

export default function ChangeBadge({
  change,
  className = "",
}: {
  change: number;
  className?: string;
}) {
  const value = bnDigits(Math.abs(change).toFixed(1));

  if (change > 0) {
    return (
      <span className={`font-semibold text-red-600 ${className}`}>
        ▲ {value}%
      </span>
    );
  }
  if (change < 0) {
    return (
      <span className={`font-semibold text-green-600 ${className}`}>
        ▼ {value}%
      </span>
    );
  }
  return <span className={`font-semibold text-gray-500 ${className}`}>— {value}%</span>;
}
