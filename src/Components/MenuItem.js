import React from "react";
import "./MenuItem.css";
export default function MenuItem(props) {
  const { item } = props;
  return (
    <div className="item">
      <p className="item-name">{item.name}</p>
      <p className="item-des">{item.description}</p>
      <p className="item-price">{item.price}</p>
    </div>
  );
}
