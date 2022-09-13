import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../assets/img/crown.svg";

const Navigation = () => {
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
          <Link to="/sign-in" className="nav-link">
            <div>Sign in</div>
          </Link>
        </div>
      </div>

      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
