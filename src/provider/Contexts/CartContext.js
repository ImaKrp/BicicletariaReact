import { useState, createContext } from "react";

const initialState = [];
export const cartContext = createContext(initialState);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [value, setValue] = useState(0);

  function addItemsToCart(Produto) {
    let index;

    if (cartItems.length === 0) setCartItems([...cartItems, Produto]);
    else {
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        if (Produto.id === item.id) {
          index = i;
        }
      }

      if (index >= 0) {
        cartItems[index].quantidade++;
        setCartItems([...cartItems]);
      } else setCartItems([...cartItems, Produto]);
    }
  }

  function deleteItemsFromCart(index) {
    const Remaining = cartItems;
    Remaining[index].quantidade = 1;
    Remaining.splice(index, 1);
    setCartItems([...Remaining]);
  }

  function showAllItems() {
    return cartItems;
  }

  function totalValue() {
    let valor = 0;

    for (const obj of cartItems) {
      valor += obj.price.replace(/[^0-9]/g, "") * obj.quantidade;
    }

    setValue(valor);
    return value;
  }

  return (
    <cartContext.Provider
      value={{ addItemsToCart, deleteItemsFromCart, showAllItems, totalValue }}
    >
      {children}
    </cartContext.Provider>
  );
}
