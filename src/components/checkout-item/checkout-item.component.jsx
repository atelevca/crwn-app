import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";
const CheckoutItem = ({ cartItem }) => {
  const { changeCart } = useContext(CartContext);

  const { name, quantity, imageUrl, price } = cartItem;

  const addItemHandler = () => changeCart(cartItem);
  const removeItemHandler = () => changeCart(cartItem, "DECREMENT_ITEM");
  const clearItemHandler = () => changeCart(cartItem, "REMOVE_ITEM");

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
