import type { Metadata } from "next";
import ProfileCard from "@/components/profile/ProfileCard";
import UpdateNameForm from "@/components/profile/UpdateNameForm";
import { requireSession } from "@/lib/session";

export const metadata: Metadata = { title: "তথ্য আপডেট — বাজার দর" };

export default async function UpdateProfilePage() {
  const { user } = await requireSession("/my-profile/update");

  return (
    <div className="mx-auto max-w-2xl space-y-4 py-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">তথ্য আপডেট করুন</h1>
        <p className="mt-1 text-sm text-gray-500">
          আপনার নাম পরিবর্তন করে সংরক্ষণ করুন।
        </p>
      </div>

      <ProfileCard user={user} />

      <section className="rounded-2xl border border-green-100 bg-white p-5">
        <h2 className="mb-4 text-base font-bold text-gray-900">তথ্য</h2>
        <UpdateNameForm initialName={user.name} />
      </section>
    </div>
  );
}
