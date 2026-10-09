"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Avatar from "@/components/ui/Avatar";
import { authClient } from "@/lib/auth-client";

const closeMenu = () => (document.activeElement as HTMLElement | null)?.blur();

export default function AuthButtons() {
  const router = useRouter();
  const { data, isPending } = authClient.useSession();

  if (isPending) {
    return <div className="skeleton h-9 w-32 shrink-0 rounded-full" />;
  }

  const user = data?.user;

  if (!user) {
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

  async function handleSignOut() {
    closeMenu();
    const { error } = await authClient.signOut();
    if (error) {
      toast.error("সাইন আউট করা যায়নি");
      return;
    }
    toast.success("সফলভাবে সাইন আউট হয়েছে");
    router.push("/");
    router.refresh();
  }

  return (
    <div className="dropdown dropdown-end shrink-0">
      <button
        type="button"
        tabIndex={0}
        className="btn btn-ghost btn-sm gap-2 sm:btn-md"
      >
        <Avatar name={user.name} image={user.image} />
        <span className="hidden max-w-28 truncate sm:inline">{user.name}</span>
        <span aria-hidden className="text-xs text-gray-500">
          ▾
        </span>
      </button>
      <div
        tabIndex={0}
        className="dropdown-content z-20 mt-2 w-60 rounded-xl border border-base-300 bg-white p-3 shadow-lg"
      >
        <p className="truncate text-sm font-semibold text-gray-900">
          {user.name}
        </p>
        <p className="truncate text-xs text-gray-500">{user.email}</p>
        <hr className="my-2 border-gray-200" />
        <Link
          href="/my-profile"
          onClick={closeMenu}
          className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
          </svg>
          আমার প্রোফাইল
        </Link>
        <button
          type="button"
          onClick={handleSignOut}
          className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm text-red-600 hover:bg-red-50"
        >
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M9 14 4 9l5-5" />
            <path d="M4 9h10a6 6 0 0 1 0 12h-3" />
          </svg>
          সাইন আউট
        </button>
      </div>
    </div>
  );
}
