import React from "react";
import Cart from "./Cart";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <h1>ReactMeals</h1>
      <Cart />
    </div>
  );
}
