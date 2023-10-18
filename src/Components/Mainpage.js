import React, { useEffect }  from "react";
import "./Mainpage.css";
import MenuItem from "./MenuItem";
import { nanoid } from "nanoid";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../Store/CreateSlice";

export default function Mainpage() {
  const { menu, trackData } = useSelector(state => state.menu);
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getMenu())
  }, [trackData])
  console.log('menu',menu)
  return (
    <>
      <Navbar />
      <div className="main-page">
        <div className="description">
          <h1 className="res-heading">RESTAURANT</h1>
          <p className="des-para">New menu available from 12th feb!</p>
        </div>
        <div className="menu">
          {menu.map((item) => (
            <MenuItem key={nanoid()} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
