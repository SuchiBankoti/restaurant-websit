import React, { useEffect,useState } from "react";
import Cart from "./Cart";
import Search from "./Search";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import Error from "./Error";
import Success from "./Success";
import { disableSuccess } from "../Store/CreateSlice";
export default function Navbar() {
  const { isLoading, isReqError, isReqSuccess } = useSelector(state => state.menu)
  const [initialRender, setInitialRender] = useState(true);
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (isReqSuccess && !initialRender) {
      const timer = setTimeout(() => {
        dispatch(disableSuccess());
      }, 2000); 

      return () => clearTimeout(timer);
    }
  }, [isReqSuccess,initialRender, dispatch]);


  
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
      <div className={`loader ${isLoading && !initialRender ? "active" : ""}`}>
        <Loader />
      </div>
      <div className={`loader ${isReqError && !initialRender ? "active" : ""}`} style={{background:"red"}}>
        <Error />
      </div>
      <div className={`loader ${isReqSuccess && !initialRender  ? "active" : ""}`}>
        <Success />
      </div>
    </div>
  );
}
