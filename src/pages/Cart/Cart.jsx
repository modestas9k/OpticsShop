import React from "react";
import { useContext } from "react";
import { Section } from "../../components";
import { CartContext } from "../../contexts/cart.context";
import { Products } from "../../utils/Products";
import * as S from "./Cart.style";

function Cart() {
  const cart = useContext(CartContext);

  const cartItems = cart.item.map((item, index) => ({
    value: item,
    quantity: cart.item.filter((x) => x === item).length,
  }));

  const uniqueItems = cartItems.filter((item, index) => 
    cartItems.findIndex(x => x.value === item.value) === index
  );

  const productsFind = (item, index) => {
    const produktas = Products.find((product) => product.id === item.value)

    return (
      <tr key={item.value}>
        <td>{produktas.title}</td>
        <td>{produktas.price}</td>
        <td>{item.quantity}</td>
      </tr>
    )
  }

  return (
    <Section>
      <S.Table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {uniqueItems && uniqueItems.map((item) => productsFind(item))}
        </tbody>
      </S.Table>
      
    </Section>
  );
}

export default Cart;
