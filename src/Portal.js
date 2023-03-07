import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { nanoid } from "nanoid";
import MenuItem from "./Components/MenuItem";
import { dataContext, MenuProvider } from "./Context";
export default function Portal() {
  const { menu, toggle, setToggle } = useContext(dataContext);
  const location = document.getElementById("portal");
  const cartItems = menu.filter((obj) => obj.unit > 0);
  function CartContent() {
    return (
      <MenuProvider>
        <div
          className="cart-content"
          style={{ display: toggle ? "block" : "none" }}
        >
          {cartItems.length === 0 ? (
            <div>No items in cart</div>
          ) : (
            <div>
              {cartItems.map((obj) => (
                <div key={nanoid()}>
                  <MenuItem item={obj} />
                  <div style={{ color: "pink" }}>{obj.unit}</div>
                </div>
              ))}
            </div>
          )}
          <button onClick={() => setToggle(false)}>Close</button>
          <button>Order</button>
        </div>
      </MenuProvider>
    );
  }
  return <div>{createPortal(<CartContent />, location)}</div>;
}
