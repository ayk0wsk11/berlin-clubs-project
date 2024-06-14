import React from "react";
import "../stylesheet/AllClubsPage.css";

const SearchComponent = ({ query, setQuery }) => {
  return (
    <input
      id="search-container"
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for a club"
    />
  );
};

export default SearchComponent;
