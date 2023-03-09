import React, { useContext } from "react";
import { nanoid } from "nanoid";
import MenuItem from "./MenuItem";
import { dataContext } from "../Context";
export default function CartItems() {
  const { menu, toggle, setToggle } = useContext(dataContext);
  const cartItems = menu.filter((obj) => obj.unit > 0);
  return (
    <>
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
    </>
  );
}
