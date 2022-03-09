import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { setUser } from "./redux/action";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import Checkout from "./Pages/Checkout/Checkout";
import Payment from "./Pages/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Pages/Orders/Orders";

const promise = loadStripe(
  "pk_test_51Kb16zSDyKCzzPwZn6QrO7gdU7QUnCRE9dWXTZJKPUldTD5x8lJcbjwlO5SjAfQUnGyow5RciLjuxgFzax0ai23u00zPWZrv0Y"
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);

  return (
    <>
     <Elements stripe={promise}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/product/:id" element={<SingleProduct />} />

          <Route path="/checkout" element={<Checkout />} />
        
          <Route path="/payment" element={<Payment />} />

          <Route path="/order" element={<Orders />} />
        </Routes>

      </BrowserRouter>
      </Elements>
    </>
  );
}

export default App;
//pk_test_51KaKiDSF2uDYIQCzKB8jmeHUm8GqLo8Gk7n6teD9OP4bLR1p01KloZF69zikc6wgLO7iCr6vFji8XZEtD0GRXpri00BYO1KsFT