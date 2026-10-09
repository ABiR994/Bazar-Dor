import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import AuthShell from "@/components/auth/AuthShell";
import RedirectNotice from "@/components/auth/RedirectNotice";
import SignInForm from "@/components/auth/SignInForm";
import SocialLogin from "@/components/auth/SocialLogin";
import { safeRedirect } from "@/lib/redirect";
import { getSession } from "@/lib/session";

export const metadata: Metadata = { title: "সাইন ইন — বাজার দর" };

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string }>;
}) {
  const redirectTo = safeRedirect((await searchParams).redirect);
  if (await getSession()) redirect(redirectTo);

  const signUpHref =
    redirectTo === "/"
      ? "/signup"
      : `/signup?redirect=${encodeURIComponent(redirectTo)}`;

  return (
    <AuthShell
      title="সাইন ইন"
      subtitle="বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।"
      footer={
        <>
          অ্যাকাউন্ট নেই?{" "}
          <Link href={signUpHref} className="font-semibold text-brand hover:underline">
            সাইন আপ করুন
          </Link>
        </>
      }
    >
      {redirectTo !== "/" && <RedirectNotice />}
      <SignInForm redirectTo={redirectTo} />
      <SocialLogin redirectTo={redirectTo} />
    </AuthShell>
  );
}
