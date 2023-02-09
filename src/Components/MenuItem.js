import React from "react";
import Form from "./Form";
import "./MenuItem.css";
export default function MenuItem(props) {
  const { item } = props;
  return (
    <div className="item-container">
      <div className="item">
        <p className="item-name">{item.name}</p>
        <p className="item-des">{item.description}</p>
        <p className="item-price">{item.price}</p>
      </div>
      <Form />
    </div>
  );
}
