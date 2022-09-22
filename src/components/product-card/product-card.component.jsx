import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { price, name, imageUrl } = product;
  const { addItemToCard } = useContext(CartContext);
  const addToCart = () => addItemToCard(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={addToCart} buttonType="inverted">
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
