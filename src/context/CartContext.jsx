import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

function addItem(product, options = {}) {
  const quantity = options.quantity || 1;
  const color = options.color || product.colors?.[0] || null;
  const storage = options.storage || null;
  const price = options.price || product.price;

  const itemKey = `${product.id}-${color || "default"}-${storage || "default"}`;

  setItems((prevItems) => {
    const existingItem = prevItems.find((item) => item.key === itemKey);

    if (existingItem) {
      return prevItems.map((item) =>
        item.key === itemKey
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    }

    return [
      ...prevItems,
      {
        key: itemKey,
        id: product.id,
        slug: product.slug,
        name: product.name,
        price,
        imageKey: product.imageKey,
        color,
        storage,
        quantity,
      },
    ];
  });
}

  function removeItem(key) {
    setItems((prevItems) => prevItems.filter((item) => item.key !== key));
  }

  function updateQuantity(key, newQuantity) {
    if (newQuantity < 1) {
      removeItem(key);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.key === key ? { ...item, quantity: newQuantity } : item
      )
    );
  }

  function clearCart() {
    setItems([]);
  }
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        count,
        total,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}