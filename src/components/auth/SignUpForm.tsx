"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { EMAIL_RE, MIN_PASSWORD_LENGTH } from "@/lib/validation";
import Field from "./Field";

export default function SignUpForm({ redirectTo }: { redirectTo: string }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const password = String(form.get("password") ?? "");
    const confirm = String(form.get("confirm") ?? "");

    if (name.length < 2) {
      toast.error("আপনার নাম লিখুন");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      toast.error("সঠিক ইমেইল ঠিকানা দিন");
      return;
    }
    if (password.length < MIN_PASSWORD_LENGTH) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
      return;
    }
    if (password !== confirm) {
      toast.error("দুটি পাসওয়ার্ড মিলছে না");
      return;
    }

    setPending(true);
    const { error } = await authClient.signUp.email({ name, email, password });

    if (error) {
      setPending(false);
      toast.error(
        error.status === 422
          ? "এই ইমেইল দিয়ে আগে থেকেই অ্যাকাউন্ট আছে"
          : error.message || "অ্যাকাউন্ট তৈরি করা যায়নি",
      );
      return;
    }

    toast.success("অ্যাকাউন্ট তৈরি হয়েছে, এখন সাইন ইন করুন");
    router.push(
      redirectTo === "/"
        ? "/signin"
        : `/signin?redirect=${encodeURIComponent(redirectTo)}`,
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <Field
        label="নাম"
        name="name"
        placeholder="যেমন: রাহি উদ্দিন"
        autoComplete="name"
      />
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
        autoComplete="new-password"
      />
      <Field
        label="পাসওয়ার্ড নিশ্চিত করুন"
        name="confirm"
        type="password"
        placeholder="আবার লিখুন"
        autoComplete="new-password"
      />
      <button
        type="submit"
        disabled={pending}
        className="btn w-full border-0 bg-brand text-white shadow-md hover:bg-brand-dark"
      >
        {pending && <span className="loading loading-spinner loading-sm" />}
        অ্যাকাউন্ট তৈরি করুন
      </button>
    </form>
  );
}
