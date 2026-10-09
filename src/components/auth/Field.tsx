export default function Field({
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  defaultValue?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-gray-800">
        {label}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        suppressHydrationWarning
        className="input w-full bg-gray-50"
      />
    </label>
  );
}
