import { bnDigits } from "@/lib/format";

const TONES = {
  up: { text: "text-red-600", bg: "bg-red-50", symbol: "▲" },
  down: { text: "text-green-600", bg: "bg-green-50", symbol: "▼" },
  flat: { text: "text-gray-500", bg: "bg-gray-100", symbol: "—" },
};

export default function ChangeBadge({
  change,
  pill = false,
  className = "",
}: {
  change: number;
  pill?: boolean;
  className?: string;
}) {
  const tone = TONES[change > 0 ? "up" : change < 0 ? "down" : "flat"];
  const value = bnDigits(Math.abs(change).toFixed(1));
  const shape = pill ? `${tone.bg} rounded-md px-2 py-0.5 text-xs` : "";

  return (
    <span
      className={`inline-flex items-center gap-1 font-semibold whitespace-nowrap ${tone.text} ${shape} ${className}`}
    >
      {tone.symbol} {value}%
    </span>
  );
}
