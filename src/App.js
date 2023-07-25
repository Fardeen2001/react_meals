import { useState } from "react";

import Header from "./Components/Layout/Headers";
import Meals from "./Components/Meals/Meals";
import CartPortal from "./Components/Cart/CartPortal";
import CartProvider from "./Store/CartProvider";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);
  const showCartHandler = (props) => {
    setIsCartShown(true);
  };
  const hideCartHandler = (props) => {
    setIsCartShown(false);
  };
  return (
    <CartProvider>
      {isCartShown && <CartPortal onClose={hideCartHandler} />}
      <Header onShown={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
