import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { price, name, imageUrl } = product;
  const { changeCart } = useContext(CartContext);
  const addToCart = () => changeCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={addToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
