import { ProductWithTotalPrice } from "@/helpers/product";
import { Link } from "react-router-dom";
import { DiscountBadge } from "./discount-badge";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <Link to={`/products/${product.slug}`}>
      <div className="flex flex-col gap-4 min-w-[156px]">
        <div className="relative flex  w-full items-center justify-center rounded-lg bg-accent min-h-[170px] aspect-square">
          <img
            src={product.imageUrls[0]}
            alt={product.name}
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            style={{
              objectFit: "contain",
            }}
          />
          {product.discountPercentage > 0 && (
            <DiscountBadge className="absolute left-3 top-3">
              {product.discountPercentage}
            </DiscountBadge>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <p className="truncate text-sm">{product.name}</p>

          <div className="flex items-center gap-2 ">
            {product.discountPercentage > 0 ? (
              <>
                <p className="font-semibold truncate">
                  R$ {product.totalPrice.toFixed(2)}
                </p>

                <p className="line-through opacity-75 text-xs truncate">
                  R$ {product.basePrice.toFixed(2)}
                </p>
              </>
            ) : (
              <p className="text-sm font-semibold truncate">
                R$ {product.basePrice.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
