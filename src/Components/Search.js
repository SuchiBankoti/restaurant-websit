import React, { useContext } from "react";
import { useState } from "react";
import { dataContext } from "../Context";
import MenuItem from "./MenuItem";
import { nanoid } from "nanoid";
import "./Search.css";

export default function Search() {
  const { menu, setToggleSearch, toggleSearch } = useContext(dataContext);
  const [searchInput, setSearchInput] = useState("");
  function handleSearch(e) {
    setSearchInput(e.target.value);
  }
  return (
    <div>
      <div className="searchbar">
        <input value={searchInput} onChange={handleSearch} />
        <button onClick={() => setToggleSearch(true)}>Search</button>
      </div>
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
          <button onClick={() => setToggleSearch(false)}>Close</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
