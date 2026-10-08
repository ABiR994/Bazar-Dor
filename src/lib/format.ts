const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export function bnDigits(value: string): string {
  return value.replace(/\d/g, (d) => BN_DIGITS[Number(d)]);
}

export function toBengaliNumber(value: number | string): string {
  return bnDigits(Number(value).toLocaleString("en-US"));
}

export function fromBengaliNumber(value: string): number {
  return Number(
    value.replace(/[০-৯]/g, (d) => String(BN_DIGITS.indexOf(d))).replace(/,/g, ""),
  );
}

const UNITS: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  liter: "লিটার",
  l: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
  pcs: "পিস",
  pc: "পিস",
};

export function toBanglaUnit(unit: string): string {
  return UNITS[unit.toLowerCase()] ?? unit;
}
