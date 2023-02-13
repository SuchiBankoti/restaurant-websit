import React, { useContext } from "react";
import "./Cart.css";
import { dataContext } from "../Context";

import { FaCartArrowDown } from "react-icons/fa";
import Portal from "../Portal";
export default function Cart() {
  const { setToggle, cartItems } = useContext(dataContext);
  let i = cartItems.filter((obj) => (obj.isAdded > 0 ? obj : ""));
  return (
    <div>
      <div className="cart">
        <FaCartArrowDown onClick={() => setToggle(true)} />
        <div>Your Cart</div>
        <div className="cart-items">{i.length}</div>
      </div>
      <Portal />
    </div>
  );
}
