import Fooditem from "./Fooditem";
export default function Foodlist({ fooddata, setFoodID }) {
  return (
    <>
      {fooddata.map((food) => (
        <Fooditem setFoodID={setFoodID} key={food.id} food={food} />
      ))}
    </>
  );
}
