import React, { useContext } from "react";
import MenuItem from "./MenuItem";
import { nanoid } from "nanoid";
import { dataContext } from "../Context";
export default function SearchResults() {
  const { menu, setToggleSearch, toggleSearch, searchInput } =
    useContext(dataContext);
  return (
    <>
      {toggleSearch ? (
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
          <div className="cart-btn">
            <button onClick={() => setToggleSearch(false)}>Close</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
