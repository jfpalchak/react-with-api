import useFetch from "../hooks/useFetch";
import { useState } from "react";

function TopStories() {

  const { error, isLoaded, topStories } = useFetch();

  if (error) {
    return <h1>Error: {error}</h1>
  } else if (!isLoaded) {
    return <h1>...Loading...</h1>
  } else {
    return (
      <>
        <h1>Top Stories</h1>
        <ul>
          {topStories.map((article, index) => (
            <li key={index}>
              <h3>{article.title}</h3>
              <p>{article.abstract}</p>
            </li>
          ))}
        </ul>
      </>    
    );
  }
}

export default TopStories;