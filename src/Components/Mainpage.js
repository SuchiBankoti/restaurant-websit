import React, { useContext } from "react";
import "./Mainpage.css";
import MenuItem from "./MenuItem";
import { nanoid } from "nanoid";
import { dataContext } from "../Context";

export default function Mainpage() {
  const { menu } = useContext(dataContext);
  return (
    <div className="main-page">
      <div className="content">
        <h2>Delicious Food,Delivered To You</h2>
        <div className="description">
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicous lunch or dinner at home
          </p>
          <p>
            All our meals are cooked with high-quality ingredients,just-in-time
            and of course by experienced chefs!
          </p>
        </div>
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
