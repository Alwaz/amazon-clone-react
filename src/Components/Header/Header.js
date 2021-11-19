import React from "react";
import "../Header/Header.css";
import logo from "../../assests/amazonlogo.png";
import Search from "../Search/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__container">
          {/* logo */}
          <div className="header__logo">
            <img src={logo} alt="amazon logo" />
          </div>

          {/* search bar */}
          <Search />
        </div>

        {/* orders */}
        {/* cart */}

        <div className="cart_container">
          <div className="order">
            <p>
              Returns <strong>&amp; Orders</strong>
            </p>
          </div>

          <div className="cart">
            <ShoppingCartIcon className="cart_icon" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
