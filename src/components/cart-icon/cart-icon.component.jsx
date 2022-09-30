import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { CartIconContainer, ItemCount, ShoppingSvg } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsOpen, cartCount } = useContext(CartContext);
  const openCard = () => {
    setIsOpen(!isCartOpen);
  };
  return (
    <CartIconContainer onClick={openCard}>
      <ShoppingSvg className="shopping-icon" />
      <ItemCount> {cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
