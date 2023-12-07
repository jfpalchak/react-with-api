import React, { useState, useEffect } from "react";


function TopStories() {

  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [topStories, setTopStories] = useState<Article[]>([]);

  useEffect(() =>{
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        } else {
          return response.json(); // Type?
        }
      })
      .then((jsonResponse) => {
        setTopStories(jsonResponse.results);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error);
        setIsLoaded(true);
      });
  }, [])

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

// # # # # #
// # TYPES #
// # # # # #

interface Article {
  title: string;
  abstract: string;
}

export default TopStories;