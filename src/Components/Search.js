import React, { useContext } from "react";
import { dataContext } from "../Context";
import { FaSearch } from "react-icons/fa";
import "./Search.css";
import SearchResults from "./SearchResults";

export default function Search() {
  const { setToggleSearch, searchInput, setSearchInput } =
    useContext(dataContext);

  function handleSearch(e) {
    setSearchInput(e.target.value);
  }
  return (
    <div>
      <div className="searchbar">
        <input value={searchInput} onChange={handleSearch} />
        <div onClick={() => setToggleSearch(true)}>
          <FaSearch />
        </div>
      </div>
      <SearchResults />
    </div>
  );
}
