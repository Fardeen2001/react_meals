import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./CartPortal.module.css";
import CartContext from "../../Store/Cart-Context";
import CartItem from "./CartItem";
const CartPortal = (props) => {
  const cartcxt = useContext(CartContext);
  const totalAmount = `Rs ${cartcxt.totalAmount.toFixed(2)}`;
  const hasItems = cartcxt.items.length > 0;
  const addHandler = (item) => {
    cartcxt.addItems({ ...item, quantity: 1 });
  };
  const removeHandler = (id) => {
    cartcxt.removeItems(id);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartcxt.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          onAdd={addHandler.bind(null, item)}
          onRemove={removeHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  const orderHandler = () => {
    console.log("Order has been Placed, It will be Delivered Shortly");
  };
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button className={classes.button} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default CartPortal;
