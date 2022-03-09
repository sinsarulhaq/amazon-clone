import React, { useState, useEffect } from "react";
import "./Orders.css";
import Header from "../../Components/Header/Header";
import { useSelector } from "react-redux";
import { db } from "../../firebase";
import Order from "../../Components/Order/Order";

function Orders() {
  const [orders, setOrders] = useState("");
  const { user } = useSelector((state) => state.data);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => 
            setOrders(
                snapshot.docs.map((doc) => ({
                    id : doc.id,
                    data: doc.data()
                }))
            )
        )
    } else {
      setOrders([]);
    }
  },[user]);
  return (
    <>
      <Header />
      <div className="orders">
        <h2>Your Order</h2>
        <div className="orders-order">
        {orders && orders.map((order, index) => 
            <Order order={order} key={index} />
        )}   
        </div>
      </div>
    </>
  );
}

export default Orders;
