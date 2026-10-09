"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { EMAIL_RE, MIN_PASSWORD_LENGTH } from "@/lib/validation";
import Field from "./Field";

export default function SignInForm({ redirectTo }: { redirectTo: string }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") ?? "").trim();
    const password = String(form.get("password") ?? "");

    if (!EMAIL_RE.test(email)) {
      toast.error("সঠিক ইমেইল ঠিকানা দিন");
      return;
    }
    if (password.length < MIN_PASSWORD_LENGTH) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
      return;
    }

    setPending(true);
    const { error } = await authClient.signIn.email({ email, password });

    if (error) {
      setPending(false);
      toast.error(
        error.status === 401
          ? "ইমেইল বা পাসওয়ার্ড সঠিক নয়"
          : error.message || "সাইন ইন করা যায়নি",
      );
      return;
    }

    toast.success("সফলভাবে সাইন ইন হয়েছে");
    router.push(redirectTo);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <Field
        label="ইমেইল"
        name="email"
        type="email"
        placeholder="you@example.com"
        autoComplete="email"
      />
      <Field
        label="পাসওয়ার্ড"
        name="password"
        type="password"
        placeholder="কমপক্ষে ৮ অক্ষর"
        autoComplete="current-password"
      />
      <button
        type="submit"
        disabled={pending}
        className="btn w-full border-0 bg-brand text-white shadow-md hover:bg-brand-dark"
      >
        {pending && <span className="loading loading-spinner loading-sm" />}
        সাইন ইন
      </button>
    </form>
  );
}
