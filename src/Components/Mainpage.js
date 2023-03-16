import React, { useContext } from "react";
import "./Mainpage.css";
import MenuItem from "./MenuItem";
import { nanoid } from "nanoid";
import { dataContext } from "../Context";

export default function Mainpage() {
  const { menu } = useContext(dataContext);
  return (
    <div className="main-page">
      <div className="description">
        <h1>RESTAURANT</h1>
        <p>New menu available from 12th feb!</p>
      </div>
      <div className="menu">
        {menu.map((item) => (
          <MenuItem key={nanoid()} item={item} />
        ))}
      </div>
      ;
    </div>
  );
}
