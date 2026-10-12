"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

export interface CartProduct {
  id: number;
  name: string;
  price: number;
  image_url: string | null;
  category: string;
  stock: number;
}

export interface CartItem {
  id: number;
  product_id: number;
  quantity: number;
  attributes: Record<string, string>;
  product: CartProduct;
  created_at: string;
}

interface CartContextValue {
  items: CartItem[];
  count: number;
  total: number;
  addToCart: (
    product: CartProduct,
    quantity: number,
    attributes: Record<string, string>,
  ) => void;
  removeFromCart: (item_id: number) => void;
  updateQuantity: (item_id: number, quantity: number) => void;
  refreshCart: () => void;
}

const STORAGE_KEY = "fairwaypro_cart";

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const refreshCart = useCallback(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setItems(JSON.parse(stored));
    } catch {}
  }, []);

  useEffect(() => {
    refreshCart();
  }, [refreshCart]);

  function save(newItems: CartItem[]) {
    setItems(newItems);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newItems));
  }

  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce(
    (sum, item) => sum + item.quantity * item.product.price,
    0,
  );

  const addToCart = (
    product: CartProduct,
    quantity: number,
    attributes: Record<string, string>,
  ) => {
    const existing = items.find(
      (i) =>
        i.product_id === product.id &&
        JSON.stringify(i.attributes) === JSON.stringify(attributes),
    );
    if (existing) {
      save(
        items.map((i) =>
          i.id === existing.id ? { ...i, quantity: i.quantity + quantity } : i,
        ),
      );
    } else {
      const newItem: CartItem = {
        id: Date.now(),
        product_id: product.id,
        quantity,
        attributes,
        product,
        created_at: new Date().toISOString(),
      };
      save([...items, newItem]);
    }
  };

  const removeFromCart = (item_id: number) => {
    save(items.filter((i) => i.id !== item_id));
  };

  const updateQuantity = (item_id: number, quantity: number) => {
    if (quantity <= 0) {
      save(items.filter((i) => i.id !== item_id));
    } else {
      save(items.map((i) => (i.id === item_id ? { ...i, quantity } : i)));
    }
  };

  return (
    <CartContext.Provider
      value={{
        items,
        count,
        total,
        addToCart,
        removeFromCart,
        updateQuantity,
        refreshCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
