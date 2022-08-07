import React from "react";
import "./index.css";

import SearchBar from "../SearchBar";

function NavBar({ setSearchQuery }) {
  return (
    <div className="navBar">
      <h1 className="page-title">nOOS&copy;</h1>
      <p>The news you can chOOSe</p>
      <SearchBar setSearchQuery={setSearchQuery} />
    </div>
  );
}

export default NavBar;
