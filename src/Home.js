import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "./Store/CreateSlice";
export default function Home() {
  const{trackData}=useSelector(state=>state.menu)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getMenu())
  },[trackData])
  function Content() {
    return (
      <div className="home-content">
        <h1 className="h1">SUSHI PARLOUR</h1>
        <h3 className="h2">Opening in your neighborhood</h3>
        <h4 className="h3">DINE-IN</h4>
      </div>
    );
  }
  return (
    <div className="home-page">
      <Navbar />
      <Content />
    </div>
  );
}
