"use client";

import { createContext, ReactNode, useContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [showCart, setShowCart] = useState(false);
  const [qty, setQty] = useState(1);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Increment quantity
  const incQty = () => setQty((prevQty) => prevQty + 1);

  // Decrement quantity
  const decQty = () =>
    setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));

  // Add a product to the cart
  const addProduct = (product: any, quantity: number) => {
    const checkProductInCart = cartItems.find((item: any) => item._id === product._id);

    setTotalQuantity((prev) => prev + quantity);
    setTotalPrice((prev) => prev + product.price * quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((item: any) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  // Update item quantity in the cart
  const toggleCartItemQty = (id: any, value: string) => {
    const foundProduct = cartItems.find((item) => item._id === id);

    if (!foundProduct) return;

    const updatedCartItems = cartItems.map((item) => {
      if (item._id === id) {
        const newQuantity =
          value === "plus" ? item.quantity + 1 : Math.max(1, item.quantity - 1);

        setTotalPrice((prev) =>
          value === "plus"
            ? prev + foundProduct.price
            : prev - foundProduct.price
        );
        setTotalQuantity((prev) =>
          value === "plus" ? prev + 1 : prev - 1
        );

        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

  // Remove product from cart
  const onRemove = (product: any) => {
    const foundProduct = cartItems.find((item) => item._id === product._id);
    if (!foundProduct) return;

    setCartItems(cartItems.filter((item) => item._id !== product._id));
    setTotalPrice((prev) => prev - foundProduct.price * foundProduct.quantity);
    setTotalQuantity((prev) => prev - foundProduct.quantity);
  };

  return (
    <CartContext.Provider
      value={{
        showCart,
        setShowCart,
        qty,
        incQty,
        decQty,
        cartItems,
        addProduct,
        toggleCartItemQty,
        onRemove,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
