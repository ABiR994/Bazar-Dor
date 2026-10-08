"use client";

export type SortOption = "default" | "asc" | "desc";

const OPTIONS: { value: SortOption; label: string }[] = [
  { value: "default", label: "ডিফল্ট" },
  { value: "asc", label: "দাম: কম থেকে বেশি" },
  { value: "desc", label: "দাম: বেশি থেকে কম" },
];

export default function SortDropdown({
  value,
  onChange,
}: {
  value: SortOption;
  onChange: (value: SortOption) => void;
}) {
  return (
    <label className="flex items-center gap-2 text-sm text-gray-600">
      <span>সাজান:</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="select select-sm w-52 bg-white"
      >
        {OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
