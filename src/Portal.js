import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { nanoid } from "nanoid";
import MenuItem from "./Components/MenuItem";
import { dataContext, MenuProvider } from "./Context";
export default function Portal() {
  const { cartItems, toggle, setToggle } = useContext(dataContext);
  const location = document.getElementById("portal");
  const cart = cartItems.filter((obj) =>
    obj.isAdded > 0 ? <MenuItem key={nanoid()} item={obj} /> : ""
  );
  console.log(cart);
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
          <button onClick={() => setToggle(false)}>Close</button>
          <button>Order</button>
        </div>
      </MenuProvider>
    );
  }
  return <div>{createPortal(<CartContent />, location)}</div>;
}
