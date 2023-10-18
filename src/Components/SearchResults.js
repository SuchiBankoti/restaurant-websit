import React, {useEffect } from "react";
import MenuItem from "./MenuItem";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../Store/CreateSlice";
export default function SearchResults() {
  const { menu, searchInput,trackData } = useSelector(state => state.menu)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getMenu())
  },[trackData])
  return (
    <div className="searchItems">
      {menu.filter((ele) =>
        searchInput.localeCompare(ele.name, "en", {
          sensitivity: "base",
        }) === 0
          ? ele
          : ""
      ).length > 0 ? (
        <>
          {menu
            .filter((ele) =>
              searchInput.localeCompare(ele.name, "en", {
                sensitivity: "base",
              }) === 0
                ? ele
                : ""
            )
            .map((e) => (
              <MenuItem key={nanoid()} item={e} />
            ))}
        </>
      ) : (
        <div>No items in our menu matching above description</div>
      )}
      <Link to={"/restaurant-websit"}>
        <button className="cart-btn">Close</button>
      </Link>
    </div>
  );
}
