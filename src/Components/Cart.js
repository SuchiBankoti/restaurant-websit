import React, { useContext } from "react";
import "./Cart.css";
import { dataContext } from "../Context";

import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Cart() {
  const { menu } = useContext(dataContext);
  const numberOfItemsInCart = menu.filter((obj) => obj.unit > 0);
  return (
    <div className="cart">
      <Link to={"/CartItems"} className="link">
        <FaCartArrowDown />
      </Link>
      <div className="cart-items">{numberOfItemsInCart.length}</div>
    </div>
  );
}
