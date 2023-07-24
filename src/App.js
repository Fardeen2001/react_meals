import { Fragment } from "react";

import Header from "./Components/Layout/Headers";
import Meals from "./Components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;
