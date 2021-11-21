import React from "react";
import "../Header/Header.css";
import logo from "../../assests/amazonlogo.png";
import Search from "../Search/Search";
import Button from "@mui/material/Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img src={logo} alt="amazon logo" />
        </div>

        <div className="header__search__container">
          <Search />
        </div>

        <div className="cart_container">
          <Button className="signup_btn">Sign Up</Button>
          <div className="order">
            <p>
              Returns <strong>&amp; Orders</strong>
            </p>
          </div>

          <div className="cart">
            <ShoppingCartOutlinedIcon className="cart_icon" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
