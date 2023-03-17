import React, { useContext } from "react";
import MenuItem from "./MenuItem";
import { nanoid } from "nanoid";
import { dataContext } from "../Context";
import { Link } from "react-router-dom";
export default function SearchResults() {
  const { menu, searchInput } = useContext(dataContext);
  return (
    <div className="searchItems">
      {menu.filter((ele) =>
        searchInput.localeCompare(ele.name, "en", {
          sensitivity: "base",
        }) === 0
          ? ele
          : ""
      ).length > 0 ? (
        <div>
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
        </div>
      ) : (
        <div>No items in our menu matching above description</div>
      )}
      <Link to={"/restaurant-websit"}>
        <button className="cart-btn">Close</button>
      </Link>
    </div>
  );
}
