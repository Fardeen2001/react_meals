import { Fragment, useState } from "react";

import Header from "./Components/Layout/Headers";
import Meals from "./Components/Meals/Meals";
import CartPortal from "./Components/Cart/CartPortal";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);
  const showCartHandler = (props) => {
    setIsCartShown(true);
  };
  const hideCartHandler = (props) => {
    setIsCartShown(false);
  };
  return (
    <Fragment>
      {isCartShown && <CartPortal onClose={hideCartHandler} />}
      <Header onShown={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
