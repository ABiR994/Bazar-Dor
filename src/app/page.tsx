import { Suspense } from "react";
import Hero from "@/components/home/Hero";
import HomeProducts from "@/components/home/HomeProducts";
import HomeProductsSkeleton from "@/components/home/HomeProductsSkeleton";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<HomeProductsSkeleton />}>
        <HomeProducts />
      </Suspense>
    </>
  );
}
