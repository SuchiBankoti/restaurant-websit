import React from "react";
import Adder from "./Adder";
import "./MenuItem.css";
import { FaDollarSign } from "react-icons/fa";
export default function MenuItem(props) {
  const { item } = props;
  return (
    <div className="item-container">
      <div className="img">
        <img
          className="foodimg"
          src={process.env.PUBLIC_URL + `/image/${item.name}.png`}
          alt="food"
        ></img>
      </div>
      <div className="item">
        <p className="item-name">{item.name}</p>
        <p className="item-des">{item.description}</p>
        <p className="item-price">
          <FaDollarSign />
          {item.price}
        </p>
      </div>
      <Adder item={item} />
    </div>
  );
}
