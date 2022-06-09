import React from "react";
import { Input } from "antd";

import "antd/dist/antd.css";

const { Search } = Input;

function SearchBar({ setSearchQuery }) {
  const onSearch = (value) => setSearchQuery(value);
  return (
    <div>
      <Search
        placeholder="input search text"
        allowClear
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      />
    </div>
  );
}

export default SearchBar;
