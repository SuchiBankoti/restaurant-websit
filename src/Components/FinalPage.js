import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./FinalPage.css";
import Navbar from "./Navbar"
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../Store/CreateSlice";

const FinalPage = () => {
  const { trackData } = useSelector(state=>state.menu)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getMenu())
  },[trackData])
  return (
    <>
      <Navbar/>
    <div className="final-page">
      <h1 className="thankyou">Thank-You!!</h1>
      <Link to={"/restaurant-websit"} className="link">
        <div className="continue">Continue Dining</div>
      </Link>
    </div>
    </>
  );
};

export default FinalPage;
