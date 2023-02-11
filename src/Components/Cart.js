import React, { useContext } from "react";
import "./Cart.css";
import { dataContext } from "../Context";

import { FaCartArrowDown } from "react-icons/fa";
import Portal from "../Portal";
export default function Cart() {
  const { setToggle } = useContext(dataContext);
  return (
    <div>
      <div className="cart">
        <FaCartArrowDown onClick={() => setToggle(true)} />
        <div>Your Cart</div>
        <div className="cart-items">0</div>
      </div>
      <Portal />
    </div>
  );
}
