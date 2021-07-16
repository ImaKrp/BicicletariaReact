import { useState, createContext } from "react";

const initialState = [];
export const cartContext = createContext(initialState);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [value, setValue] = useState(0);

  function addItemsToCart(Produto) {
    if(cartItems.length === 0) {
      setCartItems([Produto]);
    }
    cartItems.map((product) => {
      if (product.id === Produto.id){
        product.quantidade += 1;
      }
      else {
        setCartItems([...cartItems, Produto]);
      }
    })
  }

  function deleteItemsFromCart(index) {
    const Remaining = cartItems;
    Remaining.splice(index, 1);
    setCartItems([...Remaining]);
  }

  function showAllItems() {
    return cartItems;
  }

  function totalValue() {
    let valor = 0;

    for (const obj of cartItems) {
      valor += Number(obj.price);
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
