import React from "react";
import { useState, useEffect } from "react";

import NewsBox from "./components/NewsBox";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("apple");
  const [articleData, setarticleData] = useState([]);

  useEffect(() => {
    async function FetchStories() {
      const response = await fetch(
        `https://gnews.io/api/v4/search?q=${searchQuery}&lang=en&token=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      setarticleData(data.articles);
      console.log(articleData);
    }
    FetchStories();
  }, [searchQuery]);

  return (
    <div className="App">
      <NavBar setSearchQuery={setSearchQuery} />
      <div className="Article-container">
        {articleData.map((article) => {
          return <NewsBox article={article} />;
        })}
      </div>
    </div>
  );
}

export default App;
