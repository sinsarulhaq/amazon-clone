import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <Link to={"/"}>
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header-logo"
          alt=""
        />
      </Link>
      <div className="header-option" style={{ marginRight: "-10px" }}>
        <FmdGoodOutlinedIcon />
      </div>
      <div className="header-option">
        <span className="header-option1">Hello</span>
        <span className="header-option2">Select Your Address</span>
      </div>
      <div className="search">
        <select>
          <option>All</option>
        </select>
        <input type="text" className="searchInput" />
        <SearchIcon className="searchIcon" />
      </div>
      <div className="header-nav">
        <Link to={"/login"} className="header-link">
          <div className="header-option">
            <span className="header-option1">Hello Guest</span>
            <span className="header-option2">Sign in</span>
          </div>
        </Link>
        <Link to={"/order"} className="header-link">
          <div className="header-option">
            <span className="header-option1">Returns</span>
            <span className="header-option2"> & orders</span>
          </div>
        </Link>
        <Link to={"/checkout"} className="header-link">
          <div className="header-basket">
              <ShoppingCartOutlinedIcon />
            <span className="header-option2 basket-count">0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
