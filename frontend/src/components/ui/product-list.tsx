import { ProductItem } from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";

import { Product } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import { Skeleton } from "./skeleton";
interface ProductListProps {
  products: Product[];
  loading?: boolean;
}

export function ProductList({ products, loading }: ProductListProps) {
  return (
    <div className="flex w-full  px-5 md:gap-5 relative">
      <Carousel
        opts={{
          align: "start",
        }}
        className="max-w-full flex"
      >
        <CarouselContent className="flex gap-4 ml-2">
          {loading ? (
            <div className="flex gap-4 w-full">
              {Array(8)
                .fill(0)
                .map((_, index) => (
                  <div className="space-y-2">
                    <Skeleton key={index} className="w-[170px] h-[170px]" />
                    <Skeleton key={index} className="w-[156px] h-[16px]" />
                    <Skeleton key={index} className="w-[136px] h-[16px]" />
                  </div>
                ))}
            </div>
          ) : (
            products.map((product) => (
              <div key={product._id} className="w-[170px] max-w-[170px]">
                <ProductItem product={computeProductTotalPrice(product)} />
              </div>
            ))
          )}
        </CarouselContent>
        <div className="absolute top-20 left-14">
          <CarouselPrevious />
        </div>
        <div className="absolute top-20 right-12">
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
