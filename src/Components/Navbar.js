import React from "react";
import Cart from "./Cart";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="heading">
        <h1>ReactMeals</h1>
      </div>
      <div className="cart-logo">
        <Cart />
      </div>
    </div>
  );
}
