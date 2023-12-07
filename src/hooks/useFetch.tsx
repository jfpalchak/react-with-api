import { useEffect, useState } from "react";

interface Article {
  title: string;
  abstract: string;
}

export default function useFetch() {

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

  return { error, isLoaded, topStories };
}