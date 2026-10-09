import type { Metadata } from "next";
import Link from "next/link";
import ProfileCard from "@/components/profile/ProfileCard";
import { requireSession } from "@/lib/session";

export const metadata: Metadata = { title: "আমার প্রোফাইল — বাজার দর" };

export default async function MyProfilePage() {
  const { user } = await requireSession("/my-profile");

  return (
    <div className="mx-auto max-w-2xl space-y-4 py-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">আমার প্রোফাইল</h1>
        <p className="mt-1 text-sm text-gray-500">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </div>

      <ProfileCard user={user} />

      <section className="rounded-2xl border border-green-100 bg-white p-5">
        <h2 className="text-base font-bold text-gray-900">তথ্য</h2>
        <dl className="mt-4 space-y-3 text-sm">
          <div>
            <dt className="text-gray-500">নাম</dt>
            <dd className="mt-1 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-gray-900">
              {user.name}
            </dd>
          </div>
          <div>
            <dt className="text-gray-500">ইমেইল</dt>
            <dd className="mt-1 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-gray-900">
              {user.email}
            </dd>
          </div>
        </dl>
        <Link
          href="/my-profile/update"
          className="btn mt-5 w-full border-0 bg-brand text-white shadow-md hover:bg-brand-dark"
        >
          তথ্য আপডেট করুন
        </Link>
      </section>
    </div>
  );
}
