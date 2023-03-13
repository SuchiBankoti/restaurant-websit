import React from "react";

import Form from "./Form";
import "./MenuItem.css";
export default function MenuItem(props) {
  const { item } = props;
  return (
    <div className="item-container">
      <div className="img">
        <img
          src={process.env.PUBLIC_URL + `/image/${item.name}.png`}
          alt="food"
        ></img>
      </div>
      <div className="item">
        <p className="item-name">{item.name}</p>
        <p className="item-des">{item.description}</p>
        <p className="item-price">{item.price}</p>
      </div>
      <div className="add-btn">
        <Form item={item} />
      </div>
    </div>
  );
}
