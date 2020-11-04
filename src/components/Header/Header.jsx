import React from "react";
import * as S from "./Header.style";
import { Link } from "react-router-dom";
import  Section  from "../Section/Section";
import Shop from "../../assets/shopping-cart.svg";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

function Header() {
  const cart = useContext(CartContext);

  return (
    <Section>
    <S.TopHead>
      <S.StyledLink to="/">Sign In</S.StyledLink>
      <S.StyledLink to="/">Create an Account</S.StyledLink>
    </S.TopHead>
    <S.Header>
      <Link to="/">
        <S.Logo src="https://instockoptics.com/pub/media/logo/websites/1/InStockOptics_Logotype_main_coloured_version.png" alt="Logo" />
      </Link>
      {console.log(cart.item.length)}
      <S.Actions>
      <S.ItemCount>{cart.item.length}</S.ItemCount>
      <Link to="/cart">
        <S.Shop src={Shop} alt="Shop-cart" />
      </Link>
      </S.Actions>
    </S.Header>
    </Section>
  );
}

export default Header;
