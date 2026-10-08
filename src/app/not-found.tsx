import EmptyState from "@/components/ui/EmptyState";

export default function NotFound() {
  return (
    <div className="py-12">
      <EmptyState
        code="৪০৪"
        title="পেজটি খুঁজে পাওয়া যায়নি"
        message="আপনি যে পেজটি খুঁজছেন সেটি নেই বা সরিয়ে নেওয়া হয়েছে।"
      />
    </div>
  );
}
