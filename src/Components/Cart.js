import React from "react";
import "./Cart.css";

import { FaCartArrowDown } from "react-icons/fa";
import Portal from "../Portal";
export default function Cart() {
  return (
    <Portal>
      <div className="cart">
        <FaCartArrowDown />
        <div>Your Cart</div>
        <div className="cart-items">0</div>
      </div>
    </Portal>
  );
}
