"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Field from "@/components/auth/Field";
import { authClient } from "@/lib/auth-client";

export default function UpdateNameForm({ initialName }: { initialName: string }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const name = String(new FormData(e.currentTarget).get("name") ?? "").trim();

    if (name.length < 2) {
      toast.error("সঠিক নাম লিখুন");
      return;
    }
    if (name === initialName) {
      toast.error("নতুন কোনো তথ্য দেওয়া হয়নি");
      return;
    }

    setPending(true);
    const { error } = await authClient.updateUser({ name });

    if (error) {
      setPending(false);
      toast.error(error.message || "তথ্য আপডেট করা যায়নি");
      return;
    }

    toast.success("নাম সফলভাবে আপডেট হয়েছে");
    router.push("/my-profile");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <Field
        label="নাম"
        name="name"
        placeholder="আপনার নাম"
        autoComplete="name"
        defaultValue={initialName}
      />
      <div className="flex flex-col gap-2 sm:flex-row">
        <button
          type="submit"
          disabled={pending}
          className="btn flex-1 border-0 bg-brand text-white shadow-md hover:bg-brand-dark"
        >
          {pending && <span className="loading loading-spinner loading-sm" />}
          আপডেট
        </button>
        <Link href="/my-profile" className="btn btn-ghost">
          বাতিল
        </Link>
      </div>
    </form>
  );
}
