import React from "react";
import GlobalStyleProvider from "./global/globalStyles";
import { CartProvider } from "./provider/Contexts/CartContext";
import { SessionProvider } from "./provider/Contexts/SessionContext";
import { Routes } from "./routes/routes";

function App() {
  return (
    <>
      <SessionProvider>
        <CartProvider>
          <GlobalStyleProvider />
          <Routes />
        </CartProvider>
      </SessionProvider>
    </>
  );
}

export default App;
