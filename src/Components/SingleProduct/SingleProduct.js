import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import { products } from "../../utils/productDetails";
import "./SingleProduct.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/action";

function SingleProduct({}) {
  const dispatch = useDispatch();
  const { id } = useParams();
  let singleProduct = products.find((item) => item.id === id);
  const addItemToBasket = (e) => {
    e.preventDefault();
    const item = {
      id: singleProduct.id,
      title: singleProduct.title,
      image: singleProduct.image,
      price: singleProduct.price,
      rating: singleProduct.rating,
      specification: singleProduct.specification,
      detail: singleProduct.detail,
    };
    dispatch(addToBasket(item));
  };
  return (
    <>
      <Header />
      <div className="single-product-container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          className="single-product-ad"
          alt=""
        />
        <div>
          <div className="single-product">
            <img
              src={singleProduct.image}
              alt=""
              className="single-product-image"
            />
            <div className="single-product-info">
              <div className="single-product-title">{singleProduct.title}</div>
              <div className="single-product-rating">
                {Array(singleProduct.rating)
                  .fill()
                  .map((_, index) => (
                    <p key={index}>⭐</p>
                  ))}
              </div>
              <p className="single-product-price">
                price: <strong>$ {singleProduct.price}</strong>{" "}
              </p>
              <div className="single-product-specification">
                <h4>Specification</h4>
                {singleProduct.specification &&
                  singleProduct.specification.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </div>
              <div className="single-product-description">
                <h4>Product Description</h4>
                <p>{singleProduct.detail}</p>
              </div>
              <button onClick={addItemToBasket}>
                <i>
                  <ShoppingCartOutlinedIcon />
                </i>
                Add to Basket
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;