import React from "react";
import GlobalStyleProvider from "./global/globalStyles";
import { CartProvider } from "./provider/Contexts/CartContext";
import { SessionProvider } from "./provider/Contexts/SessionContext";
import { ProductsProvider } from "./provider/Contexts/ProductsContext";
import { Routes } from "./routes/routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        style={{ fontFamily: "Poppins, sans-serif", fontSize: 14 }}
      />
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
