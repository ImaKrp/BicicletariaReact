import { useContext } from "react";
import { cartContext } from "../provider/Contexts/CartContext";

export function useCart() {
  const context = useContext(cartContext);
  return context;
}
