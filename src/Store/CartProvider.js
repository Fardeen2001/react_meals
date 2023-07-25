import React from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {
  const addItemsHandler = () => {};
  const removeItemsHandler = () => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItems: addItemsHandler,
    removeItems: removeItemsHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
