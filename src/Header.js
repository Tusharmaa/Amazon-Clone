import React from "react";
import "./Product";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ cart, user }] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="https://www.kindpng.com/picc/b/17/172246.png"
          alt="logo"
        />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"} className="header-link">
          <div onClick={login} className="header-option">
            <span className="header-optionLineOne">Hello {user?.email}</span>
            <span className="header-optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-optionLineOne">Returns</span>
            <span className="header-optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-optionLineOne">Your</span>
            <span className="header-optionLineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header-link">
          <div className="header-optionBasket">
            <ShoppingCartIcon />
            <span className="header-optionLineTwo header-basketCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
