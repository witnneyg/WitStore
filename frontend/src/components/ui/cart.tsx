/* eslint-disable @typescript-eslint/no-explicit-any */
import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { CartContext, CartProduct } from "@/context/cart-context";
import { useContext } from "react";
import { CartItem } from "./cart-item";
import { computeProductTotalPrice } from "@/helpers/computeProductTotalPrice";
import { Separator } from "./separator";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";
import { api } from "@/services/api";
import { loadStripe } from "@stripe/stripe-js";
import { UserContext } from "@/context/user-context";

export function Cart() {
  const { products, subtotal, total, totalDiscount, clearCart } =
    useContext(CartContext);

  const { user } = useContext(UserContext);

  async function handleCheckout() {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("user is not logged in");
      }

      if (!user) {
        return;
      }

      const cartProducts = products.map((product) => ({
        productId: product._id,
        basePrice: product.basePrice,
        discountPercentage: product.discountPercentage,
        quantity: product.quantity,
      }));

      const { data } = await api.post(
        "/order/createOrder",
        {
          cartProduct: cartProducts,
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const checkout = await api.post(
        "/checkout",
        {
          products,
          orderId: data._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

      stripe?.redirectToCheckout({
        sessionId: checkout.data.id,
      });

      clearCart();
    } catch (error: any) {
      if (error.message === "user is not logged in") {
        alert("Você precisa estar logado para finalizar a compra.");
      } else {
        console.error("Erro ao finalizar o checkout:", error);
        alert(
          "Ocorreu um erro ao finalizar a compra. Por favor, tente novamente."
        );
      }
    }
  }

  return (
    <div className="flex flex-col gap-8 h-full">
      <Badge
        className="w-fit gap-1 text-base uppercase border-2 border-primary px-3 py-[0.375rem]"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="flex flex-col gap-5 h-full overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex h-full flex-col gap-8">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem
                  key={product._id}
                  product={
                    computeProductTotalPrice(
                      product as CartProduct
                    ) as CartProduct
                  }
                />
              ))
            ) : (
              <p className="text-center font-semibold">
                Carrinho vazio. Vamos fazer compras?
              </p>
            )}
          </div>
        </ScrollArea>
      </div>

      {products.length > 0 && (
        <div className="flex flex-col gap-3">
          <Separator />

          <div className="flex items-center justify-between text-xs">
            <p>Subtotal</p>
            <p>R$ {subtotal.toFixed(2)}</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-xs">
            <p>Entrega</p>
            <p>GRÁTIS</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-xs">
            <p>Descontos</p>
            <p>- R$ {totalDiscount.toFixed(2)}</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-sm font-bold">
            <p>Total</p>
            <p>R$ {total.toFixed(2)}</p>
          </div>

          <Button className="uppercase font-bold mt-7" onClick={handleCheckout}>
            Finalizar compra
          </Button>
        </div>
      )}
    </div>
  );
}
