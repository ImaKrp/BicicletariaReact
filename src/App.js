import React from "react";
import { Products } from "./pages/Products/index";
import GlobalStyleProvider from "./global/globalStyles";
import { CartProvider } from "./provider/Contexts/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <GlobalStyleProvider />
        <Products />
      </CartProvider>
    </>
  );
}

export default App;
