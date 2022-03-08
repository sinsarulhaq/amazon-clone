import React from "react";
import "./CheckoutProduct.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../../redux/action";

function CheckoutProduct({ id, title, image, rating, price }) {
  const dispatch = useDispatch()
  const removeIteamFromBasket = (e) => {
    e.preventDefault();
    dispatch(removeFromBasket(id))
  };
  return (
    <div className="checkout-product">
      <img src={image} alt="" className="checkout-product-image" />
      <div className="checkout-product-info">
        <p className="checkout-product-title">{title}</p>
        <p className="checkout-product-prrice">
          <strong>$ {price}</strong>
        </p>
        <div className="checkout-product-rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
        <button onClick={removeIteamFromBasket}>
          <i>
            <ShoppingCartOutlinedIcon />
          </i>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
