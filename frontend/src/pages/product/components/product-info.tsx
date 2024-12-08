import { Button } from "@/components/ui/button";
import { DiscountBadge } from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { CartContext } from "@/context/cart-context";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useContext, useState } from "react";

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);

  const { addProductToCart } = useContext(CartContext);

  function handleDescreaseQuantityClick() {
    setQuantity((prev) => (prev == 1 ? prev : prev - 1));
  }

  function handleIncreaseQuantityClick() {
    setQuantity((prev) => prev + 1);
  }

  function handleAddToCartClick() {
    addProductToCart({ ...product, quantity });
  }

  return (
    <div className="flex flex-col px-5 mt-5 my-8 lg:bg-accent lg:rounded-lg lg:h-full lg:my-0 lg:p-4 lg:px-8  lg:flex-1 ">
      <h2 className="text-lg lg:text-2xl">{product.name}</h2>

      <div className="flex items-center gap-2 lg:mt-4">
        <h1 className="text-xl font-bold lg:text-2xl">
          R$ {product.totalPrice.toFixed(2)}
        </h1>
        {product.discountPercentage > 0 && (
          <DiscountBadge>{product.discountPercentage}</DiscountBadge>
        )}
      </div>

      {product.discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          R$ {product.basePrice.toFixed(2)}
        </p>
      )}

      <div className="flex items-center gap-2 mt-4">
        <Button
          size="icon"
          variant="outline"
          onClick={handleDescreaseQuantityClick}
          className="lg:bg-accent lg:border lg:border-zinc-800 lg:w-8 lg:h-8"
        >
          <ArrowLeftIcon size={16} />
        </Button>
        <span>{quantity}</span>
        <Button
          size="icon"
          variant="outline"
          onClick={handleIncreaseQuantityClick}
          className="lg:bg-accent lg:border lg:border-zinc-800 lg:w-8 lg:h-8"
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="flex flex-col gap-3 mt-8">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-sm opacity-60 text-justify">{product.description}</p>
      </div>

      <Button
        className="mt-8 uppercase font-bold"
        onClick={handleAddToCartClick}
      >
        Adicionar ao carrinho
      </Button>

      <div className="bg-accent flex items-center px-5 py-2 justify-between mt-5 rounded-lg lg:bg-neutral-800 lg:w-full">
        <div className="flex items-center gap-2 ">
          <TruckIcon />
          <div className="flex flex-col ">
            <p className="text-xs">
              Entrega via{" "}
              <span className="font-bold lg:text-base">FSPacket</span>
            </p>
            <p className="text-[#8162FF] text-xs lg:text-base">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>
        <p className="font-bold text-xs lg:text-base">Frete grátis</p>
      </div>
    </div>
  );
}
