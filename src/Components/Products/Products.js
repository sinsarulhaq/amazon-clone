import React from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../redux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Products({ id, title, price, rating, image, specification, detail }) {
  const dispatch = useDispatch();

  const onAddIteamToBasket = (e) => {
    e.preventDefault();
    toast.success('Added: '+title, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    const item = {
      id,
      title,
      image,
      price,
      rating,
      specification,
      detail,
    };
    dispatch(addToBasket(item));
  };
  return (
    <div className="product">
      <div className="info">
        <Link to={`/product/${id}`} className="title">
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
      <button onClick={onAddIteamToBasket}>
        <i>
          <ShoppingCartOutlinedIcon />
        </i>
        Add to Basket
        <ToastContainer
        />
      </button>
    </div>
  );
}

export default Products;
