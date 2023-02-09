import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { dataContext, MenuProvider } from "./Context";
export default function Portal() {
  const { toggle } = useContext(dataContext);
  const location = document.getElementById("portal");
  function CartContent() {
    return (
      <MenuProvider>
        <div
          className="cart-content"
          style={{ display: toggle ? "block" : "none" }}
        >
          <p> name</p>
          <p>Total Amount</p>
          <p>price</p>
          <button>Close</button>
          <button>Order</button>
        </div>
      </MenuProvider>
    );
  }
  return <div>{createPortal(<CartContent />, location)}</div>;
}
