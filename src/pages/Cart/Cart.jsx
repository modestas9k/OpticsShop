import React from "react";
import { useContext } from "react";
import { Section, Button } from "../../components";
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
        <S.Td>{produktas.title}</S.Td>
        <S.Td>{produktas.price}</S.Td>
        <S.Td>{item.quantity}</S.Td>
      </tr>
    )
  }

  return (
    <Section>
      <S.Table>
        <S.Thead>
          <tr>
            <S.Th>Product Name</S.Th>
            <S.Th>Product Price</S.Th>
            <S.Th>Quantity</S.Th>
          </tr>
        </S.Thead>
        <tbody>
          {cartItems.length === 0 && <S.Td>Cart is empty :/</S.Td>}
          {uniqueItems && uniqueItems.map((item) => productsFind(item))}
        </tbody>
      </S.Table>
      <S.Div>
        {cartItems.length !== 0 && 
        <Button color="primary" handleClick={() => alert("Go to real site: https://instockoptics.com/")} >Buy All</Button>}
      </S.Div>
      
    </Section>
  );
}

export default Cart;
