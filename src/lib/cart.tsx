"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import type { Product } from "@/types/product";

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);

const storageKey = "luma-beads-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey);
    if (stored) {
      try {
        setItems(JSON.parse(stored) as CartItem[]);
      } catch {
        window.localStorage.removeItem(storageKey);
      }
    }
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (hasHydrated) {
      window.localStorage.setItem(storageKey, JSON.stringify(items));
    }
  }, [hasHydrated, items]);

  const value = useMemo<CartContextValue>(() => {
    const addItem = (product: Product) => {
      if (product.stockStatus === "sold-out") {
        return;
      }

      setItems((currentItems) => {
        const existing = currentItems.find(
          (item) => item.product.id === product.id
        );

        if (existing) {
          return currentItems.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }

        return [...currentItems, { product, quantity: 1 }];
      });
    };

    const removeItem = (productId: string) => {
      setItems((currentItems) =>
        currentItems.filter((item) => item.product.id !== productId)
      );
    };

    const updateQuantity = (productId: string, quantity: number) => {
      const nextQuantity = Math.max(1, Math.min(99, quantity));
      setItems((currentItems) =>
        currentItems.map((item) =>
          item.product.id === productId
            ? { ...item, quantity: nextQuantity }
            : item
        )
      );
    };

    const clearCart = () => setItems([]);
    const itemCount = items.reduce((total, item) => total + item.quantity, 0);
    const subtotal = items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );

    return {
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      itemCount,
      subtotal
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
