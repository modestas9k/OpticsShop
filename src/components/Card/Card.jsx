import React from "react";
import * as S from "./Card.style";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

function Card({ id, image, title, price}) {
  const cart = useContext(CartContext);

  return (
    <S.Card onClick={() => cart.setItem(cart.item.concat([id]))} >
        <S.Image image={image} />   
      <S.TextBox>
        <S.Title>{title}</S.Title>
        <S.Start>Starting at</S.Start>
        <S.Price>€{price}</S.Price>  
      </S.TextBox>
    </S.Card>
  );
}

export default Card;