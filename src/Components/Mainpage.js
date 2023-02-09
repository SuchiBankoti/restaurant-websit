import React, { useContext, useEffect } from "react";
import { nanoid } from "nanoid";
import "./Mainpage.css";
import { dataContext } from "../Context";
import MenuItem from "./MenuItem";

export default function Mainpage() {
  const { menu, setMenu } = useContext(dataContext);

  useEffect(() => {
    function getMenu() {
      const data = JSON.parse(localStorage.getItem("menu"));
      console.log(1);
      setMenu(data);
    }
    getMenu();
  }, [setMenu]);

  const menuItems = menu.map((item) => <MenuItem key={nanoid()} item={item} />);
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
      <div className="menu">{menuItems}</div>
    </div>
  );
}
