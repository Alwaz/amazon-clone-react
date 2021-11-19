import React from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <>
      {/* input field */}
      <div className="search_bar">
        <input placeholder="Search..." />
        <div className="search_icon">
          <SearchIcon className="icon" />
        </div>
      </div>
      {/* all catogories */}
      {/* search icon */}
    </>
  );
};

export default Search;
