import React from "react";
import * as S from "./Card.style";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { Button } from "../../components";

function Card({ id, image, title, price, handlechange}) {
  const cart = useContext(CartContext);

  return (
    <S.Card  >
      <S.ClickBox onClick={handlechange}>
        <S.Image image={image} />   
        <S.Title>{title}</S.Title>
        <S.Start>Starting at</S.Start>
        <S.Price>€{price}</S.Price>  
      </S.ClickBox>
        <Button color="primary"  handleClick={() => cart.setItem(cart.item.concat([id]))} >Buy</Button>
    </S.Card>
  );
}

export default Card;