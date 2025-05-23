/* eslint-disable @typescript-eslint/no-empty-function */
import { calculatePrices } from "@/helpers/calculatePrices";
import { ProductWithTotalPrice } from "@/helpers/computeProductTotalPrice";
import { createContext, ReactNode, useEffect, useMemo, useState } from "react";

export interface CartProduct extends ProductWithTotalPrice {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  total: number;
  subtotal: number;
  totalDiscount: number;
  clearCart: () => void;
  addProductToCart: (product: CartProduct) => void;
  decreaseProductQuantity: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  removeProductFromCart: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  total: 0,
  subtotal: 0,
  totalDiscount: 0,
  addProductToCart: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  removeProductFromCart: () => {},
  clearCart: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const getProductsFromLocalStorage = JSON.parse(
    localStorage.getItem("@wit-store/cart-products") || "[]"
  );

  const [products, setProducts] = useState<CartProduct[]>(
    getProductsFromLocalStorage
  );

  useEffect(() => {
    localStorage.setItem("@wit-store/cart-products", JSON.stringify(products));
  }, [products]);

  const { subtotal, total, totalDiscount } = useMemo(() => {
    return calculatePrices(products);
  }, [products]);

  function addProductToCart(product: CartProduct) {
    const productIsAlreadyOnCart = products.filter(
      (cartProduct) => cartProduct._id == product._id
    );

    if (productIsAlreadyOnCart.length > 0) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct._id == product._id) {
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

  function decreaseProductQuantity(productId: string) {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct._id == productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            };
          }
          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0)
    );
  }

  function removeProductFromCart(productId: string) {
    setProducts((prev) =>
      prev.filter((cartProduct) => cartProduct._id !== productId)
    );
  }

  function increaseProductQuantity(productId: string) {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct._id == productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }
        return cartProduct;
      })
    );
  }

  function clearCart() {
    setProducts([]);
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        decreaseProductQuantity,
        increaseProductQuantity,
        removeProductFromCart,
        clearCart,
        total,
        subtotal,
        totalDiscount,
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
