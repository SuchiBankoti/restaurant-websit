import React, { useContext } from "react";
import { dataContext } from "../Context";
import { FaSearch } from "react-icons/fa";
import "./Search.css";
import { Link } from "react-router-dom";

export default function Search() {
  const { searchInput, setSearchInput } = useContext(dataContext);

  function handleSearch(e) {
    setSearchInput(e.target.value);
  }
  return (
    <div>
      <div className="searchbar">
        <input value={searchInput} onChange={handleSearch} />
        <Link to="/SearchResults" className="link">
          <FaSearch />
        </Link>
      </div>
    </div>
  );
}
