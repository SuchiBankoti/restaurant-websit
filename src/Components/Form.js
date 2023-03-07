import React, { useContext, useState } from "react";
import { dataContext } from "../Context";
import "./Form.css";
export default function Form(props) {
  const { manageCart } = useContext(dataContext);
  const { item } = props;
  const [quant, setQuant] = useState(item.unit);

  function handleQuant(event) {
    setQuant(event.target.value);
  }

  return (
    <div className="form">
      <form>
        <div>Amount</div>
        <label>
          <input type="text" value={quant} onChange={handleQuant}></input>
        </label>
      </form>
      <button className="add-btn" onClick={() => manageCart(item, quant)}>
        Add
      </button>
    </div>
  );
}
