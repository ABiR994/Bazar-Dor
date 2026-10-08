import ProductSkeleton from "@/components/product/ProductSkeleton";
import ProductSection from "./ProductSection";

export default function HomeProductsSkeleton() {
  return (
    <>
      <ProductSection title={<div className="skeleton h-6 w-40" />}>
        <ProductSkeleton />
      </ProductSection>
      <ProductSection title={<div className="skeleton h-6 w-40" />}>
        <ProductSkeleton />
      </ProductSection>
      <ProductSection id="সব-পণ্য" title={<div className="skeleton h-6 w-32" />}>
        <ProductSkeleton count={9} />
      </ProductSection>
    </>
  );
}
