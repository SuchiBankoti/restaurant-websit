import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import { FaDollarSign,FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { activateCart, getMenu, updateCart } from "../Store/CreateSlice";


export default function CartItems() {
  const { menu,trackData } = useSelector(state => state.menu)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getMenu())
  },[trackData])
  const cartItems = menu.filter((obj) => obj.units > 0);
  const totalPrice = cartItems.reduce((total, e) => {
    total = total + e.price * e.units;
    return total;
  }, 0);

  function checkout() {
    menu.forEach(element => { 
      dispatch(updateCart({id:element.id, item:element,units:0}))
    })
    dispatch(activateCart(false))
  }
  return (
    <div className="cart-content">
      {cartItems.length === 0 ? (
        <div style={{ color: "white" }}>No items in cart</div>
      ) : (
        <>
          <div>
            {cartItems.map((obj) => (
              <div key={nanoid()} className="cart-unit">
                <MenuItem item={obj} />
                <div className="unit-value"> X {obj.units}</div>
              </div>
            ))}
          </div>
          <div className="total-sum">
            <div>Total Amount:</div>
            <div>
              <FaDollarSign />
              {totalPrice.toFixed(2)}
            </div>
          </div>
          <Link to={"/restaurant-websit/CartItems/FinalPage"} className="link">
            <div className="checkout" onClick={checkout}>Place Order</div>
          </Link>
        </>
      )}

      
        <FaArrowLeft className="icon" onClick={()=>dispatch(activateCart(false))} />
      
    </div>
  );
}
