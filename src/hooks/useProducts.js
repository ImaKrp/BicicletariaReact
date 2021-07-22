import { useContext } from "react";
import { productsContext } from "../provider/Contexts/ProductsContext";

export function useProducts() {
  const context = useContext(productsContext);
  return context;
}
