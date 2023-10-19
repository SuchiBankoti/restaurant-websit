import React from "react";
import "./Cart.css";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activateCart } from "../Store/CreateSlice";
import CartItems from "./CartItems";
export default function Cart() {
  const { menu, activeCart } = useSelector(state => state.menu);
  const dispatch = useDispatch()
  console.log('active',activeCart)
  const numberOfItemsInCart = menu.filter((obj) => obj.units > 0);
  return (
    <div className="cart">
        <FaCartArrowDown onClick={()=>dispatch(activateCart(true))} className="icon"/>
      <div className="cart-num">{numberOfItemsInCart.length}</div>
      <div  className={`cartContent ${activeCart ? "active" : ""}`}>
            <CartItems/>
      </div>
    </div>
  );
}
