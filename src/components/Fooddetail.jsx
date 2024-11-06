import { useState, useEffect } from "react";
import styles from "./Fooddetail.module.css";
export default function Fooddetail({ foodID }) {
  const [food, setFood] = useState({});
  const [loading, setLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const API_KEY = "e46c90795e8c4b21bd8dd919fdebb548";
  useEffect(() => {
    async function fetchDetail() {
      try {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        const data = await res.json();
        console.log(data);
        setFood(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchDetail();
  }, [foodID]);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>{food.title}</h3>
          <img src={food.image}></img>
        </div>
        <div className={styles.foodTime}>
          <span>
            <strong>⌚{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "'🥕Vegetarian" : "🍖Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮Vegan" : ""}</strong>
          </span>
        </div>
        <div className={styles.servefor}>
          <span>
            <strong>
              Price per serving: ${(food.pricePerServing / 100).toFixed(2)}
            </strong>
          </span>
          <span>
            <strong>👪Serve for {food.servings}</strong>
          </span>
        </div>
        <div className={styles.instructions}>
          <h3>Instructions</h3>
          {food &&
            food.analyzedInstructions &&
            food.analyzedInstructions[0] && (
              <ul>
                {food.analyzedInstructions[0].steps.map((step) => (
                  <li key={step.number}>{step.step}</li>
                ))}
              </ul>
            )}
        </div>
      </div>
    </div>
  );
}
