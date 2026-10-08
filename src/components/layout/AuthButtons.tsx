import Link from "next/link";

export default function AuthButtons() {
  return (
    <div className="flex shrink-0 items-center gap-1 sm:gap-2">
      <Link href="/signin" className="btn btn-ghost btn-sm sm:btn-md">
        সাইন ইন
      </Link>
      <Link
        href="/signup"
        className="btn btn-sm border-0 bg-brand text-white hover:bg-brand-dark sm:btn-md"
      >
        সাইন আপ
      </Link>
    </div>
  );
}
