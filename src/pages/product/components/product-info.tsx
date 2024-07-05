import { Button } from "@/components/ui/button";
import { DiscountBadge } from "@/components/ui/discount-badge";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
  product: {
    description: string;
    basePrice: number;
    discountPercentage: number;
    totalPrice: number;
    name: string;
  };
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);

  function handleDescreaseQuantityClick() {
    setQuantity((prev) => (prev == 1 ? prev : prev - 1));
  }

  function handleIncreaseQuantityClick() {
    setQuantity((prev) => prev + 1);
  }
  return (
    <div className="flex flex-col px-5 mt-5 my-8">
      <h2 className="text-lg">{product.name}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">
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
        >
          <ArrowLeftIcon size={16} />
        </Button>
        <span>{quantity}</span>
        <Button
          size="icon"
          variant="outline"
          onClick={handleIncreaseQuantityClick}
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="flex flex-col gap-3 mt-8">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-sm opacity-60 text-justify">{product.description}</p>
      </div>

      <Button className="mt-8 uppercase font-bold">
        Adicionar ao carrinho
      </Button>

      <div className="bg-accent flex items-center px-5 py-2 justify-between mt-5 rounded-lg">
        <div className="flex items-center gap-2">
          <TruckIcon />
          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-bold">FSPacket</span>
            </p>
            <p className="text-[#8162FF] text-xs">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>
        <p className="font-bold text-xs">Frete grátis</p>
      </div>
    </div>
  );
}
