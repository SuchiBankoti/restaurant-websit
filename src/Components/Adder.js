import React, { useContext, useReducer } from "react";
import { dataContext } from "../Context";
import "./Adder.css";
export default function Form(props) {
  const { manageCart } = useContext(dataContext);
  const { item } = props;
  const reducer = (quant, action) => {
    switch (action) {
      case "+":
        quant = quant + 1;
        manageCart(item, quant);
        return quant;

      case "-":
        quant = Math.max(quant - 1, 0);
        manageCart(item, quant);
        return quant;

      default:
        console.log("Unexpected action");
    }
  };
  const [quant, dispatch] = useReducer(reducer, item.unit);

  return (
    <div className="quantity">
      {quant === 0 ? (
        <div onClick={() => dispatch("+")} className="add">
          Add
        </div>
      ) : (
        <div className="plus-minus">
          <div onClick={() => dispatch("-")}>-</div>
          <div>{quant}</div>
          <div onClick={() => dispatch("+")}>+</div>
        </div>
      )}
    </div>
  );
}
