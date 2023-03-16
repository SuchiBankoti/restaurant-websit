import React from "react";
import Cart from "./Cart";
import Search from "./Search";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <Search />
      <div className="cart-logo">
        <Cart />
      </div>
    </div>
  );
}
