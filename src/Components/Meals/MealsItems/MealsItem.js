import React, { useContext } from "react";
import classes from "./Mealsitem.module.css";
import MealsForm from "./MealsForm";
import CartContext from "../../../Store/Cart-Context";
const MealsItem = (props) => {
  const cartctx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const cartAddHandler = (quantity) => {
    cartctx.addItems({
      id: props.id,
      name: props.name,
      quantity: quantity,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsForm onAddToCart={cartAddHandler} />
      </div>
    </li>
  );
};

export default MealsItem;
