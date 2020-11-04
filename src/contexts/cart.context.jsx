import React, { useState, createContext } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [item, setItem] = useState([]);
  return (
    <CartContext.Provider value={{item, setItem}}>
      {children}
    </CartContext.Provider>
  )
};