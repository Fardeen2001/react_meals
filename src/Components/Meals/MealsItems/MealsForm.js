import React from "react";
import classes from "./MealForm.module.css";
import Input from "../../UI/Input";

const MealsForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Quantity"
        input={{
          id: "quantity_" + props.id,
          type: "number",
          min: "0",
          max: "10",
          step: "1",
          defaultValue: "0",
        }}
      />
      <button>+ ADD</button>
      <button>- Remove</button>
    </form>
  );
};

export default MealsForm;
