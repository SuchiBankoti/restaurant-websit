import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchInput } from "../Store/CreateSlice";

export default function Search() {
  const dispatch=useDispatch()
  const { searchInput }=useSelector(state=>state.menu);

  function handleSearch(e) {
    dispatch(setSearchInput(e.target.value));
  }
  return (
    <div>
      <div className="searchbar">
        <input value={searchInput} onChange={handleSearch} className="input" />
        <Link to="/restaurant-websit/SearchResults" className="link">
          <div className="search-icon">
            <FaSearch />
          </div>
        </Link>
      </div>
    </div>
  );
}
