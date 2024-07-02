import { ProductWithTotalPrice } from "@/helpers/product";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="flex flex-col gap-4  max-w-[156px]">
      <div className="relative flex items-center justify-center bg-accent rounded-lg h-[170px] w-[156px]">
        <img
          src={product.imageUrls[0]}
          alt={product.name}
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />

        {product.discountPercentage > 0 && (
          <Badge className="absolute left-3 top-3 px-2 py-[2px]">
            <ArrowDownIcon size={14} />
            {product.discountPercentage}%
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>

        <div className="flex items-center gap-2">
          {product.discountPercentage > 0 ? (
            <>
              <p className="font-semibold">
                R$ {product.totalPrice.toFixed(2)}
              </p>

              <p className="line-through opacity-75 text-xs">
                R$ {product.basePrice.toFixed(2)}
              </p>
            </>
          ) : (
            <p className="text-sm font-semibold">
              R$ {product.basePrice.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
