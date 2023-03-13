import React from "react";
import Cart from "./Cart";
import Search from "./Search";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="heading">
        <h1>ReactMeals</h1>
      </div>
      <div>
        <Search />
      </div>
      <div>
        <h1 className="our-menu">MENU</h1>
        <div className="underline"></div>
      </div>
      <div className="cart-logo">
        <Cart />
      </div>
    </div>
  );
}
