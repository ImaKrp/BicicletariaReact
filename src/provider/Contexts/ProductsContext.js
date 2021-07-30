import { useState, useCallback, createContext } from "react";
import { api } from "../../api/api";
const initialState = [];
export const productsContext = createContext(initialState);

export function ProductsProvider({ children }) {
  const [Produtos, setProdutos] = useState();
  const [Produto, setProduto] = useState({});

  const fetchProducts = useCallback(async () => {
    const { data } = await api.get("/products");
    await setProdutos(data);
  }, []);

  const fetchProduto = useCallback(async (id) => {
    const { data } = await api.get(`/products/${id}`);
    await setProduto(data);
  }, []);

  function listProducts() {
    return Produtos;
  }

  function getProduct() {
    return Produto;
  }

  return (
    <productsContext.Provider
      value={{
        getProduct,
        listProducts,
        fetchProducts,
        fetchProduto,
      }}
    >
      {children}
    </productsContext.Provider>
  );
}
