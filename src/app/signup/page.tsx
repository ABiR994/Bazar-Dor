import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import AuthShell from "@/components/auth/AuthShell";
import SignUpForm from "@/components/auth/SignUpForm";
import SocialLogin from "@/components/auth/SocialLogin";
import { safeRedirect } from "@/lib/redirect";
import { getSession } from "@/lib/session";

export const metadata: Metadata = { title: "সাইন আপ — বাজার দর" };

export default async function SignUpPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string }>;
}) {
  const redirectTo = safeRedirect((await searchParams).redirect);
  if (await getSession()) redirect(redirectTo);

  const signInHref =
    redirectTo === "/"
      ? "/signin"
      : `/signin?redirect=${encodeURIComponent(redirectTo)}`;

  return (
    <AuthShell
      title="অ্যাকাউন্ট তৈরি করুন"
      subtitle="বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।"
      footer={
        <>
          অ্যাকাউন্ট আছে?{" "}
          <Link href={signInHref} className="font-semibold text-brand hover:underline">
            সাইন ইন করুন
          </Link>
        </>
      }
    >
      <SignUpForm redirectTo={redirectTo} />
      <SocialLogin redirectTo={redirectTo} />
    </AuthShell>
  );
}
