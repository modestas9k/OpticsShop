import React from "react";
import * as S from "./Card.style";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

function Card({ id, image, title, price, handlechange}) {
  const cart = useContext(CartContext);

  return (
    <S.Card onClick={handlechange} >
        <S.Image image={image} />   
      <S.TextBox>
        <S.Title>{title}</S.Title>
        <S.Start>Starting at</S.Start>
        <S.Price>€{price}</S.Price>  
        <button onClick={() => cart.setItem(cart.item.concat([id]))} >Buy</button>
      </S.TextBox>
    </S.Card>
  );
}

export default Card;