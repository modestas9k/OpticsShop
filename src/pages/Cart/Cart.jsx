import React from "react";
import { useContext } from "react";
import { Section } from "../../components";
import { CartContext } from "../../contexts/cart.context";
import { Products } from "../../utils/Products";

function Cart() {
  const cart = useContext(CartContext);
  return (
    <Section>
      
      <ul>
    {cart.item && 
      cart.item.map((item) => (
        <li>{Products.find((product) => product.id === item).title}</li>
      ))
    }
    </ul>
    {console.log(cart.item)}
    </Section>
  );
}

export default Cart;
