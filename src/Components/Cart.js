import React, { useContext } from "react";
import "./Cart.css";
import { dataContext } from "../Context";

import { FaCartArrowDown } from "react-icons/fa";
export default function Cart() {
  const { setToggle, menu } = useContext(dataContext);
  const numberOfItemsInCart = menu.filter((obj) => obj.unit > 0);
  return (
    <div>
      <div className="cart">
        <FaCartArrowDown onClick={() => setToggle(true)} />
        <div>Your Cart</div>
        <div className="cart-items">{numberOfItemsInCart.length}</div>
      </div>
    </div>
  );
}
