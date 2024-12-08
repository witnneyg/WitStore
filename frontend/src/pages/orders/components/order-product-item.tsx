import { computeProductTotalPrice } from "@/helpers/product";
import { CartProduct } from "@/context/cart-context";

// fix interfaces types later...

interface OrderProductItemProps {
  orderProduct: CartProduct;
}

export function OrderProductItem({ orderProduct }: OrderProductItemProps) {
  const productWithTotalPrice = computeProductTotalPrice(orderProduct);

  return (
    <div className="flex items-center gap-4">
      <div className="bg-accent rounded-lg w-[100px] h-[77px] flex items-center justify-center">
        <img
          src={orderProduct.imageUrls[0]}
          alt={orderProduct.name}
          className="h-auto max-h-[80%] w-auto max-w-[80%] object-contain"
        />
      </div>

      <div className="flex flex-col gap-1 w-full">
        <div className="flex bg-accent px-3 py-1 rounded-md w-fit">
          <p className="text-xs">
            Vendido e entregue por <span className="font-bold">FSW Store</span>
          </p>
        </div>

        <p className="text-xs">{orderProduct.name}</p>

        <div className="flex items-center justify-between gap-1 w-full">
          <div className="flex items-center gap-1">
            <p className="text-sm font-bold">
              R$ {productWithTotalPrice.totalPrice.toFixed(2)}
            </p>

            {productWithTotalPrice.discountPercentage > 0 && (
              <p className="opacity-60 line-through text-xs">
                {productWithTotalPrice.basePrice.toFixed(2)}
              </p>
            )}
          </div>
          <p className="text-xs opacity-60">Qnt: {orderProduct.quantity}</p>
        </div>
      </div>
    </div>
  );
}
