import React, { useState, useEffect, useReducer } from "react";
import topStoriesReducer from "../reducers/top-stories-reducer";
import { getTopStoriesFailure, getTopStoriesSuccess } from "../actions";
import { ActionType, StateType, Article } from "../types";

const initialState: StateType = {
  isLoaded: false,
  topStories: [],
  error: null 
};

function TopStories() {

  const [state, dispatch] = useReducer(topStoriesReducer, initialState);

  // const [error, setError] = useState<string | null>(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [topStories, setTopStories] = useState<Article[]>([]);

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
        const action = getTopStoriesSuccess(jsonResponse.results);
        dispatch(action);
        // setTopStories(jsonResponse.results);
        // setIsLoaded(true);
      })
      .catch((error) => {
        const action = getTopStoriesFailure(error);
        dispatch(action);
        // setError(error);
        // setIsLoaded(true);
      });
  }, [])

  const { error, isLoaded, topStories } = state;

  if (error) {
    return <h1>Error: {error}</h1>
  } else if (!isLoaded) {
    return <h1>...Loading...</h1>
  } else {
    return (
      <>
      <h1>Top Stories</h1>
      <ul>
        {topStories!.map((article, index) => (
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