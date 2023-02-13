import React, { useContext, useReducer } from "react";
import { dataContext } from "../Context";
import "./Form.css";
export default function Form(props) {
  const { setCartItems } = useContext(dataContext);
  const { item } = props;
  const [foodItem, dispatch] = useReducer(reducer, item);
  function reducer(prev, action) {
    switch (action) {
      case "sub":
        return prev.isAdded > 0 ? { ...prev, isAdded: prev.isAdded - 1 } : prev;
      case "add":
        return { ...prev, isAdded: prev.isAdded + 1 };
      default:
        console.log("error in reducer function");
    }
  }
  function handleCartItems(i) {
    setCartItems((prev) => prev.map((obj) => (obj.id === i ? foodItem : obj)));
  }

  return (
    <div className="form">
      <form>
        <div>Amount</div>
        <label>
          <div onClick={() => dispatch("sub")}>-</div>
          <input type="text" value={foodItem.isAdded} readOnly></input>
          <div onClick={() => dispatch("add")}>+</div>
        </label>
      </form>
      <button className="add-btn" onClick={() => handleCartItems(foodItem.id)}>
        Add
      </button>
    </div>
  );
}
