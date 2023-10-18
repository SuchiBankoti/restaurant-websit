import React from "react";
import "./Adder.css";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../Store/CreateSlice";
export default function Form(props) {
  const{menu}=useSelector(state=>state.menu)
  const dispatch=useDispatch()
  const { item } = props;
  return (
    <div className="quantity">
      {item.units === 0 ? (
        <div onClick={() => dispatch(updateCart({id:item.id,item:item,units:1}))} className="add">
          Add
        </div>
      ) : (
        <div className="plus-minus">
          <div onClick={() => dispatch(updateCart({id:item.id,item:item,units:(item.units-1)}))}>-</div>
          <div>{item.units}</div>
          <div onClick={() => dispatch(updateCart({id:item.id,item:item,units:(item.units+1)}))}>+</div>
        </div>
      )}
    </div>
  );
}
