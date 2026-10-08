import Image from "next/image";
import heroImage from "@/assets/bazar-hero.png";
import BanglaDate from "@/components/layout/BanglaDate";

export default function Hero() {
  return (
    <section className="py-6 sm:py-8">
      <div className="flex flex-col items-center gap-6 rounded-3xl border border-green-100 bg-linear-to-br from-green-50 via-white to-green-50 px-6 py-8 sm:px-10 md:flex-row md:justify-between md:gap-10 md:py-10">
        <div className="max-w-xl">
          <BanglaDate className="inline-block h-7 min-w-44 rounded-full bg-brand-soft px-3 text-center text-xs leading-7 font-semibold text-brand-dark" />
          <h1 className="mt-4 text-3xl leading-tight font-bold text-gray-900 sm:text-4xl">
            আজকের বাজারের দাম এক নজরে
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          <a
            href="#সব-পণ্য"
            className="btn mt-6 border-0 bg-brand text-white shadow-md hover:bg-brand-dark"
          >
            সব পণ্য দেখুন
          </a>
        </div>
        <Image
          src={heroImage}
          alt="ঝুড়িভর্তি তাজা ফল ও সবজি"
          priority
          className="h-auto w-56 shrink-0 sm:w-64 md:w-80"
        />
      </div>
    </section>
  );
}
