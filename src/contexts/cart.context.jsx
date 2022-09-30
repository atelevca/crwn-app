import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsOpen: () => null,
  cartItems: [],
  addItemToCard: () => null,
  cartCount: null,
  cartTotal: null,
});

const changeCartProducts = (cartItems, product, type) => {
  switch (type) {
    case "REMOVE_ITEM":
      return removeFromCartItem(cartItems, product);
    case "DECREMENT_ITEM":
      return decrementCartItem(cartItems, product);
    default:
      return addToCartItem(cartItems, product);
  }
};

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

const removeFromCartItem = (cartItems, product) => {
  return cartItems.filter((el) => el.id !== product.id);
};

const decrementCartItem = (cartItems, product) => {
  const changedCartItems =
    product.quantity > 1
      ? cartItems.map((el) => {
          return el.id === product.id
            ? { ...el, quantity: (el.quantity -= 1) }
            : el;
        })
      : removeFromCartItem(cartItems, product);

  return [...changedCartItems];
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    let total = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    setCartCount(count);
    setCartTotal(total);
  }, [cartItems]);

  const changeCart = (product, type) => {
    setCartItems(changeCartProducts(cartItems, product, type));
  };
  const value = {
    isCartOpen,
    setIsOpen,
    cartItems,
    changeCart,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
