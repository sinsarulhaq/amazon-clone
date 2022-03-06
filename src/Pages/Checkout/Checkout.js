import React from "react";
import { useSelector } from "react-redux";
import CheckoutProduct from "../../Components/CheckoutProduct/CheckoutProduct";
import Header from "../../Components/Header/Header";
import SubTotal from "../../Components/SubTotal/SubTotal";
import "./Checkout.css";

function Checkout() {
  const { user, basket } = useSelector((state) => state.data);
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout-left">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            className="checkout-ad"
            alt=""
          />
        
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout-title">
            {basket.length === 0
              ? "Your Shoppoing Basket is empty"
              : "Your Shopping Basket"}
          </h2>
          {basket && basket.map((item) => (
            <CheckoutProduct 
            id={item.id}
            key={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
          ))}
          
        </div>
        </div>
        <div className="checkout-right">
        <SubTotal />
        </div>
      </div>
    </>
  );
}

export default Checkout;
