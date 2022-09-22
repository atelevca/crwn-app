import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../assets/img/crown.svg";
import { UserContext } from "../../contexts/user.context";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            <div>Shop</div>
          </Link>
          {currentUser ? (
            <span onClick={signOutUser} className="nav-link">
              Sign Out
            </span>
          ) : (
            <Link to="/sign-in" className="nav-link">
              <div>Sign in</div>
            </Link>
          )}

          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
