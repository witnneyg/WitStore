import { CartContext, CartProduct } from "@/providers/cart";
import { Button } from "./button";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";

interface CardItemProps {
  product: CartProduct;
}
export function CartItem({ product }: CardItemProps) {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext);

  function handleDescreaseQuantityClick() {
    decreaseProductQuantity(product._id);
  }

  function handleIncreaseQuantityClick() {
    increaseProductQuantity(product._id);
  }

  function handleRemoveProductClick() {
    removeProductFromCart(product._id);
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="bg-accent flex items-center justify-center rounded-lg h-[77px] w-[77px]">
          <img
            src={product.imageUrls[0]}
            alt={product.name}
            className="w-auto h-auto max-w-[80%] max-h-[70%]"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-xs">{product.name}</p>
          <div className="flex items-center gap-2">
            <p className="font-bold text-sm">
              R$ {product.totalPrice.toFixed(2)}
            </p>
            {product.discountPercentage > 0 && (
              <p className="opacity-75 line-through text-xs">
                R$ {product.basePrice.toFixed(2)}
              </p>
            )}
          </div>

          <div className="flex items-center gap-1">
            <Button
              size="icon"
              variant="outline"
              className="w-8 h-8"
              onClick={handleDescreaseQuantityClick}
            >
              <ArrowLeftIcon size={16} />
            </Button>

            <span className="text-xs">{product.quantity}</span>

            <Button
              size="icon"
              variant="outline"
              className="w-8 h-8"
              onClick={handleIncreaseQuantityClick}
            >
              <ArrowRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>

      <Button size="icon" variant="outline" onClick={handleRemoveProductClick}>
        <TrashIcon size={16} />
      </Button>
    </div>
  );
}
