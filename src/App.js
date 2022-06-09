import React from "react";
import { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar";
import NewsBox from "./components/NewsBox";

import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("apple");
  const [articleData, setarticleData] = useState([]);

  useEffect(() => {
    async function FetchStories() {
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=${searchQuery}&token=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      setarticleData(data.articles);
      console.log(articleData);
    }
    FetchStories();
  }, [searchQuery]);

  return (
    <div className="App">
      <h1>Welcome to Scottville NEWS</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      <div className="Article-container">
        {articleData.map((article) => {
          return <NewsBox article={article} />;
        })}
      </div>
    </div>
  );
}

export default App;
