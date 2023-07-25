import React, { useState } from "react";
import classes from "./MealForm.module.css";
import Input from "../../UI/Input";

const MealsForm = (props) => {
  const [click, setClick] = useState(0);

  const incrementHandler = () => {
    setClick(click + 1);
  };
  const decrementHandler = () => {
    setClick(click - 1);
  };
  return (
    <form className={classes.form}>
      <Input
        label="Quantity"
        input={{
          id: "amount",
          type: "number",
          min: "0",
          max: "10",
          step: "1",
          defaultValue: "0",
        }}
      />
      <button onClick={incrementHandler}>+ ADD</button>
      <button onClick={decrementHandler}>- Delete</button>
    </form>
  );
};

export default MealsForm;
