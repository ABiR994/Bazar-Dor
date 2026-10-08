import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo-icon.png";
import { getCategories } from "@/lib/api";
import { toNavCategory } from "@/lib/normalize";
import AuthButtons from "./AuthButtons";
import BanglaDate from "./BanglaDate";
import NavLinks from "./NavLinks";

export default async function Navbar() {
  const categories = await getCategories().catch(() => []);

  return (
    <header className="border-b border-base-300 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand sm:size-10">
            <Image
              src={logo}
              alt=""
              priority
              className="size-5 brightness-0 invert sm:size-6"
            />
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="text-base font-bold sm:text-lg">বাজার দর</span>
            <BanglaDate />
          </span>
        </Link>
        <AuthButtons />
      </div>
      <NavLinks items={categories.map(toNavCategory)} />
    </header>
  );
}
