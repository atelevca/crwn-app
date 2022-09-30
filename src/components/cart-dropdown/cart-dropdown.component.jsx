import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.jsx";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();
  const checkoutNavigate = () => {
    navigate("checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((product) => {
            return <CartItem key={product.id} cartItem={product} />;
          })
        ) : (
          <EmptyMessage>No Items</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={checkoutNavigate}>out</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
