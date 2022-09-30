import { Fragment } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <Fragment key={title}>
      <Link to={title}>
        <h2>{title}</h2>
      </Link>
      <div className="products-container">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Fragment>
  );
};
export default CategoryPreview;
