const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export function toBengaliNumber(value: number | string): string {
  return Number(value)
    .toLocaleString("en-US")
    .replace(/\d/g, (d) => BN_DIGITS[Number(d)]);
}

export function fromBengaliNumber(value: string): number {
  return Number(
    value.replace(/[০-৯]/g, (d) => String(BN_DIGITS.indexOf(d))).replace(/,/g, ""),
  );
}
