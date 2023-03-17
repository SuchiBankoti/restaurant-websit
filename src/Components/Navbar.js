import React from "react";
import Cart from "./Cart";
import Search from "./Search";
import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <Link to={"/restaurant-websit"} className="link">
          <div className="home-heading">Home</div>
        </Link>
        <Search />
      </div>
      <div className="nav-right">
        <Link to={"/restaurant-websit/Mainpage"} className="link">
          <div className="menu-heading">Menu</div>
        </Link>
        <div className="cart-logo">
          <Cart />
        </div>
      </div>
    </div>
  );
}
