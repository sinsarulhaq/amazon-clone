import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Products({ id, title, price, rating, image, specification, detail }) {
  return (
    <div className="product">
      <div className="info">
        <Link to={`products${id}`} className="title">
          <p>{title}</p>
        </Link>
        <p className="price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button>
        <i>
          <ShoppingCartOutlinedIcon />
        </i>
        Add to Basket
      </button>
    </div>
  );
}

export default Products;
