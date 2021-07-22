import React from "react";
import GlobalStyleProvider from "./global/globalStyles";
import { CartProvider } from "./provider/Contexts/CartContext";
import { SessionProvider } from "./provider/Contexts/SessionContext";
import { ProductsProvider } from "./provider/Contexts/ProductsContext";
import { Routes } from "./routes/routes";

function App() {
  return (
    <>
      <SessionProvider>
        <ProductsProvider>
          <CartProvider>
            <GlobalStyleProvider />
            <Routes />
          </CartProvider>
        </ProductsProvider>
      </SessionProvider>
    </>
  );
}

export default App;
