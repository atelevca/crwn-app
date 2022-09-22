import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => null,
  cartItems: [],
  addItemToCard: () => null,
  cartCount: null,
});

const addToCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    setCartCount(count);
  }, [cartItems]);

  const addItemToCard = (product) => {
    setCartItems(addToCartItem(cartItems, product));
  };
  const value = {
    isCartOpen,
    setIsOpen,
    cartItems,
    addItemToCard,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
