import React from "react";
import Summary from "./Summary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <>
      <Summary />
      <main>
        <AvailableMeals />
      </main>
    </>
  );
};

export default Meals;
