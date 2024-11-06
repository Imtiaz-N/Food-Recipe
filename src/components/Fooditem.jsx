import styles from "./Fooditem.module.css";

export default function Fooditem({ food, setFoodID }) {
  function handleclick(food) {
    setFoodID(food.id);
  }
  return (
    <div className={styles.card}>
      <img src={food.image} alt={food.title} className={styles.image} />
      <h3 className={styles.title}>{food.title}</h3>
      <button onClick={() => handleclick(food)} className={styles.button}>
        View Recipe
      </button>
    </div>
  );
}
