import React from "react";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("apple");

  useEffect(() => {
    async function FetchStories() {
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=${searchQuery}&token=${process.env}`
      );
      const data = await response.json();
    }
    FetchStories();
  }, [searchQuery]);

  return <div className="App"></div>;
}

export default App;
