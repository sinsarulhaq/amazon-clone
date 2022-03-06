import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutInitiate } from "../../redux/action";

function Header() {
  const { user, basket } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleAuth = () => {
    if(user){
      dispatch(logoutInitiate());
    }
    
  };
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
        <span className="header-option1">Hello </span>
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
        <Link to={`${user ? "/" : "/login"}`} className="header-link">
          <div className="header-option" onClick={handleAuth}>
            <span className="header-option1">
              Hello , {user ? user.email : "Guest"}
            </span>
            <span className="header-option2">
              {user ? "Sign Out" : "Sign in"}
            </span>
          </div>
        </Link>
        <Link to={"/order"} className="header-link">
          <div className="header-option">
            <span className="header-option1">Returns</span>
            <span className="header-option2"> & orders</span>
          </div>
        </Link>
        <Link to={"/login"} className="header-link">
          <div className="header-option">
            <span className="header-option1">Your</span>
            <span className="header-option2">Prime</span>
          </div>
        </Link>
        <Link to={"/checkout"} className="header-link">
          <div className="header-basket">
            <ShoppingCartOutlinedIcon />
            <span className="header-option2 basket-count">{basket && basket.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
