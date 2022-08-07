import React from "react";
import { Input } from "antd";

import "antd/dist/antd.css";

const { Search } = Input;

function SearchBar({ setSearchQuery }) {
  const onSearch = (value) => setSearchQuery(value);
  return (
    <div>
      <Search
        placeholder="Search NEWS"
        onSearch={onSearch}
        style={{
          width: 340,
        }}
      />
    </div>
  );
}

export default SearchBar;
