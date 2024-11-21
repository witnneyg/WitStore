import { ProductItem } from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";

import { Product } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  console.log(products.length);
  return (
    <div className="flex w-full  px-5 md:gap-5 relative">
      <Carousel
        opts={{
          align: "start",
        }}
        className="max-w-full flex"
      >
        <CarouselContent className="flex gap-4 ml-2">
          {products.map((product) => (
            <div key={product._id} className=" w-[170px] max-w-[170px]">
              <ProductItem product={computeProductTotalPrice(product)} />
            </div>
          ))}
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
