import React from "react";
import { Products } from "./pages/Products/index";
import { Header } from "./components/index";
import GlobalStyleProvider from "./global/globalStyles";

function App() {
  return (
    <>
      <GlobalStyleProvider />
      <Header />
      <Products />
    </>
  );
}

export default App;