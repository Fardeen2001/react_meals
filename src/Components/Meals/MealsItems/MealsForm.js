import React, { useRef, useState } from "react";
import classes from "./MealForm.module.css";
import Input from "../../UI/Input";

const MealsForm = (props) => {
  const [quantityIsValid, setQuantityIsValid] = useState(true);
  const quantityRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredQuantity = quantityRef.current.value;
    console.log(enteredQuantity);
    const enteredQuantityNumber = +enteredQuantity;
    if (
      enteredQuantity.trim().length === 0 ||
      enteredQuantityNumber < 1 ||
      enteredQuantityNumber > 10
    ) {
      setQuantityIsValid(false);
      return;
    }
    props.onAddToCart(enteredQuantityNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={quantityRef}
        label="Quantity"
        input={{
          id: `quantity_${props.id}`,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ ADD</button>
      {!quantityIsValid && <p>please enter a valid quantity</p>}
    </form>
  );
};

export default MealsForm;
