import Avatar from "@/components/ui/Avatar";
import SignOutButton from "./SignOutButton";

export default function ProfileCard({
  user,
}: {
  user: { name: string; email: string; image?: string | null };
}) {
  return (
    <section className="flex flex-col gap-4 rounded-2xl border border-green-100 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex min-w-0 items-center gap-4">
        <Avatar name={user.name} image={user.image} size={56} />
        <div className="min-w-0">
          <p className="truncate text-lg font-bold text-gray-900">{user.name}</p>
          <p className="truncate text-sm text-gray-500">{user.email}</p>
        </div>
      </div>
      <SignOutButton />
    </section>
  );
}
