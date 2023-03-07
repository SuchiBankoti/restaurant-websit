import React, { useContext, useReducer, useRef } from "react";
import { dataContext } from "../Context";
import "./Form.css";
export default function Form(props) {
  const { manageCart } = useContext(dataContext);
  const { item } = props;
  const reducer = (quant, action) => {
    switch (action) {
      case "+":
        return quant + 1;
      case "-":
        return quant > 0 ? quant - 1 : 0;
      case "Add":
        return quant + 1;
      case "Change":
        return;
      default:
        console.log("Unexpected action");
    }
  };
  const [quant, dispatch] = useReducer(reducer, item.unit);

  return (
    <div className="quantity">
      <div>{quant}</div>
      <button className="add-btn" onClick={() => manageCart(item, quant)}>
        Add
      </button>
    </div>
  );
}
