import React from "react";
import { Products } from "./pages/Products/index";
import GlobalStyleProvider from "./global/globalStyles";

function App() {
  return (
    <>
      <GlobalStyleProvider />
      <Products />
    </>
  );
}

export default App;