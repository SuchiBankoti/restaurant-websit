import React from "react";
import "./Cart.css";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Cart() {
  const { menu } = useSelector(state=>state.menu);
  const numberOfItemsInCart = menu.filter((obj) => obj.units > 0);
  return (
    <div className="cart">
      <Link to={"/restaurant-websit/CartItems"} className="link">
        <FaCartArrowDown />
      </Link>
      <div className="cart-num">{numberOfItemsInCart.length}</div>
    </div>
  );
}
