import { ProductWithTotalPrice } from "@/helpers/product";
import { createContext, ReactNode, useState } from "react";

export interface CartProduct extends ProductWithTotalPrice {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  addProductToCart: (product: CartProduct) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  addProductToCart: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<CartProduct[]>([]);

  function addProductToCart(product: CartProduct) {
    const productIsAlreadyOnCart = products.filter(
      (cartProduct) => cartProduct.id == product.id
    );

    if (productIsAlreadyOnCart.length > 0) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id == product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }
          return cartProduct;
        })
      );

      return;
    }

    setProducts((prev) => [...prev, product]);
  }
  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
