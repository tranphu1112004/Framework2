import { createContext, useState, ReactNode, useEffect } from "react";
import { IProduct } from "../interface/Product";

interface CartContextType {
  cart: IProduct[];
  addCart: (product: IProduct) => void;
  addToCart: (product: IProduct, quantity: number) => void;
  removeFromCart: (product: IProduct, quantity: number) => void;
}

type Props = {
  children: ReactNode;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<IProduct[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addCart = (product: IProduct) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const addToCart = (product: IProduct, quantity: number) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (product: IProduct, quantity: number) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        const updatedQuantity = existingProduct.quantity - quantity;
        if (updatedQuantity <= 0) {
          return prevCart.filter((item) => item.id !== product.id);
        } else {
          return prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: updatedQuantity }
              : item
          );
        }
      }
      return prevCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
