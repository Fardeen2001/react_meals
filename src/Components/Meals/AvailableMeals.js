import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealsItem from "./MealsItems/MealsItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chicken Biryani",
    description: "Made with fresh masalas directly from Hydrabad",
    price: 180,
  },
  {
    id: "m2",
    name: "Butter Chicken",
    description: "Made with a delicious chicken and butter",
    price: 160,
  },
  {
    id: "m3",
    name: "Mutton Biryani",
    description: "Made with fresh masalas and raw Mutton, meaty",
    price: 280,
  },
  {
    id: "m4",
    name: "Mutton Curry",
    description: "Made with a delicious Mutton and cream",
    price: 250,
  },
];

const AvailableMeals = () => {
  const meals = DUMMY_MEALS.map((meal) => (
    <MealsItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
