import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CurrencyFormat from "react-currency-format";
import Header from "../../Components/Header/Header";
import "./Payment.css";
import CheckoutProduct from "../../Components/CheckoutProduct/CheckoutProduct";
import { getBasketToatal } from "../../utils/BasketToatal";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../firebase";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "../../utils/axios";

function Payment() {
  const navigate = useNavigate();
  const { basket, user } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const [succeesed, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const getClientSecret = async () => {
        const response = await axios({
            method: 'post',
            url: `/payment/create?total=${getBasketToatal(basket) * 100}`
        });
        setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
}, [basket ] )

console.log('THE SECRET IS >>>', clientSecret)

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
     await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
          card: elements.getElement(CardElement)
      }
  }).then(({ paymentIntent }) => {

      db.collection('users').doc(user && user.uid).collection('orders').doc(paymentIntent.id).set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
      })
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        navigate("/orders",{replace: true});
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <>
    <Header />
      <div className="payment">
        <div className="payment-container">
          <h1>{<Link to="/checkout">Checkout {basket.length}</Link>}</h1>
          <div className="payment-section">
            <div className="payment-title">
              <h3>Deliver Address</h3>
            </div>
            <div className="payment-address">
              <p>{user && user.email}</p>
              <p>House no. 239 Near Taj Road</p>
              <p>Kerala, India</p>
            </div>
          </div>
          <div className="payment-section">
            <div className="payment-title">
              <h3>Review items and Delivery</h3>
            </div>
            <div className="payment-items">
              {basket &&
                basket.map((item) => (
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
          <div className="payment-section">
            <div className="payment-title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment-details">
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className="payment-priceContainer">
                  <CurrencyFormat
                    renderText={(values) => (
                      <>
                        <h3>Order Total: {values}</h3>
                      </>
                    )}
                    decimalScale={2}
                    value={getBasketToatal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  <button disabled={processing || disabled || succeesed}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>
                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
