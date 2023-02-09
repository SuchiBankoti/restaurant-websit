import React, { useReducer } from "react";
import "./Form.css";
export default function Form() {
  // const [amount, setAmount] = useState(0);
  function reducer(state, action) {
    switch (action) {
      case "add":
        return state + 1;
      case "sub":
        return state - 1;
      default:
        console.log("unexpected error in switch");
    }
  }
  const [amount, dispatch] = useReducer(reducer, 0);

  return (
    <div className="form">
      <form>
        <label>
          Amount
          <input type="text" value={amount} readOnly></input>
        </label>
      </form>
      <div className="btns">
        <button className="add-btn" onClick={() => dispatch("add")}>
          +Add
        </button>
        <button className="sub-btn" onClick={() => dispatch("sub")}>
          -Sub
        </button>
      </div>
    </div>
  );
}
