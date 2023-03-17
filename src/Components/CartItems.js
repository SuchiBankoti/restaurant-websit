import React, { useContext } from "react";
import { nanoid } from "nanoid";
import MenuItem from "./MenuItem";
import { dataContext } from "../Context";
import { Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";
export default function CartItems() {
  const { menu } = useContext(dataContext);
  const cartItems = menu.filter((obj) => obj.unit > 0);
  const totalPrice = cartItems.reduce((total, e) => {
    total = total + e.price * e.unit;
    return total;
  }, 0);
  return (
    <div className="cart-content">
      {cartItems.length === 0 ? (
        <div style={{ color: "white" }}>No items in cart</div>
      ) : (
        <div>
          {cartItems.map((obj) => (
            <div key={nanoid()} className="cart-unit">
              <MenuItem item={obj} />
              <div className="unit-value"> X {obj.unit}</div>
            </div>
          ))}
        </div>
      )}
      <div className="total-sum">
        <div>Total Amount:</div>
        <div>
          <FaDollarSign />
          {totalPrice}
        </div>
      </div>
      <Link to={"/restaurant-websit"} className="link">
        <button className="cart-btn">Close Cart</button>
      </Link>
    </div>
  );
}
