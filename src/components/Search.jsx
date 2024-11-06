import { useState, useEffect } from "react";
import styles from "./Search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "e46c90795e8c4b21bd8dd919fdebb548";
export default function Search({ fooddata, setFooddata }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFooddata(data.results);
      console.log(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.inputField}
      />
    </div>
  );
}
