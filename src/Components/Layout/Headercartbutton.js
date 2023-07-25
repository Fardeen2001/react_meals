import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../Store/Cart-Context";

const HeaderCartButton = (props) => {
  const cartCxt = useContext(CartContext);
  const numberOfCartItems = cartCxt.items.reduce((currNum, item) => {
    return currNum + item.quantity;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
